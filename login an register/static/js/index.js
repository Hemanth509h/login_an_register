
// Switch between login and signup forms
document.getElementById('go-to-signup').addEventListener("click", function () {
    document.querySelector(".form-1").style.animation = "switchback 2s forwards";
    document.querySelector(".form-2").style.animation = "switchfront 2s forwards";
});
document.getElementById('register-login-in').addEventListener("click", function () {
    document.querySelector(".form-2").style.animation = "switchback 2s forwards";
    document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
});

document.getElementById('register-register-in').addEventListener("click", function () {
    document.querySelector(".form-3").style.animation = "switchback 2s forwards";
    document.querySelector(".form-2").style.animation = "switchfront 2s forwards";
});

document.getElementById('login-in').addEventListener("click", function () {
    document.querySelector(".form-3").style.animation = "switchback 2s forwards";
    document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
});

document.getElementById('forgot-details').addEventListener('click', function () {
    document.querySelector(".form-1").style.animation = "switchback 2s forwards";
    document.querySelector(".forgot-window").style.animation = "switchfront 2s forwards";

});

document.getElementById('update-details').addEventListener('click', function () {
    document.querySelector(".form-1").style.animation = "switchback 2s forwards";
    document.querySelector(".update-window").style.animation = "switchfront 2s forwards";

});
document.getElementById('update-window-sign-in').addEventListener('click', function () {
    document.querySelector(".update-window").style.animation = "switchback 2s forwards";
    document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
});
document.getElementById('forgot-password-link').addEventListener('click', function () {
    document.querySelector(".forgot-password-window").style.animation = "switchback 2s forwards";
    document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
});

document.getElementById('gobacktoforgotpassword').addEventListener('click', function () {
    document.querySelector(".opt-window").style.animation = "switchback 2s forwards";
    document.querySelector(".forgot-password-window").style.animation = "switchfront 2s forwards";
});
document.getElementById('forgot-window-sign-in').addEventListener('click', function () {
    document.querySelector(".forgot-window").style.animation = "switchback 2s forwards";
    document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
});

document.getElementById('get-username').addEventListener('click', function () {
    document.querySelector(".forgot-window").style.animation = "switchback 2s forwards";
    document.querySelector(".get-username").style.animation = "switchfront 2s forwards";
});

document.getElementById('forgot-username-link').addEventListener('click', function () {
    document.querySelector(".get-username").style.animation = "switchback 2s forwards";
    document.querySelector(".forgot-window").style.animation = "switchfront 2s forwards";
});

document.getElementById('get-password').addEventListener('click', function () {
    document.querySelector(".forgot-window").style.animation = "switchback 2s forwards";
    document.querySelector(".forgot-password-window").style.animation = "switchfront 2s forwards";
});
document.getElementById('gobacktoforgotwindow').addEventListener('click', function () {
    document.querySelector(".forgot-password-window").style.animation = "switchback 2s forwards";
    document.querySelector(".forgot-window").style.animation = "switchfront 2s forwards";
});

document.getElementById('get-email').addEventListener('click', function () {
    document.querySelector(".forgot-window").style.animation = "switchback 2s forwards";
    document.querySelector(".get-email").style.animation = "switchfront 2s forwards";
});

document.getElementById('update-password').addEventListener('click', function () {
    document.querySelector(".update-window").style.animation = "switchback 2s forwards";
    document.querySelector(".update-password").style.animation = "switchfront 2s forwards";
});

document.getElementById('update-password-sign-in').addEventListener('click', function () {
    document.querySelector(".update-password").style.animation = "switchback 2s forwards";
    document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
});

document.getElementById('update-email').addEventListener('click', function () {
    document.querySelector(".update-window").style.animation = "switchback 2s forwards";
    document.querySelector(".update-email").style.animation = "switchfront 2s forwards";
});

document.getElementById('update-email-sign-in').addEventListener('click', function () {
    document.querySelector(".update-email").style.animation = "switchback 2s forwards";
    document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
});

document.getElementById('update-username').addEventListener('click', function () {
    document.querySelector(".update-window").style.animation = "switchback 2s forwards";
    document.querySelector(".update-username").style.animation = "switchfront 2s forwards";
});

