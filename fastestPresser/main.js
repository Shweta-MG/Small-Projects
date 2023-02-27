// declaring global variables here.
//let inputGameTimer = document.querySelector("#inputTimer").value;
let count1 = 0;
let count2 = 0;

// Writing all callback functions on the top of page for smooth execution.
// set gameTimer for 0 and x value of seconds
// negative input is being taken. I need to fix that.
let gameTime = () => {
    let inputGameTimer = document.querySelector("#inputTimer").value;
    let seconds = inputGameTimer * 1000;
    //console.log('It is a test run');
    setTimeout(() => {
        if (seconds !== +0000) {
            console.log(`It is a test run after ${inputGameTimer} seconds`);
            let player1 = document.querySelector('#userName1').value;
            let player2 = document.querySelector('#userName2').value

            function evaluateRound(count1, count2) {
                if (count1 === 0 && count2 === 0) {
                    console.log('Invalid game');
                } else if (count1 === count2) {
                    console.log('It is a tie');
                } else if (count1 <= count2) {
                    console.log(`${player2} is winner`);
                } else if (count1 >= count2) {
                    console.log(`${player1} is winner`);
                }
            }
        } else if (seconds <= 0000 || seconds === '') {
            console.log(`Please enter Valid entry`);
        }
    }, seconds)
}

//take hold of buttons
const btn = document.querySelector("#btnGameStrt").addEventListener("click", gameTime);


// count keypress 1. only 's' and 'l' key to be pressed, 2. no key is pressed, 3 any other key pressed.
// key code S = 83; s = 115;
// key code L = 76; L = 108;

// for user 1

//let count1 = 0;

let keyStrokeInput1 = document.querySelector('#keyStrokeUser1')

keyStrokeInput1.onkeyup = function () {
    let key = event.keyCode;
    //if (key === 83 || key === 115 || key === 76 || key === 108)
    if (key === 83 || key === 115) {
        count1++;
        //console.log(`${count1} due to s`);
        keyStrokeInput1.value = count1
        return false
    } else if (key === 76 || key === 108) {
        count1++;
        // console.log(`${count1} due to l`);
        keyStrokeInput1.value = count1
        return false
    } else {
        count1;
        // console.log(count1);
        keyStrokeInput1.value = count1
        return false;
    }

};

// for user 2
//let count2 = 0;

let keyStrokeInput2 = document.querySelector('#keyStrokeUser2')

keyStrokeInput2.onkeyup = function (event) {
    let key = event.keyCode;
    //if (key === 83 || key === 115 || key === 76 || key === 108)
    if (key === 83 || key === 115) {
        count2++;
        //console.log(`${count2} due to s`);
        keyStrokeInput2.value = count2
        return false
    } else if (key === 76 || key === 108) {
        count2++;
        //console.log(`${count2} due to l`);
        keyStrokeInput2.value = count2
        return false
    } else {
        count2;
        //console.log(count2);
        keyStrokeInput2.value = count2
        return false;
    }
};


// declare win 1) if one user did not press any key, 2) if both user did not press any key, 3) user 1 < user 2 4)user 1> user2
/*
let player1 = document.querySelector('#userName1').value;
let player2 = document.querySelector('#userName2').value

function evaluateRound(count1, count2) {
    if (count1 === 0 && count2 === 0) {
        console.log('Invalid game');
    } else if (count1 === count2) {
        console.log('It is a tie');
    } else if (count1 <= count2) {
        console.log(`${player2} is winner`);
    } else if (count1 >= count2) {
        console.log(`${player1} is winner`);
    }
}
*/

// start button, pause button, new game, reset timer 