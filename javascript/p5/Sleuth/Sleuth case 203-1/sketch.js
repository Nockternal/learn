/*
The case of the Python Syndicate
Stage 1

Officer: 3337827
CaseNum: 301-0-67353680-3337827

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var bones_karpinski_image;
var lina_lovelace_image;
var rocky_kray_image;
var robbie_kray_image;
var pawel_karpinski_image;
var countess_hamilton_image;



//declare your new variables below
var lina_lovelace_x_pos = 408;
var lina_lovelace_y_pos = 40;
var bones_karpinski_x_pos = 115;
var bones_karpinski_y_pos = 40;
var rocky_kray_x_pos = 701;
var rocky_kray_y_pos = 40;
var robbie_kray_x_pos = 115;
var robbie_kray_y_pos = 309;
var pawel_karpinski_x_pos = 408;
var pawel_karpinski_y_pos = 309;
var countess_hamilton_x_pos = 701;
var countess_hamilton_y_pos = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bones_karpinski_image = loadImage("karpinskiDog.png");
	lina_lovelace_image = loadImage("lina.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	countess_hamilton_image = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(lina_lovelace_image, lina_lovelace_x_pos, lina_lovelace_y_pos);

	image(bones_karpinski_image, bones_karpinski_x_pos, bones_karpinski_y_pos);
	image(rocky_kray_image, rocky_kray_x_pos, rocky_kray_y_pos);
	image(robbie_kray_image, robbie_kray_x_pos, robbie_kray_y_pos);
	image(pawel_karpinski_image, pawel_karpinski_x_pos, pawel_karpinski_y_pos);
	image(countess_hamilton_image, countess_hamilton_x_pos, countess_hamilton_y_pos);

}