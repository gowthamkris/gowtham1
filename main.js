window.onload = init;
 

const MIN_X = 20;
const MIN_Y = 80;
const WIDTH = 400;
const HEIGHT = 400;
const MAX_X = MIN_X + WIDTH - 1;
const MAX_Y = MIN_Y + HEIGHT - 1;
 

var ballRadius = 30;
var ballSize = ballRadius*2 + 1;

var ballCenterX = (WIDTH - 2*ballSize)*Math.random() + (MIN_X + ballSize);
var ballCenterY = (HEIGHT - 2*ballSize)*Math.random() + (MIN_Y + ballSize);

var ballSpeedX = 8;
var ballSpeedY = 6;
 
function init() {
   var box = document.getElementById("box");
   
   box.style.left = (MIN_X - 5) + "px";  
   box.style.top = (MIN_Y - 5) + "px";
   box.style.width = WIDTH + "px";
   box.style.height = HEIGHT + "px";
 
   var balls = document.getElementsByClassName("ball");
   
   balls[0].style.left = (ballCenterX - ballRadius) + "px";
   balls[0].style.top  = (ballCenterY - ballRadius) + "px";
   balls[0].style.width = ballSize + "px";
   balls[0].style.height = ballSize + "px";
 
   moveOneStep();
}
 
function moveOneStep() {
   
   ballCenterX += ballSpeedX;
   ballCenterY += ballSpeedY;
  
   if (ballCenterX - ballRadius < MIN_X) {
      ballSpeedX = -ballSpeedX; 
      ballCenterX = MIN_X + ballRadius; 
   } else if (ballCenterX + ballRadius > MAX_X) {
      ballSpeedX = -ballSpeedX;
      ballCenterX = MAX_X - ballRadius;
   }
  
   if (ballCenterY - ballRadius < MIN_Y) {
      ballSpeedY = -ballSpeedY;
      ballCenterY = MIN_Y + ballRadius;
   } else if (ballCenterY + ballRadius > MAX_Y) {
      ballSpeedY = -ballSpeedY;
      ballCenterY = MAX_Y - ballRadius;
   }
 
   var balls = document.getElementsByClassName("ball");
   balls[0].style.left = (ballCenterX - ballRadius) + "px";
   balls[0].style.top  = (ballCenterY - ballRadius) + "px";
 
   
   setTimeout("moveOneStep()", 60);
}
