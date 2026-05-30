// Moved from root script.js to assets/js/script.js
const tab1 = document.getElementById('nav-tab1')
const tab2 = document.getElementById('nav-tab2')

let isOverTab1 = false;
let isOverTab2 = false;

function checkandHide() {
    setTimeout(() => {
        if (!isOverTab1 && !isOverTab2) {
            tab2.classList.add('nav-2-hidden');
        }
    }, 400);
}

/* SHOW */

tab1.addEventListener('mouseenter', () => {
    isOverTab1 = true;
    tab2.classList.remove('nav-2-hidden');
});

/* LEAVE TAB1 */

tab1.addEventListener('mouseleave', () => {
    isOverTab1 = false;
    checkandHide();
});

/* ENTER TAB2 */

tab2.addEventListener('mouseenter', () => {
    isOverTab2 = true;
});

/* LEAVE TAB2 */

tab2.addEventListener('mouseleave', () => {
    isOverTab2 = false;
    checkandHide();
});
