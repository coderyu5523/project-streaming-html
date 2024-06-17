// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById("play-btn");
    const audioPlayer = document.getElementById("audio-player");

    playBtn.addEventListener("click", function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playBtn.textContent = "Pause";
        } else {
            audioPlayer.pause();
            playBtn.textContent = "Play";
        }
    });
});
