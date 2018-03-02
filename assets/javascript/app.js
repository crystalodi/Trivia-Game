$(document).ready(function() {
	//array of objects that contains quiz questions and answers.
	var quiz = [
		{
			question: "How many men did Cotton Hill kill during Word War II?",
			answers: {
				a: "Fiddy",
				b: "Hundred",
				c: "Ten",
				d: "A lot"
			},
			correctAnswer: "a"
		},
		{
			question: "What does Hank Hill sell for a living?",
			answers: {
				a: "Air Conditioners",
				b: "Designer Handbags",
				c: "Plumbing Supplies",
				d: "Propane and Propane accessories"
			},
			correctAnswer: "d"
		},
		{
			question: "What brand of cigarettes does Dale Gribble smoke?",
			answers: {
				a: "Canadian Smoke",
				b: "Smokeys",
				c: "Manitoba",
				d: "Unlucky Strikes"
			},
			correctAnswer: "c"
		},
		{
			question: "What language does Peggy speak very poorly?",
			answers: {
				a: "French",
				b: "Porteguese",
				c: "Italian",
				d: "Spanish"
			},
			correctAnswer: "d"
		},
		{
			question: "Who is Joseph Gribble's dad?",
			answers: {
				a: "John Redcorn",
				b: "Bill",
				c: "Hank",
				d: "Dale"
			},
			correctAnswer: "a"
		},
		{
			question: "In the episode Pretty Pretty Dresses, which character has a mental breakdown?",
			answers: {
				a: "Joe Jack",
				b: "Hank",
				c: "Bill",
				d: "Dale"
			},
			correctAnswer: "c"
		},
		{
			question: "What body part does Hank threaten to kick when he is angry?",
			answers: {
				a: "Stomach",
				b: "Ass",
				c: "Head",
				d: "Ankle"
			},
			correctAnswer: "b"
		},
		{
			question: "What is Dale Gribble's Alias?",
			answers: {
				a: "Rusty Shackleford",
				b: "Max Powers",
				c: "Hansen B. Wonderful",
				d: "Stan Lee"
			},
			correctAnswer: "a"
		},
		{
			question: "What is the name of the grocery superstore that everybody in town shops at?",
			answers: {
				a: "Megalomart",
				b: "Aldo's",
				c: "Get In Get Out",
				d: "Target"
			},
			correctAnswer: "a"
		}
	];
	//variables to keep track of how many things you didn't answer, got wrong, or got correct
	var incorrectCount = 0;
	var correctCount = 0;
	var unansweredCount = 0;
	//variables to keep track of what question user is on and how each question was answered
	var quizIndex = 0;
	var answerArray = new Array(quiz.length);
	function showQuestion() {
		//Hide start screen by toggling active and inactive classes on div that holds start page.
		$("#start-body").addClass("inactive");
		//show quiz questions by toggling active and inactive classes on div that holds quiz.
		$("#quiz-body").removeClass("inactive");
		$("#quiz-body").addClass("active");
		$("#answerChoices").empty();
		//Populate Question
		$("#currentQuestion").html(quiz[quizIndex]["question"]);
		for(letter in quiz[quizIndex]["answers"]) {
			var label = $("<label>");
			var inputGroupName = "question" + quizIndex;
			label.html('<input type="radio" name="' + inputGroupName + '" value="' + letter + '" data-index="' + quizIndex + '">' + quiz[quizIndex]["answers"][letter] + '</input>')
			$("#answerChoices").append(label);
		}
		if(quizIndex === 0) {
			$("input:radio").on("click", selectAnswer);
		}
	}
	function nextQuestion() {
		quizIndex++;
		showQuestion();
	}
	function selectAnswer() {
		answerArray[quizIndex] = $(this).val();
		showAnswer();
	}
	function showAnswer() {
		
	}
	function showResultsPage() {
		//Hide quiz questions by toggling active and inactive css classes.
		for(var i = 0; i < quiz.length; i++) {
			if(!answerArray[i]) {
				unansweredCount++;
			}
			else if(quiz[i]["correctAnswer"] === answerArray[i]) {
				correctCount++;
			}
			else {
				incorrectCount++
			}
		}
		$("#num-incorrect").html(incorrectCount);
		$("#num-correct").html(correctCount);
		$("#num-unanswered").html(unansweredCount);
		$("#quiz-body").removeClass("active");
		$("#quiz-body").addClass("inactive");
		$("#start-body").removeClass("active");
		$("#start-body").addClass("inactive");
		$("#quiz-results").removeClass("inactive");
		$("#quiz-results").addClass("active");
	}
	$("#startButton").on("click", showQuestion);
	$("#seeResults").on("click", showResultsPage);
});