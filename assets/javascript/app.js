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
				b: "Designer Bags",
				c: "Plumbing Supplies",
				d: "Propane"
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
});