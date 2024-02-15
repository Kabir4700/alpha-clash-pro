// // function play(params) {
// // // step-1: hide the home sceen . to hide the screen add the class hidden to home screen
// const homeSection = document.getElementById('home-screen')
// homeSection.classList.add('hidden')
// // console.log(homeSection.classList);
// // show the playground

// const playgroundSection = document.getElementById('play-ground');
// playgroundSection.classList.remove('hidden');
// // console.log('playgroundSection.classlist');

// // }

// call back fuction
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed)
    // console.log('button pressed. i will impressed!!!!');
    // and get the expected to

const currentAlphabetElement= document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
// console.log(playerPressed, expectedAlphabet);
   
  




//check match or not
if(playerPressed === expectedAlphabet){
console.log('you get a point');
    // console.log('You have a pressed correctly',expectedAlphabet);
    // removeBackgroundColorById(expectedAlphabet);

// Update score :
// 1.get the current score 
const currentScoreElement = document.getElementById('current-score');
const currentScoreText = currentScoreElement.innerText ;
const currentScore = parseInt(currentScoreText);
console.log(currentScore);

// 2. increase the score by 1
const newScore= currentScore +1

// 3.show the update score
currentScoreElement.innerText = newScore



// start a new round
    continueGame();

}

else{
    console.log('Madarir cud tik tak tip');
    // 1. get the current life number

const currentLifeElement = document.getElementById('current-life');
const currentLifeText = currentLifeElement.innerText;
const currentLife = parseInt(currentLifeText);


    // step 2 : reduce the life count 
const newLife = currentLife - 1 ;




    //step 3- display the update life count  
   currentLifeElement.innerText =newLife ;
}


}


// capture keyboard key press and get the expected to press 
document.addEventListener('keyup',handleKeyboardKeyUpEvent);

function continueGame(){
    // step 1  generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet',alphabet);

    // randomly generate alphabet
// get an random index between 0-25
// 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText= alphabet ;
    //  set background color
    // setBackgroundColorByIdBackgroundColorById(alphabet);

    
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}