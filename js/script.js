let questions = ["Who won the last Eastern Conference Finals?", "Led by who?", "Who has how many rings?", "Which is currently worn by which PG:", 
"Who was drafted by:", "Who\'s Point Guard is:", "Who also drafted:", "Who went to school with:", "Who was traded to the Pacers from:", 
"Where he was teammates with former MVP:", "Who was teammates in UCLA with:", "Who was traded from:", "Where he played how many years:", 
"Which is the same number of rings *answer* has:", "Who had the youngest MVP ever:", "But not unanimous like:", "Who\'s splash brother is:", 
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
var correct = new Audio();
correct.src = "mp3/correct.mp3";
var incorrect = new Audio();
incorrect.src = "mp3/incorrect.mp3";

function nextQuestion() {
    $('.question').text(questions[currentQuestion]);
    currentQuestion++;
    currentAnswer++;
    points++;
    $("#points").text("Points: " + points);
}
$(document).ready(function() {
    $("#next-question").click(function(e){
        $('#question').text(questions[currentQuestion]);
        currentQuestion++;
    });
    $(window).scroll(function() {
        var distanceFromTop = $(this).scrollTop();
        if (distanceFromTop >= 50) {
            $('#sticky').addClass('fixed');
        } else {
            $('#sticky').removeClass('fixed');
        }
    });
    $(".selection").click(function(e){
        var id = $(this).attr("id");
        if(id==correctAnswers[currentAnswer]){
            if(id==correctAnswers[correctAnswers.length-1]){
                window.location.replace("https://rxkonanz.github.io/baller-knowledge/winner.html");
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
            if(fouls>2){
                window.location.replace("https://rxkonanz.github.io/baller-knowledge/loser.html");
            }
            else {
                $("#fouls").text("Fouls: " + fouls)
            }
        }
        console.log(id);
    });    
});