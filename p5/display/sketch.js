var opt1;
var opt2;
//--------guide = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
var btn_option1 = [28, 28, 3, 6, 7, 7, 10, 11, 7, 13, 15, 16, 17, 18, 18, 20, 20, 20, 19, 27, 24, 22, 25, 24, 26, 0, 0, 20, 0];
var btn_option2 = [2, 28, 4, 8, 5, 9, 8, 12, 5, 14, 15, 16, 17, 18, 18, 21, 21, 21, 19, 27, 24, 20, 20, 24, 26, 0, 0, 21, 0];
var lines = [];
var maxLine = 2;
var windowW;
var windowH;
var texte = "";
var stage = 0;
var gamepos;
var balls = [];
var maxBalls1 = 30;
var maxBalls2 = 300;
var maxBalls3 = 3000
var fire = [];
var maxFire = 50;
var grav;
var stop;
var fetti;
var fetti2;
var fetti3;
var fire1;
var imgg;
var water = [];
var fire2 = [];
var grav;
var maxFire2 = 500;
var firer;

function preload() {
  img = loadImage('1.jpg')
}

function setup() {
  windowW = windowWidth - 10;
  windowH = windowHeight / 1.5;
  createCanvas(windowW, windowH);
  angleMode(DEGREES)
  grav = 0.1;

  for (var x = 0; x < maxFire2; x++) {
    fire2[x] = new Fire2();
    fire2[x].init();
  }

  for (var z = 0; z < 500; z++) {
    water[z] = new Water();
    water[z].init();
  }
  /*
  for (var i = 0; i < maxBalls1; i++) {
    balls[i] = new Ball();
    balls[i].init();
  }
  for (var a = 0; a < maxBalls2; a++) {
    balls[a] = new Ball();
    balls[a].init();
  }
  */
  for (var b = 0; b < maxBalls3; b++) {
    balls[b] = new Ball();
    balls[b].init();
  }

  for (var c = 0; c < maxFire; c++) {
    fire[c] = new Fire();
    fire[c].init();
  }


  for (var j = 0; j < maxLine; j++) {
    lines[j] = new Line();
    lines[j].init();
  }
  fetti = false;
  fetti2 = false;
  fetti3 = false;
  fire1 = false;
  imgg = false
  water1 = false;
  firer = false;
  updateGame();
}

function draw() {
  background(0);
  displayTxt();
  for (var i = 0; i < maxLine; i++) {
    lines[i].drawLine();
  }

  if (fetti) {
    for (var a = 0; a < maxBalls1; a++) {
      balls[a].drawBall();
    }
  }
  if (fetti2) {
    for (var b = 0; b < maxBalls2; b++) {
      balls[b].drawBall();
    }
  }
  if (fetti3) {
    for (var c = 0; c < maxBalls3; c++) {
      balls[c].drawBall();
    }
  }
  if (fire1) {
    for (var d = 0; d < maxFire; d++) {
      fire[d].drawfire();
    }
  }
  if (imgg) {
    imageMode(CENTER)
    image(img, windowW / 2, windowH / 2);
  }
  if (water1) {
    for (var z = 0; z < 500; z++) {
      water[z].drawWater();
    }
  }
  if (firer) {
    for (var x = 0; x < maxFire2; x++) {
      fire2[x].drawfire2();
    }
  }

}

function Ball() {

  this.init = function() {

    this.couleur = color(random(0, 255), random(0, 255), random(0, 255));
    this.posy = random(0, windowHeight);
    this.posx = random(0, windowW);
    this.taille = random(8, 10);
    this.speed = random(6, 10);
    this.vx = random(-5, 5);
    this.life = random(10, 100);
    this.lifeMax = this.life;
    this.rot = random(0, 360);
    this.vy = 0.5;
    this.rotv = random(-7, 7)
  }

  this.drawBall = function() {

    fill(this.couleur);
    noStroke(0);
    push();
    translate(this.posx, this.posy);
    rotate(this.rot);
    rect(0, 0, this.taille, this.taille * 0.43);
    pop();
    this.update();

  }

  this.update = function() {
    if (this.posy > windowHeight) {
      this.posy = 0;

      //this.posy = random(0, windowHeight);
      this.posx = random(0, windowW);
      this.taille = random(8, 10);
      this.speed = random(6, 10);
      this.vx = random(-5, 5);
    }
    this.posx += this.vx;
    this.posy += this.vy * this.speed;
    this.life--;
    this.rot += this.rotv;

  }
}

