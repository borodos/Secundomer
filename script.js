const displayBuffer = document.querySelector(".display-buffer");
const displayMonitor = document.querySelector(".display-monitor");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const keyboard = document.querySelector('.calculator-keyboard')

let number = [];
let buffer = [];
let resultNumber;
let result;
let flag = false;

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
        displayBufferText = displayBuffer.innerText.split();
        displayBufferText = [];
        switch (e.target.classList[1]) {
            case "key-1":
                displayMonitor.innerText += '1';
                displayBufferText.push('1');
                number.push(1);
                break;
            case "key-2":
                displayMonitor.innerText += '2';
                displayBufferText.push('2');
                number.push(2);
                break;
            case "key-3":
                displayMonitor.innerText += '3';
                displayBufferText.push('3');
                number.push(3);
                break;
            case "key-4":
                displayMonitor.innerText += '4';
                displayBufferText.push('4');
                number.push(4);
                break;
            case "key-5":
                displayMonitor.innerText += '5';
                displayBufferText.push('5');
                number.push(5);
                break;
            case "key-6":
                displayMonitor.innerText += '6';
                displayBufferText.push('6');
                number.push(6);
                break;
            case "key-7":
                displayMonitor.innerText += '7';
                displayBufferText.push('7');
                number.push(7);
                break;
            case "key-8":
                displayMonitor.innerText += '8';
                displayBufferText.push('8');
                number.push(8);
                break;
            case "key-9":
                displayMonitor.innerText += '9';
                displayBufferText.push('9');
                number.push(9);
                break;
            case "key-0":
                displayMonitor.innerText += '0';
                displayBufferText.push('0');
                number.push(0);
                break;

            default:
                break;
        }
    } else {
        displayBufferText = displayBuffer.innerText.split();
        switch (e.target.classList[1]) {
            case "key-1":
                displayMonitor.innerText += '1';
                displayBufferText.push('1');
                number.push(1);
                break;
            case "key-2":
                displayMonitor.innerText += '2';
                displayBufferText.push('2');
                number.push(2);
                break;
            case "key-3":
                displayMonitor.innerText += '3';
                displayBufferText.push('3');
                number.push(3);
                break;
            case "key-4":
                displayMonitor.innerText += '4';
                displayBufferText.push('4');
                number.push(4);
                break;
            case "key-5":
                displayMonitor.innerText += '5';
                displayBufferText.push('5');
                number.push(5);
                break;
            case "key-6":
                displayMonitor.innerText += '6';
                displayBufferText.push('6');
                number.push(6);
                break;
            case "key-7":
                displayMonitor.innerText += '7';
                displayBufferText.push('7');
                number.push(7);
                break;
            case "key-8":
                displayMonitor.innerText += '8';
                displayBufferText.push('8');
                number.push(8);
                break;
            case "key-9":
                displayMonitor.innerText += '9';
                displayBufferText.push('9');
                number.push(9);
                break;
            case "key-0":
                displayMonitor.innerText += '0';
                displayBufferText.push('0');
                number.push(0);
                break;

            default:
                break;
        }
    }
    displayBuffer.innerText = displayBufferText.join('');
    resultNumber = +number.join('');
}

function addOperation(e) {
    displayBufferText = displayBuffer.innerText.split('');
    // displayBufferText.push(' ');

    flag = true; // Метка, показывающая, нажат ли бы один из операторов. Для добавления следующего числа
    buffer.push(resultNumber);
    resultNumber = 0;
    number = [];
    switch (e.target.classList[1]) {
        case 'plus':
            if (displayBufferText[displayBufferText.length] != '+') {
                console.log('message')
                displayBuffer.innerText = displayBufferText.join('');
                displayBuffer.innerText = displayBuffer.innerText.replace(displayBuffer.innerText[displayBuffer.innerText.length - 1], '+');
            }
            result = buffer.reduce((box, element) => {
                return box += element;
            })
            break;

        case 'clear':
            displayBufferText = '---';
            buffer = [];
            resultNumber = 0;
            result = 0;
            number = [];
            break;

        case 'root':
            if (displayBufferText[displayBufferText.length - 1] != '&#8730x') {
                displayBufferText += '&#8730x';
            }
            break;

        case 'share':
            if (displayBufferText[displayBufferText.length - 1] != '/') {
                displayBufferText[displayBufferText.length - 1] = '/'
            }
            break;

        case 'multiply':
            if (displayBufferText[displayBufferText.length - 1] != '*') {
                displayBufferText[displayBufferText.length - 1] = '*'
            }
            break;

        case 'minus':
            if (displayBufferText[displayBufferText.length - 1] != '-') {
                displayBufferText += '-';
            }
            result = buffer.reduce((box, element) => {
                return box -= element;
            })
            break;

        case 'equal':
            displayBufferText += '+';
            break;

        default:
            break;
    }
    // displayBuffer.innerText = displayBufferText.join('');
    displayMonitor.innerText = result;
}