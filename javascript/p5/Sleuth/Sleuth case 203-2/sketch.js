/*
The case of the Python Syndicate
Stage 2


Officer: 3337827
CaseNum: 301-1-90241190-3337827

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Cecil karpinski

- The variables for Cecil karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Cecil karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var rockyKrayImage;
var annaKarpinskiImage;
var robbieKrayImage;
var cecilKarpinskiImage;
var linaLovelaceImage;
var bonesKarpinskiImage;


var cecilKarpinskiLocationX = 115;
var cecilKarpinskiLocationY = 309;



function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rockyKrayImage = loadImage("krayBrothers1.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	linaLovelaceImage = loadImage("lina.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiImage, cecilKarpinskiLocationX, cecilKarpinskiLocationY);

	image(rockyKrayImage, cecilKarpinskiLocationX, cecilKarpinskiLocationY-269);
	image(annaKarpinskiImage, cecilKarpinskiLocationX+293, cecilKarpinskiLocationY-269);
	image(robbieKrayImage, cecilKarpinskiLocationX+586, cecilKarpinskiLocationY-269);
	image(linaLovelaceImage, cecilKarpinskiLocationX+293, cecilKarpinskiLocationY);
	image(bonesKarpinskiImage, cecilKarpinskiLocationX+586, cecilKarpinskiLocationY);

}