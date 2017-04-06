var balls = [];
//***************************************************
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    rectMode(CENTER);
    for (var i = 0; i < 60; i++) {
        balls[i] = new Ball();
        balls[i].init();
    }
}
//***************************************************
function draw() {
    clear();
    for (var i = 0; i < 60; i++) {
        balls[i].drawBall();
    }
}
//***************************************************
function Ball() {
    var ali = random(100)
    this.couleur = color(ali, ali, ali, 150);
    this.vx = 0;
    this.vy = -1;
    this.posy = random(0, windowHeight);

    this.init = function() {
        this.posx = random(0, windowWidth);
        this.taille = random(5, 100);
        this.speed = random(3, 6);
    }
    this.rotv = random(-3, 3)
    this.rot = random(0, 360);

    this.drawBall = function() {
        push();
        translate(this.posx, this.posy);
        rotate(this.rot);
        fill(this.couleur);
        noStroke(0);
        rect(0, 0, this.taille, this.taille);
        pop();
        this.update();
    }

    this.update = function() {
        if (this.posy < 0) {
            this.posy = windowHeight;
            this.init();
        }
        this.posx += this.vx * this.speed;
        this.posy += this.vy * this.speed;
        this.rot += this.rotv;
    }
}
//***************************************************
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
