var rocket;
var thrust = false;
var moveRight = false;
var moveLeft = false;
var baseLine;

function setup()
{
	createCanvas(800, 600);
	var baseLine = height - 80;
	rocket = {
		x: width / 2 - 15,
		y: baseLine,
	};
}



function draw()
{

	if (thrust && rocket.y > 0)
	{
		rocket.y -= 3;
	}

	else if (rocket.y > baseLine)
	{
		rocket.y += 2;
	}


	if (moveLeft && rocket.x > 0 && rocket.y != baseLine)
	{
		rocket.x -= 2;
	}

	if (moveRight && rocket.x < width && rocket.y != baseLine)
	{
		rocket.x += 2;
	}

	background(0);
	fill(200);
	beginShape();
	vertex(rocket.x + 10, rocket.y + 60);
	vertex(rocket.x + 10, rocket.y + 20);
	vertex(rocket.x + 15, rocket.y);
	vertex(rocket.x + 20, rocket.y + 20);
	vertex(rocket.x + 20, rocket.y + 60);
	endShape(CLOSE);

	fill(255, 0, 0);
	beginShape();
	vertex(rocket.x, rocket.y + 60);
	vertex(rocket.x + 10, rocket.y + 40);
	vertex(rocket.x + 10, rocket.y + 60);
	endShape(CLOSE);

	beginShape();
	vertex(rocket.x + 30, rocket.y + 60);
	vertex(rocket.x + 20, rocket.y + 40);
	vertex(rocket.x + 20, rocket.y + 60);
	endShape(CLOSE);

	if (thrust)
	{
		fill(255, 150, 0);
		beginShape();
		vertex(rocket.x + 10, rocket.y + 60);
		vertex(rocket.x + 13, rocket.y + 80);
		vertex(rocket.x + 15, rocket.y + 70);
		vertex(rocket.x + 18, rocket.y + 80);
		vertex(rocket.x + 20, rocket.y + 60);
		endShape(CLOSE);
	}

}

function keyPressed()
{
	if (key == "W")
	{
		thrust = true;
	}

	if (key == "A")
	{
		moveLeft = true;
	}

	if (key == "D")
	{
		moveRight = true;
	}
}

function keyReleased()
{
	thrust = false;
	moveRight = false;
	moveLeft = false;

}