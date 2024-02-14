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
const expectedAlphabet = currentAlphabet.toLowercase();
// console.log(playerPressed, expectedAlphabet);
   
  




//check match or not
if(playerPressed === expectedAlphabet){
    console.log('you get a point');
} 

else{
    console.log('you get your life');
}


}


// capture keyboard key press and get the expected to press 
document.addEventListener('keyup',handleKeyboardKeyUpEvent);

function continueGame(){
    // step 1  generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet',alphabet);

    // randomly generate alphabet
// get an random index between 0-25
// 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText= alphabet ;
    //  set background color
    setBackgroundColorById(alphabet);

    
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}