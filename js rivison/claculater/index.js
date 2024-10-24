let value1 = 0;
let value2 = 0;
let result = 0;

const getValue = () => {
    value1 = Number(document.getElementById("value1").value);
    value2 = Number(document.getElementById("value2").value);
};

const calculator = (operator) => {
    getValue();
    
    if (operator == "+") {
        result = value1 + value2;
    }
    else if (operator == "-") {
        result = value1 - value2;
    }
    else if (operator == "*") {
        result = value1 * value2;
    }
    else{
        result = value1 / value2;
    }
    document.getElementById("display").innerHTML = "Result: " + result;
};

document.getElementById("addButton").addEventListener("click", (e) => {
    e.preventDefault();
    calculator("+");
});

document.getElementById("subtractButton").addEventListener("click", (e) => {
    e.preventDefault();
    calculator("-");
});

document.getElementById("multiplyButton").addEventListener("click", (e) => {
    e.preventDefault();
    calculator("*");
});

document.getElementById("divideButton").addEventListener("click", (e) => {
    e.preventDefault();
    calculator("/");
});
