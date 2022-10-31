//variables
var radius = 20;
var diameter = radius * 2;
var score = 0;
var circles = [];
var tappedCircle = null;
var textVisible = true;

var button1;


function setup() {
  createCanvas(400, 400);
    
  for(let i = 0; i < 8; i++)
  {
      //push new drawing state
      //push/pop like a stack
      circles.push(createVector(random(width), random(height)));
  }
 
}

function draw() {
  background(220);
  
    if(score == 8)
      {
            textVisible = false;
            endScreen();
      }
 
  //enhanced for loop
  for(let p of circles)
    {
      stroke('white');
      fill('green');
      circle(p.x, p.y, diameter);
    }
  
  //display score while game is running
  if(textVisible)
  {
    textSize(20);
    text("Score: " + score, 10, 20);
  }

}


function endScreen()
{
  //display users' time and score + game over screen
  background('green');
  noStroke();
  fill('white');
  textSize(50);
  textFont('Georgia');
  text('Game Over!', 60, 200);
  textSize(25);
  text('Your score: ' + score, 64, 230);
  
  //FIX ME--create button that goes back to homescreen
  button1 = createButton('Back to Home');
  textFont('Georgia');
  button1.style('background-color', 'white');
  button1.position(10, 20);
}

function mouseClicked()
{
  //decrement number of circles, remove circles from array
  for(let i = circles.length - 1; i >= 0; --i)
    {
       if(isMouseInCircle(circles[i], radius))
       {
          //splice function will remove circle element from array 'circles'
          tappedCircle = circles.splice(i, 1);
          score+=1;
       }
    }
}

function isMouseInCircle(position, radius)
{
  //check if cursor is inside of the circle
  return dist(mouseX, mouseY, position.x, position.y) < radius
}