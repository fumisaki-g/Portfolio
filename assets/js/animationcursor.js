document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        // ตรวจสอบว่าไม่ใช่ลิงก์ภายในหน้า (Hash) และไม่ใช่ปุ่มเปิด Popup
        if (
            href &&
            href !== '#' &&
            !href.startsWith('#') &&
            this.getAttribute('target') !== '_blank' // ถ้าลิงก์เปิดแท็บใหม่ ไม่ต้องขึ้นโหลดค้าง
        ) {
            const overlay = document.getElementById('loadingOverlay');
            if (overlay) {
                overlay.style.display = 'flex';
            }
        }
    });
});

// ✅ แก้ปัญหา "กดปุ่มกลับมาหน้าเดิม (Back) แล้วแอนิเมชั่นค้าง"
window.addEventListener('pageshow', function(event) {
    // ถ้าระบบตรวจพบว่าหน้าเว็บนี้ถูกดึงมาจากแคชตอนกด Back/Forward
    if (event.persisted) {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.style.display = 'none'; // สั่งซ่อนทันที
        }
    }
});

// ✅ ป้องกันไว้เผื่อโหลดเสร็จในหน้าปกติ ให้ซ่อนด้วย
window.addEventListener('load', function() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
});