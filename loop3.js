const str = prompt("Enter a string of characters: ");
const target = "!"

for(let i = 0; i < str.length; i ++) {
    const char = str[i];
    if (char === target) {
        alert(`We found the ${target} in ${i + 1} characters`)
        break;
    }
}