# Portfolio Quick Read

## 1. เว็บนี้ทำอะไร
- เป็นหน้า Portfolio แบบ static
- เอาไว้แสดงข้อมูลส่วนตัว, ผลงาน, ทักษะ, กิจกรรม, เกียรติบัตร
- เน้นความดูดีและเหมาะกับการสมัครเข้ามหาวิทยาลัยหรือศึกษาต่อ
- โฟกัสที่ส่วนเกียรติบัตรและการออกแบบตามธีม ดำ / ขาว / ฟ้า / เหลือง

## 2. ไฟล์หลักและหน้าที่

### index.html
- เป็นโครงสร้างหลักของหน้าเว็บ
- ไว้สำหรับใส่เนื้อหาแต่ละ section เช่น Hero, About, Projects, Certificates, Footer
- มีเมนูนำทาง, ปุ่ม CTA, popup, card ต่าง ๆ

### assets/css/main.css
- จัดการความสวยทั้งหมด
- ใส่สี, spacing, typography, card, hover, animation, responsive
- อันนี้คือไฟล์ที่ทำให้เว็บ “ดูดี” มากที่สุด

### assets/js/script.js
- เพิ่ม interaction
- เปิด/ปิด popup
- เลือก filter เกียรติบัตร
- ทำ scroll reveal animation
- เปลี่ยนข้อความใน hero แบบหมุนคำ
- ทํา loading overlay
- นับถอยหลังเวลา

### assets/js/fetch.js
- ดึงข้อมูลจาก JSON แบบ local
- เอาข้อมูลไปแสดงในหน้าเว็บโดยไม่ต้องเขียน hardcode เยอะเกินไป

## 3. ลำดับการทำงานของเว็บ
1. HTML สร้างโครงสร้างหน้าตาเว็บ
2. CSS ปรับสไตล์และ animation
3. JavaScript เพิ่มการใช้งานจริง เช่น คลิกปุ่ม, เลื่อนหน้าจอ, popup
4. ผู้ใช้เห็นหน้า portfolio ที่มี motion และ interaction

## 4. ถ้าอยากแก้ไขง่าย ๆ ต้องดูตรงไหน

### เปลี่ยนชื่อ/ข้อความหลัก
- ดูที่ `index.html`
- ตัวอย่าง:
  - `Portfolio • ...`
  - `Student Developer`
  - `Welcome Vuthikorn`

### เปลี่ยนสีหลัก
- ดูที่ `assets/css/main.css`
- เริ่มจาก `:root` ด้านบน
- ตัวแปรสำคัญ เช่น:
  - `--bg-page`
  - `--bg-surface`
  - `--accent`
  - `--highlight`
  - `--text-heading`

### เปลี่ยนข้อความหมุนคำ
- ดูที่ `index.html`
- หา tag ที่มี `data-roles=`
- ตัวอย่าง:
```html
<span class="role-switcher" data-roles="Student Developer,Front-end Developer,UI/UX Enthusiast,Problem Solver"></span>
```
- เปลี่ยนคำในนี้ได้เลย

### เปลี่ยนความเร็วการหมุนคำ
- ดูที่ `assets/js/script.js`
- ค้นหา `setInterval(() => { ... }, 3200);`
- ตัวเลข 3200 = 3.2 วินาที
- เพิ่ม/ลดได้ตามต้องการ

### เพิ่มหรือแก้ card เกียรติบัตร
- ดูที่ `index.html` ส่วน certificate
- แต่ละ card ใช้ class เช่น `.card-certificates`
- CSS สำหรับรูปลักษณ์อยู่ที่ `assets/css/main.css`

### เปิด/ปิด popup
- ดูที่ `assets/js/script.js`
- ฟังก์ชันหลักคือ:
  - `openPopup1()`
  - `closePopup1()`
  - `filtercards()`

## 5. ถ้าภาษาพื้นฐานไม่รู้เรื่อง อ่านแค่นี้ก็พอ
- HTML = โครงสร้าง
- CSS = แต่งหน้า
- JS = ทำให้มันคลิก/เคลื่อนไหว/กรอง
- ไม่มี framework, เป็น static website

## 6. เคล็ดลับสำหรับการแก้ไขแบบง่าย
- อยากเปลี่ยนลุค: ไป `main.css`
- อยากเปลี่ยนข้อความ: ไป `index.html`
- อยากเพิ่ม interaction: ไป `script.js`
- อยากเปลี่ยนข้อมูลแบบแยกจาก HTML: ไป `fetch.js` + JSON

## 7. จุดสำคัญที่ไม่ควรแก้
- อย่าแก้ข้อมูล JSON ที่เป็น source content โดยไม่จำเป็น
- อย่าเปลี่ยนโครงสร้างพื้นฐานโดยพลการ เพราะอาจทำให้ layout หลุด
- อย่าแก้ธีมหลักจนเกินกว่าความต้องการ เพราะเว็บออกแบบให้คงโทนสีตามที่กำหนดไว้

## 8. สรุปสั้น ๆ
- `index.html` = เนื้อหา
- `main.css` = แป้ง/สวย/animation
- `script.js` = interaction
- `fetch.js` = ดึงข้อมูลจาก JSON

ถ้าจะปรับหน้าเว็บให้เร็วที่สุด ให้เริ่มจากไฟล์ 3 ไฟล์นี้ก่อนเสมอ
