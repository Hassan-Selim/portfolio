// script.js

// Initialize EmailJS
emailjs.init("T2E6hgoesZam5TJlo"); 

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send email
    emailjs.send("service_qk1vbax", "template_6dmo6he", {
        from_name: name,
        from_email: email,
        message: message,
    }).then(
        function (response) {
            console.log("SUCCESS!", response.status, response.text);
           alert("Message Sent!!");
        },
        function (error) {
            console.error("FAILED...", error);
            document.getElementById("response-message").textContent = "Failed to send message. Please try again.";
            document.getElementById("response-message").style.color = "red";
        }
    );

    // Clear form
    document.getElementById("contact-form").reset();
});
