$(document).ready(function() {


// set initial global values 
var wins = 0;

var losses = 0;

var randomComputerNumber 

var userTotalScore

//functions 


//randomcompgenNumber
randomComputerNumber= function randomNum(19, 120){
    return math.round(math.random)()
  }

//pick random crystal values between 1-12

var crystal1Value= function randomNum(1,12){
    return math.round(math.random)()
}
crystal2Value= function randomNum(1,12){
    return math.round(math.random)()
}
crystal3Value= function randomNum(1,12){
    return math.round(math.random)()
}
crystal4Value= function randomNum(1,12){
    return math.round(math.random)()
}
//set user initial total score to 0
userTotalScore= 0

// update html to screen 
$("#winsTracker").html("Wins: " + wins);
$("#lossesTracker").html("Losses: " + losses);
$("#randomNumber").html(randomComputerNumber);
$("#yourTotalScore").html(yourTotalScore);
consoleLogVariables();
}
// check if user won or lost - if usertotalscore === randomcomputernumber, log a win

if (randomComputerNumber == userTotalScore) {
    console.log("you won");
}