document.getElementById('update-username-sign-in').addEventListener('click', function () {
    document.querySelector(".update-username").style.animation = "switchback 2s forwards";
    document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
});

document.getElementById('forgot-email-link').addEventListener('click', function () {
    document.querySelector(".get-email").style.animation = "switchback 2s forwards";
    document.querySelector(".forgot-window").style.animation = "switchfront 2s forwards";
});

document.getElementById('gobackto-username-to-update-window').addEventListener('click', function () {
    document.querySelector(".update-username").style.animation = "switchback 2s forwards";
    document.querySelector(".update-window").style.animation = "switchfront 2s forwards";
});
document.getElementById('gobackto-email-to-update-window').addEventListener('click', function () {
    document.querySelector(".update-email").style.animation = "switchback 2s forwards";
    document.querySelector(".update-window").style.animation = "switchfront 2s forwards";
});
document.getElementById('gobackto-password-to-update-window').addEventListener('click', function () {
    document.querySelector(".update-password").style.animation = "switchback 2s forwards";
    document.querySelector(".update-window").style.animation = "switchfront 2s forwards";
});
document.getElementById('gobacktosign-in').addEventListener('click', function () {
    document.querySelector(".update-window").style.animation = "switchback 2s forwards";
    document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
});
document.getElementById('get-username-sign-in').addEventListener('click', function () {
    document.querySelector(".get-username").style.animation = "switchback 2s forwards";
    document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
});

document.getElementById('get-email-sign-in').addEventListener('click', function () {
    document.querySelector(".get-email").style.animation = "switchback 2s forwards";
    document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
});

// Function to handle toast messages
function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");

    // Set the message and style
    toastMessage.textContent = message;
    toast.className = `toast show ${type}`;

    // Automatically hide after 3 seconds
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 5000);
}

// Login form submit
document.getElementById('log-in-1').addEventListener("submit", function (event) {
    event.preventDefault();

    // Check if email is empty
    if (document.getElementById('useroremailin').value === "") {
        showToast("Please enter your email", "error");

    } else {        // If email is provided, check if password is empty
        if (document.getElementById('passin').value === "") {
            showToast("Please enter your password", "error");
        } else {
            document.getElementById('loading-icon1').style.display = "block";  // Show loading icon
            // If both fields are filled, submit the form data
            const formData = new FormData(this);

            fetch('/login', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    document.getElementById('loading-icon1').style.display = "none";
                    showToast(data.message, data.status);  // Show toast message
                    if (data.status === 'success') {
                        window.location.href = '/home';  // Redirect to home if login is successful
                    }
                })

        }
    }
});

// Sign up form submit
document.getElementById('sign-up-1').addEventListener("submit", function () {
    event.preventDefault();
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (username === "") {
        showToast("Please enter your username", "error");
        return;
    } else {
        if (!/\d/.test(username)) {
            showToast("Username must contain at least one number", "error");
            return;
        } else {
            if (email === "") {
                showToast("Please enter your email", "error");
                return;
            } else {
                if (!email.includes("@") || !email.endsWith("gmail.com")) {
                    showToast("Please enter a valid email (e.g., gmail.com)", "error");
                    return;
                } else {
                    document.getElementById('loading-icon2').style.display = "block";
                    document.getElementById('username-in-form-3').value = document.getElementById('name').value;
                    document.getElementById('email-in-form-3').value = document.getElementById('email').value;
                    document.getElementById('loading-icon2').style.display = "none";
                    document.querySelector(".form-2").style.animation = "switchback 2s forwards";
                    document.querySelector(".form-3").style.animation = "switchfront 2s forwards";
                }
            }
        }
    }
});

// Register form submit
document.getElementById('sign-up-2').addEventListener("submit", function (event) {
    event.preventDefault();
    const password = document.getElementById('pass').value;
    if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        showToast("Password must be at least 8 characters long and contain at least one uppercase letter and one digit", "error");
        return;

    } else {
        if (document.getElementById('pass').value !== document.getElementById('pass2').value) {
            showToast("Passwords do not match", "error");
            return;
        } else {
            document.getElementById('loading-icon3').style.display = "block";
            const formData = new FormData(this);
            fetch('/register', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    showToast(data.message, data.status);  // Show toast message
                    if (data.status === 'success') {
                        document.getElementById('loading-icon3').style.display = "none";
                        document.querySelector(".form-3").style.animation = "switchback 2s forwards";
                        document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
                    } else {
                        document.querySelector(".form-3").style.animation = "switchback 2s forwards";
                        document.querySelector(".form-2").style.animation = "switchfront 2s forwards";
                    }
                })

        }
    }
});

