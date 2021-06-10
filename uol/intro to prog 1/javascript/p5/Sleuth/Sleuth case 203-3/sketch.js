/*
The case of the Python Syndicate
Stage 3


Officer: 3337827
CaseNum: 301-2-64643773-3337827

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Bones karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Bones karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var annaKarpinskiImg;
var pawelKarpinskiImg;
var countessHamiltonImg;
var cecilKarpinskiImg;
var bonesKarpinskiImg;
var linaLovelaceImg;

var bonesKarpinskiObj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	linaLovelaceImg = loadImage("lina.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bonesKarpinskiObj = {
		x: 408,
		y: 309,
		image: bonesKarpinskiImg
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiObj.image, bonesKarpinskiObj.x, bonesKarpinskiObj.y);

	//image(annaKarpinskiImg, 115, 40);
	//image(pawelKarpinskiImg, 408, 40);
	//image(countessHamiltonImg, 701, 40);
	//image(cecilKarpinskiImg, 115, 309);
	//image(linaLovelaceImg, 701, 309);

	image(annaKarpinskiImg, bonesKarpinskiObj.x-293, bonesKarpinskiObj.y-269);
	image(pawelKarpinskiImg, bonesKarpinskiObj.x, bonesKarpinskiObj.y-269);
	image(countessHamiltonImg, bonesKarpinskiObj.x+293, bonesKarpinskiObj.y-269);
	image(cecilKarpinskiImg, bonesKarpinskiObj.x-293, bonesKarpinskiObj.y);
	image(linaLovelaceImg, bonesKarpinskiObj.x+293, bonesKarpinskiObj.y);
	

}