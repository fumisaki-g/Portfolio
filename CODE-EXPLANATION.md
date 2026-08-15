# คู่มืออธิบายโค้ดเว็บไซต์ Portfolio แบบละเอียด

เอกสารนี้จัดทำขึ้นเพื่อให้คนที่กลับมาดูโค้ดภายหลัง (รวมถึงตัวเจ้าของเว็บไซต์เอง) เข้าใจถึงโครงสร้าง การทำงาน และเหตุผลของแต่ละคำสั่ง/ฟังก์ชันอย่างชัดเจน โดยไม่ต้องเดา หรือสืบค้นต่อ

> เป้าหมาย: อธิบายไทม์ไลน์การทำงานของเว็บไซต์แบบรอบด้าน ไม่ใช่แค่โค้ดที่เพิ่งเขียนเพิ่มล่าสุด

---

## 1. ภาพรวมโปรเจกต์

เว็บไซต์นี้เป็นหน้า Portfolio แบบ Static Website ที่ประกอบด้วย 3 ส่วนหลัก:

1. HTML: กำหนดโครงสร้างหน้าเว็บ
2. CSS: กำหนดการจัดวาง สี ตัวอักษร ระยะห่าง เงา animation และ responsive
3. JavaScript: เพิ่ม interaction เช่น popup, filter, mobile menu, scroll animation, loading overlay, countdown timer

โฟลเดอร์หลักมีดังนี้:

```text
Portfolio/
├── index.html
├── README.md
├── CODE-EXPLANATION.md
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── script.js
│   └── images/
```

หมายเหตุสำคัญ:
- เว็บไซต์นี้เป็นหน้าเว็บแบบ static ไม่ได้ใช้ framework
- การพัฒนาภายใต้ข้อจำกัด: จำกัดเฉพาะ HTML/CSS/JS เท่านั้น และไม่แตะข้อมูล JSON / Supabase
- ความมุ่งหมายของเว็บไซต์คือการนำเสนอข้อมูลส่วนตัว ผลงาน ทักษะ และเกียรติบัตรในลักษณะ portfolio ที่ดูมีระดับ และเหมาะกับการสมัครเข้ามหาวิทยาลัยหรือศึกษาต่อ

---

## 2. โครงสร้าง HTML หลัก

ไฟล์หลักที่ใช้งานคือ [index.html](C:/Users/wutth/OneDrive/เอกสาร/Portfolio/index.html)

### 2.1 ส่วน Head (หัวเว็บ)

ในส่วน `<head>` มีการตั้งค่าเบื้องต้นดังนี้:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=700, initial-scale=1.0, minimum-scale=0.25, maximum-scale=5.0">
<meta name="description" content="Portfolio website ...">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/main.css">
```

### คำสั่ง/แท็กที่สำคัญ

- `meta charset="UTF-8"`
  - บอกเบราว์เซอร์ให้ใช้ Encoding UTF-8 เพื่อรองรับภาษาไทยได้ถูกต้อง
- `meta viewport`
  - ใช้สำหรับปรับความกว้างและการทำงานบนมือถือ
- `meta description`
  - ใช้ให้เครื่องมือค้นหาและแสดงผลข้อมูลสรุปหน้าเว็บ
- `link rel="stylesheet"`
  - นำเข้าไฟล์ CSS ที่ควบคุมการออกแบบทั้งหมด
- `link` สำหรับ Google Fonts
  - นำฟอนต์ Prompt มาใช้งาน เพื่อให้ตัวอักษรดูมีความเป็นทางการและสวยงาม

### 2.2 Header / Navigation

```html
<header class="header-container">
  <nav class="header-nav-con" id="nav-tab1">
    <div class="header-logo">
      <h1>Vutthikorn Website</h1>
    </div>
    <button class="header-menu-toggle" ...>
      <span></span><span></span><span></span>
    </button>
    <ul class="header-btn-con">
      <li class="header-btn"><a href="#About">เกี่ยวกับฉัน</a></li>
      <li class="header-btn"><a href="#latest-activities">กิจกรรมล่าสุด</a></li>
      <li class="header-btn"><a href="#certificates">เกียรติบัตร</a></li>
      <li class="header-btn"><a href="#contact-info">ช่องทางติดต่อ</a></li>
    </ul>
  </nav>
