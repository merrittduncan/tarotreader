$(document).ready(function() {
    // register our function as the "callback" to be triggered by the form's submission event
    $("#cardSubmit").submit(drawCards); // in other words, when the form is submitted, fetchAndDisplayGif() will be executed
});

var CARDS = JSON.parse(CARDS);

function drawCards(quantity){
    var selection = [];
    for (i = 0; i < quantity; i++){
        selection.push(CARDS[Math.floor((Math.random() * 78) + 1)]);
    }
    return selection;
}

var spread = drawCards(5);

$(".cards").append(spread);

console.log("now");
