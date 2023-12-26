const IDhours = document.getElementById('hours')
const IDminutes = document.getElementById('minutes')
const IDseconds = document.getElementById('seconds')

const clock = setInterval(function time () {
    let dateToday = new Date();
    let hours = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    IDhours.textContent = hours;
    IDminutes.textContent = minutes;
    IDseconds.textContent = seconds;
})