</header>
```

#### จุดประสงค์
- ทำเมนูนำทางให้ user เคลื่อนย้ายไปยังส่วนต่าง ๆ ได้เร็ว
- มี hamburger menu สำหรับมือถือ
- ใช้ anchor link เช่น `href="#About"` ซึ่งทำให้เลื่อนลงไปยัง section ที่ตรงกันได้ทันที

### 2.3 Hero Section

```html
<section class="Home-container">
  <div class="left-home">
    <div class="text-home">
      <p class="eyebrow">Portfolio • Student Developer</p>
      <h1>Welcome <span>Vuthikorn</span></h1>
      <h2>Student Developer</h2>
      <p>...ข้อความแนะนำตนเอง...</p>
    </div>
    <div class="btn-home">
      <li class="btn-home-1"><a href="#projects-goals">ผลงานของผม</a></li>
      <li class="header-btn"><a href="#skill-tag">ทักษะของผม</a></li>
    </div>
  </div>
  <div class="right-home">
    <div class="portrait-frame">
      <img src="assets/images/m9.jpg" alt="Profile">
    </div>
  </div>
</section>
```

#### จุดประสงค์
- สร้างความประทับใจครั้งแรกให้ผู้เข้าชมเว็บไซต์
- ช่วยสื่อถึงบุคลิก วัตถุประสงค์ และความเป็นนักพัฒนา
- มีภาพโปรไฟล์และปุ่มนำทางที่ชวนให้คลิก

### 2.4 About / Profile

```html
<section class="about-flex-container">
  <div class="about-text-col">
    <div class="about-header" id="About">
      <h1 class="large-heading">นายวุฒิกร ปั้นนาค</h1>
      <p class="about-subtitle">แนะนำตัวและทักษะความสามารถ</p>
    </div>
    <div class="about-image-col">
      <div class="profile-image-wrapper">
        <img src="assets/images/m5.jpg" alt="รูปถ่ายของฉัน" class="profile-img">
      </div>
    </div>
  </div>

  <div class="about-bio-wrap">
    <div class="about-bio" id="about-bio-me">
      <p>...</p>
      <div class="bio-stats">
        <div><strong>6+</strong><span>ปีการเรียนรู้</span></div>
        <div><strong>10+</strong><span>กิจกรรมและการแข่งขัน</span></div>
        <div><strong>∞</strong><span>ความอยากรู้อยากเห็น</span></div>
      </div>
    </div>
  </div>
</section>
```

#### จุดประสงค์
- แยก layout เป็น 2 ฝั่ง: ฝั่งข้อความและฝั่งรูปภาพ
- ให้สังคม/คณะกรรมการ/ผู้สมัครเห็นข้อมูลความสามารถและตัวตนได้ง่าย

### 2.5 Skills

ส่วนนี้ใช้กลุ่ม tag แบบสั้น ๆ เช่น:

```html
<div class="skill-bar-box" id="skill-tag">
  <span class="tag-skill-head">HTML5</span>
  <span class="tag-skill-head">CSS</span>
  <span class="tag-skill-head">JavaScript</span>
</div>
```

#### จุดประสงค์
- ทำให้ความสามารถดูชัดเจน รวดเร็ว และไม่อึดอัด
- เป็นโทนที่อ่านง่ายและเหมาะกับ portfolio

### 2.6 Certificate Section

นี่คือส่วนที่สำคัญที่สุดของเว็บไซต์ โดยมีโครงสร้างแบบนี้:

```html
<section class="Certificates-contrainer" id="certificates">
  <div class="certificates-header">
    <details class="certificates-details">
      <summary class="certificates-summary">
        <h1>เกียรติบัตร</h1>
      </summary>
    </details>
  </div>

  <div class="Certificates-year">
    <h1 class="large-heading">ปี 2569</h1>
  </div>

  <div class="card-certificates-container">
    <article class="card-certificates" data-category="competition">
      <div id="open-popup-certificate-1">
        <img class="card-image-certificates" src="...">
        <div class="card-content-certificates">
          <h2>ชื่อเกียรติบัตร</h2>
        </div>
      </div>
    </article>
  </div>
