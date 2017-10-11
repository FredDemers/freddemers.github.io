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
  background(200);

  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 150, 150);
  }
  beginShape();
  for (var j = 0; j < touches.length; j++) {
    vertex(touches[i].x, touches[i].y);
  }
  endShape(CLOSE);
}