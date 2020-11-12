/*

Officer: 3337827
CaseNum: 403-1-37910275-3337827

Case 403 - Stake out - stage 2

I've gotten hold of a hot tip that Shiffman is hiding out at Gates Mansion.
We've alerted the local precinct but they cannot act unless they know for certain that he's within 62 meters (pixels) of the spot.

Whenever Shiffman (signified by the mouse) is within 62 pixels of Gates Mansion - draw a Red ellipse with a radius of 62 around it.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  ellipse()
  dist()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    if (dist(mouseX, mouseY, 285, 300) <= 62)
    {
      fill(255,0,0);
      ellipse(284,300,62*2,62*2)
    }
    




    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
