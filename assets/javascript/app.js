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
		}
	];
	function buildQuiz() {
		//empty quiz container;
		$("#quiz-body").empty();
		//create form that will hold questions
		var quizForm = $("<form>");
		quizForm.attr("id", "quiz-form")
		$("#quiz-body").append(quizForm);
		for(var i = 0; i < quiz.length; i++) {
			//Create a new container to hold quiz question and radio buttons
			var question = $("<div>");
			question.attr("class", "question");
			question.text(quiz[i]["question"]);
			quizForm.append(question);
			//Loop through all of the answer choices and create a label with answer choice and a radio button
			var answers = $("<div>")
			answers.attr("class", "answer");
			quizForm.append(answers);
			for(letter in quiz[i]["answers"]) {
				var label = $("<label>");
				label.attr("class", "answer");
				var inputGroupName = "question" + i;
				label.html('<input type="radio" name="' + inputGroupName + '" value="' + letter + '">' + quiz[i]["answers"][letter] + '</input>')
				answers.append(label);
			}
		}
	}
	function buildResultsPage() {

	}
	$("#startQuiz").on("click", function() {
		//Hide start screen by toggling active and inactive classes on div that holds start page.
		$("#start-body").addClass("inactive");
		//show quiz questions by toggling active and inactive classes on div that holds quiz.
		$("#quiz-body").removeClass("inactive");
		$("#quiz-body").addClass("active");
		buildQuiz()
	});
	$("#seeResults").on("click", function() {
		console.log("building results page!");
		//Hide quiz questions by toggling active and inactive css classes.
		$("#quiz-body").removeClass("active");
		$("#quiz-body").addClass("inactive");
		$("#start-body").removeClass("active");
		$("#start-body").addClass("inactive");
		document.getElementById("startQuiz").style.display = "none"
		$("#results").removeClass("inactive");
		$("#results").addClass("active");
		
		//show results page.
	});
});