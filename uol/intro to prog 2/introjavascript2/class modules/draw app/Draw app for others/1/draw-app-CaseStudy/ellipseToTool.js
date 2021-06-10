function EllipseToTool(){
    //just loading iconn image
	this.icon = "assets/ellipse.jpg";
    //naming
	this.name = "ellipseTo";
    //initial mouse coordinates. These coordinates means we have not started to draw the ellipse.
	var startMouseX = -1;
	var startMouseY = -1;
    
    // this varable is true while we draw the ellipse
	var drawing = false;

	this.draw = function(){
        //checking mouse pressed event
		if(mouseIsPressed){
            //if initial coordinate is -1, then we start to daraw. Else: we finish the ellipse
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
                //saving canvas image to memory
				loadPixels();
			}

			else{
                // loading canvas image from memory to the screen BEFORE drawing the ellipse. Saving-Loading canvas creates an effect of moving ellipse, so we can adjust the size.
				updatePixels();
                //if coordinates are NOT initial, then we draw the ellipse
                
				ellipse(startMouseX, startMouseY, abs(mouseX - startMouseX), abs(mouseY - startMouseY));
			}

		}
        //stop drawing ellipse
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}