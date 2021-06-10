
//var flying_saucer
var flying_saucers = []

function setup() {
  createCanvas(1200, 1200);
  noStroke();
  flying_saucer = new Flying_saucer();
  for(var i=0; i<5; i++){
    flying_saucers.push(new Flying_saucer( 100 + i * 250, 100 ))
  }
  // object functions
  /*
  flying_saucer = {
    x:200,
    y:150,
    width:200,
    height:50,
    window_width: 0.95,
    window_height: 0.85,
    base_height:0.45,
    num_lights:20,
    brightness:[],
    beam_on:false,
    hover: function(){
      this.x += random(-1,1);
      this.y += random(-0.5,0.5);
    },
    beam: function(){
      fill(255,255,100,100);
      if(random()>0.5){
        beginShape();
        vertex(this.x-this.width*0.05, this.y+10)
        vertex(this.x+this.width*0.05, this.y+10)
        vertex(this.x+this.width*0.25, height-100)
        vertex(this.x-this.width*0.25, height-100)
        endShape();
      }
    },
    show: function(){
      fill(175,238,238);
      arc(flying_saucer.x,
        flying_saucer.y,
        flying_saucer.width/2 * flying_saucer.window_width,
        flying_saucer.height*2 * flying_saucer.window_height,
        PI,TWO_PI);
      fill(150);
      arc(flying_saucer.x,flying_saucer.y,flying_saucer.width,flying_saucer.height,PI,TWO_PI);
      fill(175,238,238);
      arc(flying_saucer.x,
        flying_saucer.y,
        flying_saucer.width/4 * flying_saucer.window_width,
        flying_saucer.height * flying_saucer.window_height,
        0,PI);
      fill(50);
      arc(flying_saucer.x,
        flying_saucer.y,
        flying_saucer.width,
        flying_saucer.height * flying_saucer.base_height,
        0,PI);
      fill(255);
    }

  }
  
  for (var i=0; i<flying_saucer.num_lights; i++){
    flying_saucer.brightness.push((i*30)%255);
  }
  */
}

function draw() {
  background(50,0,80);
  //draw ground
  fill(0,50,0);
  rect(0, height - 100, width, 100);

  for (var i= 0; i < flying_saucers.length; i++){
    //draw beam if key is pressed
    if(flying_saucers[i].beam_on){
      flying_saucers[i].beam();
    }
    //draw flying saucer
    flying_saucers[i].hover();
    flying_saucers[i].draw();
    flying_saucers[i].lights();
  }
  
  
  
  //key press functions 
}
function keyPressed(){
  flying_saucers[0].beam_on=true;

}
function keyReleased(){
  flying_saucers[0].beam_on=false;
}

function Flying_saucer(x,y){
  this.x=x,
  this.y=y,
  this.width=200,
  this.height=50,
  this.window_width= 0.95,
  this.window_height= 0.85,
  this.base_height=0.45,
  this.num_lights=20,
  this.brightness=[],
  this.beam_on=false,
  this.hover= function(){
    this.x += random(-1,1);
    this.y += random(-0.5,0.5);
    if(!this.beam_on && random() > 0.98){
      this.beam_on = true
    }
    else if (this.beam_on && random() > 0.95){
      this.beam_on = false
    }
  },
  this.beam= function(){
    fill(255,255,100,100);
    if(random()>0.5){
      beginShape();
      vertex(this.x-this.width*0.05, this.y+10)
      vertex(this.x+this.width*0.05, this.y+10)
      vertex(this.x+this.width*0.25, height-100)
      vertex(this.x-this.width*0.25, height-100)
      endShape();
    }
  },
  this.draw = function(){
    fill(175,238,238);
    arc(this.x,
      this.y,
      this.width/2 * this.window_width,
      this.height*2 * this.window_height,
      PI,TWO_PI);
    fill(150);
    arc(this.x,this.y,this.width,this.height,PI,TWO_PI);
    fill(175,238,238);
    arc(this.x,
      this.y,
      this.width/4 * this.window_width,
      this.height * this.window_height,
      0,PI);
    fill(50);
    arc(this.x,
      this.y,
      this.width,
      this.height * this.base_height,
      0,PI);
    fill(255);
    for (var i=0; i<this.num_lights; i++){
      this.brightness.push((i*30)%255);
    }
  },
  this.lights = function(){
    var incr = this.width/9;

  for(var i= 0;i < 10; i++)
  {
    fill(this.brightness[i])
    ellipse(
      this.x - this.width/2 +incr *i,
      this.y,5)
      this.brightness[i] += 5;
      this.brightness[i] = this.brightness[i]%255
  }
  }
}