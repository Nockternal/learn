/*

Officer: 3337827
CaseNum: 303-2-10937650-3337827

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is pressed:
	- Make secret_locker_combination0 equal to the value of mouseY
	- Use the 'max' function to prevent secret_locker_combination0 from falling below 2

	When the mouse button is pressed:
	- Increment secret_locker_combination1 by 2
	- Use the 'constrain' function to prevent secret_locker_combination1 from falling below 2 and going above 19

	When the mouse button is pressed:
	- Make secret_locker_combination2 equal to the value of mouseY
	- Use the 'max' function to prevent secret_locker_combination2 from falling below 2

	Whilst the mouse is moving:
	- Increment secret_locker_combination3 by 3
	- Use the 'min' function to prevent secret_locker_combination3 from going above 11

	Whilst the mouse is moving:
	- Make secret_locker_combination4 equal to the value of mouseX
	- Use the 'max' function to prevent secret_locker_combination4 from falling below 11



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var secret_locker_combination0;
var secret_locker_combination1;
var secret_locker_combination2;
var secret_locker_combination3;
var secret_locker_combination4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	secret_locker_combination0 = 0;
	secret_locker_combination1 = 0;
	secret_locker_combination2 = 0;
	secret_locker_combination3 = 0;
	secret_locker_combination4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mouseMoved()
{
	secret_locker_combination3 = min(secret_locker_combination3+=3 ,11);
	secret_locker_combination4 = max(secret_locker_combination4=mouseX,11);
}

function mousePressed()
{
	secret_locker_combination0 = max(secret_locker_combination0=mouseY,2);
	secret_locker_combination1 = constrain(secret_locker_combination1+=2, 2, 19);
	secret_locker_combination2 = max(secret_locker_combination2=mouseY,2);
}
///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,secret_locker_combination0, 18);
	pop();

	push();
	translate(120,380);
	drawDial(140,secret_locker_combination1, 25);
	pop();

	push();
	translate(280,170);
	drawDial(140,secret_locker_combination2, 14);
	pop();

	push();
	translate(280,380);
	drawDial(140,secret_locker_combination3, 16);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(secret_locker_combination4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
