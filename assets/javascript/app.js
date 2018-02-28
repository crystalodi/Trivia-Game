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
	buildQuiz()
	function buildQuiz() {
		for(var i = 0; i < quiz.length; i++) {
			
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
	});
	$("#seeResults").on("click", function() {
		console.log("building results page!");
		//Hide quiz questions by toggling active and inactive css classes.
		$("#quiz-body").removeClass("active");
		$("#quiz-body").addClass("inactive");
		$("#start-body").removeClass("active");
		$("#start-body").addClass("inactive");
		$("#results").removeClass("inactive");
		$("#results").addClass("active");
		//show results page.
	});
});