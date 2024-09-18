const card = document.getElementById("card")
let side = 0
let wordIndex = 0
let answerA = ["bonjour","aurevoir","3","4"]
let answerB = ["hi","bye","3a","4a"]

console.log(card)

card.innerHTML = answerA[wordIndex]
card.addEventListener("click", (event) => {
    if(side == 0){
        card.innerHTML = answerB[wordIndex]
        side = 1
    } else{
        card.innerHTML = answerA[wordIndex]
        side = 0
    }
    
});

function pickAWord (){
    
}