</section>
```

นี้คือโครงสร้างที่ทำให้:
- เกียรติบัตรเก็บเป็นกลุ่มตามปี
- มีปุ่มกรองประเภท เช่น การแข่งขัน อบรม ฯลฯ
- เมื่อกดการ์ด จะเปิด modal/popup เพื่อตรวจดูรูปใหญ่ขึ้น

### 2.7 Footer

Footer เป็นส่วนท้ายของหน้าเว็บที่บรรจุข้อมูลเกี่ยวกับเว็บไซต์และช่องทางติดต่อ เช่น:

```html
<footer class="footer-con">
  <div class="footer-maxsection">
    <div class="footer-about">...</div>
    <div class="footer-website">...</div>
    <div class="footer-contact">...</div>
  </div>
</footer>
```

#### จุดประสงค์
- ให้เว็บไซต์ปิดท้ายแบบเรียบหรู
- จัดให้ผู้เข้าชมสามารถติดต่อหรือดูข้อมูลเพิ่มเติมได้ทันที

---

## 3. CSS อธิบายตามหลักการทำงาน

ไฟล์หลักคือ [assets/css/main.css](C:/Users/wutth/OneDrive/เอกสาร/Portfolio/assets/css/main.css)

### 3.1 การตั้งค่า Theme สี

```css
:root {
  --bg-page: #050b14;
  --bg-surface: #0d1726;
  --text-heading: #f8fbff;
  --text-body: #d4e4f7;
  --accent: #3ea5ff;
  --highlight: #f7d35d;
}
```

#### คำสั่ง/เรื่องที่สำคัญ
- `:root` = ตัวแปร global สำหรับเก็บสีและค่าเริ่มต้น
- `--bg-page` = สีพื้นหลังหลัก
- `--accent` = สีฟ้า (ใช้เป็นจุดเน้น)
- `--highlight` = สีเหลือง (ใช้ให้ดูพรีเมียม/โดดเด่น)
- `--text-body` = สีข้อความหลัก

> เหตุผล: การใช้ CSS Variables ช่วยให้แก้ไขโทนสีได้ง่ายและสม่ำเสมอทั้งหน้าเว็บ

### 3.2 การตั้งค่าพื้นฐาน

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
``` 

#### ฟังก์ชันการทำงาน
- `box-sizing: border-box` ทำให้ความกว้าง/สูงรวม padding และ border เข้าเป็นหนึ่งเดียว
- จึงหลีกเลี่ยงปัญหาจัด layout ล้น/ผิดไซต์

### 3.3 body background และ grid effect

```css
body {
  background: radial-gradient(...), var(--bg-page);
}

body::before {
  background-image: linear-gradient(...), linear-gradient(...);
  background-size: 36px 36px;
}
```

#### การทำงาน
- `radial-gradient` สร้างแสงประกายซ้อนกัน ทำให้เว็บดูมีความลึกและมีมิติ
- `body::before` ใช้ grid background เพื่อให้หน้าเว็บมีความเป็น “tech portfolio” มากขึ้น
- `mask-image` ทำให้เส้น grid ค่อย ๆ จางลงที่ขอบบท

### 3.4 Typography

```css
h1 {
  font-size: clamp(2.4rem, 3vw, 4rem);
  letter-spacing: -0.04em;
}
```

#### คำสั่งที่สำคัญ
- `clamp()` = ปรับขนาดตัวอักษรตามความกว้างหน้าจอแบบอัตโนมัติ
- ทำให้เว็บรองรับทุกขนาดหน้าจอ ได้ดีมากกว่าการตั้งค่าคงที่

### 3.5 การออกแบบ card / block หลัก

```css
.card-con {
  width: 900px;
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 28px;
  box-shadow: 0 18px 40px rgba(var(--accent-rgb), 0.15);
}
```

#### ทำไมถึงใช้
- `border-radius` ทำให้โครงสร้างมุมมน
- `box-shadow` ทำให้ดูมีมิติและพรีเมียม
- `background-color` สร้างความคอนทราสต์ระหว่างพื้นและกล่อง

### 3.6 การทำงานของ Certificate Cards

```css
.Certificates-year {
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(980px, 100%);
  margin: 1.65rem auto 0;
  border-radius: 18px;
}

.card-certificates {
  width: 100%;
  min-height: 228px;
  border-radius: 18px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
```