// Get Username Form Submission
document.getElementById('get-username-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('get-username-email').value;
    const password = document.getElementById('get-username-password').value;
    if (email === "") {
        showToast("Please enter your email", "error");
        return;
    } else {
        if (!email.includes("@") || !email.endsWith("gmail.com")) {
            showToast("Please enter a valid email (e.g., gmail.com)", "error");
            return;
        } else {
            if (password === "") {
                showToast("Please enter your password", "error");
                return;
            } else {
                document.getElementById('loading-icon4').style.display = "block";
                fetch('/get-username', {
                    method: 'POST',
                    body: new URLSearchParams({ email, password }),
                })
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('loading-icon4').style.display = "none";
                        document.querySelector(".get-username-from-database-label").style.display = "block";
                        document.getElementById('get-username-from-database').textContent = data.username;
                        showToast(data.message, data.status);
                    })
            }
        }
    }
});

// Get Email Form Submission
document.getElementById('get-email-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('get-email-username').value;
    const password = document.getElementById('get-email-password').value;
    if (username === "") {
        showToast("Please enter your username", "error");
        return;
    } else {
        if (password === "") {
            showToast("Please enter your password", "error");
            return;
        } else {
            document.getElementById('loading-icon5').style.display = "block";
            fetch('/get-email', {
                method: 'POST',
                body: new URLSearchParams({ username, password }),
            })
                .then(response => response.json())
                .then(data => {
                    document.getElementById('loading-icon5').style.display = "none";
                    document.querySelector(".get-email-from-database-label").style.display = "block";
                    document.getElementById('get-email-from-database').textContent = data.email;
                    showToast(data.message, data.status);
                });
        }
    }
});

// Forgot Password Form Submission
document.getElementById('forgot-password-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email-reset').value;
    if (email === "") {
        showToast("Please enter your email", "error");
        return;
    } else {
        document.getElementById('loading-icon6').style.display = "block";
        if (!email.includes("@") || !email.endsWith("gmail.com")) {
            showToast("Please enter a valid email (e.g., gmail.com)", "error");
            return;
        } else {
            fetch('/forgot-password', {
                method: 'POST',
                body: new URLSearchParams({ email }),
            })
                .then(response => response.json())
                .then(data => {
                    showToast(data.message, data.status);
                    if (data.status === 'success') {
                        document.getElementById('loading-icon6').style.display = "none";
                        document.querySelector(".forgot-password-window").style.animation = "switchback 2s forwards";
                        document.querySelector(".opt-window").style.animation = "switchfront 2s forwards";
                    }
                });
        }
    }
});



// OTP Verification Form Submission
document.getElementById('verify-otp-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const otp = document.getElementById('otp').value;
    document.getElementById('loading-icon7').style.display = "block";
    fetch('/verify-otp', {
        method: 'POST',
        body: new URLSearchParams({ otp }),
    })
        .then(response => response.json())
        .then(data => {
            showToast(data.message, data.status);
            if (data.status === 'success') {
                document.getElementById('loading-icon7').style.display = "none";
                document.querySelector(".opt-window").style.animation = "switchback 2s forwards";
                document.querySelector(".reset-password").style.animation = "switchfront 2s forwards";
            }
        });
});

// Reset Password Form Submission

