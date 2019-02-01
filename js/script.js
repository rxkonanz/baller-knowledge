let questions = ["Who won last Eastern Conference Finals?", 
"Led by who?", "Who has how many rings?", "Which is currently worn by:", "Who was drafted by:", 
"Who\'s Point Guard is:", "Who is from Bronx, NY just like:", "Who was drafted in:", "With the pick number:", 
"5 picks after:", "Who was drafted by:", "Exactly one year after 1st overall pick:", 
"Who was born in Australia just like:", "Who was traded to:", "After winning how many rings with the Cavaliers?", 
"Joining Utah Jazz star player:", "Who had a season ending injury during 2017-2018 season just like:", 
"Who got traded to:", "After leaving which team:", "And which other All Star player:", 
"Who has been to the finals how many times:", "Just like 2018\’s MVP:", "Who has been an All Star how many times:", 
"Which is currently worn by:"];

let correctAnswers = ["nbalogo", "cavaliers", "lebronjames", "3", "chris paul", "hornets", "kembawalker", "jonathanisaac", 
"2017", "6", "markellefultz", "sixers", "bensimmons", "kyrieirving", "celtics", "1", "gordonhayward", "demarcuscousins", 
"warriors", "pelicans", "anthonydavis", "0", "jamesharden", "7", "carmeloanthony"];

var currentQuestion = 0;
var currentAnswer = 0; 

function nextQuestion() {
    $('#question').text(questions[currentQuestion]);
    currentQuestion++;
    currentAnswer++;
}

$(document).ready(function() {
    $("#next-question").click(function(e){
        $('#question').text(questions[currentQuestion]);
        currentQuestion++;
    });
    $(".col-sm-3").click(function(e){
        var id = $(this).attr("id");
        if(id==correctAnswers[currentAnswer]){
            nextQuestion();
        }
        console.log(id);
    });    
});