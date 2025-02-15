/*
function add(x, y) {
    console.log(x + y);
}

add(10, 8);
*/

function removeAllChars(arrayOfStrings, charactersToRemove) {
    const newArray = [];

    for (const str of arrayOfStrings) {
        let newStr = "";
        for (const char of str) {
            if (charactersToRemove.includes(char)) {
                continue
            }
            newStr += char
        }
        newArray.push(newStr)
    }
    return newArray
}

const result = removeAllChars(["hello world", "1234", "i am the best", "yes"], ["e", "2", "t"]);
console.log(result)
