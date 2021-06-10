/*
The case of the Python Syndicate
Stage 4

Officer: 3337827
CaseNum: 301-3-47866142-3337827

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var bones_karpinski_image;
var rocky_kray_image;
var countess_hamilton_image;
var pawel_karpinski_image;
var anna_karpinski_image;
var lina_lovelace_image;

var countess_hamilton_object;


//declare your new objects below
var bones_karpinski_object;
var rocky_kray_object;
var pawel_karpinski_object;
var anna_karpinski_object;
var lina_lovelace_object;

var countess_hamilton_coordinate_x = 701;
var countess_hamilton_coordinate_y = 40;
var bones_karpinski_coordinate_x = 115;
var bones_karpinski_coordinate_y = 40;
var rocky_kray_coordinate_x = 408;
var rocky_kray_coordinate_y = 40;
var pawel_karpinski_coordinate_x = 115;
var pawel_karpinski_coordinate_y = 309;
var anna_karpinski_coordinate_x = 408;
var anna_karpinski_coordinate_y = 309;
var lina_lovelace_coordinate_x = 701;
var lina_lovelace_coordinate_y = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bones_karpinski_image = loadImage("karpinskiDog.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	lina_lovelace_image = loadImage("lina.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	countess_hamilton_object = {
		x: countess_hamilton_coordinate_x,
		y: countess_hamilton_coordinate_y,
		image: countess_hamilton_image
	};



	//define your new objects below
	bones_karpinski_object = {
		x: bones_karpinski_coordinate_x,
		y: bones_karpinski_coordinate_y,
		image: bones_karpinski_image
	};
	rocky_kray_object = {
		x: rocky_kray_coordinate_x,
		y: rocky_kray_coordinate_y,
		image: rocky_kray_image
	};
	pawel_karpinski_object = {
		x: pawel_karpinski_coordinate_x,
		y: pawel_karpinski_coordinate_y,
		image: pawel_karpinski_image
	};
	anna_karpinski_object = {
		x: anna_karpinski_coordinate_x,
		y: anna_karpinski_coordinate_y,
		image: anna_karpinski_image
	};
	lina_lovelace_object = {
		x: lina_lovelace_coordinate_x,
		y: lina_lovelace_coordinate_y,
		image: lina_lovelace_image
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bones_karpinski_object.image, bones_karpinski_object.x, bones_karpinski_object.y);
	image(rocky_kray_object.image, rocky_kray_object.x, rocky_kray_object.y);
	image(countess_hamilton_object.image, countess_hamilton_object.x, countess_hamilton_object.y);
	image(pawel_karpinski_object.image, pawel_karpinski_object.x, pawel_karpinski_object.y);
	image(anna_karpinski_object.image, anna_karpinski_object.x, anna_karpinski_object.y);
	image(lina_lovelace_object.image, lina_lovelace_object.x, lina_lovelace_object.y);


}