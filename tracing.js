var ballx = 200;
var bally = 200;
var ballSize = 150;
var smallCircle;
var largeCircle;
let timeLimit = 10;
let countDown;

function setup() {
  createCanvas(400, 400);
  frameRate(30);
  textSize(20);
  text("Trace the given shape", width/3.5, height-325);
  text("Score: ", width/50, height-370);
  largeCircle = circle(ballx, bally, ballSize*1.2);
  smallCircle = circle(ballx, bally, ballSize);
  
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
        text("Game Over", width/ 2-50, height/2);
      }
  }
}
