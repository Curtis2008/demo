
let rowNums = Array(11).fill(null);
let colNums = Array(11).fill(null);


let numbers = Array.from({ length: 10}, (_, i) => i);

numbers.sort(() => Math.random() - 0.5);


for (let i = 1; i < rowNums.length; i++) {
    rowNums[i] = numbers [i-1];
    colNums[i] = numbers [i-1];
}

console.log("Row: ", rowNums);
console.log("Col: ", colNums);