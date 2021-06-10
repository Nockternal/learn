var groundHeight;
var mountain1;
var mountain2;

var tree;

var moon;
var sun;
var darkness;



function setup()
{
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight - 150,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 120,
		canopyHeight: 100
	};

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80,
		maxHeight:groundHeight-330,
		minHeight:groundHeight+40
	};
    
    //TASK: intialise a moon object with an extra property for brightness
	moon = {
		x: 730,
		y: groundHeight + 40,
		diameter: 50,
		maxHeight:groundHeight-330,
		minHeight:groundHeight+40
	};

	//set the initial darkness
	darkness = 0;

	//troubleshooting section
	console.log(moon.maxHeight);
	console.log(moon.y);


}



function draw()
{
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.
	
	
	sun.y = min(sun.y+1,sun.minHeight);
	moon.y = max(moon.y-1, moon.maxHeight);
	darkness = min(darkness+1,180)
	//darkness = min(darkness+1,180);
	//darkness = min(darkness-1,180);
	
	
	//draw the sky
	background(150, 200, 255);
	noStroke();

	//draw the sun
	fill(255, 255, 0);
	ellipse(sun.x, sun.y, sun.diameter);
    
	//TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour
	fill(255, 255, 255);
	ellipse(moon.x, moon.y, moon.diameter);

	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    
	//TASK: You can draw the tree yourself
	fill(210,105,30);
	rect(tree.x, tree.y, tree.trunkWidth, tree.trunkHeight);
	fill(34,139,34);
	ellipse(tree.x+20, tree.y,tree.canopyWidth,tree.canopyHeight)
    
	
	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	//Use the alpha value of fill to determine how dark to make it
	fill(100,100,100,darkness);
	rect(0,0,width,height);

}

function mousePressed()
{
	console.log("mousePressed");
	sun.y = min(sun.y+1,sun.minHeight);
	moon.y = max(moon.y-1, moon.maxHeight);
	darkness = min(darkness+1,180)
}

function keyPressed()
{
	console.log("keyPressed");
	sun.y = min(sun.y-1,sun.minHeight);
	moon.y = max(moon.y+1, moon.maxHeight);
	darkness = min(darkness-1,180)
	
}