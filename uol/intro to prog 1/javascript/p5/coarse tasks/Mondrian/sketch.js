function setup()
{
	//create a large square canvas
	createCanvas(1600, 1600);
}

function draw()
{

	//set the fill colour to red
	
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	//rect(100, 50, 600, 600);
	
	//red box
	fill(255, 0, 0);
	rect(100,100,400,400);
    // blue box
	fill(0, 0, 255);
    rect(100,500,400,500);
	//green box
	fill(0, 255, 0);
	rect(500,100,300,600);
	//yellow box
	fill(255, 255, 0);
	rect(500,700,700,300);
	//pink box
	fill(255, 0, 255);
	rect(800,100,400,500);
	//teal box
	fill(0, 255, 255);
	rect(800,600,400,100);
	//gray box
	fill(100, 100, 100);
	rect(1200,100,300,300);
	//beige box
	fill(200, 200, 200);
	rect(1200,400,300,600);

}