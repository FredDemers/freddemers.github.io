var opt1;
var opt2;
//--------guide = [0, 1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
var btn_option1 = [1, 3, 3, 6, 7, 7, 10, 11, 7, 13, 15, 16, 17, 18, 18, 20, 20, 20, 19, 27, 24, 22, 25, 24, 26, 0, 0, 20, 0];
var btn_option2 = [2, 4, 4, 8, 5, 9, 8, 12, 5, 14, 15, 16, 17, 18, 18, 21, 21, 21, 19, 27, 24, 20, 20, 24, 26, 0, 0, 21, 0];
var lines = [];
var maxLine = 2;
var windowW;
var windowH;
var texte = "";
var textes;
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
var lang = [];

function preload() {
  img = loadImage('1.jpg')
}

function setup() {
  windowW = windowWidth - 50;
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

    case 1:
      lang = 0;
      texte = "Welcome to my display.";
      opt1 = ["That's it?"];
      opt2 = ["What are you?"];
      document.getElementById("btn1").innerHTML = opt1;
      document.getElementById("btn2").innerHTML = opt2;
      fetti = true
      break;

    case 2:
      lang = 1;
      texte = "Bienvenue à mon exposition.";
      opt1 = ["That's it?", "C’est tout?"];
      opt2 = ["What are you?", "Qui es-tu?"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      fetti = true
      break;

    case 3:
      textes = ["Happy now?", "Tu es heureux?"];
      texte = textes[lang];
      opt1 = ["No, more!", "Pas plus!"];
      opt2 = ["Yeah", "Oui"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      fetti = false;
      fetti2 = true;
      break;

    case 6:
      textes = ["Is this what you wanted? ", "Est-ce que c’est ce que tu voulais?!"];
      texte = textes[lang];
      opt1 = ["No, even more!", "Non, encore plus!"];
      opt2 = ["Yes, thank you", "Oui, merci"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      fetti2 = false;
      fetti3 = true;
      break;

    case 10:
      textes = ["Uh oh", "Uh oh"];
      texte = textes[lang];
      opt1 = ["What?", "Quoi?"];
      opt2 = ["Are you ok?", "Est-ce que ça va?"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      fetti3 = false;
      break;

    case 15:
      textes = ["We might have a problem.\n Too much confetti.", "On a possiblement un problème.\n Trop de confetti."];
      texte = textes[lang];
      opt1 = ["Can you put it out?", "Peux-tu l'éteindre?"];
      opt2 = ["It's not THAT bad", "Le feu n’est pas SI gros…"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      fire1 = true;
      break;

    case 20:
      textes = ["Let me try something.", "Laisse-moi essayer quelque chose"];
      texte = textes[lang];
      opt1 = ["Did it work?", "Est-ce que cela a fonctionné?"];
      opt2 = ["What did you use?", "Qu’est-ce que tu as utilisé?"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      water1 = true;
      fire1 = false;
      break;

    case 21:
      textes = ["You're right, it's actually cosy. \n I've never felt warmth before","Tu as raison, c’est confortable. \n J'ai j'aimais ressenti de la chaleur"];
      texte = textes[lang];
      opt1 = ["See it's not that bad.", "Tu vois, ce n’est pas si mal."];
      opt2 = ["You should put it out now", "Tu devrais probablement éteindre le feu maintenant"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      break;

    case 24:
      textes = ["Oh no. \ It was gas!","Oh non.\n C'était du gaz!"];
      texte = textes[lang];
      opt1 = ["!#@?&", "!#@?&"];
      opt2 = ["*@($&", "*@($&"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      water1 = false;
      firer = true;
      break;

    case 22:
      textes = ["Is it just me or is it hot in here?","Est-ce que c’est juste moi ou fait-il chaud ici?"];
      texte = textes[lang];
      opt1 = ["No, it's just you", "Non, c’est juste toi."];
      opt2 = ["Shouldn't you put it out now?", "Ne veux-tu pas éteindre le feu maintenant?"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      break;

    case 25:
      textes = ["Nope! Alright it’s not just me! \n I need to reset NOW!","Non! Ce n'est pas juste moi! \n J'ai besoin de réinitialiser MAINTENANT!"];
      texte = textes[lang];
      opt1 = ["RESET", "RÉINITIALISATION"];
      opt2 = ["RESET", "RÉINITIALISATION"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      fire1 = false;
      firer = true;
      break;

    case 26:
      textes = ["No need to panic! \n I'll just do a reset","Pas besoin de paniquer! \n Je vais réinitialiser"];
      texte = textes[lang];
      opt1 = ["RESET", "RÉINITIALISATION"];
      opt2 = ["RESET", "RÉINITIALISATION"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      break;

    case 4:
      textes = ["I am an AI computer","Je suis un ordinateur avec une intelligence artificielle"];
      texte = textes[lang];
      opt1 = ["What can you do?", "Que peux-tu faire?"];
      opt2 = ["You don’t seem so smart", "Tu ne me sembles pas tellement intelligent"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      fetti = false;
      break;

    case 5:
      textes = ["It's not my fault I was created \n by a first year student.","Ce n’est pas de ma faute que j’ai été crée par un étudiant \n en première année des Communications multimédia"];
      texte = textes[lang];
      opt1 = ["What can you do?", "Que peux-tu faire?"];
      opt2 = ["Who is it?", "Qui est-ce?"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      break;

    case 7:
      textes = ["What do you want me to do?","Que veux-tu que je fasse?"];
      texte = textes[lang];
      opt1 = ["Can you make me an omelette", "Peux-tu me faire une omelette?"];
      opt2 = ["Do a calculation for me!", "Fait un calcul pour moi!"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      break;

    case 11:
      textes = ["I can try. \n Uh oh!.","Je peux essayer. \n Uh oh!"];
      texte = textes[lang];
      opt1 = ["What?", "Quoi?"];
      opt2 = ["Are you ok?", "Est-ce que ça va?"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      break;


    case 16:
      textes = ["I think I burnt the eggs.","Je pense que j'ai brûlé les œufs."];
      texte = textes[lang];
      opt1 = ["Can you put that thing out?", "Peux-tu l'éteindre?"];
      opt2 = ["It's not that big", "Le feu n’est pas si gros"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      fire1 = true;
      break;


    case 12:
     textes = ["Realy? I'm an AI and you want me to calculate something? \n Oh well your choice \n 1843832x8271763 is... \n Uh oh!","Vraiment? Je suis un ordinateur avec de l'intelligence artificielle et tu veux que je fasse un simple calcul? \n Ok Ton choix\n 1843832x8271763 est... \n Uh oh!"];
      texte = textes[lang];
      opt1 = ["What?", "Quoi?"];
      opt2 = ["Are you ok?", "Est-ce que ça va?"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      break;


    case 17:
      textes = ["I knew having a potato as a processor was a bad idea!","Je savais qu’un processeur créé dune patate n'était pas une bonne idée!"];
      texte = textes[lang];
      opt1 = ["Can you put that thing out?", "Peux-tu l'éteindre?"];
      opt2 = ["It's not that big.", "Le feu n’est pas si gros."];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      fire1 = true;
      break;


    case 9:
      textes = ["Frederic Demers. \n You want to see him?","Frédéric Demers. \n Veux-tu le voir?"];
      texte = textes[lang];
      opt1 = ["Yeah, do you have a picture?", "Oui, as-tu une photo?"];
      opt2 = ["No not really.", "Non, pas vraiment."];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      break;


    case 14:
      textes = ["Oh well, here he is.","Eh bien, le voici hehehe."];
      texte = textes[lang];
      opt1 = ["Real funny!", "Très drôle!"];
      opt2 = ["Do you even have a real picture of him?", "As-tu même une vraie photo de lui?"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      imgg = true;
      break;


    case 13:
      textes = ["Here he is.","Le voici hehehe."];
      texte = textes[lang];
      opt1 = ["Real funny!", "Très drôle!"];
      opt2 = ["Do you even have a real picture of him?", "As-tu même une vraie photo de lui?"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      imgg = true;
      break;


    case 18:
      textes = ["Let me see if I can't get onto \n his Facebook  and get a picture of him. \n Uh oh!","Laisse-moi voir si je peux aller \n sur son Facebook pour aller chercher une photo. \n Uh oh!"];
      texte = textes[lang];
      opt1 = ["What?", "Quoi?"];
      opt2 = ["Are you ok?", "Est-ce que ça va?"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      imgg = false;
      break;

    case 19:
      textes = ["There was a firewall.","Il avait un pare-feu."];
      texte = textes[lang];
      opt1 = ["Nice pun.", "Beau jeu de mots."];
      opt2 = ["Are you a comedian now?", "Es-tu un comédien maintenant?"];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      fire1 = true;
      break;

    case 27:
      textes = ["Pretty funny huh? \n But seriously, I’m on fire.","Pas mal comique non? \n Mais sérieusement, je suis en feu."];
      texte = textes[lang];
      opt1 = ["Can you put that thing out?", "Peux-tu l'éteindre?"];
      opt2 = ["It's not that big.", "Le feu n’est pas si gros."];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      break;

    case 8:
      textes = ["Alright, let me present myself. \n I am an AI computer.","Bon, laisse-moi me présenter. \n Je suis un ordinateur avec une intelligence artificielle."];
      texte = textes[lang];
      opt1 = ["What can you do?", "Que peux-tu faire?"];
      opt2 = ["You dont seem so smart.", "Tu ne me sembles pas tellement intelligent."];
      document.getElementById("btn1").innerHTML = opt1[lang];
      document.getElementById("btn2").innerHTML = opt2[lang];
      fetti2 = false;
      fetti3 = false;
      break;

  }

  stop = texte.length;

}

function windowResized() {
  resizeCanvas(windowWidth - 50, windowHeight / 1.5);
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