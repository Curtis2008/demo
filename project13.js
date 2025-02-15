function checkAnswers () {
    const answers = {
        q1: "All of the above",
        q2: "Saxophone"
    };

    let score = 0
        for (let question in answers) {
            let selectedAnswer;

            if (question === "q1") {
                selectedAnswer = document.querySelector(`select[name="${question}"]`).value;
            } else if (question === "q2") {
                selectedAnswer = document.querySelector(`input[name="${question}"]:checked`)?.value;
            }
            

            if (selectedAnswer === answers[question]) {
                score++;
            }
        }
    const result = document.getElementById("result");
    result.textContent = `You scored ${score} out of 2.`;
}