const submitbtn = document.getElementById('submitbtn');
const quizForm = document.getElementById('quizform');
const outptbox = document.getElementById('outptbox');

const Ans = ["90", "right angled", "180"];


submitbtn.addEventListener('click', () => {
    let score = 0;
    let index = 0;
    const fromResult = new FormData(quizForm);
    for(let value of fromResult.values()) {
        if (value === Ans[index]) {
            score++;
        }
        index++;
    };
    outptbox.innerHTML = `<h4>your score is ${score} </h4>`;
});

