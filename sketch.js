function preload() {
  img = loadImage("assets/what.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#355c7d");
  imageMode(CENTER);
  angleMode(DEGREES);
  //colorMode(HSB);
}

let i = 0.0;
let a = 1.0;
let b = 0;

let c = 1.0;
let d = 0;

var eziorot = 0;

var rot = 0;
var rot2 = -10;
var rot3 = -20;
var rot4 = -30;
var rot5 = -40;
var rot6 = -50;
var rot7 = -60;
var rot8 = -70;
var rot9 = -80;
var speed = 1;

let scaleIMG = 1;
let scaleIMG2 = 1;
let scaleIMG3 = 1;
let scaleIMG4 = 1;
let scaleIMG5 = 1;

let y = frameCount;

function draw() {
  if (frameCount <= 225) {
    translate(width / 2, height / 2);
    let myColor = lerpColor(
      color("#355c7d"),
      color("#f8b195"),
      float(i / 100.0)
    );
    if (b <= 0) {
      i = i + a;
      if (i > 100) {
        a = -1.0;
      }
      if (i < 0) {
        a = 1.0;
        b = b + 1;
      }
    }

    fill(myColor);
    noStroke();
    rotate(frameCount * 20);
    rect(0, 0, 20, 50);

    textSize(20);
    text("         get ready to move your mouse", 10, 30);
    fill(0, 102, 153);
  }

  if (frameCount > 225) {
    clear();

    let myColor2 = lerpColor(
      color("#355c7d"),
      color("#f8b195"),
      float(i / 100)
    );

    background(myColor2);

    let myColor = lerpColor(color("#f8b195"), color("#355c7d"), float(i / 100));

    if (d <= 3) {
      i = i + c;
      if (i > 100) {
        c = -1.0;
      }
      if (i < 0) {
        c = 1.0;
        d = d + 1;
      }
    }

    strokeWeight(5);
    noFill();
    stroke(myColor);

    push();
    translate(width / 10, height / 2);
    rotate(rot + mouseY);
    line(0, 230, 0, -230);
    pop();

    push();
    translate((width / 10) * 2, height / 2);
    rotate(rot2 + mouseY);
    line(0, 230, 0, -230);
    pop();

    push();
    translate((width / 10) * 3, height / 2);
    rotate(rot3 + mouseY);
    line(0, 230, 0, -230);
    pop();

    push();
    translate((width / 10) * 4, height / 2);
    rotate(rot4 + mouseY);
    line(0, 230, 0, -230);
    pop();

    push();
    translate((width / 10) * 5, height / 2);
    rotate(rot5 + mouseY);
    line(0, 230, 0, -230);
    pop();

    push();
    translate((width / 10) * 6, height / 2);
    rotate(rot6 + mouseY);
    line(0, 230, 0, -230);
    pop();

    push();
    translate((width / 10) * 7, height / 2);
    rotate(rot7 + mouseY);
    line(0, 230, 0, -230);
    pop();

    push();
    translate((width / 10) * 8, height / 2);
    rotate(rot8 + mouseY);
    line(0, 230, 0, -230);
    pop();

    push();
    translate((width / 10) * 9, height / 2);
    rotate(rot9 + mouseY);
    line(0, 230, 0, -230);
    pop();
  }

  if (frameCount > 425) {
    translate(width / 2, height / 2);
    rotate(eziorot + mouseX);
    image(img, 0, 0, (width / 1000) * scaleIMG, scaleIMG);
    scaleIMG = 1 + (2 ^ (scaleIMG * 1.05));

    if (scaleIMG > 50000) {
      image(img, 0, 0, (width / 1000) * scaleIMG2, scaleIMG2);
      scaleIMG2 = 1 + (2 ^ (scaleIMG2 * 1.05));
    }

    if (scaleIMG2 > 50000) {
      image(img, 0, 0, (width / 1000) * scaleIMG3, scaleIMG3);
      scaleIMG3 = 1 + (2 ^ (scaleIMG3 * 1.05));
    }
    if (scaleIMG3 > 50000) {
      image(img, 0, 0, (width / 1000) * scaleIMG4, scaleIMG4);
      scaleIMG4 = 1 + (2 ^ (scaleIMG4 * 1.05));
    }
    if (scaleIMG4 > 50000) {
      image(img, 0, 0, (width / 1000) * scaleIMG5, scaleIMG5);
      scaleIMG5 = 1 + (2 ^ (scaleIMG5 * 1.05));
    }

    if (scaleIMG5 > 500000) {
      scaleIMG = 1000000;
      scaleIMG2 = 1000000;
      scaleIMG3 = 1000000;
      scaleIMG4 = 1000000;
      scaleIMG5 = 1000000;
    }
  }
}
