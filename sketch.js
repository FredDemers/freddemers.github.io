var balls = [];
//***************************************************
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i=0; i<50; i++){
    balls[i] = new Ball();
    balls[i].init();
  }
}
//***************************************************
function draw() {
  background(0);
  for(var i=0; i<50; i++){
    balls[i].drawBall();
  }
}
//***************************************************
function Ball() {
  var ali = random(200)
    this.couleur = color(ali, ali, ali, 150);
  this.vx = 0;
  this.vy = -1;
this.posy= random(0,windowHeight);

  this.init = function(){
  this.posx = random(0, windowWidth);
  this.taille = random(5, 100);
  this.speed = random(3, 6);}

  this.drawBall = function() {
    fill(this.couleur);
    noStroke(0);
    rect(this.posx, this.posy, this.taille,this.taille);
    this.update();
  }
  this.update = function() {
    if(this.posy<0){
      this.posy=windowHeight;
      this.init();}
    this.posx += this.vx * this.speed;
    this.posy += this.vy * this.speed;
  }
}
//***************************************************
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
