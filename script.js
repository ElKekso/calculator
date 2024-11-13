function add(a,b)
{
    return a + b;
}

function multiply(a,b)
{
    return a * b;
}

function subtract(a,b)
{
    
    return a - b;
}

function divide(a,b)
{
    if(b === 0)
        return "undefined";
    return a / b;
}


function operate(num1, operator, num2)
{
    if(isNaN(a) || isNaN(c))
        return "Input needs to be a Number";

    switch(operator)
    {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        default: return "Operator invalid";
    }
}

const btn_container = document.querySelector("#button_container");

for(let i = 1; i <= 16; i++)
{
    let button = document.createElement("button");
    button.setAttribute("class", "button");

    let text = "";

    switch(i)
    {
        case 1: text = "="; break;
        case 2: text = "^"; break;
        case 3: text = "."; break;
        case 4: text = "+"; break;
        case 5: text = "1"; break;
        case 6: text = "2"; break;
        case 7: text = "3"; break;
        case 8: text = "-"; break;
        case 9: text = "4"; break;
        case 10: text = "5"; break;
        case 11: text = "6"; break;
        case 12: text = "*"; break;
        case 13: text = "7"; break;
        case 14: text = "8"; break;
        case 15: text = "9"; break;
        case 16: text = "/"; break;
    }

    button.setAttribute("id", `btn_${text}`);
    button.textContent = text;

    btn_container.appendChild(button);
}


let number1 = 0;
let number2 = 0;
let operator = "";

