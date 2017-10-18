var x = 0;
var y = 0;
var vx = 0;
var vy = 0;
var ax = 0;
var ay = 0;
var devrotx, devroty, vmulti, rando;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rando = random(0,255);
  x = windowWidth / 2;
  y = windowHeight / 2;
  vmulti = 0.01;
  bmulti = 0.6;
 background(255);

}

function draw() {
  clear;
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
  textSize(40);
  fill(0);
  text("X Rotation: " + rotationX +"°", x + 80, y - 20);
  text("Y Rotation: " + rotationY +"°", x + 80, y + 30);
}

function move() {
  ax = devroty * vmulti;
  ay = devrotx * vmulti;

  vx += ax;
  vy += ay;

  x += vx;
  y += vy;

  if (x - 75 < 0) {
    vx = -vx * bmulti;
    x = 0 + 75;
    background(rando,rando,rando)
  }
  if (x + 75 > windowWidth) {
    vx = -vx * bmulti;
    x = windowWidth - 75;
     background(rando,rando,rando)
  }

  if (y - 75 < 0) {
    vy = -vy * bmulti;
    y = 0 + 75;
     background(rando,rando,rando)
  }
  if (y + 75 > windowHeight) {
    vy = -vy * bmulti;
    y = windowHeight - 75;
     background(rando,rando,rando)
  }
}