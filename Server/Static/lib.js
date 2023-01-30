const eHints = document.getElementById("hints");

function reset() {
    console.log("Reset");
}
function create() {
    console.log("Create");

}
function login() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    try {
        //presenceCheck(username, "Please enter your username");
        //presenceCheck(password, "Please enter your password");
        lengthCheck(username, 3, 10, "Please enter a username between 3 and 10 characters")
        lengthCheck(password, 5, 20, "Please enter a password between 5 and 20 characters")
        eHints.innerText = "Attempting Login...";
    }
    catch (e) {
        eHints.innerText = e;
    }
}

function lengthCheck(input, minLength, maxLength, message) {
    if (input.length > maxLength || input.length < minLength) {
        throw message;
    }
    
}

function presenceCheck(input, message) {

    if (input == "") {
        throw message;
    }
}