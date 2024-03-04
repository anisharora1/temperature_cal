const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const resultBox = document.getElementById("resultBox");
const resetbtn = document.getElementById("reset");
const para = document.getElementById("resultBox");
let temp;
function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * (9/5)+ 32;
        resultBox.textContent = temp.toFixed(1) + " °F 🎉";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp -32) * (5/9);
        resultBox.textContent = temp.toFixed(1) + " °C 🎉";
    }
    else{
        resultBox.textContent = "Please select a unit🙏";
    }
}
function resetmethod(){
    textBox.value="";
    para.innerText="";
}




