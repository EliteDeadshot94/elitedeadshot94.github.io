document.getElementById("myH3") && (document.getElementById("myH3").textContent = "This is The Home Page");
document.getElementById("myP") && (document.getElementById("myP").textContent = "Welcome to my website use the navagation bar to access the Calculator");
document.getElementById("myH1") && (document.getElementById("myH1").textContent = "Calculator");

const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}