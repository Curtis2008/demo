const numberElements = Number(prompt("Enter a number between 1 and 10"))

if (numberElements >= 1 && numberElements <= 10) {
    const list = document.getElementById("list");

    for (let i = 0; i < numberElements; i++) {
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(i.toString()))
        list.appendChild(li);
    }

} else {
    alert("That is not valid.")
}