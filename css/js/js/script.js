// Countdown Function
function countdown() {
    const weddingDate = new Date(Date.UTC(2025, 5, 28, 14, 0, 0)); // Date in UTC: June 28, 2025, 14:00 UTC
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the respective HTML elements
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // If the countdown is finished, display a message
    if (timeLeft < 0) {
        document.querySelector('.countdown').innerHTML = "We are married!";
    }
}

// Run countdown function every second after document loads
document.addEventListener('DOMContentLoaded', () => {
    setInterval(countdown, 1000);
});


// Google Maps Integration
function initMap() {
    const location = { lat: [56,982] lng: [12,3965] }; // Enter coordinates here
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
