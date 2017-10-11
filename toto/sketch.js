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
  background(115);

  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 150, 150);
  beginShape();
  vertex(touches[1].x, touches[1].y);
  vertex(touches[2].x, touches[2].y);
  vertex(touches[3].x, touches[3].y);
  vertex(touches[4].x, touches[4].y);
  vertex(touches[5].x, touches[5].y);
  endShape(CLOSE);}
  
}