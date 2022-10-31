var ready = -1;
var endMsg = "";
var c;

function setup() {
  createCanvas(600, 580);
  background(220);
  c = 'blue'
}
function draw() {
  var d = 220;
  // Reset background
	if(mouseX > 0 && mouseX < 120 && mouseY > 0 && mouseY < 30) {
    background(220)
  }
//entrance
noStroke();
  // Entrance Box
  textSize(20);
  fill('rgb(0,112,128)');
  rect(0,0, 120, 30);
  fill('rgb(203,206,250');
  text("Entrance", 20, 20);
//exit
  fill('rgb(104,26,26)');
  rect(530,0, 70, 30);
  fill(255);
  text("Exit", 550, 20);
  fill(0);
  // Big Walls
  rect(120, 0, 50, 200);
  rect(40, 70, 100, 40);
  rect(0, 150, 50, 40);
  rect(40, 150, 40, 150);
  rect(40, 350, 40, 150);
  rect(40, 470, 100, 40);
  rect(120, 350, 40, 160);
  rect(120, 160, 150, 40);
  rect(500, 0, 40, 400);
  rect(300, 260, 200, 40);
  rect(400, 360, 100, 40);
  rect(400, 460, 140, 40);
  rect(400, 460, 40, 140);
  rect(300, 360, 40, 300);
  rect(200, 260, 140, 40);
  rect(150, 350, 70, 40);
  rect(200, 350, 40, 300);
  rect(250, 0, 40, 100);
  rect(400, 0, 40, 200);
  rect(350, 100, 90, 40);

  fill(d);
  rect(0,560, 20, 20);
  
  //gameplay
  if(mouseX > 0 && mouseX < 120 && mouseY > 0 && mouseY < 30) {
    ready = 1;
    endMsg = "";
  }
  if(ready == 1) {
    strokeWeight(2);
    stroke('rgb(250,158,243)');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
//winner winner
  if(ready == 1 && mouseX > 530 && mouseX < 600 && mouseY > 0 && mouseY < 30) {
      endMsg = "You Win!";
    	c = '#009688';
    
  }
  //start
  if(ready == -1) {
    c = 'green';
    endMsg = "Start!";
  }
  	textSize(100);
    fill(c);
    text(endMsg, width/2-200, height/2);
  //loser L
  if(mouseX > width || mouseX < 0 || mouseY > height || mouseY < 2) {
  	ready = 0;
  	endMsg = "Try Again!";
    c = 'red'
  }
  if(mouseX == 0 && mouseY == 0)
    ready = -1;
 //rectangles
  if(mouseX > 120 && mouseX < 170 && mouseY > 50 && mouseY < 200) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 40 && mouseX < 140 && mouseY > 70 && mouseY < 110) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 0 && mouseX < 50 && mouseY > 150 && mouseY < 190) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 40 && mouseX < 80 && mouseY > 150 && mouseY < 300) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 40 && mouseX < 80 && mouseY > 350 && mouseY < 500) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 40 && mouseX < 140 && mouseY > 470 && mouseY < 510) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 120 && mouseX < 160 && mouseY > 350 && mouseY < 510) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 120 && mouseX < 270 && mouseY > 160 && mouseY < 200) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 500 && mouseX < 540 && mouseY > 0 && mouseY < 400) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 300 && mouseX < 500 && mouseY > 260 && mouseY < 300) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 400 && mouseX < 500 && mouseY > 360 && mouseY < 400) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 400 && mouseX < 540 && mouseY > 460 && mouseY < 500) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 400 && mouseX < 440 && mouseY > 460 && mouseY < 600) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 300 && mouseX < 340 && mouseY > 360 && mouseY < 660) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 200 && mouseX < 340 && mouseY > 260 && mouseY < 300) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 150 && mouseX < 220 && mouseY > 350 && mouseY < 390) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 200 && mouseX < 240 && mouseY > 350 && mouseY < 650) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 250 && mouseX < 290 && mouseY > 0 && mouseY < 100) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 400 && mouseX < 440 && mouseY > 0 && mouseY < 200) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  if(mouseX > 350 && mouseX < 440 && mouseY > 100 && mouseY < 140) {
  	ready = 0;
  	endMsg = "Try Again";
    c = 'red'
  }
  
}
