//create a global variable with default value 0
let value = 0;
function increment(){
    value++;
    console.log('increment value:',value);
    updateValueDisplay();
}
function decrement(){
    value--;
    console.log('decrement value:',value);
    updateValueDisplay();
}
function updateValueDisplay(){
    document.getElementById('value').innerText = value;

}



