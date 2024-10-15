
const modal = document.getElementById("loginModal");

const loginLink = document.getElementById("loginLink");

const span = document.getElementsByClassName("close")[0];

loginLink.onclick = function(event) {
    event.preventDefault();  
    modal.style.display = "flex";  
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    
    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill out all fields.";
        event.preventDefault();  
    } else {
        errorMessage.textContent = "";
    }
});
