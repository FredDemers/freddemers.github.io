function preload() {
  img = loadImage('assets/dola.png');
}
var balls = [];
var grav;
var maxBalls = 150;
var score = 0;
var timer = 20;
//***************************************************
function setup() {
  angleMode(DEGREES)
  grav = 0.1;
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < maxBalls; i++) {
    balls[i] = new Ball();
    balls[i].init();
  }
  imageMode(CENTER);
}
//***************************************************
function draw() {
  background(0);
  for (var i = 0; i < maxBalls; i++) {
    balls[i].drawBall();
    ellipse()
  }
}
//***************************************************
function Ball() {



  this.init = function() {

    this.couleur = color(255, 255, 255, 150);
    this.posy = random(windowHeight, windowHeight);
    var dx= map(mouseX,0,windowWidth,random(0,0),random(windowWidth,windowWidth));
    this.posx = dx;
    this.taille = random(80, 100);
    this.speed = random(6, 10);
    this.vx = random(-5, 5);
    this.life = random(10, 100);
    this.lifeMax = this.life;
    this.rot = random(0,360);
    this.vy = random(map(mouseY,0,windowHeight,0,-5),-1);
    this.rotv = random(-7,7)
  }

  this.drawBall = function() {
   
    //fill(this.couleur);
    //noStroke(0);
    //ellipse(this.posx,this.posy,this.taille);
    push();
    translate(this.posx,this.posy);
    rotate(this.rot);
    image(img,0,0, this.taille,this.taille*0.43);
    pop();
    this.update();
   
  }
  this.update = function() {
    if (this.posy > windowHeight || this.life < 0) {
      this.init();
    }
    this.posx += this.vx;
    this.posy += this.vy * this.speed;
    this.speed -= grav;
    this.life--;
    this.rot += this.rotv;
    var cgreen = map(this.life, this.lifeMax, 0, 255, 0);
    var cblue = map(this.life, this.lifeMax, 0, 150, 0);
    var cred = map(this.life, this.lifeMax, 0, 255, 0);

    this.couleur = color(255, cgreen, cblue, 150);
  }
}
//***************************************************
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}