// work on problem of cookie being in the same spot as broc
// most likely need to add a check when placing the cookie to check for the broc

//buttons
const startB = document.querySelector('#startBtn');

const resetB = document.querySelector('#resetBtn');

// square grud
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole')

// time and score
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

// Variables
let result = 0;
let hitPostitionCookie = null;
let hitPostitionBroccoli = null;
let setTime = 10;
let currentTime = setTime;
let timerIdCookie = null;
let timerIdBroccoli = null;
let timerIdGridReset = null;

let gridBoxList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let gridOrginalNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let rndBox;

// let gridNumberList = [];
// making list to get random numbers from 

// function makeListofNum(totalNumbers) {
//     for (let i = 1; i <= totalNumbers; i++) {
//         gridNumberList.push(i);
//     }
//     return gridNumberList;
// }


function removeFromArray(arr, pos) {
    arr.splice(pos - 1, 1);
    // console.log(arr)
    return arr
}


// chooses a random square for the mole to pop up
function randomSquareCookie() {
    squares.forEach(square => {
        square.classList.remove('mole')
        // square.classList.remove('broccoli')
        // gridNumberList = gridOrginalNumberList;


        // check to see if list reset
        // console.log(gridNumberList);
    })
    // resetArray();

    rndBox = Math.floor(Math.random() * 9);
    let randomSquare = squares[rndBox];
    randomSquare.classList.add('mole');
    hitPostitionCookie = randomSquare.id;
    // console.log(randomSquare.id)
    // removes id from list 
    removeFromArray(gridBoxList, rndBox);



    // console.log(gridBoxList);
    //
}

// when use index with arrays, indexing starts at zero

// chooses random square for poison to pop up
function randomSquareBroccoli() {
    squares.forEach(square => {
        square.classList.remove('broccoli')
    })


    // let randomSquare = squares[Math.floor(Math.random() * 9)]
    // hitPostitionBroccoli = randomSquare.id;



    // chooses with out using list
    // chooses with out using list
    // let randomSquare = squares[Math.floor(Math.random() * 8)];
    // hitPostitionBroccoli = randomSquare.id;
    // console.log(hitPostitionCookie);
    // console.log(hitPostitionBroccoli);


    //chooses with list
    //uses 8 because cookie takes one of the grids boxes
    rndBox = Math.floor(Math.random() * 8);
    let randomSquare = squares[rndBox];
    hitPostitionBroccoli = randomSquare.id;
    // attempt to reset list
    // let gridBoxList = gridOrginalNumberList;
    // console.log(gridBoxList)
    
    // Checks if 
    while (hitPostitionCookie == hitPostitionBroccoli) {
        let randomSquare = squares[Math.floor(Math.random() * 9)]
        hitPostitionBroccoli = randomSquare.id;
    }
    // chooses with out using list
    // chooses with out using list

    randomSquare.classList.add('broccoli');

    //resets array of numbers to choose from

    // console.log(randomPosition)

    // code below not needed because its done in while loop
    // randomSquare.classList.add('broccoli');

    // hitPostitionBroccoli = randomSquare.id;
    // gridNumberList = gridOrginalNumberList;
    // resetArray(gridNumberList);
    
    resetArray();
}


// squares.forEach(square => {
//     square.addEventListener('mousedown' () => {
//         if(square.id == hitPostition) {
//             result++;
//             score.textContent = result;
//             hitPostition = null;
//         }
//     })
// })

// event listner for when the mole is clicked
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPostitionCookie) {
            result += 2;
            console.log(result);
            score.textContent = result
            hitPostitionCookie = null;
        }
        // points are subtracted if broccoli is clicked
        else if (square.id == hitPostitionBroccoli) {
            result -= 3;
            console.log(result);
            score.textContent = result
            hitPostitionBroccoli = null;
        }
    })
})



function resetArray() {
    gridBoxList = gridOrginalNumberList.slice();
    // console.log(gridBoxList)
    return gridBoxList;
}

// handles the timing for each time the moal pops up
function moveMole() {
    timerIdCookie = setInterval(randomSquareCookie, 1000)
}

function broccoliSpawn() {
    timerIdBroccoli = setInterval(randomSquareBroccoli, 1000)
}

function listReset() {
    timerIdGridReset = setInterval(resetArray, 1000)
}



let countDownTimerId = null;


// contolrs timer and stops game once time is up
function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    // gridBoxList = gridOrginalNumberList;

    if (currentTime == 0) {
        // makes it so you can't click on items
        hitPostitionBroccoli = null;
        hitPostitionCookie = null;
        // makes it so you can't click on items
        clearInterval(countDownTimerId)
        clearInterval(timerIdCookie);
        clearInterval(timerIdBroccoli);
        // clearInterval(listReset);
        alert('GAME OVER! Your Score is ' + result);
    }
}



function startTimer() {
    return countDownTimerId = setInterval(countDown, 1000);
}



// Check if this need to be in a function or does not need to be
// What diffrence if any are there if its inside a button


// Make is so event listner starts function, instead of being in funcntion !!!!!!!!
function startGame() {
    startB.addEventListener('mousedown', () => {
        console.log('startButton Pressed')

        // makes it so start button will only start game when current time is set back to normal
        if (currentTime === setTime) {
            startTimer();
            moveMole();
            broccoliSpawn();
            // listReset();
        }
    })

    resetB.addEventListener('mousedown', () => {
        // console.log('reset button pressed');
        console.log(currentTime)
        resetGame();
    })
}

function resetGame() {
    // Makes it so game will only reset when time is 0
    if (currentTime === 0) {
        currentTime = setTime;
    }
}

startGame();






// ??????
/// add function where something pops up that your not suppose to click

// add instruction page, that give a bit of lore to the game

// instruction page will have pic of cookie and broccoli with instrucions under it, with a button below that says help pablo


// ending screen you helped pablo get __ amount of cookies
// and pablo only ate this amount of vegatables
// diffrent ending screens depdning on score

// using a class do hide and unhide elements
// display: none
//display: visable
// find out how to reverse display: npnel

// add sound effects
// yum or crunch when you click on cookie
// blah or spit sound when click on brocli


// make a list to choose random numbers from with in a set list
// if there are 9 total places (num 0-8)
// the 2nd choice would be selected from a list of (0-7), numbers with in list are randomized

// makes it so broccoli and cookie can never be in the same spot

// Help Pablo the Purple Penguin