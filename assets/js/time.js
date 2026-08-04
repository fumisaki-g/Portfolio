// กำหนดวันและเวลาที่ต้องการให้นับถอยหลังไปถึง
const targetDate = new Date("2026-08-05T09:30:00").getTime();


function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) 
        / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) 
        / (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) 
        / 1000
    );


    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;


    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        console.log("ยังไม่พบกิจกรรมที่อยู่ในรายการคิวการทำงานของตาราง จึงยุติเวลาถอยหลัง");
    }
}

const countdown = setInterval(updateCountdown, 1000);

updateCountdown();