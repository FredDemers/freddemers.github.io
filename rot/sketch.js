var x=0;
var y=0;
var vx=0;
var vy=0;

function setup() {
 createCanvas(windowWidth,windowHeight); 
}

function draw() {
 background(255);
 textSize(40);
 fill(133,236,112);
 text(floor("Rx: " + rotationX, 100, 100));
 text(floor("Ry: " + rotationY, 100, 150));
 text(floor("Rz: " + rotationZ, 100, 200));
}
 function drawEllipse(){
   ellipse(x,y,150,150);
 }
 