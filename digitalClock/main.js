
/* 
function showTime() {
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeStamp = 'AM';

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;



    let clock = document.querySelector('h1');
    clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${timeStamp}`;
    setInterval(showTime, 1000);
}

showTime();
*/



const showTime = () => {
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeStamp = 'AM';

    // formate '00' when timing is single digit

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    // 'AM' and 'PM'
    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
        timeStamp = 'PM';
    } else {
        hours = hours
        timeStamp = 'AM'}





    let clock = document.querySelector('h1');
    clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${timeStamp}`;
    setInterval(showTime, 500);
}

showTime();