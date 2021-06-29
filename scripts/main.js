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
        setTimeout(() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), 1000);
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
        case "*":
            return (multiply(a,b));
        case "/":
            return (divide(a,b));
    }
}

console.log(operate("+", 2, 3));