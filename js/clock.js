const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date(); // 2
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const yearMonthDay = `${date.getFullYear()}년 ${(date.getMonth() + 1)}월 ${date.getDate()}일`
    clock.innerText = `${yearMonthDay} ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);