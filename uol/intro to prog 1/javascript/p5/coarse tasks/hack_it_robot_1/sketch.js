const PI = 3.1415;
const PI2 = PI;
function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(6);

	//robots head
	fill(5,246,86);
	rect(100, 100, 300, 300, 100);


	//robots antenna
	//fill(250, 250, 0);
	//ellipse(250, 70, 60, 60);
	line(200,100,50,10)
	line(300,100,450,10)

	fill(200, 0, 200);
	rect(210, 80, 80, 30);

	//robots eyes
	fill(255,0,0);
	ellipse(175, 200, 80, 80);
	ellipse(175, 200, 60, 60);
	ellipse(175, 200, 40, 40);
	ellipse(175, 200, 20, 20);

	point(175, 200);
	ellipse(325, 200, 80, 80);
	ellipse(325, 200, 60, 60);
	ellipse(325, 200, 40, 40);
	ellipse(325, 200, 20, 20);
	point(325, 200);


	//robots nose
	fill(255, 255, 0);
	//triangle(250, 220, 200, 300, 300, 300);
	triangle(280, 230, 220, 230, 250, 300);

	//robots ears
	//rect(80, 180, 30, 100);
	//rect(390, 180, 30, 100);
	ellipse(100, 220, 40, 100);
	ellipse(400, 220, 40, 100);

	//robots mouth
	noFill();
	
	beginShape();
	vertex(175, 340);
	vertex(200, 370);
	//vertex(225, 340);
	//vertex(250, 370);
	//vertex(275, 340);
	vertex(300, 370);
	vertex(325, 340);
	endShape();
	fill(255, 255, 0)
    //arc / half ricle (x pos, y pos, 
    //                  width, heigh, 
    //                  fill from right, fill from left)
	arc(250, 370, 50, 50, TWO_PI, PI);
}