const numData = document.getElementById("numInput");
const baseMod = document.getElementById("baseModeleInput");

const answer = document.getElementById("answer");
const btn = document.getElementById("clicker");
const convertedNum = [];

// console.log(numData);
// console.log(answer);
// console.log(btn);

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
    return(convertedNum)
}