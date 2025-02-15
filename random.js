const num = Math.random();
console.log(num);

//to get a num 1-10
const num2 = Math.round(Math.random() * 10);
console.log(num2);

//any number between certain numbers
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const num3 = randomNum(20, 80)
console.log(num3);
