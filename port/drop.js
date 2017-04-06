// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI


function Drop() {
    this.x = random(0, windowWidth);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 1, 20);

    this.fall = function() {
        this.y = this.y + this.yspeed;
        var grav = map(this.z, 0, 20, 0, 0.2);
        this.yspeed = this.yspeed + grav;

        if (this.y > windowHeight) {
            this.y = random(-200, -100);
            this.x = random(0, windowWidth);
            this.yspeed = map(this.z, 0, 20, 4, 10);
        }
    }

    this.show = function() {
        var thick = map(this.z, 0, 20, 1, 3);
        strokeWeight(thick);
        stroke(87, 80, 150);
        line(this.x, this.y, this.x, this.y + this.len);
    }
}
