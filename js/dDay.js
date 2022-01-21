const clockTitle = document.querySelector(".dDay #js-clock");
const dayValue = document.querySelector(".dDay #dayInput");

// default unit: miliseconds 1s = 1000ms
const UNIT_SEC = 1000;
const UNIT_MIN = 60 * UNIT_SEC;
const UNIT_HOUR = 60 * UNIT_MIN;
const UNIT_DAY = 24 * UNIT_HOUR;

function dayBeforeDDay(){
    if(dayValue.value === "") return;
    const dDay = new Date(dayValue.value);
    const today = new Date();

    const timeDiff = dDay.getTime() - today.getTime(); // total
    const dayLeft = parseInt(timeDiff / UNIT_DAY); // total / D = A

    const hourTotal = timeDiff % (UNIT_DAY); // total % D = A'
    const hourLeft = parseInt(hourTotal / UNIT_HOUR);
    const strHour = hourLeft.toString().padStart(2, "0");

    const minutesTotal = hourTotal % (UNIT_HOUR);
    const minutesLeft = parseInt(minutesTotal / UNIT_MIN);
    const strMinutes = minutesLeft.toString().padStart(2, "0");

    const secondsTotal = minutesTotal % (UNIT_MIN);
    const secondsLeft = parseInt(secondsTotal / UNIT_SEC);
    const strSeconds = secondsLeft.toString().padStart(2, "0");

    // clockTitle.innerText = `${timeDiff}
    //  ${dayLeft}d ${hourLeft}h ${minutesLeft}m ${secondsLeft}s`;
    clockTitle.innerText = `${dayLeft}일 ${strHour}시 ${strMinutes}분 ${strSeconds}초`;
}

dayBeforeDDay();
setInterval(dayBeforeDDay, 1000);

addEventListener("change", dayBeforeDDay)