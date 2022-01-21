const clock = document.querySelector(".clock_weather #clock");

function getClock(event) {
    // event.preventDeafult();
    const date = new Date(); // 2
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const yearMonthDay = `${date.getFullYear()}년 ${(date.getMonth() + 1)}월 ${date.getDate()}일`
    clock.innerText = `${yearMonthDay} ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);