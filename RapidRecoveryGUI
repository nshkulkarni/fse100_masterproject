
//variables
var button1;
var button2;
var button3;
let screen = 0;
var bSize = 1;
var bSize2 = 2;
var bSize3 = 3;


function setup() 
{
  createCanvas(400, 400);
  
  //create buttons
  button1 = createButton('Maze');
  button1.style('background-color', 'gray');
  button1.size(80, 40);
  button1.position(60, 260);
  //button1.mousePressed(changeMode);

  button2 = createButton('Tracing');
  button2.style('background-color', 'gray');
  button2.size(80, 40);
  button2.position(160, 260);
  //button2.mousePressed(changeMode);
  
  button3 = createButton('Tapping');
  button3.style('background-color', 'gray');
  button3.size(80, 40);
  button3.position(260, 260);
  //button3.mousePressed(changeMode);

}

function draw() 
{
  //background color
  background('teal');
  
  //main text
  fill('white');
  textSize(45);
  textFont('Serif');
  text('Rapid Recovery', 55, 140);
  
  //subheader
  fill('white');
  textSize(17);
  textFont('Serif');
  text('Start your journey to better fine motor skills today!', 30, 172);
  
  //ask user
  fill('white');
  textSize(14);
  textFont('serif');
  text('Which game would you like to play?', 100, 240);
  
  switch(screen)
    {
      //menu
      case 0:
        
        break;
        
      //tapping game  
      case 1:
          button1.hide();
          button2.hide();
          button3.hide();
        
          background('purple');
          text('enter game 1 here!', 200, 200);
  
        break;
        
      case 2:
          button1.hide();
          button2.hide();
          button3.hide();
        
          background('orange');
          text('enter game 2 here!', 200, 200);
        
        break;
        
        case 3:
          button1.hide();
          button2.hide();
          button3.hide();
        
          background('blue');
         text('enter game 3 here!', 200, 200);
        
        break;
    }
}

function mousePressed()
{
    //FIXME--figure out how to link games between sketches
  screen++;
}
