const openPopupCertificate1 = document.getElementById('open-featured-certificate-1');
const popupCertificate1 = document.getElementById('background-popup-certificate-1');
const closePopupCertificate1 = document.getElementById('close-popup-certificate-1');


function openPopup() {
    popupCertificate1.classList.remove('hidden');
}

function closePopup() {
    popupCertificate1.classList.add('hidden');
}

openPopupCertificate1.addEventListener('click', openPopup);
closePopupCertificate1.addEventListener('click', closePopup);