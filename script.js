function validateForm() {

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    if(username === "") {
        message.innerHTML = "Username cannot be empty";
        return false;
    }

    if(email === "" || !email.includes("@")) {
        message.innerHTML = "Enter valid email";
        return false;
    }

    if(password.length < 6) {
        message.innerHTML = "Password must contain 6 characters";
        return false;
    }

    message.style.color = "green";
    message.innerHTML = "Form Submitted Successfully";

    return false;
}