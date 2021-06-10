function LineToTool(){
    //just loading iconn image
	this.icon = "assets/lineTo.jpg";
    //naming
	this.name = "LineTo";
    //initial mouse coordinates. These coordinates means we have not started to draw the line
	var startMouseX = -1;
	var startMouseY = -1;
    
    // this varable is true while we draw the line
	var drawing = false;

	this.draw = function(){
        //checking mouse pressed event
		if(mouseIsPressed){
            //if initial coordinate is -1, then we start to daraw. Else: we finish the line
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
                //saving canvas image to memory
				loadPixels();
			}

			else{
                // loading canvas image from memory to the screen BEFORE drawing the line. Saving-Loading canvas creates an effect of moving line, so we can adjust position of the line.
				updatePixels();
                //if coordinates are NOT initial, then we draw the line
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
        //stop drawing line
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
