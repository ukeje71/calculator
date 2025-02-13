const showcase=document.getElementById("typeValue")
function appendToDisplay(input){
    showcase.value+=input
}
function Delete (input){
    showcase.value=showcase.value.slice(0,-1);
}
function clearDisplay(input){
    showcase.value="";
}
function calculate(input){
    showcase.value=eval(showcase.value);
}