const email = document.getElementById('email');
const password = document.getElementById('password');
const toggle = document.getElementById('toggle');
const submitBtn = document.getElementById('subBtn');


// --------------------------
// EMAIL VALIDATION FUNCTION
// --------------------------
function emailValidation() {
    const emailValue = email.value.trim();
    console.log(emailValue);

    if (emailValue === "") {
        alert("Email cannot be blank!");
        return false;
    }

    // REGEX pattern check
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!pattern.test(emailValue)) {
        alert("Please enter a valid email address!");
        return false;
    }

    return true;
}


// PASSWORD TOGGLE HANDLER
// --------------------------
toggle.addEventListener('click', () => {

    const pwd = password.value.trim();

    if (pwd === "") {
        alert("Enter your Password first!");
        return;
    }

    if (pwd.length < 8) {
        alert("Password must be at least 8 characters!");
        return;
    }

    if (password.type === "password") {
        password.type = "text";
        toggle.textContent = "Hide";
        password.style.borderColor = "green";
    } else {
        password.type = "password";
        toggle.textContent = "Show";
        password.style.borderColor = "blue";
    }
});

// SUBMIT BUTTON LOGIC
// --------------------------
submitBtn.addEventListener('click', () => {

    const pwd = password.value.trim();
    const isEmailValid = emailValidation();

    if (!isEmailValid) return; // email must pass first

    if (pwd === "") {
        alert("Password cannot be empty!");
        return;
    }

    if (pwd.length < 8) {
        alert("Password must be at least 8 characters!");
        return;
    }

    alert("Login Successful!");

    // Clear fields
    email.value = "";
    password.value = "";
    password.type = "password";
    toggle.textContent = "Show";
    password.style.borderColor = "#ddd"; 
});