document.getElementById('reset-password-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate password strength
    if (newPassword.length < 8 || !/[A-Z]/.test(newPassword) || !/\d/.test(newPassword)) {
        showToast("Password must be at least 8 characters long and contain at least one uppercase letter and one digit", "error");
        return;
    } else {
        // Check if passwords match
        if (newPassword !== confirmPassword) {
            showToast("Passwords do not match", "error");
            return;
        } else {
            document.getElementById('loading-icon8').style.display = "block";
            // Submit the form data if valid
            fetch('/reset-password', {
                method: 'POST',
                body: new URLSearchParams({ password: newPassword }),
            })
                .then(response => response.json())
                .then(data => {
                    showToast(data.message, data.status);
                    if (data.status === 'success') {
                        document.getElementById('loading-icon8').style.display = "none";
                        document.querySelector(".reset-password").style.animation = "switchback 2s forwards";
                        document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
                    }
                });
        }
    }
});

// Update Username Form Submission
document.getElementById('update-username-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const oldUsername = document.getElementById('old-username').value;
    const newUsername = document.getElementById('new-username').value;
    const password = document.getElementById('update-username-password').value;
    if (oldUsername === "") {
        showToast("Please enter your old username", "error");
        return;
    } else {
        if (newUsername === "") {
            showToast("Please enter your new username", "error");
            return;
        } else {
            if (!/\d/.test(newUsername)) {
                showToast("Username must contain at least one number", "error");
                return;
            } else {
                if (password === "") {
                    showToast("Please enter your password", "error");
                    return;
                } else {
                    document.getElementById('loading-icon9').style.display = "block";
                    fetch('/update-username', {
                        method: 'POST',
                        body: new URLSearchParams({ oldUsername, newUsername, password }),
                    })
                        .then(response => response.json())
                        .then(data => {
                            showToast(data.message, data.status);
                            if (data.status === 'success') {
                                document.getElementById('loading-icon9').style.display = "none";
                                document.querySelector(".update-username").style.animation = "switchback 2s forwards";
                                document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
                            }
                        });
                }
            }
        }
    }
});

// Update Email Form Submission
document.getElementById('update-email-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const oldEmail = document.getElementById('old-email').value;
    const newEmail = document.getElementById('new-email').value;
    const password = document.getElementById('update-email-password').value;
    if (oldEmail === "") {
        showToast("Please enter your old email", "error");
        return;
    } else {
        if (newEmail === "") {
            showToast("Please enter your new email", "error");
            return;
        } else {
            if (!newEmail.includes("@") || !newEmail.endsWith("gmail.com")) {
                showToast("Please enter a valid new email (e.g., gmail.com)", "error");
                return;
            } else {
                if (password === "") {
                    showToast("Please enter your password", "error");
                    return;
                } else {
                    document.getElementById('loading-icon10').style.display = "block";
                    fetch('/update-email', {
                        method: 'POST',
                        body: new URLSearchParams({ oldEmail, newEmail, password }),
                    })
                        .then(response => response.json())
                        .then(data => {
                            showToast(data.message, data.status);
                            if (data.status === 'success') {
                                document.getElementById('loading-icon10').style.display = "none";
                                document.querySelector(".update-email").style.animation = "switchback 2s forwards";
                                document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
                            }
                        });
                }
            }
        }
    }
});
// Update Password Form Submission
document.getElementById('update-password-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('update-password-username').value;
    const oldPassword = document.getElementById('old_password').value;
    const newPassword = document.getElementById('new_password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    if (username === "") {
        showToast("Please enter your username", "error");
        return;
    } else {
        if (oldPassword === "") {
            showToast("Please enter your old password", "error");
            return;
        } else {
            if (newPassword.length < 8 || !/[A-Z]/.test(newPassword) || !/\d/.test(newPassword)) {
                showToast("Password must be at least 8 characters long and contain at least one uppercase letter and one digit", "error");
                return;
            } else {
                if (newPassword !== confirmPassword) {
                    showToast("Passwords do not match", "error");
                    return;
                } else {
                    document.getElementById('loading-icon11').style.display = "block";
                    fetch('/update-password', {
                        method: 'POST',
                        body: new URLSearchParams({ username, oldPassword, newPassword }),
                    })
                        .then(response => response.json())
                        .then(data => {
                            showToast(data.message, data.status);
                            if (data.status === 'success') {
                                document.getElementById('loading-icon11').style.display = "none";
                                document.querySelector(".update-password").style.animation = "switchback 2s forwards";
                                document.querySelector(".form-1").style.animation = "switchfront 2s forwards";
                            }
                        });
                }
            }
        }
    }
});
