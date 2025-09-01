function loadSong(songPath) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = songPath;
    audioPlayer.load(); // Load the new source
    audioPlayer.play(); // Start playing the new song
}