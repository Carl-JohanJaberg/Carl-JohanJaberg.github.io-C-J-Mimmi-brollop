// Simple RSVP Form handling
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;

    alert(`Thank you for your RSVP, ${name}!`);
    
    // Handle the form submission logic here, such as sending the data to a server or saving it
});
