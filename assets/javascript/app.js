var questions =[
	"What is the name of a house at the Hogwarts School of Witchcraft & Wizardy?",
	"What was the name of the monkey in the Disney movie Aladin?",
	"What is the name of one of the fairies in Sleeping Beauty?",
	"Who played James Bond in the 1969 'On Her Majesty's Secret Service'?",
	"Keiko is the name of a whale that appeared in what 1993 Family drama film?",
	"What sunglasses did Tom Cruise wear in Top Gun?",
	"What is the actress name who played the unsinkable Molly Brown in the movie Titanic?",
	"Robin Williams won an Academy Award for best supporting actor in which 1997 film?",
	"What is the name of Mickey Mouses Dog?",
	"Tom Hanks played 'Captain Miller' in what legendary World War II movie?",
	"BB-8 is an astromech droid from what film franchise?",
	"Who was the female lead in the movie Titanic?",
	"Who played the fictional anti hero Deadpool in the 2016 movie?",
	"Superman is a ficitonal hero from what fictional planet?",
	"Who played Batman in the 1989 Tim Burton version of the film?"
	
];

var answers = [
  ["Diagon Aley","Ravenclaw","Puff the Dragon","Shrine"],
  ["Abu","Spike","Marcel","Jack"],
  ["Tinkerbell","Periwinkle","Vidia","Flora"],
  ["George Lozenby","Sean Connery","David Niven","Pierce Broson"],
  ["Free Willy", "Blackfish","Whale Rider","In the Heart of the Sea"],
  ["Maui Jim", "Costa","Ray Ban","Oakley"],
  ["Kate Winslet", "Kathy Bates","Frances Fisher","Gloria Stuart"],
  ["Goodwill Hunting","Mrs Doubtfire","Dead Poets","Jumanji"],
  ["Goofy","Pete","Pongo","Pluto"],
  ["Forrest Gump","Saving Private Ryan","Cast Away","Sully"],
  ["Star Trek","Star Wars","Battlestar Galactica","Star Chaser"],
  ["Kate Winslet","Frances Fisher","Gloria Stuart","Kathy Bates"],
  ["Ryan Gosling","Ryan Ryenolds","Ryan Seacrest","Ryan Anderson"],
  ["Asgard","Krypton","Endor","Jakku"],
  ["Christian Bale","George Clooney","Micheal Keaton","Val Kilmer"]
];

var correctAnswer=[
  "Ravenclaw",
  "Abu",
  "Flora",
  "George Lozenby",
  "Free Willy",
  "Ray Ban",
  "Kathy Bates",
  "Goodwill Hunting",
  "Pluto",
  "Saving Private Ryan",
  "Star Wars",
  "Kate Winslet",
  "Ryan Ryenolds",
  "Krypton",
  "Micheal Keaton"
];


var time=60;
var correct=0;
var incorrect=0;
var unanswer=0;
var total=15;
var i=0;


$(document).ready(function() {
	$("#start").click(function(){
		$("#start").remove();

        
        $("#content").append("<div id= timer>Time Remaining:</div>");
		$("#content").append("<div id= questions> </div>");
		$("#content").append("<div class=answer id= answer1> </div>");
		$("#content").append("<div class=answer id= answer2> </div>");
		$("#content").append("<div class=answer id= answer3> </div>");
		$("#content").append("<div class=answer id= answer4> </div>");
		
		$("#timer").append(" "+time)
        $("#questions").html(questions[0]);
		$("#answer1").html(answers[0][0]);
		$("#answer2").html(answers[0][1]);
		$("#answer3").html(answers[0][2]);
		$("#answer4").html(answers[0][3]);

		intervalId=setInterval(countDown, 1000);
	});

	function countDown (){
		time--;
		$("#timer").html("Time Remaining: "+time)
		if(time===0){
			clearInterval(intervalId);
			time=0;
			$("#questions").remove();
			$(".answer").remove();
			$("#content").html("<h2> All Done!<h2>");
			$("#content").html("<h3> Correct Answers: <h3>"+correct);
			$("#content").html("<h3> Incorrect Answers:<h3>"+incorrect);
			$("#content").html("<h3> Unanswered: <h3>"+unanswer);

		}

	}


	$(document).on("click",".answer", function(){
		userAnswer=$(this).text();
      if(userAnswer===correctAnswer[i]){
      	console.log(userAnswer);
      	correct++;
      	total--;

      }else{
      	incorrect++;
      	total--;
      }
      
      i++;
      if(i<questions.length){
        $("#questions").html(questions[i]);
	    $("#answer1").html(answers[i][0]);
	    $("#answer2").html(answers[i][1]);
	    $("#answer3").html(answers[i][2]);
	    $("#answer4").html(answers[i][3]);

	  }else{
	  	clearInterval(intervalId);
			time=0;
			$("#questions").remove();
			$(".answer").remove();
			$("#content").append("<h2> All Done!<h2>");
			$("#content").append("<h3> Correct Answers: <h3>"+correct);
			$("#content").append("<h3> Incorrect Answers:<h3>"+incorrect);
			$("#content").append("<h3> Unanswered: <h3>"+total);
	  }
	  
	 
	});
})






































