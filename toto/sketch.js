document.ontouchmove = function(event) {
  event.preventDefault();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  stroke(0);
  noFill();
  strokeWeight(5);
}

function draw() {
  background(255);
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
    text(posx, touches[i].x+100, touches[i].y-100);
    text(posy, touches[i].x+100, touches[i].y+100);
  }
}