#### เหตุผล
- `display: grid` ใน container ทำให้ cards จัดเรียงต่อกันได้อัตโนมัติ
- `min-height` บังคับความสูงขั้นต่ำ ทำให้ card เรียงสม่ำเสมอ
- `transition` ทำให้ hover ดู smooth
- `is-featured` ทำให้การ์ดแรกที่ถูกเลือกมีความโดดเด่น

### 3.7 สถานะ hover และ featured

```css
.card-certificates:hover,
.card-certificates.is-featured {
  transform: translateY(-5px) scale(1.01);
  border-color: rgba(62, 165, 255, 0.52);
}
```

#### การอ่านคอนเซ็ปต์
- เมื่อเม้าส์ชี้ ลบเลื่อนขึ้นเล็กน้อย
- เมื่อเป็น featured จะมี border และแสงพิเศษ
- สร้างความรู้สึกว่าการ์ดที่อยู่ก่อนหน้ามีความสำคัญมากกว่า

### 3.8 CSS animation

```css
@keyframes certificatePulse {
  0% { box-shadow: 0 0 0 rgba(62,165,255,0); }
  40% { box-shadow: 0 0 0 8px rgba(62,165,255,0.12); }
  100% { box-shadow: 0 28px 60px rgba(var(--accent-rgb), 0.18); }
}
```

#### ทำไมถึงใช้
- ให้การ์ดที่ถูก highlight มี animation แบบ pulse
- ช่วยดึงสายตาโดยไม่ต้องใช้ภาพเคลื่อนไหวมากเกินไป

### 3.9 Responsive Design

CSS มีหลายจุดที่ใช้ media query เพื่อปรับ layout สำหรับหน้าจอเล็ก เช่น:

```css
@media (max-width: 768px) {
  .header-btn-con {
    display: none;
  }
}
```

#### จุดประสงค์
- บนหน้าจอมือถือ ให้เมนูซ่อนและใช้ hamburger menu
- ลดความกว้างของ card ให้เข้ากับหน้าจอ
- ปรับปุ่มและระยะห่างให้ไม่ติดขอบ

### 3.10 Animated Background System

หลังจากการอัปเกรดใหม่ เว็บไซต์มี layered background แบบไลฟ์มากขึ้น โดยใช้:

```css
body::before {
  background: radial-gradient(...), radial-gradient(...);
  animation: ambientShift 22s ease-in-out infinite alternate;
}

.background-ambient .orb {
  animation: orbitFloatOne 20s ease-in-out infinite alternate;
}
```

#### ฟังก์ชันการทำงาน
- `body::before` สร้าง aurora glow ให้ดูมีมิติแบบ 3D
- `.orb` เป็นกลุ่มโคมแสง/แผ่นพลังงานที่ลอยไปลอยมา
- `.grid-pattern` เพิ่มเส้นกริดและแสงเคลื่อนไหวให้ดูมีความลึก
- `.particle` สร้างฝุ่นเล็ก ๆ ที่กระจายทั่วยุคพื้นหลัง

#### เหตุผล
- ทำให้หน้าเว็บดูเข้มขึ้นแบบ premium
- เพิ่มความรู้สึก “มีบรรยากาศ” มากกว่าพื้นหลังเรียบ ๆ
- เหมาะกับ portfolio ที่ต้องการความเป็นทางการแต่ยังคงความน่าสนใจ

---

## 4. JavaScript อธิบายแบบละเอียด

ไฟล์ JavaScript หลักคือ [assets/js/script.js](C:/Users/wutth/OneDrive/เอกสาร/Portfolio/assets/js/script.js)

JavaScript ในไฟล์นี้ทำหน้าที่สำคัญ 7 กลุ่มหลัก:

1. Popup สำหรับเปิด/ปิดรูปเกียรติบัตรและ SOP
2. เมนูมือถือและ navbar
3. การสลับข้อความใน hero section เช่น Student Developer → Front-end Developer
4. กรอง certificate ตามประเภท/ปี
5. animation Scroll Reveal
6. Loading overlay เมื่อมีการเปลี่ยนหน้า
7. Countdown timer และเงื่อนไขเวลา

---

