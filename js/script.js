let questions = ["Who won last Eastern Conference Finals?", "Led by who?", "Who has how many rings?", "Which is currently worn by:", 
"Who was drafted by:", "Who’s Point Guard is:", "Who also drafted:", "Who went to school with:", "Who was traded to the Pacers from:", 
"Where he was teammates with former MVP:", "Who was teammates in UCLA with:", "Who was traded from:", "Where he played how many years:", 
"Which is the same number of rings *answer* has:", "Who had the youngest MVP ever:", "But not unanimous like:", "Who’s splash brother is:", 
"Who went to Washington State like:", "Who grew up in Australia like:"];

let correctAnswers = ["nbalogo", "cavaliers", "lebronjames", "three", "chrispaul", "hornets", "kembawalker", "codyzeller", 
"victoroladipo", "thunder", "russellwestbrook", "kevinlove", "timberwolves", "six", "bulls", "derrickrose", "stephencurry",
"klaythompson", "aronbaynes", "bensimmons"];

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