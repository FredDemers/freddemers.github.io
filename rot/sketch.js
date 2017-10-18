var x=0;
var y=0;
var vx=0;
var vy=0;
var devrotx, devroty, vmulti, vx, ax, px, vy, ay, py;

function setup() {
 createCanvas(windowWidth,windowHeight); 
   x = windowWidth/2;
   y= windowHeight/2;
   vmulti=0.01;
   
   
}

function draw() {

 background(255);
 textSize(40);
 fill(133,236,112);
 noStroke();
 text(floor("Rx: " + rotationX, 100, 100));
 text(floor("Ry: " + rotationY, 100, 150));
 text(floor("Rz: " + rotationZ, 100, 200));
 drawEllipse();
}
 function drawEllipse(){
   ellipse(x,y,150,150);
 }
 