### 4.1 Role Text Rotator (ข้อความหมุนสลับ)

โค้ดใน JavaScript ที่เกี่ยวกับข้อความหลักมีลักษณะดังนี้:

```javascript
document.addEventListener("DOMContentLoaded", function () {
    const roleSwitcher = document.querySelector('.role-switcher');
    const roleText = document.querySelector('.role-text');

    if (roleSwitcher && roleText) {
        const roles = (roleSwitcher.dataset.roles || 'Student Developer,Front-end Developer,UI/UX Enthusiast,Problem Solver')
            .split(',')
            .map(role => role.trim())
            .filter(Boolean);

        let currentIndex = 0;

        const updateRole = (nextIndex) => {
            const nextRole = roles[nextIndex % roles.length];

            roleSwitcher.classList.add('is-changing');
            roleText.classList.add('is-changing');

            setTimeout(() => {
                roleSwitcher.textContent = nextRole;
                roleText.textContent = nextRole;
                roleSwitcher.classList.remove('is-changing');
                roleText.classList.remove('is-changing');
            }, 180);
        };

        if (roles.length) {
            roleSwitcher.textContent = roles[0];
            roleText.textContent = roles[0];
            setInterval(() => {
                currentIndex = (currentIndex + 1) % roles.length;
                updateRole(currentIndex);
            }, 3200);
        }
    }
});
```

#### การทำงานแบบทีละขั้นตอน
- `document.querySelector('.role-switcher')` ดึง element บนหน้าเว็บที่มี class `role-switcher`
- `roleSwitcher.dataset.roles` อ่านค่าจาก attribute `data-roles` ใน HTML เช่น:
  ```html
  <span class="role-switcher" data-roles="Student Developer,Front-end Developer,UI/UX Enthusiast,Problem Solver"></span>
  ```
- `.split(',')` แยกคำทุกคำออกจากกัน
- `.map(role => role.trim())` ลบช่องว่างรอบคำให้สะอาด
- `.filter(Boolean)` เอาเฉพาะคำที่มีจริง
- `setInterval(...)` ทำงานซ้ำทุก 3.2 วินาที เพื่อสลับคำทีละอัน
- `classList.add('is-changing')` เพิ่ม class ที่ CSS จะทำให้ข้อความหายไปชั่วคราว
- `setTimeout(...)` รอ 180 ms ก่อนเปลี่ยน text จริง แล้วค่อยแสดงกลับมา

#### ทำไมจึงใช้เทคนิคแบบนี้
- ให้ข้อความมีการเปลี่ยนแปลงแบบมี “จังหวะ” และดูมีชีวิตชีวา
- ไม่ทำให้ข้อความกระพริบหรือสลับทันทีจนเกินไป
- เหมาะสำหรับ portfolio ที่ต้องการเอฟเฟกต์สวยแต่ไม่ทำให้หงุดหงิด

---

### 4.2 Popup System

ตัวอย่างโค้ดเริ่มต้น:

```javascript
const openpopup1 = document.getElementById('open-popup-certificate-1');
const closepopup1 = document.getElementById('close-popup-certificate-1');
const backgroundpopup = document.getElementById('background-popup-certificate-1');
```

#### การทำงาน
- `document.getElementById()` ดึง element จากหน้าเว็บตาม id
- `openpopup1` คือปุ่ม/โครงสร้างที่ click แล้ว เปิด popup
- `closepopup1` คือปุ่มปิด popup
- `backgroundpopup` คือ overlay ความมืดหรือหน้าต่าง popup

ต่อด้วย:

```javascript
function openPopup1() {
    backgroundpopup.style.display = "flex";
}

function closePopup1() {
    backgroundpopup.style.display = "none";
}
```

#### คำสั่งที่ใช้
- `style.display` = เปลี่ยนการแสดงผลของ element
- `"flex"` = ทำให้ popup แสดงตรงกลาง
- `"none"` = ซ่อน popup ออก

#### เหตุผลที่ใช้ popup
- เมื่อกดที่ certificate ใบใด ใบหนึ่ง จะได้เห็นข้อมูลเพิ่มเติมโดยไม่ต้องไปโหลดหน้าใหม่
- ช่วยประหยัดพื้นที่หน้าจอและดูมีความเป็นมืออาชีพมากขึ้น
- เหมาะกับการแสดงรายละเอียดเกียรติบัตรและประสบการณ์ที่ยาวกว่า card ปกติ

