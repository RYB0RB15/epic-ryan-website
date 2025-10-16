const cuica = document.getElementById('cuica');
const song1 = document.getElementById('song1');
const song2 = document.getElementById('song2');
const metroButton = document.getElementById('metroToggle');
let activetog1 = document.getElementById('tog1');
let activetog2 = document.getElementById('tog2');
let activetog3 = document.getElementById('tog3');



function metroTick() {
    if (activetog1.checked === true) {
        cuica.currentTime = 0;
        cuica.play();
    }
    if (activetog2.checked === true) {
        song1.currentTime = 0;
        song1.play();
    }
    if (activetog3.checked === true) {
        song2.currentTime = 0;
        song2.play();
    }
}

let metroId = null;

function metroToggle() {

    if (metroButton.checked === true) {
        metroTick();
        metroId = setInterval(metroTick, 250);
    }
    else {
        clearInterval(metroId);
    }
}