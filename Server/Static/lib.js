const eHints = document.getElementById("hints");
const eForm = document.getElementById("form");
var logoClicks = 0;
function logoClick() {
    logoClicks++;
    right = false, up = false;
    let logo = document.getElementById("logo");
    console.log(logo.style.right);
    if (logo.style.right == "") {
        console.log("right");
        right = true;
    }
    if (logo.style.top == "") {
        console.log("top");
        up = true;
    }
    if (logoClicks == 5) {
        alert("EASTER EGG FOUND!")

        document.body.style.backgroundColor = "#112225";
    }
    
    
    if (up && right) {
        logo.style.top = "70%";
    }
    else if ((!up) && right) {
        logo.style.right = "85%"
    }
    else if (!up && !right) {
        logo.style.top = "";
    }
    else if (up && !right) {
        logo.style.right = "";
    }
    
}
function reset() {
    attempt = false;
    if (document.getElementById("newPasswordInput").style.display == "block") {
        console.log("not first click")
        attempt = true;
    }
    document.getElementById("newPasswordInput").style.display = "block";
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let newPassword = document.getElementById("newPassword").value

    if (attempt) {
        try {
            //presenceCheck(username, "Please enter your username");
            //presenceCheck(password, "Please enter your password");
            if (!(password == newPassword)) {
                throw "Passwords do not match"
            }
            lengthCheck(username, 3, 10, "Please enter a username between 3 and 10 characters")
            lengthCheck(password, 5, 20, "Please enter a password between 5 and 20 characters")
            lengthCheck(newPassword, 5, 20, "Please enter a new password between 5 and 20 characters")
            eHints.innerText = "Attempting Password OverWrite...";
        }
        catch (e) {
            eHints.innerText = e;
        }
    }

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
        eForm.submit();
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