---

### 4.3 Navbar / Mobile Menu

```javascript
const tab1 = document.getElementById('nav-tab1');
const tab2 = document.getElementById('nav-tab2');
const headerContainer = document.querySelector('.header-container');
const menuToggle = document.querySelector('.header-menu-toggle');
```

#### เป้าหมาย
- กำหนดให้ navbar มีปฏิสัมพันธ์ที่ดีทั้งบน desktop และ mobile
- เมื่อเปิดบนมือถือ ให้ใช้ hamburger menu แทนเมนูเต็มแบบปกติ

```javascript
function toggleMobileMenu() {
    if (!headerContainer || !menuToggle || !window.matchMedia('(max-width: 768px)').matches) {
        return;
    }

    const isOpen = headerContainer.classList.toggle('header-menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
}
```

#### ความหมาย
- `matchMedia('(max-width: 768px)')` ตรวจว่าผู้ใช้อยู่เหนือหรือใต้ breakpoint mobile
- `classList.toggle()` เพิ่ม/ลบ class `.header-menu-open`
- `aria-expanded` ถูกปรับตามสถานะ เปิด/ปิด เพื่อช่วยความเข้ากันได้กับ accessibility

---

### 4.4 Certificate Filter System

```javascript
function filtercards(category) {
    activeCertificateFilter = category;
    const cards = document.querySelectorAll('.card-certificates');
    const visibleCards = [];

    cards.forEach(card => {
        const match = category === 'all' || card.dataset.category === category;
        card.classList.toggle('is-hidden', !match);
        card.style.display = match ? 'flex' : 'none';
        if (match) visibleCards.push(card);
    });

    if (visibleCards.length) {
        visibleCards.forEach((card, index) => card.classList.toggle('is-featured', index === 0));
    }
}
```

#### การทำงาน
- กำหนด class `data-category` ให้แต่ละ card เช่น `competition`, `training`, `activity`
- เมื่อกดปุ่มกรอง จะดูว่า `category` ที่เลือกตรงกับ `card.dataset.category` หรือไม่
- ถ้าตรง ให้แสดง, ถ้าไม่ตรง ซ่อนออก
- `is-featured` จะให้ card แรกที่เห็นโดดเด่นที่สุด

```javascript
const certificateFilters = document.querySelectorAll('.filter-btn, .filter-year-link');
certificateFilters.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter') || button.textContent.trim().toLowerCase().replace(/\s+/g, '');
        filtercards(filterValue === 'ทั้งหมด' ? 'all' : filterValue);
    });
});
```

#### มุมมองเชิง UX
- ผู้ใช้จะได้เห็น only subset ของ certificate ตามประเภทที่เลือก
- card แรกที่แสดงจะกระตุ้นให้ user มองฝั่งบนก่อน และรู้สึกถึงความคัดสรรของผลงาน
- เหมาะสำหรับ portfolio ที่ต้องการ “ให้ดูเป็นทางการ” มากกว่าการแสดงทั้งหมดแบบ raw gallery

---

### 4.5 Scroll Reveal + IntersectionObserver

```javascript
document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.style.transitionDelay = `${(index % 6) * 0.08}s`;
                target.classList.add("is-visible");
            }
        });
    }, observerOptions);

    revealElements.forEach((element, index) => {
        element.style.transitionDelay = `${(index % 6) * 0.08}s`;
        scrollObserver.observe(element);
    });
});
```

#### ทำไมต้องใช้ IntersectionObserver
- ไม่มีการคำนวณการเลื่อนด้วย JS แบบหนักเกินความจำเป็น
- เมื่อ element ก้าวเข้ามาใน viewport จะทำ animation พร้อมกัน
- ช่วยให้ animation รู้สึก “เป็นธรรมชาติ” และไม่ทำงานตลอดเวลา

#### เทคนิคสำคัญ
- `threshold: 0.08` หมายถึง เมื่อ element ปรากฏแค่ 8% ก็เริ่ม trigger animation ได้
- `rootMargin: "0px 0px -8% 0px"` เพิ่มระยะห่างก่อนที่จะถือว่าเห็น fully
- `transitionDelay` เพิ่มความล่าช้าระหว่าง element เพื่อให้ cascade animation ดูสวย

