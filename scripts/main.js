let a = "";
let b = "";
let operation = "";
let clearScreen = false;

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    if(b === 0){
        setTimeout(() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), 100);
        alert("Why would you do that? :(");
        return;
    } else{
        return a/b;
    }
}

function operate(operation, a, b){
    switch(operation){
        case "+":
            return (add(a,b));
        case "-":
            return (subtract(a,b));
        case "x":
            return (multiply(a,b));
        case "÷":
            return (divide(a,b));
    }
}

Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};


const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener("click", () =>{
        let screen = document.querySelector("input");
        if(!clearScreen){
            screen.value = screen.value + number.textContent;
        } else{
            screen.value = number.textContent;
            clearScreen = false;
        }
    });
});

const operations = document.querySelectorAll(".operator");

operations.forEach(op => {
    op.addEventListener("click", () =>{
        let screen = document.querySelector("input");
        if(operation !== ""){
            b = screen.value;
            let result = operate(operation, Number(a), Number(b));
            if(!Number.isInteger(result) && typeof result !== "undefined"){
                result = result.toFixedDown(4);
            }
            if(typeof result !== "undefined"){
                screen.value = result.toString();
            } else{
                screen.value = "";
            }
            a = screen.value;
        } else{
            a = screen.value;
            screen.value = "";
        }
        clearScreen = true;
        operation = op.textContent;
    });
});

const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
    if(operation === ""){
        return;
    }
    let screen = document.querySelector("input");
    b = screen.value;
    let result = operate(operation, Number(a), Number(b));
    if(!Number.isInteger(result) && typeof result !== "undefined"){
        result = result.toFixedDown(4);
    }
    if(typeof result !== "undefined"){
        screen.value = result.toString();
    } else{
        screen.value = "";
    }
    clearScreen = true;
    a = "";
    b = "";
    operation = "";
});

const clearAll = document.querySelector("#clearAll");

clearAll.addEventListener("click", ()=> {
    let screen = document.querySelector("input");
    screen.value = "";
    operation = "";
    a = "";
    b = "";
});

const backspace = document.querySelector("#backspace");

backspace.addEventListener("click", () => {
    let screen = document.querySelector("input");
    if(screen.value === ""){
        return;
    } else{
        screen.value = screen.value.slice(0, -1);
    }
});

const mystery = document.querySelector("#mystery");

mystery.addEventListener("click", () => {
    setTimeout(() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), 1);
});

const comma = document.querySelector(".comma");

comma.addEventListener("click", () =>{
    let screen = document.querySelector("input");
    if(screen.value === ""){
        screen.value = "0.";
    } else{
        if(screen.value.includes(".")){
            return;
        } else{
            screen.value = screen.value + ".";
        }
    }
});



