document.addEventListener("DOMContentLoaded", function () {
    const launcher = document.getElementById("aiChatLauncher");
    const windowChat = document.getElementById("aiChatWindow");
    const closeBtn = document.getElementById("aiCloseBtn");
    const sendBtn = document.getElementById("aiSendBtn");
    const chatInput = document.getElementById("aiChatInput");
    const chatBody = document.getElementById("aiChatBody");
    const quickTags = document.getElementById("aiQuickTags");

    // เปิด-ปิด กล่องแชท
    if (launcher && windowChat) {
        launcher.addEventListener("click", () => {
            const isHidden = window.getComputedStyle(windowChat).display === "none";
            windowChat.style.display = isHidden ? "flex" : "none";
            if (isHidden) chatInput.focus();
        });
    }
    if (closeBtn && windowChat) {
        closeBtn.addEventListener("click", () => { windowChat.style.display = "none"; });
    }

    // สมอง AI ประมวลผลคำตอบ
    function handleAIResponse(inputText) {
        if (quickTags) quickTags.style.display = "none"; 
        appendMessage(inputText, "user-message");

        setTimeout(() => {
            // ลบช่องว่างและทำเป็นตัวเล็กทั้งหมด เพื่อกันปัญหาคนพิมพ์เว้นวรรคแปลกๆ
            const text = inputText.toLowerCase().replace(/\s/g, '');
            
            // ฟังก์ชันช่วยเช็คคำศัพท์แบบกลุ่ม (ถ้ามีคำใดคำหนึ่งตรง จะถือว่าใช่เลย)
            const check = (keywords) => keywords.some(kw => text.includes(kw));
            
            let reply = "อืมมม คำถามนี้บอทยังไม่ค่อยเข้าใจครับ 😅 ลองถามเกี่ยวกับ 'สกิล', 'ผลงาน', หรือพิมพ์ 'สรุป' ดูสิครับ";

            // 1. หมวดสรุปเว็บ (ถามบ่อยสุด)
            if (check(['สรุป', 'เว็บนี้', 'ภาพรวม', 'ทำไรได้บ้าง', 'มีอะไรบ้าง'])) {
                reply = "สรุปแบบเร็วๆ เลยนะ! เว็บนี้ทำขึ้นมาโชว์ 3 อย่างหลักๆ ครับ:\n\n" +
                        "1️⃣ ทักษะ (Skills): มีหลอดโชว์สกิลเขียนเว็บ HTML, ทักษะระบบ Linux, ซ่อมฮาร์ดแวร์ และ Software\n" +
                        "2️⃣ ผลงาน: โชว์ค่ายคอมพิวเตอร์และเกียรติบัตร\n" +
                        "3️⃣ ระบบเว็บ: ดีไซน์แบบ Dashboard, มีเอฟเฟกต์เฟดหน้าจอตอนเลื่อนดู และก็ตัวผม(แชทบอท) นี่แหละครับ 555";
            }
            // 2. หมวดทักษะความสามารถ
            else if (check(['สกิล', 'ทำไรเป็น', 'ทำอะไรเป็น', 'ทักษะ', 'ถนัด', 'linux', 'html', 'ซ่อมคอม', 'ฮาร์ดแวร์', 'hardware', 'software'])) {
                reply = "สกิลหลักๆ ของผมตอนนี้จะมี 4 ด้านครับ คือ\n" +
                        "- โครงสร้างเว็บ (HTML5)\n" +
                        "- การจัดการระบบปฏิบัติการ (เน้น Linux Mint)\n" +
                        "- ช่างคอมพิวเตอร์ (ซ่อม/ประกอบฮาร์ดแวร์)\n" +
                        "- ใช้ Tools สาย Dev เช่น Git, GitHub, VS Code ครับ";
            }
            // 3. หมวดประวัติ/แนะนำตัว
            else if (check(['ชื่อ', 'ใคร', 'ประวัติ', 'แนะนำตัว', 'อายุ', 'เรียนที่ไหน'])) {
                reply = "เจ้าของเว็บเป็นนักเรียนชั้น ม.6 ครับ มีความสนใจด้านวิทยาการคอมพิวเตอร์และเทคโนโลยีเป็นพิเศษ ตอนนี้กำลังมุ่งมั่นสะสมผลงานทำพอร์ตโฟลิโอครับ";
            }
            // 4. หมวดผลงาน/กิจกรรม
            else if (check(['ผลงาน', 'กิจกรรม', 'ค่าย', 'แข่ง', 'เกียรติบัตร', 'พอร์ต'])) {
                reply = "ผมเคยเข้าร่วมค่ายเยาวชนคอมพิวเตอร์ (วิทยาการคอมพิวเตอร์และโครงสร้างข้อมูล) และผ่านงานแข่งทักษะวิชาการตอบปัญหาวิทยาศาสตร์มาครับ ลองเลื่อนดูหน้าเว็บส่วน 'ประวัติกิจกรรม' ได้เลยครับ";
            }
            // 5. หมวดอนาคต/เป้าหมาย
            else if (check(['อนาคต', 'เป้าหมาย', 'อยากเป็น', 'มหาลัย', 'เรียนต่อ', 'คณะ'])) {
                reply = "เป้าหมายหลักคืออยากเข้าศึกษาต่อในคณะวิทยาการคอมพิวเตอร์ หรือวิศวกรรมคอมพิวเตอร์ครับ เพื่อพัฒนาตัวเองไปเป็นนักพัฒนาซอฟต์แวร์เต็มตัวครับ";
            }
            // 6. หมวดติดต่อ
            else if (check(['ติดต่อ', 'ทัก', 'เบอร์', 'เฟส', 'ig', 'อีเมล', 'facebook'])) {
                reply = "สามารถติดต่อได้ทาง Social Media หรือ Email ที่เมนูด้านบนสุด หรือดูส่วนล่างสุดของเว็บได้เลยครับ ทักมาคุยกันได้ตลอดครับ!";
            }
            // 7. คำทักทายทั่วไป
            else if (check(['ดีจ้า', 'หวัดดี', 'สวัสดี', 'hi', 'hello'])) {
                reply = "สวัสดีครับ! ยินดีต้อนรับสู่พอร์ตโฟลิโอ อยากให้ผมเล่าสรุปหน้าเว็บให้ฟังไหมครับ พิมพ์ว่า 'สรุป' มาได้เลย";
            }

            appendMessage(reply, "ai-message");
        }, 600);
    }

    // ระบบคลิกผ่านปุ่มด่วน
    document.querySelectorAll(".quick-tag-btn").forEach(button => {
        button.addEventListener("click", function () {
            handleAIResponse(this.innerText);
        });
    });

    // ระบบกดส่งจากช่องพิมพ์
    function initTextSend() {
        const text = chatInput.value.trim();
        if (!text) return;
        handleAIResponse(text);
        chatInput.value = "";
    }

    if (sendBtn) sendBtn.addEventListener("click", initTextSend);
    if (chatInput) {
        chatInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") initTextSend();
        });
    }

    function appendMessage(text, className) {
        const msgDiv = document.createElement("div");
        msgDiv.className = `message ${className}`;
        msgDiv.innerText = text;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});