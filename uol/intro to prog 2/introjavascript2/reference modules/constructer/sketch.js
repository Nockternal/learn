var ball;
var cloud;
var bubbles = [];

// contructor function is used to create objects
function Bubble() {
  this.x = random(0,width);
  this.y = random(0,height);
  //method inside the contructor
  this.display = function() {
    stroke(180);
    noFill();
    ellipse(this.x, this.y,30,30)
  }
  this.move = function(){
    this.x = this.x +random(-1,1);
    this.y = this.y +random(-1,1);
  }
  this.increase =function(){
    this.x += 10;
    this.y += 10;
  }
}

function setup() {
  createCanvas(400, 400);
  
  //use constructer function
  for (var i = 0; i < 5; i++) {
    bubbles[i] = new Bubble();
  }

  // xxxx
  cloud = {
    x:50,
    y:50,
    draw: function(){
      fill(255,255,0)
      ellipse(this.x, this.y,100,50)
    }
  }
}

function draw() {
  background(220);
  fill(255,0,0);
  rect(100,100,200,200);

  fill(0,255,0);
  rect(150,150,100,100);

  fill(0,0,255);
  rect(175,175,50,50);
  cloud.draw()
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}


