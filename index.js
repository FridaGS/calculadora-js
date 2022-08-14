'use strict';

let currentValue = '';

let screen = document.querySelector(".text-container");

let keyNumber1 = document.getElementById("key-number-1");
let keyNumber2 = document.getElementById("key-number-2");
let keyNumber3 = document.getElementById("key-number-3");
let keyNumber4 = document.getElementById("key-number-4");
let keyNumber5 = document.getElementById("key-number-5");
let keyNumber6 = document.getElementById("key-number-6");
let keyNumber7 = document.getElementById("key-number-7");
let keyNumber8 = document.getElementById("key-number-8");
let keyNumber9 = document.getElementById("key-number-9");
let keyNumber0 = document.getElementById("key-number-0");
let keyNumberDot = document.getElementById("key-number-dot");

let keyActionPlus = document.getElementById("key-action-plus");
let keyActionMinus = document.getElementById("key-action-minus");
let keyActionMultiply = document.getElementById("key-action-multiply");
let keyActionDivide = document.getElementById("key-action-divide");
let keyActionEqual = document.getElementById("key-action-equal");

//Numbers
keyNumber1.onclick = () => sendToScreen(keyNumber1.id);
keyNumber1.onmousedown = () => highlight(keyNumber1.id);

keyNumber2.onclick = () => sendToScreen(keyNumber2.id);
keyNumber2.onmousedown = () => highlight(keyNumber2.id);

keyNumber3.onclick = () => sendToScreen(keyNumber3.id);
keyNumber3.onmousedown = () => highlight(keyNumber3.id);

keyNumber4.onclick = () => sendToScreen(keyNumber4.id);
keyNumber4.onmousedown = () => highlight(keyNumber4.id);

keyNumber5.onclick = () => sendToScreen(keyNumber5.id);
keyNumber5.onmousedown = () => highlight(keyNumber5.id);

keyNumber6.onclick = () => sendToScreen(keyNumber6.id);
keyNumber6.onmousedown = () => highlight(keyNumber6.id);

keyNumber7.onclick = () => sendToScreen(keyNumber7.id);
keyNumber7.onmousedown = () => highlight(keyNumber7.id);

keyNumber8.onclick = () => sendToScreen(keyNumber8.id);
keyNumber8.onmousedown = () => highlight(keyNumber8.id);

keyNumber9.onclick = () => sendToScreen(keyNumber9.id);
keyNumber9.onmousedown = () => highlight(keyNumber9.id);

keyNumber0.onclick = () => sendToScreen(keyNumber0.id);
keyNumber0.onmousedown = () => highlight(keyNumber0.id);

keyNumberDot.onclick = () => sendToScreen(keyNumberDot.id);
keyNumberDot.onmousedown = () => highlight(keyNumberDot.id);

//Actions
keyActionPlus.onclick = () => sendToScreen(keyActionPlus.id);
keyActionPlus.onmousedown = () => highlight(keyActionPlus.id);

keyActionMinus.onclick = () => sendToScreen(keyActionMinus.id);
keyActionMinus.onmousedown = () => highlight(keyActionMinus.id);

keyActionMultiply.onclick = () => sendToScreen(keyActionMultiply.id);
keyActionMultiply.onmousedown = () => highlight(keyActionMultiply.id);

keyActionDivide.onclick = () => sendToScreen(keyActionDivide.id);
keyActionDivide.onmousedown = () => highlight(keyActionDivide.id);

//keyActionEqual.onclick = () => doMath(keyActionEqual.id);
keyActionEqual.onclick = () => doMath(currentValue);
keyActionEqual.onmousedown = () => highlight(keyActionEqual.id);

function sendToScreen (keyID){
    let keyAux = document.getElementById(keyID);
    let auxValue = currentValue.substring(0, currentValue.length - 1);
    if((auxValue.includes('*') || auxValue.includes('-') || auxValue.includes('+') || auxValue.includes('/')) && keyAux.firstChild.innerHTML == '/' || keyAux.firstChild.innerHTML == '-' || keyAux.firstChild.innerHTML == '+' || keyAux.firstChild.innerHTML == '*'){//HAY QUE CONFIGURAR ESTO PARA HACER VARIAS OPERACIONES
        keyActionPlus.disabled = true;
        keyActionMinus.disabled = true;
        keyActionMultiply.disabled = true;
        keyActionDivide.disabled = true;
    }
    else{
    if((keyAux.id == "key-number-dot" && currentValue.includes('.')) ||
        (!keyAux.id.includes('number') && currentValue == '' )){}
    else if ((keyAux.firstChild.innerHTML == '/' && currentValue[currentValue.length - 1] == '*') ||
            (keyAux.firstChild.innerHTML == '+' && currentValue[currentValue.length - 1] == '*') ||
            (keyAux.firstChild.innerHTML == '*' && currentValue[currentValue.length - 1] == '*') ||
            (keyAux.firstChild.innerHTML == '/' && currentValue[currentValue.length - 1] == '/') ||
            (keyAux.firstChild.innerHTML == '+' && currentValue[currentValue.length - 1] == '/') ||
            (keyAux.firstChild.innerHTML == '*' && currentValue[currentValue.length - 1] == '/') ||
            (keyAux.firstChild.innerHTML == '/' && currentValue[currentValue.length - 1] == '+') ||
            (keyAux.firstChild.innerHTML == '+' && currentValue[currentValue.length - 1] == '+') ||
            (keyAux.firstChild.innerHTML == '*' && currentValue[currentValue.length - 1] == '+') ||
            (keyAux.firstChild.innerHTML == '-' && currentValue[currentValue.length - 1] == '+') ||
            (keyAux.firstChild.innerHTML == '/' && currentValue[currentValue.length - 1] == '-') ||
            (keyAux.firstChild.innerHTML == '+' && currentValue[currentValue.length - 1] == '-') ||
            (keyAux.firstChild.innerHTML == '*' && currentValue[currentValue.length - 1] == '-')){
        screen.innerHTML = concatScreen(currentValue.substring(0, currentValue.length - 1), keyAux.firstChild.innerHTML);
        currentValue = screen.innerHTML;
    }
    else{
    screen.style.opacity = 1;
    screen.innerHTML = concatScreen(currentValue, keyAux.firstChild.innerHTML);
    currentValue = screen.innerHTML;
    }
}
    keyAux.style.border = '1px solid black';
}
function highlight(keyID){
    let keyAux = document.getElementById(keyID);
    keyAux.style.border = '1px solid white';
}
function concatScreen(currentValue, newValue){
    return (currentValue + '' + newValue);
}
function updateScreen(newValue){
    screen.innerHTML = newValue;
}
function doMath(value){
    let result;
    let numbers = [];

    if(value.includes('/')){
        numbers = value.split('/');
        result = parseInt(numbers[0]) / parseInt(numbers[1]);
    }
    else if(value.includes('*')){
        numbers = value.split('*');
        result = parseInt(numbers[0]) * parseInt(numbers[1]);
    }
    else if(value.includes('+')){
        numbers = value.split('+');
        result = parseInt(numbers[0]) + parseInt(numbers[1]);
    }
    else if(value.includes('-')){
        numbers = value.split('-');
        result = parseInt(numbers[0]) - parseInt(numbers[1]);
    }
    updateScreen(result);
}