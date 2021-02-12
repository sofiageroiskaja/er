const first = document.getElementById('first');
const second = document.querySelector('#second');
const listElement = document.querySelectorAll('.list-element');
const button = document.getElementById("button");

button.addEventListener('click', buttonPressed);
window.addEventListener('keypress', buttonPressed);
first.addEventListener('mousemove', changeColor);

setTimeout(changeColor, 100);
//setInterval(changeColor, 100);

function changeColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    first.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

let person = {
    firstName: "Sofia",
    lastName: "Geroi",
    age = 18,
    height = 175,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(person,fullName());
//console.log(person['firstNmae'] + " " + person.lastName)

//listElement.style.color = 'green'; ei saa teha

console.log(listElement);

first.style.color = "red";

let massiiv = ['esimene', 'teine', 'kolmas', 'neljas'];
let numbers = [1, 2, 3, 4, 10, 7];
let colors = ['green', 'blue', 'pink', 'gray', 'orange']

numbers.sort();
numbers.sort(function(a, b){return a - b});//teistpidi b - a

massiiv.sort();
massiiv.reverse();

//window.alert(massiiv[0]);

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

massiiv.forEach(function(item){
    console.log(item);
    let text = '<li>' + item + '<li>';
    first.innerHTML = first.innerHTML + text;
});

function buttonPressed(){
    for(let i = 0; i < listElement.length; i++){
        listElement[i].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    }
}