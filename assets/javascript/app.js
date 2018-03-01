$(document).ready(function() {
	//Variables to keep track of questions user got right, wrong, or didn't answer.
	var incorrectCount = 0;
	var correctCount = 0;
	var unansweredCount = 0;
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
	function buildQuiz() {
		//Hide start screen by toggling active and inactive classes on div that holds start page.
		$("#start-body").addClass("inactive");
		//show quiz questions by toggling active and inactive classes on div that holds quiz.
		$("#quiz-body").removeClass("inactive");
		$("#quiz-body").addClass("active");
		var quizForm = $("#quiz-form");
		for(var i = quiz.length-1; i >= 0; i--) {
			//Create a new container to hold quiz question and radio buttons
			var questionContainer = $("<div>");
			questionContainer.attr("class", "question-container")
			quizForm.prepend(questionContainer);
			//Create a div to hold question.
			var question = $("<div>");
			question.attr("class", "question");
			question.text(quiz[i]["question"]);
			//Add it to quiz form.
			questionContainer.append(question);
			//Loop through all of the answer choices and create a label with answer choice and a radio button
			var answers = $("<div>")
			questionContainer.append(answers);
			for(letter in quiz[i]["answers"]) {
				var label = $("<label>");
				label.attr("class", "answer");
				var inputGroupName = "question" + i;
				label.html('<input type="radio" name="' + inputGroupName + '" value="' + letter + '" data-index="' + i + '">' + quiz[i]["answers"][letter] + '</input>')
				answers.append(label);
			}
		}
	}
	function buildResultsPage() {
		var resultsPage = $("#quiz-results");
		for(var i = 0; i < quiz.length; i++) {
			var questionContainer = $("<div>");
			questionContainer.attr("class", "question-container")
			resultsPage.append(questionContainer)
			//Create a div to hold question.
			var question = $("<div>");
			question.attr("class", "question");
			question.text(quiz[i]["question"]);
			questionContainer.append(question);
			var answers = $("<div>")
			questionContainer.append(answers);
			for(letter in quiz[i]["answers"]) {
				var label = $("<label>");
				label.attr("class", "answer");
				label.html(quiz[i]["answers"][letter])
				answers.append(label);
			}
			var radioGroupName = "question" + i;
			var radioButtons = $('input[name="' + radioGroupName + '"]');
			var answered = false;
			for(var j = 0; j < radioButtons.length; j++) {
				if(radioButtons[j].checked === true) {
					answered = true;
					if(radioButtons[j].value === quiz[i]["correctAnswer"]) {
						correctCount++;
					}
					else {
						incorrectCount++;
					}
				}
			}
			if(!answered) {
				unansweredCount++;
			}
		}
		console.log("Unanswered Count " + unansweredCount);
		console.log("Correct Count " + correctCount);
		console.log("Incorrect Count " + incorrectCount);
	}
	function seeResultsPage() {
		console.log("building results page!");
		//Hide quiz questions by toggling active and inactive css classes.
		buildResultsPage();
		$("#quiz-body").removeClass("active");
		$("#quiz-body").addClass("inactive");
		$("#start-body").removeClass("active");
		$("#start-body").addClass("inactive");
		$("#quiz-results").removeClass("inactive");
		$("#quiz-results").addClass("active");
	}
	$("#startQuiz").on("click", buildQuiz);
	$("#seeResults").on("click", seeResultsPage);
});