var x = 0;
var y = 0;
var vx = 0;
var vy = 0;
var ax = 0;
var ay = 0;
var devrotx, devroty, vmulti;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;
  vmulti = 0.01;
  bmulti = 0.6;


}

function draw() {
  rot();
  move();
  info();
  drawEllipse();
}

function drawEllipse() {
  fill(133, 236, 112);
  noStroke();
  ellipse(x, y, 150, 150);
}

function rot() {
  devrotx = rotationX;
  devroty = rotationY;
}

function info() {
  textMode
  textSize(40);
  fill(0);
  text("Rx: " + rotationX, x+80, y-20);
  text("Ry: " + rotationY, x+80, y+20);
}

function move() {
  ax = devroty * vmulti;
  ay = devrotx * vmulti;

  vx += ax;
  vy += ay;

  x += vx;
  y += vy;
  
  if(x-75<0 || x+75>windowWidth){
    vx=-vx*bmulti;}
 if(y-75<0 || y+75>windowHeight){
    vy=-vy*bmulti;
  }
}