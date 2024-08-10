document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', function() {
        let sound = new Audio(this.getAttribute('data-sound'));
        sound.play();
    });
});

document.querySelector('.search-bar input').addEventListener('focus', function() {
    let sound = new Audio('sound5.mp3');
    sound.play();
});
