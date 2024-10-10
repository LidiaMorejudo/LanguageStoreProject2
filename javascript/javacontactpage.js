// Contact us



document.getElementById('contactform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Thank you. We have received your details, one of the tutors will be in touch with you shortly.');

    // Reset the form
    this.reset();
});