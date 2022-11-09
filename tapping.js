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
      //push/pop like stack
      circles.push(createVector(random(width), random(height)));
  }
 
}

function draw() {
   let c = color(215, 189, 226);

  background(c);
  
    if(score == 8)
      {
            textVisible = false;
            endScreen();
      }
 
  for(let p of circles)
    {
      let co = color(125, 60, 152);
      strokeWeight(5);
      stroke(color(160, 64, 0));
      fill(co);
      circle(p.x, p.y, diameter);
    }
  
  //display score while game is running
  if(textVisible)
  {
    strokeWeight(0);
    textSize(20);
      stroke('white');
      fill('white');
    text("Score: " + score, 10, 20);
  }

}


function endScreen()
{
  //display users' time and score + game over screen
  let c = color(215, 189, 226);
  background(c);
  noStroke();
  fill(color(160, 64, 0));
  textSize(50);
  textFont('Georgia');
  text('Game Over!', 60, 200);
  textSize(25);
  text('Your score: ' + score, 64, 230);
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
