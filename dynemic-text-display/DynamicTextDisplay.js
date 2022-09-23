let text = "";
let textSize = "";

function getText() {
    var textFieldElement = document.getElementById("inputText");
    text = textFieldElement.value;
    console.log(text);
}

function getTextSize() {
    var fontSizeSelectorElement = document.getElementById("selectFontSize");
    textSize = fontSizeSelectorElement.value;
    console.log(textSize);

}

function display() {
    let p = document.getElementById("display");
    p.innerHTML = text;
    p.style.fontSize = textSize;
}