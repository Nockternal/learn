/*

Officer: 3337827
CaseNum: 403-0-24077790-3337827

Case 403 - Surveillance - stage 1

We are on the lookout for the criminal mastermind known as Shiffman.
Our sources tell us that they are currently heading north on Meyers Way.
I need you to sound the alarm if he crosses Reynolds Street.

Shiffman's position is signified by the mouse. To sound the alarm - draw a SaddleBrown rectangle covering the entire map from Reynolds Street to the north.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  mouseX
  mouseY

  saddle brown = (139,69,19)
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
    if (mouseY < 581)
    {
      fill(139,69,19);
      rect(0,0,width,581)
    }



    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
