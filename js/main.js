document.addEventListener('DOMContentLoaded', () => {
    const Time = new Date ('Jan 12 2024 16:00:00');
    
    const daysVal = document.querySelector('.time__days .time__val');
    const hoursVal = document.querySelector('.time__hours .time__val');
    const minutesVal = document.querySelector('.time__minutes .time__val');
    const secondsVal = document.querySelector('.time__seconds .time__val');

    const daysText = document.querySelector('.time__days .time__text');
    const hoursText = document.querySelector('.time__hours .time__text');
    const minutesText = document.querySelector('.time__minutes .time__text');
    const secondsText = document.querySelector('.time__seconds .time__text');

    const timeCount = () => {
        let now = new Date();
        let leftUntil = Time - now;

        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours =  Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes =  Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds =  Math.floor(leftUntil / 1000) % 60;

        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;


    };

    timeCount ();
    setInterval(timeCount, 1000);

});