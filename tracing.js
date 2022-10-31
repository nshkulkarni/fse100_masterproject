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
  let timer = int(millis() / 1000);
  countDown = timeLimit - timer;
  if (countDown < 0)
  {
    countDown = 0;
    textSize(32);
    text("Game Over", width/ 2-50, height/2);
  }
  
  textSize(24);
  fill(0,102,153);
  text("Time: " + timer, 30, 380);
  fill(0);
  stroke(255);
  if (mouseIsPressed === true) {
    if((dist(mouseX,mouseY,ballx, bally) <= (ballSize*1.2)/2)&&             (dist(mouseX,mouseY,ballx, bally) >= (ballSize)/2))
    {
    strokeWeight(4);
    stroke("black");
    line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
}
