/* javascript */
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let question1 = parseInt(document.getElementById('question1').value);
    let question2 = parseInt(document.getElementById('question2').value);
    let question3 = parseInt(document.getElementById('question3').value);
    let question4 = parseInt(document.getElementById('question4').value);
    let question5 = parseInt(document.getElementById('question5').value);
    let question6 = parseInt(document.getElementById('question6').value);
    let question7 = parseInt(document.getElementById('question7').value);
    let question8 = parseInt(document.getElementById('question8').value);
    let question9 = parseInt(document.getElementById('question9').value);
    let question10 = parseInt(document.getElementById('question10').value);

    let oddQuestions = question1 - 1 + question3 - 1 + question5 - 1 + question7 - 1 + question9 - 1;
    let evenQuestions = (5 - question2) + (5 - question4) + (5 - question6) + (5 - question8) + (5 - question10);

    let totalScore = (oddQuestions + evenQuestions) * 2.5;


    document.getElementById('totalScore').value = totalScore;
});
