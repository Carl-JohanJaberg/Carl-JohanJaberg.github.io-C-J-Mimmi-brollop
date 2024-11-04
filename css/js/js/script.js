// Countdown Timer
function countdown() {
    const weddingDate = new Date("2025-06-28 10:00:00"); // Enter wedding date here
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (timeLeft < 0) {
        document.querySelector('.countdown').innerHTML = "We are married!";
    }
}

setInterval(countdown, 1000);

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
