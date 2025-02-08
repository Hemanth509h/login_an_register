from random import randint
import secrets
from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from pymongo import MongoClient
from werkzeug.security import check_password_hash, generate_password_hash
from functools import wraps

app = Flask(__name__)
app.secret_key = secrets.token_hex(16)

# Connect to MongoDB
client = MongoClient("mongodb+srv://phemanthkumar746:htnameh509h@data.psr09.mongodb.net/?retryWrites=true&w=majority&appName=Data")
db = client.myLoginDatabase
users_collection = db.users

# Home page (Login form)
@app.route('/')
def index():
    return render_template('index.html')

# Login
@app.route('/login', methods=['POST'])
def login():
    login_identifier = request.form['useroremailin']
    password = request.form['passin']
   
    user = users_collection.find_one({'$or': [{'username': login_identifier}, {'email': login_identifier}]})
    if user:
        session['username'] = user['username']
        if check_password_hash(user['password'], password):
            session['username'] = user['username']
            return jsonify({'status': 'success', 'message': 'Login successful!'})
        else:
            return jsonify({'status': 'error', 'message': 'Invalid password!'})
    else:
        return jsonify({'status': 'error', 'message': 'UserName not found!'})

# Register
@app.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    email = request.form['email']
    password_1 = request.form['password_1']


    if users_collection.find_one({'username': username}):
        return jsonify({'status': 'error', 'message': 'Username already exists!'})
    
    if users_collection.find_one({'email': email}):
        return jsonify({'status': 'error', 'message': 'Email already exists!'})

    hashed_password = generate_password_hash(password_1)
    users_collection.insert_one({
        'username': username,
        'email': email,
        'password': hashed_password,
    })
    
    return jsonify({'status': 'success', 'message': 'Registration successful!'})

# Get username
@app.route('/get-username', methods=['POST'])
def get_username():
    email = request.form['email']
    password = request.form['password']
    user = users_collection.find_one({'email': email})
    if user:
        if check_password_hash(user['password'], password):
            return jsonify({'status': 'success', 'message': f'Your username is {user["username"]}.','username':user["username"]})
        else:
            return jsonify({'status': 'error', 'message': 'Invalid password!'})
    else:
        return jsonify({'status': 'error', 'message': 'Email not found!'})
    
# Get email
@app.route('/get-email', methods=['POST'])
def get_email():
    username = request.form['username']
    password = request.form['password']
    user = users_collection.find_one({'username': username})
    if user:
        if check_password_hash(user['password'], password):
            return jsonify({'status': 'success', 'message': f'Your email is {user["email"]}.','email':user["email"]})
        else:
            return jsonify({'status': 'error', 'message': 'Invalid password!'})
    else:
        return jsonify({'status': 'error', 'message': 'Username not found!'})        

# Generate and send OTP
@app.route('/forgot-password', methods=['POST'])
def forgot_password():
    email = request.form['email']
    user = users_collection.find_one({'email': email})
    if user:
        otp = randint(100000, 999999)
        session['otp'] = otp
        session['email'] = email
        print(session['otp'])
        print(session['email'])

        return jsonify({'status': 'success', 'message': f'Yours opt is {otp}.'})
    else:
        return jsonify({'status': 'error', 'message': 'Email not found!'})

# Verify OTP
@app.route('/verify-otp', methods=['POST'])
def verify_otp():
    otp = request.form['otp']
    if 'otp' in session and session['otp'] == int(otp):
        return jsonify({'status': 'success', 'message': 'OTP verified! Proceed to reset your password.'})
    else:
        return jsonify({'status': 'error', 'message': 'Invalid OTP!'})
 
# Reset Password  
@app.route('/reset-password', methods=['POST'])
def reset_password():
    if 'email' in session:
        new_password = request.form['password']
        hashed_password = generate_password_hash(new_password)
        users_collection.update_one({'email': session['email']}, {'$set': {'password': hashed_password}})
        session.pop('otp', None)
        session.pop('email', None)
        return jsonify({'status': 'success', 'message': 'Password updated successfully!'})
    else:
        return jsonify({'status': 'error', 'message': 'Unauthorized access!'})

# Update Username    
@app.route('/update-username', methods=['POST'])
def update_username():
    old_username = request.form['oldUsername']
    password = request.form['password']
    new_username = request.form['newUsername']
    print(old_username)
    print(password)
    print(new_username)
    user = users_collection.find_one({'username': old_username})
    if user:
        if check_password_hash(user['password'], password):
            if users_collection.find_one({'username': new_username}):
                return jsonify({'status': 'error', 'message': 'New username is already taken!'})
            else:
                users_collection.update_one({'username': old_username}, {'$set': {'username': new_username}})
                return jsonify({'status': 'success', 'message': 'Username updated successfully!'})
        else:
            return jsonify({'status': 'error', 'message': 'Invalid password!'})
    else:
        return jsonify({'status': 'error', 'message': 'Username not found!'})

# Update Email
@app.route('/update-email', methods=['POST'])
def update_email():
    old_email = request.form['oldEmail']
    password = request.form['password']
    new_email = request.form['newEmail']
    user = users_collection.find_one({'email': old_email})
    if user:
        if check_password_hash(user['password'], password):
            if users_collection.find_one({'email': new_email}):
                return jsonify({'status': 'error', 'message': 'New email is already taken!'})
            else:
                users_collection.update_one({'email': old_email}, {'$set': {'email': new_email}})
                return jsonify({'status': 'success', 'message': 'Email updated successfully!'})
        else:
            return jsonify({'status': 'error', 'message': 'Invalid password!'})
    else:
        return jsonify({'status': 'error', 'message': 'Email not found!'})
    
# Update Password
@app.route('/update-password', methods=['POST'])
def update_password():
    username = request.form['username']
    old_password = request.form['oldPassword']
    new_password = request.form['newPassword']
    user = users_collection.find_one({'username': username})
    if user:
        if check_password_hash(user['password'], old_password):
            hashed_password = generate_password_hash(new_password)
            users_collection.update_one({'username': username}, {'$set': {'password': hashed_password}})        
            return jsonify({'status': 'success', 'message': 'Password updated successfully!'})
        else:
            return jsonify({'status': 'error', 'message': 'Invalid password!'})
    else:
        return jsonify({'status': 'error', 'message': 'Username not found!'})
    

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'username' not in session:
            return redirect(url_for('index'))
        return f(*args, **kwargs)
    return decorated_function

# Home page after login
@app.route('/home')
@login_required
def home():
    return render_template('home.html')

@app.route('/profile')
def profile():
    return jsonify({'username': session['username']})


@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(port=8080)
    app.run(debug=True)
