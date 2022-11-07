var ballx = 200;
var bally = 200;
var ballSize = 150;
var smallCircle;
var largeCircle;
let timeLimit = 10;
let countDown;
var startBox;
var endBox;

function setup() {
  createCanvas(400, 400);
  frameRate(30);
  textSize(20);
  text("Trace the given shape", width/3.5, height-325);
  textSize(13);
  text("Start", 160, 105);
  text("End",213,105);
  largeCircle = circle(ballx, bally, ballSize*1.2);
  smallCircle = circle(ballx, bally, ballSize);
  fill("green");
  startBox = rect(193, 95, 5, 30);
  fill("red");
  endBox = rect(203, 95, 5, 30);
  }

function draw() {
  
  stroke(255);
  if (mouseIsPressed === true) {
    if((dist(mouseX,mouseY,ballx, bally) <= (ballSize*1.2)/2)&&             (dist(mouseX,mouseY,ballx, bally) >= (ballSize)/2))
    {
    strokeWeight(4);
    stroke("black");
    line(mouseX, mouseY, pmouseX, pmouseY);
    }
    else 
      {
        textSize(60);
        fill("red");
        text("Game Over", width/ 2-150, height/2);
      }
    if(mouseX > 203 && mouseX < 210 && mouseY > 110 && mouseY < 130)
      {
        textSize(75);
        fill("blue");
        text("You win!", width/2 -150, height/2);
      }
  }
}
 
