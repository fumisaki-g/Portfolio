document.addEventListener("DOMContentLoaded", function () {
    const launcher = document.getElementById("aiChatLauncher");
    const windowChat = document.getElementById("aiChatWindow");
    const closeBtn = document.getElementById("aiCloseBtn");
    const sendBtn = document.getElementById("aiSendBtn");
    const chatInput = document.getElementById("aiChatInput");
    const chatBody = document.getElementById("aiChatBody");
    const quickTags = document.getElementById("aiQuickTags");

    // ==========================================
    // ระบบเพลงคลอเบื้องหลัง (ดึงจาก HTML)
    // ==========================================
    const muteBtn = document.getElementById("aiMuteBtn");
    const bgMusic = document.getElementById("bgMusic"); // ดึงแท็กเสียงจาก HTML

    if (bgMusic) {
        bgMusic.volume = 0.15; // ปรับความดังเริ่มต้นไว้ที่ 15%
    }
    let isPlaying = false;

    // ฟังก์ชันสำหรับสั่งเริ่มเล่นเพลง
    function startMusic() {
        if (bgMusic && !isPlaying) {
            isPlaying = true;
            if (muteBtn) {
                muteBtn.innerText = "🔊";
                muteBtn.title = "ปิดเพลง";
            }
            bgMusic.play()
                .then(() => {
                    // ถ้าเพลงเล่นสำเร็จ ให้ลบการดักจับออกทันทีเพื่อประหยัดทรัพยากร
                    window.removeEventListener("scroll", startMusic);
                    document.removeEventListener("click", startMusic);
                })
                .catch(e => {
                    isPlaying = false; // ถ้าเบราว์เซอร์ยังบล็อกอยู่ ให้รีเซ็ตค่าเพื่อรอการคลิกครั้งต่อไป
                    console.log("Browser บล็อกเสียงชั่วคราว กำลังรอการปฏิสัมพันธ์เพิ่มเติม:", e);
                });
        }
    }

    // ดักจับทั้งการเลื่อนหน้าจอ และการคลิกส่วนใดก็ได้บนเว็บครั้งแรก เพื่อสั่งเปิดเพลงทันที
    window.addEventListener("scroll", startMusic);
    document.addEventListener("click", startMusic);

    // ระบบปุ่มกดสลับ เปิด-ปิด เสียงเพลงด้วยตัวเอง (ไม่ทำให้กล่องแชทปิด)
    if (muteBtn && bgMusic) {
        muteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // ล็อกไม่ให้เหตุการณ์คลิกทะลุไปสั่งปิดกล่องแชทใหญ่
            
            isPlaying = !isPlaying; // สลับสถานะ เล่น <-> หยุด
            
            if (isPlaying) {
                muteBtn.innerText = "🔊";
                muteBtn.title = "ปิดเพลง";
                bgMusic.play().catch(e => console.error("Audio play blocked by browser:", e));
            } else {
                muteBtn.innerText = "🔇";
                muteBtn.title = "เปิดเพลง";
                bgMusic.pause(); // สั่งหยุดเพลงชั่วคราว
            }
        });
    }

    // ==========================================
    // ระบบควบคุมหน้าต่างแชทบอท
    // ==========================================
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

    // ==========================================
    // สมอง AI ประมวลผลคำตอบ
    // ==========================================
    function handleAIResponse(inputText) {
        if (quickTags) quickTags.style.display = "none"; 
        appendMessage(inputText, "user-message");

        setTimeout(() => {
            const text = inputText.toLowerCase().replace(/\s/g, '');
            const check = (keywords) => keywords.some(kw => text.includes(kw));
            
            let reply = "ขออภัยด้วยครับ คำถามนี้ระบบจำลองข้อมูลของผมยังไม่ได้อัปเดตเลย 😅 ลองถามเกี่ยวกับ 'ประวัติ', 'สกิล', 'ผลงาน' หรือพิมพ์ 'สรุป' ดูไหมครับ ผมพร้อมตอบเลย!";

            if (check(['สรุป', 'เว็บนี้', 'ภาพรวม', 'ทำไรได้บ้าง', 'มีอะไรบ้าง'])) {
                reply = "สรุปแบบเร็วๆ เลยนะ! เว็บนี้ทำขึ้นมาโชว์ 3 อย่างหลักๆ ครับ:\n\n" +
                        "1️⃣ ทักษะ (Skills): มีหลอดโชว์สกิลเขียนเว็บ HTML, ทักษะระบบ Linux, ซ่อมฮาร์ดแวร์ และ Software\n" +
                        "2️⃣ ผลงาน: โชว์ค่ายคอมพิวเตอร์และเกียรติบัตร\n" +
                        "3️⃣ ระบบเว็บ: ดีไซน์แบบ Dashboard, มีเอฟเฟกต์เฟดหน้าจอตอนเลื่อนดู และก็ตัวผม(แชทบอท) นี่แหละครับ 555";
            }
            else if (check(['สกิล', 'ทำไรเป็น', 'ทำอะไรเป็น', 'ทักษะ', 'ถนัด', 'linux', 'html', 'ซ่อมคอม', 'ฮาร์ดแวร์', 'hardware', 'software'])) {
                reply = "ทักษะและความสามารถหลักของผมแบ่งออกเป็น 2 ส่วนครับ\n\n" +
                        "💻 ด้านเทคนิค (Technical Skills):\n" +
                        "- การพัฒนาเว็บพื้นฐาน (HTML5)\n" +
                        "- การจัดการระบบปฏิบัติการ (เน้นการใช้งาน Linux Mint และ Terminal)\n" +
                        "- งานช่างคอมพิวเตอร์ (ซ่อม/ประกอบ/ดัดแปลงฮาร์ดแวร์)\n" +
                        "- เครื่องมือสายพัฒนา (Git, GitHub, VS Code, พัฒนาโปรเจกต์ IoT และเกม 2D)\n\n" +
                        "🤝 ทักษะเสริม (Soft Skills):\n" +
                        "- มีความเป็นผู้นำและการสื่อสาร (ผ่านการอบรมทักษะโค้ช)\n" +
                        "- คิดวิเคราะห์อย่างมีเหตุผล (Logic) และพร้อมเรียนรู้สิ่งใหม่ๆ ได้อย่างรวดเร็วครับ";
            }
            else if (check(['ชื่อ', 'ใคร', 'ประวัติ', 'แนะนำตัว', 'อายุ', 'เรียนที่ไหน'])) {
                reply = "ผมเป็นนักเรียนชั้นมัธยมศึกษาปีที่ 6 แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์ครับ เป็นคนที่มีความรับผิดชอบและพร้อมเปิดรับสิ่งใหม่ๆ เสมอ งานอดิเรกหลักคือการศึกษาอุปกรณ์คอมพิวเตอร์ และชอบเข้าไปอ่านคลังโค้ดบน GitHub เพื่อศึกษาแนวคิดและรูปแบบการเขียนโปรแกรมจากนักพัฒนาเก่งๆ เพื่อนำมาต่อยอดความรู้ของตัวเองครับ";
            }
            else if (check(['ผลงาน', 'กิจกรรม', 'ค่าย', 'แข่ง', 'เกียรติบัตร', 'พอร์ต'])) {
                reply = "ผมได้มีโอกาสเข้าร่วมกิจกรรมที่หลากหลายเพื่อพัฒนาตัวเองในหลายๆ ด้านครับ เช่น:\n\n" +
                        "🥇 การอบรมทักษะการเป็นโค้ช: ช่วยเสริมสร้างจิตวิทยาการสื่อสารและการทำงานร่วมกับผู้อื่น\n"+
                        "🤖 การอบรมสร้างนวัตกรรมด้วยเทคโนโลยี IoT: ทำให้เข้าใจการแก้ปัญหาและการเขียนโปรแกรมควบคุมบอร์ดฮาร์ดแวร์ที่นำไปใช้งานได้จริง\n"+
                        "🎮 การแข่งขันศิลปหัตถกรรม (สร้างสรรค์เกมจากโปรแกรมคอมพิวเตอร์): เป็นเวทีที่ท้าทายมาก ทำให้ได้ฝึกคิดแบบมีเงื่อนไข (Logic) และได้ฝึกออกแบบอัลกอริทึมในการแก้โจทย์\n\n" +
                        "นี่เป็นเพียงผลงานบางส่วนเท่านั้น สามารถคลิกดูรายละเอียดและเกียรติบัตรเพิ่มเติมที่แท็บ 'ผลงาน' ได้เลยครับ";
            }
            else if (check(['อนาคต', 'เป้าหมาย', 'อยากเป็น', 'มหาลัย', 'เรียนต่อ', 'คณะ'])) {
                reply = "เป้าหมายหลักคืออยากเข้าศึกษาต่อในคณะวิทยาการคอมพิวเตอร์ หรือวิศวกรรมคอมพิวเตอร์ครับ เพื่อพัฒนาตัวเองไปเป็นนักพัฒนาซอฟต์แวร์เต็มตัวครับ";
            }
            else if (check(['ติดต่อ', 'ทัก', 'เบอร์', 'เฟส', 'ig', 'อีเมล', 'facebook'])) {
                reply = "สามารถติดต่อได้ทาง Social Media หรือ Email ที่เมนูด้านบนสุด หรือดูส่วนล่างสุดของเว็บได้เลยครับ ทักมาคุยกันได้ตลอดครับ!";
            }
            else if (check(['ดีจ้า', 'หวัดดี', 'สวัสดี', 'hi', 'hello'])) {
                reply = "สวัสดีครับ! ยินดีต้อนรับสู่พอร์ตโฟลิโอ อยากให้ผมเล่าสรุปหน้าเว็บให้ฟังไหมครับ พิมพ์ว่า 'สรุป' มาได้เลย";
            }
            else if (check(['ทักษะ', 'ความสามารถ', 'สกิล', 'skill'])) {
                reply = "เจ้าของเว็บไซต์นี้ มีความสามารถหลากหลาย ทักษะ ด้านคอมพิวเตอร์ : สร้างเว็บไซต์ของตัวเอง , สร้างสรรค์เกมจากโปรแกรมคอมพิวเตอร์ , พัฒนาระบบ IoT  ทักษะเสริม: ความเป็นผู้นำ , การสร้างพลังเขิงบวกให้แก่คนรอบข้าง , การสื่อสาร , การตัวเองตัวเอง , การเรียนรู้ที่รวดเร็วกับสิ่งที่ชอบ   ";
            }
            else if (check(['อะไรที่คิดว่ายากที่สุด', 'อะไรยากที่สุด', 'กิจกรรมอะไรยาก', 'ยาก'])) {
                reply = "สิ่งที่ท้าทายที่สุดสำหรับผมคือ 'การจดจำและทำความเข้าใจไวยากรณ์ของโค้ด (Syntax)' รวมถึงโครงสร้างคำสั่งมาตรฐานต่างๆ ครับ ในช่วงแรกที่ศึกษาด้วยตัวเองหรือเรียนรู้จากภายนอกอาจจะมีติดขัดและเข้าใจยากบ้าง แต่ผมอาศัยความพยายามในการทบทวนและลงมือทำซ้ำๆ ซึ่งข้อดีของผมคือ ถ้าผมจับจุดและเข้าใจตรรกะของมันได้แล้ว ผมจะจดจำรูปแบบนั้นได้ยาวนานและนำไปประยุกต์ใช้ต่อได้ทันทีครับ";
            }
            else if (check(['สนใจอะไร', 'เรื่องที่สนใจ ', 'ความสนใจ', 'สนใจ'])) {
                reply = "💫 งานอดิเรก: ประกอบ/ดัดแปลงคอมพิวเตอร์ และพัฒนาเว็บไซต์\n"+ 
                        "🌟 ความสนใจพิเศษ: การสร้างสรรค์เกม 2D, การใช้งานคำสั่ง Terminal บน Linux และระบบเครือข่าย (Network)\n"+
                        "🔥 เป้าหมายอนาคต: มุ่งสู่การเป็น Software Engineer และ Full-Stack Developer\n"+
                        "🚀 ความพร้อม: ไม่ว่าจะไปในเส้นทางไหน ผมมั่นใจว่าพื้นฐานที่เตรียมไว้ทั้งด้านฮาร์ดแวร์และซอฟต์แวร์ จะช่วยให้ผมเรียนรู้และปรับตัวในคณะที่ตั้งใจได้อย่างรวดเร็วแน่นอนครับ";
            }
            else if (check(['มั่นใจว่าติดมหาวิทยาลัยนี้ กี่ เปอร์เซ็นต์ ', 'มั่นใจกี่ เปอร์เซ็นต์', 'มั่นใจ' ])) {
                reply = "ผมให้ความมั่นใจที่ 60-70% ครับ ส่วนอีก 30-40% ที่เหลือคือพื้นที่แห่งการเรียนรู้ เพราะผมรู้ดีว่าโลกภายนอกยังมีคนเก่งๆ อีกมากมาย และผมไม่อยากเป็นเพียงกบในกะลาที่คิดว่าตัวเองเก่งที่สุด สิ่งที่จะเติมเต็มเปอร์เซ็นต์ที่เหลือได้ คือการได้เข้าไปศึกษาและทำงานร่วมกับคนเก่งๆ ในสาขานี้ เพื่อเก็บเกี่ยวประสบการณ์จริงและพัฒนาตัวเองให้ก้าวหน้าขึ้นไปอีกครับ";
            }
            else if (check(['มีแฟนรึยัง', 'มีแฟนไหม', 'แฟน' ])) {
                reply = "ผมมีแฟนแล้วครับ แต่ไม่ขอเปิดเผยข้อมูลส่วนตัวของแฟนผมครับ มีข้อสอบถามอะไรเกี่ยวกับเว็บไซต์นี้หรือเกี่ยวกับตัวผมเองก็สามารถถามได้เลยครับ เช่น ประวัติส่วนตัว , ทักษะ , ผลงาน , เป้าหมายในอนาคต , การติดต่อ หรือเรื่องทั่วไปก็ได้ครับ";
            }
            else if (check(['ปิดเสียง', 'ปิดเพลง', 'หยุดเสียง' ])) {
                reply = "คุณสามารถกดปุ่ม 🔇 ด้านบนของกล่องแชทเพื่อปิดเสียงเพลงได้เลยครับ";
            }

            appendMessage(reply, "ai-message");
        }, 600);
    }

    // ==========================================
    // ระบบอีเวนต์ส่งข้อความ
    // ==========================================
    document.querySelectorAll(".quick-tag-btn").forEach(button => {
        button.addEventListener("click", function () {
            handleAIResponse(this.innerText);
        });
    });

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

    // ฟังก์ชันสร้างกล่องข้อความบนหน้าจอ
    function appendMessage(text, className) {
        if (!chatBody) return;
        const msgDiv = document.createElement("div");
        msgDiv.className = `message ${className}`;
        msgDiv.innerText = text;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});