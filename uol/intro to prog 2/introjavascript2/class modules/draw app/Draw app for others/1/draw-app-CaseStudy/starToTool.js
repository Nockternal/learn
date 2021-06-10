function StarToTool(){
    //just loading iconn image
	this.icon = "assets/star.jpg";
    //naming
	this.name = "starTo";
    //initial mouse coordinates. These coordinates means we have not started to draw the star.
	var startMouseX = -1;
	var startMouseY = -1;
    var sizeX = 0;
    var sizeY = 0;
    
    
    // this varable is true while we draw the star
	var drawing = false;

	this.draw = function(){
        //checking mouse pressed event
		if(mouseIsPressed){
            //if initial coordinate is -1, then we start to daraw. Else: we finish the star
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
                //saving canvas image to memory
				loadPixels();
			}

			else{
                // loading canvas image from memory to the screen BEFORE drawing the star. Saving-Loading canvas creates an effect of moving star, so we can adjust the size.
				updatePixels();
                //if coordinates are NOT initial, then we draw the ellipse
                sizeX = abs(mouseX - startMouseX);
                sizeY = abs(mouseY - startMouseY);
                beginShape();
                vertex(startMouseX - sizeX/4, startMouseY - sizeY/4);
                vertex(startMouseX, startMouseY - sizeY);
                vertex(startMouseX + sizeX/4, startMouseY - sizeY/4);
                vertex(startMouseX + sizeX, startMouseY);
                vertex(startMouseX + sizeX/4, startMouseY + sizeY/4);
                vertex(startMouseX, startMouseY + sizeY);
                vertex(startMouseX - sizeX/4, startMouseY + sizeY/4);
                vertex(startMouseX - sizeX, startMouseY);
                endShape();
                
			}

		}
        //stop drawing star
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
            sizeX = 0;
            sizeY = 0;
		}
	};


}