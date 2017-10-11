document.ontouchmove = function(event) {
    event.preventDefault();
  }
  /*var dummy = [];
  var dummyMax;*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  /*dummyMax = random(1, 4);
  for (var i = 0; i < dummyMax; i++){
    dummy[i] = new Object;
    dummy[i].x=random(0,windowWidth);
    dummy[i].y=random(0,windowWidth);*/

ellipseMode(CENTER);
stroke(0);
noFill();
strokeWeight(5);
}

function draw() {
  background(0);
  beginShape();
  for (var i = 0; i < touches.length; i++) {
    vertex(touches[i].x, touches[i].y);
  }
  endShape(CLOSE);
  fill(200, 115, 100);


  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 150, 150);
    var posx = floor(touches[i].x);
    var posy = floor(touches[i].y);
    textSize(70);
    text("posX:"+posx, touches[i].x + 75, touches[i].y - 25);
    text("posY:"+posy, touches[i].x + 75, touches[i].y + 50);
  }
}