const data = document.getElementById("question");
const answer = document.getElementById("answer");
const btn = document.getElementById("clicker");
const convertedNum = [];

console.log(data);
console.log(answer);
console.log(btn);

btn.addEventListener("click", (event) => {
    // btn.innerHTML = `Nombre : ${data.value}`;
    numToConv = data.value;
    decToMaya(numToConv)
    answer.innerHTML = convertedNum;
});

function decToBin(decNum){
    convertedNum.length = 0;
    while (decNum != 0){
        quotient = Math.floor(decNum/2);
        remainder = decNum % 2;
        if (remainder > 0){
            convertedNum.unshift(1);
            console.log("add one");
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

function decToMaya(decNum){
    convertedNum.length = 0;
    while (decNum != 0){
        quotient = Math.floor(decNum/20);
        remainder = decNum % 20;
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