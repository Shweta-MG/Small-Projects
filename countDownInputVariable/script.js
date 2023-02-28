// Declaring global variables
const time = document.getElementById('countDown');
const input = document.getElementsByTagName('input');

let timeSeconds = 100;



//time.innerText = `00:${timeSeconds}`;

// setting time interval
const timeInterval = () => {
    timeSeconds--;
    displayTime(timeSeconds);
    if(timeSeconds <= 0 || timeSeconds < 1){
        clearInterval(countDown);
        endTime();
    }
}

const countDown = setInterval(timeInterval, 1000);

/*

I am trying to use setTimeout, It is working with limitation.
const displayTime = (second)=> {
    const min = Math.floor(second/ 60);
    const sec = Math.floor(second % 60);
    time.innerText = `${min < 10 ? 0 : ''}${min} : ${sec < 10 ? 0 : ''}${sec}`
}
*/

//defining display time on screen
function displayTime(second) {
    const min = Math.floor(second/ 60);
    const sec = Math.floor(second % 60);
    time.innerText = `${min < 10 ? 0 : ''}${min} : ${sec < 10 ? 0 : ''}${sec}`
}


//defining display after timer ends
function endTime() {
    time.innerHTML = 'Time Out';
}


//calling the function.
displayTime(timeSeconds);