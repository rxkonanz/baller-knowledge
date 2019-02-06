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

var cheating = false;
var currentQuestion = 0;
var currentAnswer = 0;
var points = -1;
var fouls = 0;
var timeleft = 30;
let correct = new Audio();
correct.src = "mp3/correct.mp3";
let incorrect = new Audio();
incorrect.src = "mp3/incorrect.mp3";
let timeInterval;

function downloadTimer() {
    clearInterval(timeInterval);
    timeInterval = setInterval(function(){
        $('#timer').text("Shot Clock: " + timeleft);
        timeleft -= 1;
        if(timeleft <= 0){
            incorrect.play();
            alert("You ran out of time! Keep your eyes on the clock!");
            window.location.reload(true);
        }
    }, 1000);
}

function nextQuestion() {
    $('#question').text(questions[currentQuestion]);
    currentQuestion++;
    currentAnswer++;
    points++;
    $("#points").text("Points: " + points);
    timeleft = 30;
    downloadTimer();
}

function cheat() {
    /*for(var i = 0; i < correctAnswers.length; i++){
        let currentSelection = correctAnswers[i]; 
        let answer = $('#'+currentSelection);
        answer.addClass('clicked');
    }*/
    cheating = true;
    let toClick = correctAnswers[currentAnswer];
    $('#'+toClick).addClass('clicked');
    $('#question').text(questions[currentAnswer+1]);
    currentAnswer++;
    
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
                if(cheating==false){
                    nextQuestion();
                }
            }
        }
        else{
            incorrect.play();
            fouls++;
            if(fouls>2){
                window.localStorage.setItem('points', points);
                window.location.replace("https://rxkonanz.github.io/baller-knowledge/loser.html");
                //window.location.replace("file:///Users/robertokonanz/Documents/Ironhack/project1/baller-knowledge/loser.html");
            }
            else {
                $("#fouls").text("Fouls: " + fouls)
            }
        }
        console.log(id);
    });
});