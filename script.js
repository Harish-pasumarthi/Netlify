let currentSound = null; // Keeps track of the currently playing sound
let currentButton = null; // Keeps track of the currently blinking button

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', function() {
        // Stop the current sound if it's playing
        if (currentSound) {
            currentSound.pause();
            currentSound.currentTime = 0; // Reset sound position
        }

        // Remove blinking effect from the previous button
        if (currentButton) {
            currentButton.classList.remove('blink');
        }

        // Create a new audio object for the selected sound
        currentSound = new Audio(this.getAttribute('data-sound'));
        currentSound.play();

        // Apply the blinking effect to the clicked button
        this.classList.add('blink');
        currentButton = this;

        // Remove blinking effect after sound ends
        currentSound.addEventListener('ended', () => {
            this.classList.remove('blink');
        });
    });
});

document.querySelector('.search-bar input').addEventListener('focus', function() {
    // Stop the current sound if it's playing
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0; // Reset sound position
        if (currentButton) {
            currentButton.classList.remove('blink');
        }
    }

    // Create a new audio object for the search bar sound
    currentSound = new Audio('audio.mp3');
    currentSound.play();

    // Apply shaking effect to the logo
    document.querySelector('.logo').classList.add('shake');

    // Remove shaking effect after sound ends
    currentSound.addEventListener('ended', () => {
        document.querySelector('.logo').classList.remove('shake');
    });
});
