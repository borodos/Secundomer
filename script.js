const displayBuffer = document.querySelector(".display-buffer");
const displayMonitor = document.querySelector(".display-monitor");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const keyboard = document.querySelector(".calculator-keyboard");

let number = [];
let buffer = [];
let resultNumber;
let result = 0;
let flag = false;
let displayBufferLastIndex = displayBuffer.innerText.length - 1;

let displayBufferText = [];

// Вешаем прослушку для каждого элемента
for (const item of numbers) {
    item.addEventListener("click", addNumber);
}
for (const item of operations) {
    item.addEventListener("click", addOperation);
}

function addNumber(e) {
    if (flag) {
        displayMonitor.innerText = "";
    }
    flag = false;
    if (displayMonitor.innerText == "0") {
        displayMonitor.innerText = "";
        displayBuffer.innerText = "";
        switch (e.target.classList[1]) {
            case "key-1":
                displayMonitor.innerText += "1";
                // displayBuffer.innerText += "1";
                number.push(1);
                break;
            case "key-2":
                displayMonitor.innerText += "2";
                // displayBuffer.innerText += "2";
                number.push(2);
                break;
            case "key-3":
                displayMonitor.innerText += "3";
                // displayBuffer.innerText += "3";
                number.push(3);
                break;
            case "key-4":
                displayMonitor.innerText += "4";
                // displayBuffer.innerText += "4";
                number.push(4);
                break;
            case "key-5":
                displayMonitor.innerText += "5";
                // displayBuffer.innerText += "5";
                number.push(5);
                break;
            case "key-6":
                displayMonitor.innerText += "6";
                // displayBuffer.innerText += "6";
                number.push(6);
                break;
            case "key-7":
                displayMonitor.innerText += "7";
                // displayBuffer.innerText += "7";
                number.push(7);
                break;
            case "key-8":
                displayMonitor.innerText += "8";
                // displayBuffer.innerText += "8";
                number.push(8);
                break;
            case "key-9":
                displayMonitor.innerText += "9";
                // displayBuffer.innerText += "9";
                number.push(9);
                break;
            case "key-0":
                displayMonitor.innerText += "0";
                // displayBuffer.innerText += "0";
                number.push(0);
                break;

            default:
                break;
        }
    } else {
        switch (e.target.classList[1]) {
            case "key-1":
                displayMonitor.innerText += "1";
                // displayBuffer.innerText += "1";
                number.push(1);
                break;
            case "key-2":
                displayMonitor.innerText += "2";
                // displayBuffer.innerText += "2";
                number.push(2);
                break;
            case "key-3":
                displayMonitor.innerText += "3";
                // displayBuffer.innerText += "3";
                number.push(3);
                break;
            case "key-4":
                displayMonitor.innerText += "4";
                // displayBuffer.innerText += "4";
                number.push(4);
                break;
            case "key-5":
                displayMonitor.innerText += "5";
                // displayBuffer.innerText += "5";
                number.push(5);
                break;
            case "key-6":
                displayMonitor.innerText += "6";
                // displayBuffer.innerText += "6";
                number.push(6);
                break;
            case "key-7":
                displayMonitor.innerText += "7";
                // displayBuffer.innerText += "7";
                number.push(7);
                break;
            case "key-8":
                displayMonitor.innerText += "8";
                // displayBuffer.innerText += "8";
                number.push(8);
                break;
            case "key-9":
                displayMonitor.innerText += "9";
                // displayBuffer.innerText += "9";
                number.push(9);
                break;
            case "key-0":
                displayMonitor.innerText += "0";
                // displayBuffer.innerText += "0";
                number.push(0);
                break;

            default:
                break;
        }
    }
    // displayBufferLastIndex = displayBuffer.innerText.length - 1;
    resultNumber = +number.join("");
}

function addOperation(e) {
    displayBufferText.push(resultNumber);
    flag = true; // Метка, показывающая, нажат ли бы один из операторов. Для добавления следующего числа
    // buffer.push(resultNumber);
    // result = resultNumber;
    // resultNumber = 0;
    number = [];
    switch (e.target.classList[1]) {
        case "plus":
            // result = buffer.reduce((box, element) => {
            //     return (box += element);
            // });
            result += resultNumber;
            resultNumber = 0;
            displayBuffer.innerText = '';
            displayBuffer.innerText = result;
            displayBuffer.innerText += '+';
            break;

        case "clear":
            displayBuffer.innerText = "";
            buffer = [];
            resultNumber = 0;
            result = 0;
            number = [];
            break;

        case "root":
            break;

        case "share":
            if (Number(displayBuffer.innerText[displayBufferLastIndex])) {
                displayBuffer.innerText += "/";
            } else if (displayBuffer.innerText[displayBufferLastIndex] != "/") {
                displayBuffer.innerText = displayBuffer.innerText.replace(displayBuffer.innerText[displayBufferLastIndex], '/');
            }
            displayBufferLastIndex = displayBuffer.innerText.length - 1;

            break;

        case "multiply":
            if (Number(displayBuffer.innerText[displayBufferLastIndex])) {
                displayBuffer.innerText += "*";
            } else if (displayBuffer.innerText[displayBufferLastIndex] != "*") {
                displayBuffer.innerText = displayBuffer.innerText.replace(displayBuffer.innerText[displayBufferLastIndex], '*');
            }
            displayBufferLastIndex = displayBuffer.innerText.length - 1;

            break;

        case "minus":
            // result = buffer.reduce((box, element) => {
            //     return (box -= element);
            // });
            result -= resultNumber;
            resultNumber = 0;
            displayBuffer.innerText = '';
            displayBuffer.innerText = result;
            displayBuffer.innerText += '-';
            break;

        case "equal":
            displayBuffer.innerText = '';
            displayMonitor.innerText = result;
            break;

        default:
            break;
    }
    displayMonitor.innerText = result;
    buffer.push(result);
}