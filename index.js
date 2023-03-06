let counterOne = 0
let counterTwo = 0
let counterThree = 0
let counterTotal = counterThree + counterTwo + counterOne

let buttonOne = document.getElementById('buttonOne')
let buttonTwo = document.getElementById('buttonTwo')
let buttonThree = document.getElementById('buttonThree')
let total = document.getElementById('grandTotal')
let divFun = document.getElementById('funBackground')

let boolOne = true;

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 


myArray[5] = "Hakuna Matata"
myArray[2] = "hahaha"

myArray.push('I love burritos')

console.log(myArray);



buttonOne.addEventListener('click', ()=>{
    counterOne ++
    buttonOne.innerHTML = "This Button Has Been Pressed " + counterOne + " Times"
    counterTotal = counterThree + counterTwo + counterThree
    total.innerHTML = "Grand Total: " + counterTotal

    if (boolOne) {
        divFun.style.backgroundColor = "rgb(" + counterOne * 10+ ", 0, 0)"
    }else{
        divFun.style.backgroundColor = "rgb(255, 200, 0)"
    }

    boolOne = !boolOne

})

buttonTwo.addEventListener('click', ()=>{
    counterTwo ++
    buttonTwo.innerHTML = "This Button Has Been Pressed " + counterTwo + " Times"
    counterTotal = counterThree + counterTwo + counterThree
    total.innerHTML = "Grand Total: " + counterTotal

})

buttonThree.addEventListener('click', ()=>{
    counterThree ++
    buttonThree.innerHTML = "This Button Has Been Pressed " + counterThree + " Times"
    counterTotal = counterThree + counterTwo + counterThree
    total.innerHTML = "Grand Total: " + counterTotal

})

