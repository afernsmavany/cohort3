import functions from './functions.js';
import calFunc from './calculator.js';
import taxFunc from './canadiantaxes.js';
import arrayFunc from './workingWithArrays.js';
import objFunc from './workingWithDiction.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

// -----Calculator: ----------------------------------------------

add.addEventListener("click", () => {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let final1 = calFunc.addNumbers(num1, num2);
    resultFinal.innerText = final1
});

subtract.addEventListener("click", () => {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let final2 = calFunc.subNumbers(num1, num2);
    resultFinal.innerText = final2
});

divide.addEventListener("click", () => {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let final3 = calFunc.divNumbers(num1, num2);
    resultFinal.innerText = final3
});

multiply.addEventListener("click", () => {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let final4 = calFunc.mulNumbers(num1, num2);
    resultFinal.innerText = final4
});


// ------------------ Canadian Taxes: ---------------------------------------------

click.addEventListener("click", onButtonClicked);

let userInput;

function onButtonClicked() {
    userInput = parseFloat(input.value);
    output.textContent = taxFunc.taxSlabs(userInput).toFixed(2);
};

// ------------------ Working with Arrays: -------------------------------

addArr.addEventListener("click", () => {
    let numInput = (inputArr.value);
    let outputAdd = arrayFunc.adding(numInput);
    messageFinal.innerText = outputAdd;
});

show.addEventListener("click", () => {
    let outputShow = arrayFunc.showing(originArr);
    messageFinal.innerText = outputShow;
});

total.addEventListener("click", () => {
    let outputTotal = arrayFunc.totalling(originArr);
    messageFinal.innerText = outputTotal;
});

clear.addEventListener("click", () => {
    let outputClear = arrayFunc.clearing(originArr);
    messageFinal.innerText = outputClear;
});

// ------------------ Working with Dictionaries: -------------------------------

inputLookup.addEventListener("click", () => {
    let inputShortcode = (inputLookup.value);
    let outputProvince = objFunc(inputShortcode);
    outputFinal.innerText = outputProvince;
    
});




