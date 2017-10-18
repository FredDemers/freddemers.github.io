function setup() {
 createCanvas(windowWidth,windowHeight); 
}

function draw() {
 background(255);
 textSize(40);
 text(floor("Rx: " + rotationX, 100, 100));
 text(floor("Ry: " + rotationY, 100, 150));
 text(floor("Rz: " + rotationZ, 100, 200));
}