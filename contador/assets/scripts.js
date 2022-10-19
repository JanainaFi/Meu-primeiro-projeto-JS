let count = 8

const CURRET_NUMBER =
document.getElementById('currentNumber');

function increment() {
    count++;
    CURRET_NUMBER.innerHTML = count;
}
 
function decrement(){
    count--;
    CURRET_NUMBER.innerHTML = count;
}