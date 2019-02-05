$(document).ready(function() {
    incorrect.play();
    var points = window.localStorage.getItem('points');
    var score = Math.floor((points/48)*100);
    $('#score').text("Your score: " + score + "%");
});