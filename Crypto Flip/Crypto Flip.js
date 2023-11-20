const cards = document.querySelectorAll(".cards")

let restart = document.querySelector("#restart")



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

        if(firstCard.dataset.framework === secondCard.dataset.framework){

            // if they match=>
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
        } else{
            // if they don't match 

            flippedCard = true

            setTimeout(() => {
                firstCard.classList.remove("flip")
                secondCard.classList.remove("flip")

                flippedCard = false // this will disable multiple clicks beyond the 1st & 2nd clicks under 1.2s.
            }, 1200);
           
        }
    function resetBoard(){
            [flippedCard, lockBoard] =[false, false]

            [firstCard, secondCard] = [null, null];

        }


        
        

    }

    
}

// random operation not working...

// (function shuffle(){
            
//     cards.forEach(card => {
//         let cardds = card.math.floor(math.random() * 12)

//         card.style.order = cardds;
//     })

// })()




cards.forEach(card => card.addEventListener("click", flipCard))





restart.addEventListener("click", function(){
    forEach(card => cards.classList.remove("flip"))
})
