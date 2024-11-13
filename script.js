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
    if(b == 0)
    {
        return "Are you serious?";
    }
    return Math.floor((a / b) * 100) / 100;
}


function operate()
{
    if(operator == "")
        return;

    let value = 0;
    console.log(operator);
    switch(operator)
    {
        case "+": value = add(number1, number2); break;
        case "-": value = subtract(number1, number2); break;
        case "*": value = multiply(number1, number2); break;
        case "/": value = divide(number1, number2); break;
        default: value = "Operator invalid";
    }

    show(value);

    clear();
}

const btn_container = document.querySelector("#button_container");

for(let i = 1; i <= 16; i++)
{
    let button = document.createElement("button");
    button.setAttribute("class", "button");

    let text = "";

    switch(i)
    {
        case 1: text = "+"; break;
        case 2: text = "-"; break;
        case 3: text = "*"; break;
        case 4: text = "/"; break;
        case 5: text = "1"; break;
        case 6: text = "2"; break;
        case 7: text = "3"; break;
        case 8: text = "="; break;
        case 9: text = "4"; break;
        case 10: text = "5"; break;
        case 11: text = "6"; break;
        case 12: text = "clr"; break;
        case 13: text = "7"; break;
        case 14: text = "8"; break;
        case 15: text = "9"; break;
        case 16: text = "0"; break;
    }

    button.setAttribute("id", `btn_${text}`);
    button.textContent = text;

    btn_container.appendChild(button);
}


let number1 = 0;
let number2 = 0;
let operator = "";
let screen_value = 0;

const screen = document.querySelector("#screen_container");

screen.textContent = 0;

function clear()
{
    number1 = 0;
    number2 = 0;
    operator = "";
}

function clearAll()
{
    clear();
    screen.textContent = 0;
    screen_value = 0;
}

function concNumber(number, extra)
{
    if(number === 0)
        return extra;
    return Number(String(number).concat(extra));    
}

function changeNumber(input)
{
    if(operator == "")
    {
        number1 = concNumber(number1, input);
        show(number1);
    }
    else 
    {
        number2 = concNumber(number2, input);
        show(number2);
    }
        
}

function show(input)
{
    screen_value = input;
    screen.textContent = screen_value;
}

btn_container.addEventListener("click", function (event) 
{
    let text = event.target.textContent;
    
    if(isNaN(text))
    {
        if(text == "clr")
        {
            clearAll();
        } 
        else if(text == "=")
        {
            operate();
        }
        else 
        {
            if(number1 == 0)
                number1 = screen_value;
            console.log(text);
            operator = text;
        }
    } 
    else
    {
        changeNumber(Number(text));
    }
});

