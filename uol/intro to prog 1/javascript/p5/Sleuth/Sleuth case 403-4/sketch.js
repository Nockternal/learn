/*

Officer: 3337827
CaseNum: 403-3-92850554-3337827

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Adele Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 277 meters from Kay Twin's Hideout then alert local police by drawing a YellowGreen circle around it with a radius of 277 pixels.
- if Shiffman is in Central Station then the neighbourhood watch must be notified by drawing a DarkGoldenrod rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a Lime rectangle covering the area between Gates Avenue, Ada Avenue, Adele Street and Crowther Road.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()
YellowGreen (154,205,50)
DarkGoldenrod (184,134,11)
Lime(0,255,0)
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
    if(dist(mouseX, mouseY, 254, 429) < 277)
    {
      fill(154,205,50);
      ellipse(254, 429,277*2,277*2);
    };
    if((mouseX > 596 && mouseX < 760)&&(mouseY > 665 && mouseY < 787))
    {
      fill(184,134,11);
      rect(596,665,164,122);
    };
   
    if(!(dist(mouseX, mouseY, 285, 300) <= 277)&&!((mouseX > 596 && mouseX < 760)&&(mouseY > 665 && mouseY < 787)))
    {
      fill(0,255,0);
      rect(1955,331,933,532);
    };
    

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
