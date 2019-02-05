let questions = ["Who won the last Eastern Conference Finals?", "Led by who?", "Who has how many rings?", "Which is currently worn by which Point Guard:", 
"Who was drafted by:", "Which moved to Charlotte and has Star Point Guard:", "Who also drafted:", "Who played for Indiana University with:", "Who was traded to the Pacers from:", 
"Where he was teammates with former MVP:", "Who was teammates in UCLA with:", "Who was traded from:", "Where he played how many years:", 
"Which is the same number of rings *answer* has:", "Who had the youngest MVP ever:", "But not unanimous like:", "Whose splash brother is:", 
"Who went to Washington State like:", "Who grew up in Australia like:", "Who won ROY one year after:", "Who is teammates with the Greek Freak:",
"Who is an NBA All-Star starter like Sixer\'s:", "Who is from Cameroon like:", "Who is teammates with former DPOY and Finals MVP:", 
"Who got traded for:", "To the Raptors from the:", "To join 6ft Guard:", "Who wears the jersey #:", "Just like future Hall of Famer:",
"Who's got how many rings?", "Just like former MVP:", "Who has a Max Contract like:", "Who wants to join the:",
"Which would be the second big trade of 2019, after the:", "Traded:", "To the mavericks to join European prodigy:", 
"Who is currently one of how many rookies averaging 20ppg", "And is number *answer* in Rebounds by rookies:", "One spot after:",
"Who is teammates with Wildcats\' super star:", "That dropped 70 in a game. Third most after Wilt Chamberlain and:", "Who wore which # in the 90's:",
"Who later wore #24 for how many seasons:", "Which is the same number who was drafted overall?", "Drafted by the Heat just like:",
"Who is in his last season like:", "Who is the second oldest in the league after:", "Who has won a Dunk Contest like:"];

let correctAnswers = ["nbalogo", "cavaliers", "lebronjames", "three", "chrispaul", "hornets", "kembawalker", "codyzeller", 
"victoroladipo", "thunder", "russellwestbrook", "kevinlove", "timberwolves", "six", "bulls", "derrickrose", "stephcurry",
"klaythompson", "aronbaynes", "bensimmons", "malcolmbrogdon", "giannis", "joelembiid", "pascalsiakam", "kawhileonard",
"demarderozan", "spurs", "kylelowry", "seven", "carmeloanthony", "zero", "jamesharden", "anthonydavis", "lakers", "knicks", 
"kristapsporzingis", "lukadoncic", "one", "two", "deandreayton", "devinbooker", "kobebryant", "eight", "ten", "justicewinslow",
"dwyanewade", "dirknowitzki", "vincecarter", "donovanmitchell"];

var currentQuestion = 0;
var currentAnswer = 0;
var points = -1;
var fouls = 0;
var timeleft = 30;
var correct = new Audio();
var score = 0;
correct.src = "mp3/correct.mp3";
var incorrect = new Audio();
incorrect.src = "mp3/incorrect.mp3";

var downloadTimer = setInterval(function(){
    $('#timer').text("Shot Clock: " + timeleft);
    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        alert("You ran out of time! Shoot your shot!");
        window.location.reload(true);
    }
}, 1000);

function nextQuestion() {
    $('#question').text(questions[currentQuestion]);
    currentQuestion++;
    currentAnswer++;
    points++;
    score = points/48;
    $("#points").text("Points: " + points);
    timeleft = 30;
    downloadTimer();
}
$(document).ready(function() {
    $("#next-question").click(function(e){
        $('#question').text(questions[currentQuestion]);
        currentQuestion++;
    });
    $(".selection").click(function(e){
        var id = $(this).attr("id");
        if(id==correctAnswers[currentAnswer]){
            if(id==correctAnswers[correctAnswers.length-1]){
                window.location.replace("https://youtu.be/InGtiEXQyF0?t=52");
            }
            else{
                $(this).addClass("clicked");
                correct.play();
                nextQuestion();
            }
        }
        else{
            incorrect.play();
            fouls++;
            points = points - 2;
            score = points/48;
            $("#points").text("Points: " + points);
            if(fouls>2){
                window.location.replace("https://rxkonanz.github.io/baller-knowledge/loser.html");
            }
            else {
                $("#fouls").text("Fouls: " + fouls)
            }
        }
        console.log(id);
    });
    $('#score').text(score);
});