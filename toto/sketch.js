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
  background(155);
  beginShape();
  for (var i = 0; i < touches.length; i++) {
    vertex(touches[i].x, touches[i].y);
  }
  endShape(CLOSE);
  fill(200, 115, 100);


  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 150, 150);
    var posx = floor(map(touches[i].x));
    var posy = floor(map(touches[i].y));
    text(posx, touches[i].x+10, touches[i].y-10);
    text(posy, touches[i].x+10, touches[i].y+10);
  }
}