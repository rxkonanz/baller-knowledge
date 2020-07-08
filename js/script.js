let questions = ["Who won the 2018 Eastern Conference Finals?", "Led by who?", "Who has how many rings?", "Which is currently worn by which Point Guard:", 
"Who was drafted by:", "Which moved to Charlotte and had which Star Point Guard?", "Where he was teammates with:", "Who played for Indiana University like:", "Who was traded to the Pacers from:", 
"Where he was teammates with former MVP:", "Who was teammates in UCLA with:", "Who was traded from:", "Where he played how many years:", 
"Which is the same number of rings *answer* has:", "Who had the youngest MVP ever:", "But not unanimous like:", "Whose splash brother is:", 
"Who went to Washington State like:", "Who grew up in Australia like:", "Who won ROY one year after:", "Who was teammates with the Greek Freak:",
"Who is an NBA All-Star starter like Sixer\'s:", "Who is from Cameroon like:", "Who was teammates with former DPOY and Finals MVP:", 
"Who in 2018 got traded for:", "To the Raptors from the:", "To join 6ft Guard:", "Who wears the jersey #:", "Just like future Hall of Famer:",
"Who's got how many rings?", "Just like former MVP:", "Who has a Max Contract like:", 
"Who recently joined the:", "Where he is teammates with:", "Who wears which number:", "And has played for how many teams?", "The same number of Jersey Numbers *answer* had:", "Who wore which number in the 90s?", "For how many years?", 
"And dropped 61 on the:", "Which is 9 points short of *answer*'s career high:", "Who is teammates with:", "Who was drafted in the same draft class as:", "Who plays with fellow Euro Superstar:", "Who reminds everyone of a younger:", "Only 3 players left. Who wore that number?",
"Who is 5 years younger, but retired before:", "Not many options left:"];

let correctAnswers = ["nbalogo", "cavaliers", "lebronjames", "three", "chrispaul", "hornets", "kembawalker", "codyzeller", 
"victoroladipo", "thunder", "russellwestbrook", "kevinlove", "timberwolves", "six", "bulls", "derrickrose", "stephcurry",
"klaythompson", "aronbaynes", "bensimmons", "malcolmbrogdon", "giannis", "joelembiid", "pascalsiakam", "kawhileonard",
"demarderozan", "spurs", "kylelowry", "seven", "carmeloanthony", "zero", "jamesharden", "anthonydavis", 
"lakers", "caldwellpope", "one", "two", "kobebryant", "eight", "ten", "knicks", "devinbooker", "deandreayton", "lukadoncic", "kristapsporzingis", "dirknowitzki", "dwyanewade", "vincecarter", "donovanmitchell"]; 

let players = ["lebronjames", "chrispaul", "kembawalker", "codyzeller", "victoroladipo", "russellwestbrook", "kevinlove",
"derrickrose", "stephcurry", "klaythompson", "aronbaynes", "bensimmons", "malcolmbrogdon", "giannis", "joelembiid", "pascalsiakam",
"kawhileonard", "caldwellpope", "demarderozan", "kylelowry", "carmeloanthony", "jamesharden", "anthonydavis", "devinbooker", "deandreayton", "lukadoncic", "dirknowitzki", "kristapsporzingis", "dwyanewade", "vincecarter", "donovanmitchell", "kobebryant"]; 

var currentQuestion = 0;
var currentAnswer = 0;
var points = -1;
var fouls = 0;
var timeleft = 30;
let correct = new Audio();
correct.src = "mp3/correct.mp3";
let incorrect = new Audio();
incorrect.src = "mp3/incorrect.mp3";
let themeSong = new Audio();
themeSong.src = "mp3/themesong.mp3";
let timeInterval;

function downloadTimer() {
    clearInterval(timeInterval);
    timeInterval = setInterval(function(){
        $('#timer').text("Shot Clock: " + timeleft);
        timeleft -= 1;
        if(timeleft <= -1){
            incorrect.play();
            alert("You ran out of time! Keep your eyes on the clock!");
            window.localStorage.setItem('points', points);
            window.location.replace("https://rxkonanz.github.io/baller-knowledge/loser.html");
            //window.location.reload(true);
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
    let toClick = correctAnswers[currentAnswer];
    $('#'+toClick).addClass('clicked');
    nextQuestion();
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

$(document).ready(function() {
    var allPlayers = $('.player');
    allPlayers = shuffle(allPlayers);

    for(var i = 0; i < allPlayers.length; i++){
        //console.log(allPlayers[i]);
        var thisPlayer = allPlayers[i];
        $(thisPlayer).attr("id", players[i]);
    }
    
    $("#next-question").click(function(e){
        $('#question').text(questions[currentQuestion]);
        currentQuestion++;
    });
    $(".selection").click(function(e){
        var id = $(this).attr("id");
        if(id==correctAnswers[currentAnswer]){
            if(id=="nbalogo"){
                themeSong.play();
                $(this).addClass("clicked");
                nextQuestion();
            }
            else if(id==correctAnswers[correctAnswers.length-1]){
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
            if(fouls>2){
                window.localStorage.setItem('points', points);
                window.location.replace("http://www.robertokonanz.com/baller-knowledge/loser.html");
            }
            else {
                $("#fouls").text("Fouls: " + fouls)
            }
        }
        console.log(id);
    });
});