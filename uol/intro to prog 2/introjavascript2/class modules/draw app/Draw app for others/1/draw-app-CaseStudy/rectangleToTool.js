function RectangleToTool(){
    //just loading iconn image
	this.icon = "assets/rectangle.jpg";
    //naming
	this.name = "rectangleTo";
    //initial mouse coordinates. These coordinates means we have not started to draw the rectangle
	var startMouseX = -1;
	var startMouseY = -1;
    var startPointX = -1;
    var startPointY = -1;
    
    // this varable is true while we draw the rectangle
	var drawing = false;

	this.draw = function(){
        //checking mouse pressed event
		if(mouseIsPressed){
            //if initial coordinate is -1, then we start to daraw. Else: we finish the rectangle
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
                //saving canvas image to memory
				loadPixels();
			}

			else{
                // loading canvas image from memory to the screen BEFORE drawing. Saving-Loading canvas creates an effect of moving the rectangle, so we can adjust position.
				updatePixels();
                //if coordinates are NOT initial, then we draw the rectangle
                if (mouseX > startMouseX){
                    startPointX = startMouseX
                    }
                else{
                    startPointX = mouseX;
                    }
                if(mouseY > startMouseY){
                    startPointY = startMouseY;
                    }
                else{
                    startPointY = mouseY;
                    }
                
				rect(startPointX, startPointY, abs(mouseX - startMouseX), abs(mouseY - startMouseY));
			}

		}
        //stop drawing 
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
            startPointX = -1;
            startPointY = -1;
		}
	};


}