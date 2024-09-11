//convertor
const numData = document.getElementById("numInput");
const baseMod = document.getElementById("baseModeleInput");
const answer = document.getElementById("answer");
const btn = document.getElementById("clicker");
const convertedNum = [];
//style
// const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789一二三四五六七八九十";
// const characters = " 一二三四五六七八九十 0123456789";
const bg = document.getElementById("bg-content")
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

//convertor
btn.addEventListener("click", (event) => {
    // btn.innerHTML = `Nombre : ${numData.value}`;
    if (baseMod.value > 1){
        decToAsked(numData.value,baseMod.value);
    } else{
        alert("Vous devez mettre un chiffre supérieur a 1 en tant que base!")
    }
    answer.innerHTML = convertedNum;
});

function decToAsked(decNum,baseModele){
    convertedNum.length = 0;
    while (decNum != 0){
        quotient = Math.floor(decNum/baseModele);
        remainder = decNum % baseModele;
        if (remainder > 0){
            convertedNum.unshift(remainder);
            console.log("add rem");
            decNum = quotient;
            console.log(convertedNum)
        } else{
            convertedNum.unshift(0);
            console.log("add zero");
            decNum = quotient;
            console.log(convertedNum)
        }
    }
    fillOfCharacters((windowHeight/28)*(windowWidth/28), baseModele);

    return(convertedNum)
}

//style
function fillOfCharacters(length,baseModele){
    const numbersArray = Array.from({ length: baseModele }, (_, i) => i);
    // const numbersArray = Array.from({ length: baseModele }, (_, i) => i + 1);//line made by gpt
    const numbersString = numbersArray.join(' ');
    console.log(numbersArray)
    let bgCharacters = ''
    for(let i=0;i<length;i++){
        // bgCharacters = bgCharacters +  characters.charAt(Math.round(Math.random()*characters.length));
        const randomIndex = Math.floor(Math.random() * numbersArray.length);
        bgCharacters += numbersArray[randomIndex] + ' '; 
    }
    bgCharacters = bgCharacters.trim();
    console.log(bgCharacters);
    bg.innerHTML = bgCharacters;
    return bgCharacters;
}
bg.style.color = "#FCA311";