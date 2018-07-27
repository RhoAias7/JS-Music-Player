var songs = ["EPILOGUE _ Young Forever.mp3", "Coming Home.mp3", "다이아몬드 (Diamond).mp3"];
var albumCovers = ["img1.jpg", "img2.jpg", "img3.jpg"];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

var song = new Audio(); //audio object
var currentSong = Math.floor(Math.random() * songs.length);

window.onload = playSong; //calls the play song method whenthe window loads in

function playSong() {
    song.src = songs[currentSong]; //will choose a random song from the array
    songTitle.textContent = songs[currentSong]; //will set song title from the file name
    song.play(); //play the song of course
    $("#image img").attr("src", albumCovers[currentSong]);
    $("#bg img").attr("src", albumCovers[currentSong]);
}

function playOrPause() {
    if (song.paused) {
        song.play();
        $("#play img").attr("src", "pause.png");
    } else {
        song.pause();
        $("#play img").attr("src", "play.png");
    }
}

song.addEventListener('timeupdate', function () { //will figure out the current timestamp of the song
    var currentPos = song.currentTime / song.duration;
    fillBar.style.width = currentPos * 100 + '%';
});

function next(){ //next song
    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src", "pause.png");
    $("#image img").attr("src", albumCovers[currentSong]);
    $("#bg img").attr("src", albumCovers[currentSong]);
}

function prev(){ //previous song
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    $("#play img").attr("src", "pause.png");
    $("#image img").attr("src", albumCovers[currentSong]);
    $("#bg img").attr("src", albumCovers[currentSong]);
}