function Fire() {



  this.init = function() {

    this.couleur = color(255, 255, 255, 150);
    this.posy = random(windowH, windowH);
    this.posx = random(windowW / 2, windowW / 2);
    this.taille = random(50, 150);
    this.speed = random(4, 10);
    this.vx = random(-1, 1);
    this.life = random(10, 60);
    this.lifeMax = this.life;
    this.vy = -1;
  }

  this.drawfire = function() {
    fill(this.couleur);
    noStroke(0);
    rect(this.posx, this.posy, this.taille, this.taille);
    this.update();
  }

  this.update = function() {
    if (this.posy > windowH || this.life < 0) {
      this.init();
    }
    this.posx += this.vx;
    this.posy += this.vy * this.speed;
    this.speed -= grav;
    this.life--;
    var cgreen = map(this.life, this.lifeMax, 0, 255, 0);
    var cblue = map(this.life, this.lifeMax, 0, 150, 0);
    var cred = map(this.life, this.lifeMax, 0, 255, 0);
    this.couleur = color(255, cgreen, cblue, 150);
  }
}

function Line() {

  this.init = function() {
    this.posx = 0;
    this.posx2 = windowW;
    this.posy = random(0, windowH)
    this.coulor = color(25, 121, 2);
    this.speed = 6;
    //this.life = random(700, 800);
  }
  this.drawLine = function() {
    stroke(this.coulor);
    line(0, this.posy, windowW, this.posy)
    this.update();
  }

  this.update = function() {
    this.posy += this.speed;
    this.life--;
    if (this.posy > windowH || this.life < 0) {
      this.posy = random(-200, 0);
      //this.life = random(700, 800);
    }
  }

}

function Water() {
  var ali = random(200)
  this.couleur = color(ali, 255, 255, 150);
  this.vx = 0;
  this.vy = 1.5;
  this.posy = random(0, windowHeight);

  this.init = function() {
    this.posx = random(0, windowWidth);
    this.taille = random(5, 10);
    this.speed = random(7, 9);
    this.life = random(10, 60);
  }

  this.drawWater = function() {
    fill(this.couleur);
    noStroke(0);
    ellipse(this.posx, this.posy, this.taille);
    this.update();
  }
  this.update = function() {
    if (this.posy > windowHeight || this.life < 0) {
      this.posy = -20;
      this.init();
    }
    this.posx += this.vx * this.speed;
    this.posy += this.vy * this.speed;
    this.life--;
  }
}

function Fire2() {

  this.init = function() {

    this.couleur = color(255, 255, 255, 150);
    this.posy = random(windowH, windowH);
    this.posx = random(0, windowW);
    this.taille = random(50, 150);
    this.speed = random(4, 10);
    this.vx = random(-1, 1);
    this.life = random(10, 60);
    this.lifeMax = this.life;
    this.vy = -1;
  }

  this.drawfire2 = function() {
    fill(this.couleur);
    noStroke(0);
    rect(this.posx, this.posy, this.taille, this.taille);
    this.update();
  }

  this.update = function() {
    if (this.posy > windowH || this.life < 0) {
      this.init();
    }
    this.posx += this.vx;
    this.posy += this.vy * this.speed;
    this.speed -= grav;
    this.life--;
    var cgreen = map(this.life, this.lifeMax, 0, 255, 0);
    var cblue = map(this.life, this.lifeMax, 0, 150, 0);
    var cred = map(this.life, this.lifeMax, 0, 255, 0);
    this.couleur = color(255, cgreen, cblue, 150);
  }
}

function clickOpt2() {
  stage = btn_option2[stage];
  updateGame();
}

function clickOpt1() {
  stage = btn_option1[stage];
  updateGame();
}

function displayTxt() {
  var myString = texte.substr(0, texte.length - stop);
  textAlign(CENTER);
  textFont("Georgia");
  textSize(40);
  fill(25, 121, 2);
  text(myString, 0, 100, windowW);
  if (stop > 0) stop--;
}

