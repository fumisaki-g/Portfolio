const openpopup1 = document.getElementById('open-popup-certificate-1');
const closepopup1 = document.getElementById('close-popup-certificate-1');
const backgroundpopup = document.getElementById('background-popup-certificate-1');

function openPopup1() {
    backgroundpopup.style.display = "flex";
}
function closePopup1() {
    backgroundpopup.style.display = "none";
}

openpopup1.addEventListener('click', openPopup1);
closepopup1.addEventListener('click', closePopup1);

const openpopup2 = document.getElementById('open-popup-certificate-2');
const closepopup2 = document.getElementById('close-popup-certificate-2');
const backgroundpopup2 = document.getElementById('background-popup-certificate-2');

function openPopup2() {
    backgroundpopup2.style.display = "flex";
}
function closePopup2() {
    backgroundpopup2.style.display = "none";
}

openpopup2.addEventListener('click', openPopup2);
closepopup2.addEventListener('click', closePopup2);

