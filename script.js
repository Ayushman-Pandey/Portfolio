const video = document.querySelector('video');
const continueButton = document.querySelector('.continue-button');

// Event listener to fade in the button when the video starts playing
video.addEventListener('play', () => {
    continueButton.classList.add('fade-in');
});

// Optionally, add an event listener for when the video is loaded to fade in immediately
video.addEventListener('loadeddata', () => {
    continueButton.classList.add('fade-in');
});
