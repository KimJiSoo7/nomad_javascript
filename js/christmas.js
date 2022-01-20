const clockTitle = document.querySelector(".js-clock");

const DAY_CHRISTMAS = new Date(2022,11,25);

// default unit: miliseconds 1s = 1000ms
const UNIT_SEC = 1000;
const UNIT_MIN = 60 * UNIT_SEC;
const UNIT_HOUR = 60 * UNIT_MIN;
const UNIT_DAY = 24 * UNIT_HOUR;

function dayBeforeChristmas(){
    const dayBefore = new Date();
    const timeDiff = DAY_CHRISTMAS.getTime() - dayBefore.getTime(); // total
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
    clockTitle.innerText = `${dayLeft}d ${strHour}h ${strMinutes}m ${strSeconds}s`;
}

dayBeforeChristmas();
setInterval(dayBeforeChristmas, 1000);