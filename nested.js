const country = prompt("What country do you live in?");

if (country ==="CA"  || country ==="Canada") {
    const age = prompt("Please enter your age.");
    alert(age);
    if (age >=18) {
        alert("continue")
    }
} else {
    alert("Thanks for participating, no more info.")
}