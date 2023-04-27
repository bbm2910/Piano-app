window.addEventListener("keydown", function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

    if (!audio) return;   //stop the function from running if there is no audio
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
});

window.addEventListener('keyup', function (e) {
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    key.classList.remove('playing');
});