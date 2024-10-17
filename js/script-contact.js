(function() {
    emailjs.init("your_emailjs_user_id");
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        name: name,
        mobile: mobile,
        email: email,
        message: message
    };

    emailjs.send('your_service_id', 'your_template_id', templateParams)
        .then(function(response) {
            document.getElementById('statusMessage').innerHTML = "Message sent successfully!";
            document.getElementById('statusMessage').style.color = "green";
        }, function(error) {
            document.getElementById('statusMessage').innerHTML = "Failed to send message. Please try again later.";
            document.getElementById('statusMessage').style.color = "red";
        });

    
    document.getElementById('contactForm').reset();
});