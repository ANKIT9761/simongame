var buttonColor=["red","blue","green","yellow"];
var userClickedPattern=[];
var gamePattern=[];
var levelCount=0;
var started=false;
$(document).keypress(function(){
  if(!started){
levelCount=0;
gamePattern=[];
    started=true;
    newSequence();
  }

});
function newSequence(){
  userClickedPattern=[];
  levelCount+=1;
  $("h1").text("Level "+levelCount);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColor=buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
console.log(gamePattern);
}
$(".btn").click(function(){
  var clickedButton=this.getAttribute("id");
  playSound(clickedButton);
  animatePress(clickedButton);
  userClickedPattern.push(clickedButton);
  checkAnswer();
  console.log(userClickedPattern);
});
function playSound(key){
  var sound="sounds/"+key+".mp3";
  var aud=new Audio(sound);
  aud.play();
}
function animatePress(id){
  console.log(id);
  $("#"+id).addClass("pressed");
  setTimeout(function(){
$("#"+id).removeClass("pressed");
},100);

}
function checkAnswer() {
  if (userClickedPattern[userClickedPattern.length-1]!=gamePattern[userClickedPattern.length-1]){
    $("h1").text("Game over Press Any Key to Start");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },100);
    playSound("wrong");
    started=false;

  }
  if (userClickedPattern.length==gamePattern.length){
    newSequence();
  }
}