---

### 4.6 Loading Overlay

```javascript
function setLoadingOverlay(visible) {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.style.display = visible ? 'flex' : 'none';
    }
}
```

#### การทำงาน
- ใช้เพื่อแสดง overlay แบบ loading ขณะเปลี่ยนหน้าหรือมีการทำงานที่ใช้เวลา
- เมื่อ click ลิงก์ภายในเว็บไซต์ที่ไม่ใช่ anchor link เดียวกัน มักจะเปิด overlay ก่อนเข้าหน้าใหม่
- เมื่อเว็บโหลดเสร็จ `window.addEventListener('load', ...)` จะปิด overlay ทันที

#### เหตุผล
- ช่วยให้ผู้ใช้รู้ว่าเว็บกำลังทำงาน
- ปรับให้ experience ดูดีและโปร่งใสมากขึ้น

---

### 4.7 Countdown Timer

```javascript
const targetDate = new Date("2026-08-17T12:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

const countdown = setInterval(updateCountdown, 1000);
updateCountdown();
```

#### การทำงาน
- `new Date().getTime()` ใช้ได้เวลาปัจจุบันแบบ timestamp
- `distance = targetDate - now` คำนวณความต่างเวลา
- แบ่งข้อมูลออกเป็นวัน ชั่วโมง นาที วินาที
- `textContent` ใส่ค่าลงไปใน element ที่มี id เรียกตามลำดับ

#### การใช้งานจริง
- เหมาะสำหรับกิจกรรมหรือ event countdown
- หากครบกำหนดแล้ว จะ reset เป็น 00 เพื่อไม่ให้ติดลบ

---

## 5. สรุปโค้ดแบบเข้าใจง่าย

เว็บไซต์นี้ทำงานเป็นลำดับดังนี้:

1. HTML สร้างโครงสร้างหน้าเว็บและกำหนดทุก section
2. CSS จัดฟอนต์ สี พื้นหลัง card layout และ animation
3. JavaScript ทำหน้าที่เชื่อมต่อ interaction ทั้งหมด
4. ผู้ใช้เข้ามาแล้วเห็น hero section → read about → ดู skills → ดู projects → คลิก certificate → เปิด popup → กรองประเภท/ปีได้
5. เมื่อเลื่อนลง page, scroll-reveal จะทำ animation เพื่อให้หน้าเว็บดูมีชีวิตชีวา
6. ระบบ loading overlay และ countdown เพิ่มความสมบูรณ์แบบของ portfolio

---

## 6. สรุปความสำคัญของฟังก์ชันหลัก

- `openPopupX` / `closePopupX` → เปิด/ปิด popup
- `filtercards(category)` → กรองรายการ certificate ตามประเภท
- `setInterval(...)` → ทำงานวนซ้ำสำหรับ rotating text
- `IntersectionObserver` → ตรวจจับการเข้ามาของ section ใน viewport
- `setLoadingOverlay(visible)` → แสดง/ซ่อน loading overlay
- `updateCountdown()` → นับถอยหลังเวลา

---

## 7. ข้อควรจำสำหรับคนที่กลับมาดูโค้ดต่อ

- อย่าลืมว่า HTML, CSS, JS เป็นสิ่งที่ทำงานร่วมกัน
- ถ้าจะปรับ UI ให้ใช้ CSS เป็นหลัก
- ถ้าจะเพิ่ม UX behavior ให้ใช้ JavaScript เป็นหลัก
- ถ้าจะเพิ่มข้อมูลใหม่ ให้ดูที่ HTML structure และ data attribute เป็นอันดับแรก
- ควรใช้งาน `querySelector` / `getElementById` อย่างระวังเพื่อหลีกเลี่ยง null error

สุดท้าย: เว็บไซต์นี้ไม่ได้เป็นเพียงแค่ “หน้าเว็บที่สวย” แต่เป็น Portfolio ที่ถูกออกแบบให้มีความชัดเจนด้าน narrative, hierarchy, interaction และ storytelling ในการสื่อถึงบุคลิกของผู้พัฒนา
