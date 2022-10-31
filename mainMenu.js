
//variables
var button1;
var button2;
var button3;
let screen = 0;

function setup() 
{
   mainMenu();

}

function mainMenu()
{
   createCanvas(400, 400);
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
  
  //create buttons
  button1 = createButton('Maze');
  button1.show();
  button1.style('background-color', 'gray');
  button1.size(80, 40);
  button1.position(60, 260);
  button1.mousePressed(game1);

  button2 = createButton('Tracing');
  button2.show();
  button2.style('background-color', 'gray');
  button2.size(80, 40);
  button2.position(160, 260);
  button2.mousePressed(game2);
  
  button3 = createButton('Tapping');
  button3.show();
  button3.style('background-color', 'gray');
  button3.size(80, 40);
  button3.position(260, 260);
  button3.mousePressed(game3);
  
  button4 = createButton('Back to Home');
  button4.hide();
  button4.size(80, 30);
  button4.position(10, 20);
  button4.mousePressed(mainMenu);
  
  
  
}


function gameScreen()
{
  switch(screen)
    {
      //menu
      case 0:
        
        break;
        
      //tapping game  
      case 1:
        screen1();
  
        break;
        
      case 2:
        screen2();
        
        break;
        
        case 3:
          screen3();
        
        break;
    }
}

function screen1()
{
          button1.hide();
          button2.hide();
          button3.hide();
          button4.show();
        
          background('purple');
          text('enter game 1 here!', 200, 200);
}

function screen2()
{
          button1.hide();
          button2.hide();
          button3.hide();
          button4.show();
        
          background('purple');
          text('enter game 2 here!', 200, 200);
}

function screen3()
{
          button1.hide();
          button2.hide();
          button3.hide();
          button4.show();
        
          background('purple');
          text('enter game 3 here!', 200, 200);
}

function game1()
{
  clear();
  screen = 1;
  gameScreen();
}

function game2()
{
  clear();
  screen = 2;
  gameScreen();
}

function game3()
{
  clear();
  screen = 3;
  gameScreen();
}

