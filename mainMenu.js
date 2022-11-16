
//variables
var button1;
var button2;
var button3;
let screen = 0;

function setup() 
{
   mainMenu();
   button1.mousePressed(gotolink1);
   button2.mousePressed(gotolink2);
   button3.mousePressed(gotolink3);

}

function mainMenu()
{
   createCanvas(400, 400);
  //background color
   let c = color(215, 189, 226);
  background(c);
  let o = color(165, 105, 189);
  
  //main text
  fill(color(160, 64, 0));
  textSize(45);
  textFont('Serif');
  text('Rapid Recovery', 55, 140);
  
  //subheader
  
  textSize(17);
  textFont('Serif');
  text('Start your journey to better fine motor skills today!', 30, 172);
  
  //ask user
  textSize(14);
  textFont('serif');
  text('Which game would you like to play?', 100, 240);
  
  //create buttons
  button1 = createButton('Maze');
  button1.show();
  button1.style('background-color', o);
  button1.size(80, 40);
  button1.position(60, 260);

  button2 = createButton('Tracing');
  button2.show();
  button2.style('background-color', o);
  button2.size(80, 40);
  button2.position(160, 260);

  
  button3 = createButton('Tapping');
  button3.show();
  button3.style('background-color', o);
  button3.size(80, 40);
  button3.position(260, 260);

  
  button4 = createButton('Back to Home');
  button4.hide();
  button4.size(80, 30);
  button4.position(10, 20);
  button4.mousePressed(mainMenu);
  button4.hide();
  
  
  
}

function gotolink1() {
  window.open('https://editor.p5js.org/cnmoore4/sketches/TG5D_UWmQ');
}

function gotolink2() {
  window.open('https://editor.p5js.org/nkulka13/sketches/zdjAGq2z8');
}

function gotolink3() {
  window.open('https://editor.p5js.org/nkulka13/sketches/bFSVD7upO');
}
