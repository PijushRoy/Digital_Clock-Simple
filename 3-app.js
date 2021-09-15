(function digitalClock() {
    setInterval(() => {
        let date = new Date();
        let hours = date.getHours() % 12
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        document.getElementById('hr').innerHTML = hours < 10 ? `0${hours}` : hours;
        document.getElementById('min').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        document.getElementById('sec').innerHTML = seconds < 10 ? `0${seconds}` : seconds;
        document.getElementById('period').innerHTML = hours >= 12 ? `PM` : `AM`;


        document.getElementById('top-bar').style.width = `${seconds / 60 * 100}%`;
        document.getElementById('bottom-bar').style.width = `${minutes / 60 * 100}%`;
        document.getElementById('left-bar').style.height = `${hours / 12 * 100}%`;
        document.getElementById('right-bar').style.height = `${hours >= 12 ? `100%` : `50%`}`;
    }, 500)
})()