const openpopupc1 = document.getElementById('open-popup-c1');
const closepopupc1 = document.getElementById('close-popup-c1');
const backgroundpopupc1 = document.getElementById('background-popup-c1');

const openpopupc2 = document.getElementById('open-popup-c2');
const closepopupc2 = document.getElementById('close-popup-c2');
const backgroundpopupc2 = document.getElementById('background-popup-c2');

const openpopupc3 = document.getElementById('open-popup-c3');
const closepopupc3 = document.getElementById('close-popup-c3');
const backgroundpopupc3 = document.getElementById('background-popup-c3');

const openpopuptimeline = document.getElementById('open-popup-timeline')
const closepopuptimeline = document.getElementById('close-popup-timeline')
const backgroundtimeline = document.getElementById('background-popup-timeline')


// const openpopuphome = document.getElementById('open-popup-home');
// const closepopuphome = document.getElementById('close-popup-home');
// const backgroundpopuphome = document.getElementById('background-popup-home');

function openPopupc1() {
    backgroundpopupc1.style.display = "flex";
}
function closePopupc1() {
    backgroundpopupc1.style.display = "none";
}


function openPopupc2() {
    backgroundpopupc2.style.display = "flex";
}
function closePopupc2() {
    backgroundpopupc2.style.display = "none";
}


function openPopupc3() {
    backgroundpopupc3.style.display = "flex";
}
function closePopupc3() {
    backgroundpopupc3.style.display = "none";
}

function openPopuptimeline() {
    backgroundtimeline.style.display = "flex";
}

function closePopuptimeline() {
    backgroundtimeline.style.display = "none";
}

// function openPopuphome() {
//     backgroundpopuphome.style.display = "block";
// }

// function closePopuphome() {
//     backgroundpopuphome.style.display = "none";
// }

openpopupc1.addEventListener('click', openPopupc1);
closepopupc1.addEventListener('click', closePopupc1);
openpopupc2.addEventListener('click', openPopupc2);
closepopupc2.addEventListener('click', closePopupc2);
openpopupc3.addEventListener('click', openPopupc3);
closepopupc3.addEventListener('click', closePopupc3);
openpopuptimeline.addEventListener('click', openPopuptimeline);
closepopuptimeline.addEventListener('click', closePopuptimeline);
// openpopuphome.addEventListener('click', openPopuphome);
// closepopuphome.addEventListener('click', closePopuphome);

