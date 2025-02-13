const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Move the no-button to a random position
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

function handleYesClick() {
    let audio = document.getElementById("background-music");
    
    // Set the start time (in seconds)
    let startTime = 10; // Change this to the desired timestamp
    audio.currentTime = startTime; // Jump to the specified time
    audio.play().catch(error => console.log("Autoplay blocked:", error));
    window.location.href = "yes_page.html";
}

document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("background-music");
    let unmuteButton = document.getElementById("unmute-button");

    // Set the start time (in seconds)
    let startTime = 10; // Change this to the desired timestamp

    unmuteButton.addEventListener("click", function () {
        audio.currentTime = startTime; // Jump to the specified time
        audio.muted = false; // Unmute the audio
        audio.play().catch(error => console.log("Autoplay blocked:", error));
        unmuteButton.style.display = "none"; // Hide the button after clicking
    });
});