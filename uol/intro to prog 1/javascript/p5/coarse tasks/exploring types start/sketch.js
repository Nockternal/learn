var myStr = "Hello world";
var myNumber = 1234.56;
var myBool = true;

function setup()
{
	createCanvas(500, 500);
}



function draw()
{
	background(200);
	textAlign(CENTER, CENTER);
	textSize(14);
	fill(0);
	text("myStr = " + myStr + " - is a " + typeof(myStr), width / 2, height / 2 - 30);
	text("myNumber = " + myNumber + " - is a " + typeof(myNumber), width / 2, height / 2);
	text("myBool = " + myStr + " - is a " + typeof(myBool), width / 2, height / 2 + 30);

}