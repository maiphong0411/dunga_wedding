// Redirect to RSVP website
function redirectToRSVP() {
    window.location.href = "https://google.com/";
}

// Countdown Timer
const weddingDate = new Date("January 5, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    } else {
        document.getElementById("countdown").innerHTML = "<p>It's Our Wedding Day!</p>";
        clearInterval(countdownInterval);
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize the countdown on page load
updateCountdown();
