// QUESTIONS FOR QUIZ OBJECT
var questions = [{
	"question": "Czy Polska leży w USA?",
	"option1": "Tak",
	"option2": "Nie",
	"answer": "2"
}, {
	"question": "Skąd wziął się pseudonim - Batman?",
	"option1": "Od nietoperza",
	"option2": "Od belgiskiego piwa",
	"answer": "1"
}, {
	"question": "Jaki poziom mocy obliczeniowej oferuje jeden z najszybszych komputerów świata - TaihuLight?",
	"option1": "93 petaflopsów",
	"option2": "Kabaczek",
	"answer": "1"
}];


var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var cvContainer = document.getElementById("cv-container");

function loadQuestion(questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
};

function loadNextQuestion() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if (!selectedOption) {
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if (questions[currentQuestion].answer == answer) {
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if (currentQuestion == totQuestions - 1) {
		nextButton.textContent = 'END';
	}
	if (currentQuestion == totQuestions && score < 30) {
		container.style.display = 'none';
		resultCont.style.display = 'flex';
		resultCont.textContent = 'BRAK DOSTĘPU';
		return;
	}
	if (currentQuestion == totQuestions && score == 30) {
		container.style.display = 'none';
		// resultCont.style.display = '';
		cvContainer.style.display = "flex";
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);


// PLIGIN PROGRESS BAR CONFIG **********************
$(document).ready(function () {
	$("#circle1").circliful({
		animation: 1,
		animateInView: true,
		animationStep: 3,
		foregroundBorderWidth: 15,
		backgroundBorderWidth: 15,
		percent: 25,
		percentageTextSize: 32,
		backgroundColor: '#dadada',
		foregroundColor: '#ffc935',
		fontColor: '#383838'
	});
	$("#circle2").circliful({
		animation: 1,
		animateInView: true,
		animationStep: 3,
		foregroundBorderWidth: 15,
		backgroundBorderWidth: 15,
		percent: 55,
		percentageTextSize: 32,
		backgroundColor: '#dadada',
		foregroundColor: '#ffc935',
		fontColor: '#383838'
	});
	$("#circle3").circliful({
		animation: 1,
		animateInView: true,
		animationStep: 3,
		foregroundBorderWidth: 15,
		backgroundBorderWidth: 15,
		percent: 50,
		percentageTextSize: 32,
		backgroundColor: '#dadada',
		foregroundColor: '#ffc935',
		fontColor: '#383838'
	});
	$("#circle4").circliful({
		animation: 1,
		animateInView: true,
		animationStep: 3,
		foregroundBorderWidth: 15,
		backgroundBorderWidth: 15,
		percent: 70,
		percentageTextSize: 32,
		backgroundColor: '#dadada',
		foregroundColor: '#ffc935',
		fontColor: '#383838'
	});
	$("#circle5").circliful({
		animation: 1,
		animateInView: true,
		animationStep: 3,
		foregroundBorderWidth: 15,
		backgroundBorderWidth: 15,
		percent: 85,
		percentageTextSize: 32,
		backgroundColor: '#dadada',
		foregroundColor: '#ffc935',
		fontColor: '#383838'
	});
	$("#circle6").circliful({
		animation: 1,
		animateInView: true,
		animationStep: 3,
		foregroundBorderWidth: 15,
		backgroundBorderWidth: 15,
		percent: 90,
		percentageTextSize: 32,
		backgroundColor: '#dadada',
		foregroundColor: '#ffc935',
		fontColor: '#383838',

	});

});
