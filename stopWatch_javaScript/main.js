//grab all the elements
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const miliSeconds = document.querySelector('#miliSeconds');

//grab all the buttons
const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const btnReset = document.querySelector('#reset');


//declare initial values
let minute = 00;
let second = 00;
let miliSecond = 00;
let interval;


//Listen to start event
btnStart.addEventListener('click', () => {
    //console.log('I am working');
    interval = setInterval(getStopWatch, 10);
})

//listen to stop event
btnStop.addEventListener('click', () => {
    //console.log('I am stopping');
    clearInterval(interval);
})


//listen to reset event
btnReset.addEventListener('click', () => {
   // console.log('I am resetting');
    clearInterval(interval);
    miliSeconds.innerHTML = '00';
    seconds.innerHTML = '00';
    minutes.innerHTML = '00';
})


//declare the stopWatch function
const getStopWatch = () => {
    miliSecond++;
//addressing miliseconds processing
    if (miliSecond < 10) {
        miliSeconds.innerHTML = '0' + miliSecond;
    } else if (miliSecond < 100) {
        miliSeconds.innerHTML = miliSecond;
    } else if (miliSecond === 100) {
        second++;
        miliSecond = 00;
        miliSeconds.innerHTML = miliSecond;
        seconds.innerHTML = second;
    };


//addressing seconds processing
    if (second < 10) {
        seconds.innerHTML = '0' + second;
    } else if (second < 60) { 
        seconds.innerHTML = second;
    } else if (second === 60) { 
        minute++;
        second = 00;
        minutes.innerHTML = minute;
        seconds.innerHTML = second;
    };  
/*
// addressing minutes - No timer after 60 minutes, hours are not part of display.
    do {
        clearInterval(interval)
    } while (miliSecond === 100 && second === 60 && minute === 60);
*/
    
}