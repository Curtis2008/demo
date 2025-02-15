/* const arr = [1, 8, 3, 55, 4, 3, 8, 1];

for (const [idx, value] of arr.entries()) {
    for (const value2 of arr.slice(idx + 1)) {
        if (value === value2) {
            console.log("Found duplicate of", value);
            break;
        }
    }
}
*/

const arr = [1, 8, 3, 55, 4, 3, 8, 1];
const numbers = new Set(arr);
const uniqueNumbers = Array.from(numbers);
console.log(uniqueNumbers);
