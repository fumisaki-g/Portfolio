const tab1 = document.getElementById('nav-tab1');
const tab2 = document.getElementById('nav-tab2');
const headerContainer = document.querySelector('.header-container');
const menuToggle = document.querySelector('.header-menu-toggle');

let isOverTab1 = false;
let isOverTab2 = false;
let desktopInteractionsBound = false;

function checkandHide() {
    setTimeout(() => {
        if (!isOverTab1 && !isOverTab2) {
            tab2.classList.add('nav-2-hidden');
        }
    }, 400);
}

function handleTab1Enter() {
    isOverTab1 = true;
    tab2.classList.remove('nav-2-hidden');
}

function handleTab1Leave() {
    isOverTab1 = false;
    checkandHide();
}

function handleTab2Enter() {
    isOverTab2 = true;
}

function handleTab2Leave() {
    isOverTab2 = false;
    checkandHide();
}

function bindDesktopInteractions() {
    if (desktopInteractionsBound || !tab1 || !tab2) {
        return;
    }

    // แก้ไข: คงฟีเจอร์ hover ของเมนูหลักไว้บนเดสก์ท็อปเพื่อไม่ให้ความสามารถเดิมหายไป
    tab1.addEventListener('mouseenter', handleTab1Enter);
    tab1.addEventListener('mouseleave', handleTab1Leave);
    tab2.addEventListener('mouseenter', handleTab2Enter);
    tab2.addEventListener('mouseleave', handleTab2Leave);
    desktopInteractionsBound = true;
}

function unbindDesktopInteractions() {
    if (!desktopInteractionsBound || !tab1 || !tab2) {
        return;
    }

    tab1.removeEventListener('mouseenter', handleTab1Enter);
    tab1.removeEventListener('mouseleave', handleTab1Leave);
    tab2.removeEventListener('mouseenter', handleTab2Enter);
    tab2.removeEventListener('mouseleave', handleTab2Leave);
    desktopInteractionsBound = false;
}

function closeMobileMenu() {
    if (!headerContainer || !menuToggle) {
        return;
    }

    headerContainer.classList.remove('header-menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
}

function toggleMobileMenu() {
    if (!headerContainer || !menuToggle || !window.matchMedia('(max-width: 768px)').matches) {
        return;
    }

    // แก้ไข: ใช้ปุ่มเมนูมือถือเปิด-ปิดเพื่อช่วยลดความเบียดบนหน้าจอเล็กและให้แตะง่ายขึ้น
    const isOpen = headerContainer.classList.toggle('header-menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
}

function syncHeaderMode() {
    if (!tab1 || !tab2) {
        return;
    }

    if (window.matchMedia('(max-width: 768px)').matches) {
        unbindDesktopInteractions();
        tab2.classList.remove('nav-2-hidden');
        closeMobileMenu();
    } else {
        bindDesktopInteractions();
        tab2.classList.remove('nav-2-hidden');
        closeMobileMenu();
    }
}

if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
}

document.querySelectorAll('.header-btn a, .header-btn2 a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 768px)').matches) {
            closeMobileMenu();
        }
    });
});

window.addEventListener('resize', syncHeaderMode);
syncHeaderMode();