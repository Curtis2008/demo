const strs = ["one", "two", "three"];

for (const [i, str] of strs.entries()) {
    console.log(i, str);
}

/*const strin = "hello world";
for (const char of strin) {
    console.log(char);
}
*/

//Nested of loop//

const matrix = [];


for(let i = 0; i < 3; i++){
    const numbers = []

    for (let j = i * 3; j < i *3 + 3; j++) {
        numbers.push(j + 1)
    }

    matrix.push(numbers);
}

console.log(matrix);

//Triple nested //

const matrix2 = [];

for (let i = 0; i < 2; i++){
    const arr = [];

    for(let j = 0; j < 3; j++){
        const numbers = [];
    
            const start = i * 6 + j * 2 + 1;
        for (let k = start; k < start + 2; k++) {
            numbers.push(k);
        }
    

       arr.push(numbers);
    }
    
    matrix2.push(arr);
       
}

console.log(matrix2);

