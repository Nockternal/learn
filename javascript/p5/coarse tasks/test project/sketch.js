//This is a simple template for you to experiment with

//This is a comment  ... the two slashes at the start mean that the computer ignores it

//You can look up more commands here ... https://p5js.org/reference/
/*
function setup()
{
    //this function runs once at the start of your program
    
    //this command creates a drawing area in the browser - it should only be called once
    createCanvas(500,500);
    
}

function draw()
{
    
    //this command clears the background to black (try changing the numbers)
    background(0,0,0);
    
    //change the fill color
    fill(255,0,0);
    
    //change the outline color
    //stroke(0,255,0);
    
    //this command draws a rectangle with the outline and fill colors that we just set
    rect(10,10,40,30);
    rect(10,50,40,50);
    rect(60,10,20,60);
    rect(60,80,60,20);
    rect(90,10,30,40);
    rect(90,60,30,10);
    rect(130,10,20,20);
    rect(130,40,20,60);
    
   background(0);
   fill(200,0,0);
   triangle(100,100,150,50,200,100);
    
}*/


function setup()
{
	createCanvas(500, 500);
}

function draw()
{
	background(0, 0, 0);
	noStroke();
	fill(220, 0, 220);
	rect(0, 0, mouseX, mouseX);

}

var a = 3;
a = a+5*2
console.log(a);
//console.log(10*10+1*3);
//console.log(10+100/(5+5));