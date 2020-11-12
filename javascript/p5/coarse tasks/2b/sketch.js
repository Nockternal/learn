/*

The Game Project

2b - using variables

*/

var floorPos_x;
var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain_x;
var mountain_y;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height-(height/6); //NB. we are now using a variable for the floor position
	floorPos_x = 0;
	collectable = 0;
	mountain_x = 0;
	mountain_y = 0;
	cloud = 0;
	canyon = 0;

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
	console.log(treePos_x, "\t-\t",treePos_y);
	
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	
	//rect(0, 432, 1024, 144); //draw some green ground
	rect(floorPos_x, floorPos_y, width, height-(height/4)); //draw some green ground
	// cloud

	fill(255,255,255);
	ellipse(cloud+220,150,100,80);
	ellipse(cloud+170,150,70,50);
	ellipse(cloud+270,150,70,50);

	//mountain
	fill(100,120,100);
	triangle(mountain_x+530,mountain_y+250,mountain_x+450,mountain_y+480,mountain_x+600,mountain_y+480);
	triangle(mountain_x+430,mountain_y+320,mountain_x+350,mountain_y+480,mountain_x+500,mountain_y+480);
	triangle(mountain_x+630,mountain_y+320,mountain_x+550,mountain_y+480,mountain_x+700,mountain_y+480);

	//3. a tree
	//... add your code here
	fill(139,69,19);
	//rect(900,300,15,132);
	rect(treePos_x+188,treePos_y+60,15,132);
	fill(100,120,100);			
	triangle(treePos_x+195,treePos_y-38,treePos_x+158,treePos_y+62,treePos_x+238,treePos_y+62);
	triangle(treePos_x+195,treePos_y-48,treePos_x+168,treePos_y+12,treePos_x+228,treePos_y+12);

	//triangle(907,250,870,350,950,350);
	
	//triangle(907,240,880,300,940,300);
	

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here
	fill(100, 155, 255);
	rect(canyon+150,floorPos_y,30,80);
	fill(0,0,250);
	rect(canyon+150,floorPos_y+20,30,80);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
	fill(255,255,0);
	ellipse(collectable+420,floorPos_y-10,20,20);

	// game charater

	// head
	fill(255,222,173);
	ellipse(gameChar_x, gameChar_y-58,17,17);
	// torso top
	fill(0,0,255);
	rect(gameChar_x-10, gameChar_y-50,20,20);
	// torso bot
	fill(255,0,0);
	rect(gameChar_x-10, gameChar_y-30,20,10);
	// left leg
	fill(255,222,173);
	rect(gameChar_x-7, gameChar_y-20,5,20);
	// right leg
	fill(255,222,173);
	rect(gameChar_x+2, gameChar_y-20,5,20);
	// left shoulder
	fill(0,0,255);
	rect(gameChar_x-18, gameChar_y-50,8,8);
	// right shoulder
	fill(0,0,255);
	rect(gameChar_x+10, gameChar_y-50,8,8);
	// left arm
	fill(255,222,173);
	rect(gameChar_x-17, gameChar_y-42,5,15);
	// right arm
	fill(255,222,173);
	rect(gameChar_x+12, gameChar_y-42,5,15);

	


}

function mousePressed()
{
	gameChar_x = mouseX;
	gameChar_y = mouseY;

}
