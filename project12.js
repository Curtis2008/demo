function checkAnswers () {
    const answers = {
        q1: "Poison",
        q2: "David Bowie"
    };

    let score = 0
        for (let question in answers) {
            const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`)

            if (selectedAnswer && selectedAnswer.value === answers[question]) {
                score++
            }
        }
    const result = document.getElementById("result");
    result.textContent = `You scored ${score} out of 2.`; 
}