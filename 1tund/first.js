let demoTwo = document.getElementById('demo2');
let phoneNumber = document.getElementById('phone');
demoTwo.innerHTML = "test";
let number = 0;


function demoFunction(){
    let demoElement = document.getElementById('demo');
    demoElement.innerHTML = "Tegin sisus muudatuse nupu abil.";
    //document.querySelector('#demo');
}

function changeColor(){
    if(number === 0){
        demoTwo.style.backgroundColor = "yellow";
        number = 1;
    } else {
        demoTwo.style.backgroundColor = "#123123";
        number = 0;
    }
}

function addNumber(){
    phoneNumber.value = 5555555;
}