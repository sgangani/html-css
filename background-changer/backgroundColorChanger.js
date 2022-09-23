function changeColor() {
    var colorDropDown = document.getElementById("colorMenu");
    var selectedColor = colorDropDown.value;
    //console.log(x);
    var body = document.body;
    body.style.backgroundColor = selectedColor;
}