let counter = 0

const resultText = document.querySelector(".result-text");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

function updateResult() {
    resultText.textContent = counter;
}

incrementBtn.addEventListener("click", () => {
    counter++
    updateResult();
});

decrementBtn.addEventListener("click", () => {
    counter--
    updateResult();
})

resetBtn.addEventListener("click", () => {
    counter = 0
    updateResult();
})

updateResult();