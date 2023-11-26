const cards = document.querySelectorAll(".cards")

const restart = document.querySelector(".restart")



// Dashboard DOM 

const fValue = document.getElementById("fValue");
const sValue = document.getElementById("sValue");
const eValue = document.getElementById("eValue");



// storing card in memory.

let flippedCard = false;
let firstCard, secondCard;
let lockBoard = false;



function flipCard(){ 
    if (lockBoard) return; 
    if(this === firstCard) return;

    this.classList.add("flip")

   


    if(!flippedCard){
        // first card flip
        flippedCard = true;
        firstCard = this;


    } else{

        //second click
        flippedCard = false;
        secondCard = this;

        //chacking if cards match using html dataset
        // console.log(firstCard.dataset.framework);

        // console.log(secondCard.dataset.framework);

        checkForMatch()

        flipSound()
        clickSound()

    }
}


function checkForMatch(){
    
    if(firstCard.dataset.framework === secondCard.dataset.framework){

        // if they match=>
        disableCaards()

        fValue.innerText = parseInt(fValue.innerText) + 1; // Increment by 1
        sValue.innerText = parseInt(sValue.innerText) + 5; // Increment by 5
        eValue.innerText = parseFloat(eValue.innerText) + 0.5; // Increment by 0.5


    } else{
        // if they don't match 

        unFlipCards()    }
}
    

function disableCaards(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

function flipSound () {
	let FLIPSOUND = new Audio('audio/flipSound.mp3');
	FLIPSOUND.play();
}


function clickSound () {
	let CLICKSOUND = new Audio('audio/clickSound.mp3');
	CLICKSOUND.play();
}


function unFlipCards(){

    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        
        lockBoard = false
        flippedCard = false // this will disable multiple clicks beyond the 1st & 2nd clicks under 1.2s.
        resetBoard()
        
    }, 1200);
}

// random operation working...
function shuffleCards() {
    cards.forEach(card => {
        const randomPos = Math.floor(Math.random() * cards.length);
        card.style.order = randomPos;
    });
}
shuffleCards()



cards.forEach(card => card.addEventListener("click", flipCard))


restart.addEventListener("click", () => {
    console.log("Restart button clicked");
    location.reload();
});






