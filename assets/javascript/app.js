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
			correctAnswer: "a",
			mediaContent: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fhGX5izia1U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Cotton Hill killed Fiddy Men."
		},
		{
			question: "What does Hank Hill sell for a living?",
			answers: {
				a: "Air Conditioners",
				b: "Designer Handbags",
				c: "Plumbing Supplies",
				d: "Propane and Propane accessories"
			},
			correctAnswer: "d",
			mediaContent: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rM02vHtftd0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Hank Hill sells propane and propane accessories."

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
			mediaContent: '<img src="./assets/img/manitoba.png"/>',
			explanation: "Dale Gribble smokes Manitoba brand cigarettes."
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
			mediaContent: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7cmWlZXSH44" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Peggy speaks Spanish very poorly."
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
			mediaContent: '<iframe width="560" height="315" src="https://www.youtube.com/embed/T8gmEWG7U3Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Joseph Gribble's dad is John Redcorn."
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
			mediaContent: '<iframe width="560" height="315" src="https://www.youtube.com/embed/p0qNmd9kASw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Bill has a mental break in the Christmas episode called <em>Pretty, Pretty Dresses</em>"
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
			mediaContent: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VMgDbUAZfCQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Hank threatens to kick somebody's ass when he is angry."

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
			mediaContent: '<iframe width="560" height="315" src="https://www.youtube.com/embed/S580EX1nnYU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "Dale Gribble always uses the fake name of Rusty Shackleford."
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
			mediaContent: '<iframe width="560" height="315" src="https://www.youtube.com/embed/c7OIhhAyD7g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
			explanation: "The name of the grocery superstore that everybody in town shops at is called the Megalomart."
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
	function showQuestion() {
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
		$("#answerExplanation").html(quiz[quizIndex]["explanation"]);
		
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
		$("#seconds-left").html(timeLimit)
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
		$("#seconds-left").html(timeLimit);
		intervalId = setInterval(decrementTimer, 1000);
	}
	$("#startButton").on("click", showQuestion);
	$("#seeResults").on("click", showResultsPage);
	//add onclick event for radio button choices
	$(document).on("click", "input:radio", selectAnswer);
	$("#nextQuestion").on("click", nextQuestion);
	$("#retryQuiz").on("click", retryQuiz);
});
