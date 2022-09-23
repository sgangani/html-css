function getNumbers() {
    let element1 = document.getElementById("number1");
    let number1Value = element1.value;
    console.log(number1Value);

    let element2 = document.getElementById("number2");
    let number2Value = element2.value;
    console.log(number2Value);

    showNumbers(number1Value, number2Value);

}

function showNumbers(number1Value, number2Value) {
    let p = document.getElementById("display");
    p.innerHTML = `Number 1=${number1Value}, Number 2=${number2Value}`;

    swap(number1Value, number2Value);
}

function swap(number1, number2) {
    let number3;
    number3 = number1;
    number1 = number2;
    number2 = number3;
    document.getElementById("display").innerHTML = "Before Swapping Value " + document.getElementById("display").innerHTML + `<br> <br> After swapping Value Number 1 =${number1}, Number 2 =${number2}`;
}