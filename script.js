function validateForm() {
            var name = document.getElementById("sender-name").value;
    var email = document.getElementById("sender-email").value;
    var mobileNumber = document.getElementById("sender-mobile-number").value;
    var subject = document.getElementById("sender-subject").value;
    var message = document.getElementById("sender-message").value;

    if (name === "" || email === "" || mobileNumber === "" || subject === "" || message === "") {
        alert("Please fill in all fields.");
    return false;
            }
    return true;
        }

    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

    if (validateForm()) {
        alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
            }
        });