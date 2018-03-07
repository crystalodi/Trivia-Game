$(document).ready(function() {
	//array of objects that contains quiz questions and answers.
	var quiz = [
		{
			question: "How many men did Cotton Hill kill during Word War II?",
			answers: {
				a: "Fitty",
				b: "Hundred",
				c: "Ten",
				d: "A lot"
			},
			correctAnswer: "a",
			mediaContent: '<iframe src="https://www.youtube.com/embed/fhGX5izia1U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Cotton Hill killed Fitty Men during his time serving the country in WW2."
		},
		{
			question: "What does Hank Hill sell for a living?",
			answers: {
				a: "Air Conditioners and Air Conditioner Accessories",
				b: "Designer Handbags and Designer Handbag Accessories",
				c: "Plumbing Supplies and Pluming Supply Accessories",
				d: "Propane and Propane accessories"
			},
			correctAnswer: "d",
			mediaContent: '<iframe src="https://www.youtube.com/embed/rM02vHtftd0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Hank Hill sells Propane and Propane accessories."

		},
		{
			question: "What brand of cigarettes does Dale Gribble smoke?",
			answers: {
				a: "Canadian Smoke",
				b: "Smokeys",
				c: "Manitoba",
				d: "Unlucky Strikes"
			},
			correctAnswer: "c",
			mediaContent: '<iframe src="https://www.youtube.com/embed/aGT5K_3Dztk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Dale Gribble smokes Manitoba brand cigarettes. Manitoba is the official brand of cigarettes for the Royal Mounted Canadian Police."
		},
		{
			question: "What language does Peggy speak very poorly?",
			answers: {
				a: "French",
				b: "Porteguese",
				c: "Italian",
				d: "Spanish"
			},
			correctAnswer: "d",
			mediaContent: '<iframe src="https://www.youtube.com/embed/7cmWlZXSH44" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Peggy speaks Spanish very poorly, but her narcissism prevents her from accepting the fact that she's not very good at it."
		},
		{
			question: "Who is Joseph Gribble's dad?",
			answers: {
				a: "John Redcorn",
				b: "Bill",
				c: "Hank",
				d: "Dale"
			},
			correctAnswer: "a",
			mediaContent: '<iframe src="https://www.youtube.com/embed/T8gmEWG7U3Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Joseph Gribble's dad is John Redcorn. He is the product of 13 year long affair between John Redcorn and Dale's wife, Nancy Hicks-Gribble."
		},
		{
			question: "In the episode Pretty Pretty Dresses, which character has a mental breakdown?",
			answers: {
				a: "Joe Jack",
				b: "Hank",
				c: "Bill",
				d: "Dale"
			},
			correctAnswer: "c",
			mediaContent: '<iframe src="https://www.youtube.com/embed/p0qNmd9kASw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Bill has a mental breakdown in the Christmas episode called Pretty, Pretty Dresses and dresses up as his ex-wife Lenore. Christmas is the time his ex-wife Lenore left him."
		},
		{
			question: "What body part does Hank threaten to kick when he is angry?",
			answers: {
				a: "Stomach",
				b: "Ass",
				c: "Head",
				d: "Ankle"
			},
			correctAnswer: "b",
			mediaContent: '<iframe src="https://www.youtube.com/embed/VMgDbUAZfCQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Hank threatens to kick somebody's or something's ass when he is angry."

		},
		{
			question: "What is Dale Gribble's Alias?",
			answers: {
				a: "Rusty Shackleford",
				b: "Max Powers",
				c: "Hansen B. Wonderful",
				d: "Stan Lee"
			},
			correctAnswer: "a",
			mediaContent: '<iframe src="https://www.youtube.com/embed/S580EX1nnYU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Dale Gribble always uses the alias of Rusty Shackleford."
		},
		{
			question: "What is the name of the grocery superstore that everybody in town shops at?",
			answers: {
				a: "Megalomart",
				b: "Aldo's",
				c: "Get In Get Out",
				d: "Target"
			},
			correctAnswer: "a",
			mediaContent: '<iframe src="https://www.youtube.com/embed/c7OIhhAyD7g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "The name of the grocery superstore that everybody in town shops at is called the Megalomart. It is based off of the store Walmart."
		},
		{
			question: "What is the name of Luanne's deceased boyfriend?",
			answers: {
				a: "Josh",
				b: "Sherman",
				c: "Rad",
				d: "Buckley"
			},
			correctAnswer: "d",
			mediaContent: '<iframe src="https://www.youtube.com/embed/33CkjH4-arY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "The name of Luanne's deceased boyfriend is Buckley. He died when the Megalomart blew up in the episode Death of a Propane Salesman."
		},
		{
			question: "What country are the Souphanousinphones from?",
			answers: {
				a: "Cambodia",
				b: "Vietnam",
				c: "Laos",
				d: "Thailand"
			},
			correctAnswer: "c",
			mediaContent: '<iframe src="https://www.youtube.com/embed/d_CaZ4EAexQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "The Souphanousinphones immigrated to America from Laos. Before moving to Arlen, they lived in Anaheim, California."
		},
		{
			question: "In the episode Bobby Goes Nuts, Bobby wins all of his fights by kicking his opponents where?",
			answers: {
				a: "Behind",
				b: "Face",
				c: "Stomach",
				d: "Groin"
			},
			correctAnswer: "d",
			mediaContent: '<iframe src="https://www.youtube.com/embed/1u4oXXL1a5A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Bobby wins all of his fights by kicking his opponents in the groin, a move he learned in a Women's self-defense class held at the local YMCA."
		}
	];
	//variables to keep track of how many things you didn't answer, got wrong, or got correct
	var incorrectCount = 0;
	var correctCount = 0;
	var unansweredCount = 0;
	//variables to keep track of what question user is on and how each question was answered
	var quizIndex = 0;
	var answerArray = new Array(quiz.length);
	//Variables for timer
	var timeLimit;
	var intervalID;
	var audio = new Audio("./assets/sounds/koth_theme.mp3")
	audio.play();
	function showQuestion() {
		if(!audio.paused) {
			audio.pause();
		}
		//Hide start screen by toggling active and inactive classes on div that holds start page.
		$("#answer").removeClass("active");
		$("#answer").addClass("inactive");
		$("#start").addClass("inactive");
		//show quiz questions by toggling active and inactive classes on div that holds quiz.
		$("#quiz").removeClass("inactive");
		$("#quiz").addClass("active");
		$("#answerChoices").empty();
		//Populate Question
		$("#currentQuestion").html(quiz[quizIndex]["question"]);
		//populate label and radio button;
		for(letter in quiz[quizIndex]["answers"]) {
			var label = $("<label>");
			var inputGroupName = "question" + quizIndex;
			label.html('<input type="radio" name="' + inputGroupName + '" value="' + letter + '" data-index="' + quizIndex + '">' + quiz[quizIndex]["answers"][letter] + '</input>')
			$("#answerChoices").append(label);
		}
		startTimer();
	}
	function nextQuestion() {
		quizIndex++;
		$("#media").empty();
		if(quizIndex === quiz.length) {
			showResultsPage();
		}else {
			showQuestion();
		}
	}
	function selectAnswer() {
		answerArray[quizIndex] = $(this).val();
		console.log(answerArray);
		stopTimer();
		showAnswer();
	}
	function showAnswer() {
		//Hide Question and Answer choices
		$("#quiz").removeClass("active");
		$("#quiz").addClass("inactive");
		//Show Container that holds correct answer and media.
		$("#answer").removeClass("inactive");
		$("#answer").addClass("active");
		$("#media").html(quiz[quizIndex]["mediaContent"]);
		var correctIncorrect;
		if(answerArray[quizIndex] === quiz[quizIndex]["correctAnswer"]) {
			correctIncorrect = "<span class='correct'>Correct </span>"
		}
		else {
			correctIncorrect = "<span class='incorrect'>Incorrect </span>"
		}
		$("#answerExplanation").html(correctIncorrect + quiz[quizIndex]["explanation"]);
		if(quizIndex === quiz.length - 1) {
			$("#nextQuestion").text("See Results");
		}
		else {
			$("#nextQuestion").text("Next Question");
		}	
	}
	function showResultsPage() {
		//Compare answers stored in answer array with the correct answer in the quiz array
		for(var i = 0; i < quiz.length; i++) {
			//Question was left unanswered
			if(!answerArray[i]) {
				unansweredCount++;
			}
			else if(quiz[i]["correctAnswer"] === answerArray[i]) {
				//Question answered correctly
				correctCount++;
			}
			else {
				//Question answered incorrectly
				incorrectCount++
			}
		}
		$("#num-incorrect").html(incorrectCount);
		$("#num-correct").html(correctCount);
		$("#num-unanswered").html(unansweredCount);
		$("#quiz").removeClass("active");
		$("#quiz").addClass("inactive");
		$("#answer").removeClass("active");
		$("#answer").addClass("inactive");
		$("#results").removeClass("inactive");
		$("#results").addClass("active");
	}
	function retryQuiz() {
		answerArray = new Array(quiz.length);
		incorrectCount = 0;
		correctCount = 0;
		unansweredCount = 0;
		//variables to keep track of what question user is on and how each question was answered
		quizIndex = 0;
		$("#results").removeClass("active");
		$("#results").addClass("inactive");
		showQuestion();
	}
	function decrementTimer() {
		timeLimit--;
		$("#seconds-left").html(timeLimit + " second(s) left")
		if(timeLimit === 0) {
			stopTimer()
			showAnswer();
		}
	}
	function stopTimer() {
		clearInterval(intervalId);
	}
	function startTimer() {
		timeLimit = 30;
		$("#seconds-left").html(timeLimit + " second(s) left");
		intervalId = setInterval(decrementTimer, 1000);
	}
	$("#startButton").on("click", showQuestion);
	$("#seeResults").on("click", showResultsPage);
	//add onclick event for radio button choices
	$(document).on("click", "input:radio", selectAnswer);
	$("#nextQuestion").on("click", nextQuestion);
	$("#retryQuiz").on("click", retryQuiz);
});