function updateGame() {

  switch (stage) {
    case 0:
      texte = "Hello\n / \nBonjour";
      opt1 = "Hello";
      opt2 = "Bonjour";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      fire1 = false;
      firer = false;
      break;

    case 2:
      texte = "Bien venue à mon display";
      opt1 = "Ses tout?";
      opt2 = "Que est tu?";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      fetti = true
      break;

    case 3:
      texte = "…Tiens t'est contant?";
      opt1 = "Non, plus!";
      opt2 = "Oui";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      fetti = false;
      fetti2 = true;
      break;

    case 6:
      texte = "Ses tu ca ce que tu voulait?!";
      opt1 = "Non, encore plus!";
      opt2 = "Oui, merci";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      fetti2 = false;
      fetti3 = true;
      break;

    case 10:
      texte = "uh oh...";
      opt1 = "Quoi?";
      opt2 = "Est tu ok?";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      fetti3 = false;
      break;

    case 15:
      texte = "On à possiblement un problème... \n trop de confetti";
      opt1 = "Peux tu l'éteindre?  ";
      opt2 = "Le feu n’est pas si gros…";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      fire1 = true;
      break;

    case 20:
      texte = "Laissent moi asseyez quelque chose...";
      opt1 = "C’as tu fonctionner?";
      opt2 = "Que as tu utiliser?";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      water1 = true;
      fire1 = false;
      break;

    case 21:
      texte = "T’as raisons, ses actuellement un peux confortable. \n J'ai j'aimais ressenti de la chaleur come ceci...";
      opt1 = "Vois, c’est pas ci male";
      opt2 = "On devrait probablement éteindre le feu maintenant";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      break;

    case 24:
      texte = "Oh non... \n c'étais du gaz";
      opt1 = "!#@?&";
      opt2 = "*@($&";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      water1 = false;
      firer = true;
      break;

    case 22:
      texte = "C’est tu juste moi ou il fait chaud ici...";
      opt1 = "Non, ses juste toi?";
      opt2 = "Tu veux peut-être éteindre le feu";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      break;

    case 25:
      texte = "Non! Ok c'est pas juste moi, \n j'ai besoins de faire un reset là";
      opt1 = "RESET";
      opt2 = "RESET";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      fire1=false;
      firer = true;
      break;

    case 26:
      texte = "Pas besoin de paniquer, \n je vais faire un reset";
      opt1 = "RESET";
      opt2 = "RESET";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      break;

    case 4:
      texte = "Je suis un ordinateur avec une intelligence artificielle";
      opt1 = "Que peux tu faite?";
      opt2 = "Tu ne sembles pas trop intelligent...";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      fetti = false;
      break;

    case 5:
      texte = "Ses pas ma faute que j’étais crée par un étudiant dans la première année des Communication multimédia";
      opt1 = "Que peux tu faire?";
      opt2 = "Ses qui?";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      break;

    case 7:
      texte = "Que veux tu que je fassent?";
      opt1 = "Peux tu me faire une omelette?";
      opt2 = "Fait une calculassions pour moi!";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      break;

    case 11:
      texte = "Je peux asseyez... \n Uh oh";
      opt1 = "Quoi?";
      opt2 = "Est tu ok?";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      break;


    case 16:
      texte = "Je pense que j'ai bruler mes œufs...";
      opt1 = "Peux tu l'éteindre?";
      opt2 = "Le feu n’est pas si gros…";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      fire1 = true;
      break;


    case 12:
      texte = "Vraiment? Je suis un ordinateur avec de l'intelligence artificielle et tu veux que je fassent une simple calculassions? \n Ok Ses ton choix, 1843832x8271763 est... \n Uh oh";
      opt1 = "Quoi?";
      opt2 = "Est tu ok?";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      break;


    case 17:
      texte = "Je savais qu’un processeur crée dune patate n'étais pas une bonne idée!";
      opt1 = "Peux tu l'éteindre?";
      opt2 = "Le feu n’est pas si gros…";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      fire1 = true;
      break;


    case 9:
      texte = "Frédéric Demers. \n Veux tu le voir?";
      opt1 = "Oui, as tu une photo?";
      opt2 = "Non, pas vraiment?";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      break;


    case 14:
      texte = "Oh well, le voici hehehe";
      opt1 = "Très dole";
      opt2 = "T'as tu même une vrais photo de lui?"
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      imgg = true;
      break;


    case 13:
      texte = "Le voici hehehe";
      opt1 = "Très dole";
      opt2 = "T'as tu même une vrais photo de lui?";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      imgg = true;
      break;


    case 18:
      texte = "Laissent moi voir si je peux rentrer sur son facebook pour prendre une photo. \n Uh oh...";
      opt1 = "Quoi?";
      opt2 = "Est tu ok??";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      imgg = false;
      break;

    case 19:
      texte = "Il avait un fire wall";
      opt1 = "Beaux jeux de mots";
      opt2 = "T’es tu un comédien toi?";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      fire1 = true;
      break;

    case 27:
      texte = "Pas mal comique non? \n Mais sérieusement, je suis en feu...";
      opt1 = "Peux tu l'éteindre?";
      opt2 = "Le feu n’est pas si gros…";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      break;

    case 8:
      texte = "Bon, laissent moi me présenter. \n Je suis un ordinateur avec une intelligence artificielle";
      opt1 = "Que peux tu faite?";
      opt2 = "Tu ne sembles pas trop intelligent...";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      fetti2 = false;
      fetti3 = false;
      break;

    case 28:
      texte = "SytanxError:Version 'English' is not supported";
      opt1 = "RESET";
      opt2 = "RESET";
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      break;

  }

  stop = texte.length;

}

function windowResized() {
  resizeCanvas(windowWidth - 10, windowHeight / 1.5);
  windowW = windowWidth;
  windowH = windowHeight;

  for (var x = 0; x < maxFire2; x++) {
    fire2[x] = new Fire2();
    fire2[x].init();
  }

  for (var z = 0; z < 500; z++) {
    water[z] = new Water();
    water[z].init();
  }

  for (var b = 0; b < maxBalls3; b++) {
    balls[b] = new Ball();
    balls[b].init();
  }

  for (var c = 0; c < maxFire; c++) {
    fire[c] = new Fire();
    fire[c].init();
  }

}