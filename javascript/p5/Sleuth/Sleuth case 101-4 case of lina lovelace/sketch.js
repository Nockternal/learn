/*

Officer: 3337827
CaseNum: 101-3-94423456-3337827

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a Goldenrod filled rectangle with a Blue Violet outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Medium Blue filled
rectangle with a Medium Turquoise outline around him.

Identify the man reading the newspaper by drawing a Sandy Brown filled rectangle
with a Medium Purple outline around him.

Identify the woman with the dog by drawing a Navy filled rectangle with a
Midnight Blue outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
	
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	
	stroke(138,43,226);
	fill(218,165,32);
	rect(95, 151, 102, 208);

	stroke(72, 209, 204);
	fill(0, 0, 205);
	rect(1155, 252, 129, 174);

	fill(244, 164, 96); 
	stroke(147, 112, 219); 
	rect(777, 210, 166, 331);

	stroke(25, 25, 112);
	fill(0, 0, 128);
	rect(945, 128, 151, 329);

}
