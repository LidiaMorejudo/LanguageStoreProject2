// Contact us


document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('contactbutton');

    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default button click behavior
        window.location.href = 'responsetocontactform.html'; // Redirect to the specified page
    });
});
