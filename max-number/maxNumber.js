function getValue() {
    let number1Element = document.getElementById("number1");
    let number1 = number1Element.value;
    console.log(number1);

    let number2Element = document.getElementById("number2");
    let number2 = number2Element.value;
    console.log(number2);

    showNumber(number1, number2);
}

function showNumber(number1Value, number2Value) {
    let p = document.getElementById("display");
    p.innerHTML = `Number 1:${number1Value}, Number 2:${number2Value}`;

    findMax(number1Value, number2Value);
}


function findMax(number1Value, number2Value) {
    if (number1Value > number2Value) {
        document.getElementById("display").innerHTML = `Maximum Number Is : ${number1Value}`;
    } else {
        document.getElementById("display").innerHTML = `Maximum Number Is : ${number2Value}`;
    }
}