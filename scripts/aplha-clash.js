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

function continueGame(){
    // step 1  generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet',alphabet);

    // randomly generate alphabet
// get an random index between 0-25
// get an random index between 0-25
// get an random index between 0-25
// get an random index between 0-25
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