function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";
    
    //to draw straight lines we'll draw a line from the start mouse click location
	//to the current mouse release location. The following values store
	//the location from the last mouse click and drawing that is used to render the line while pressed.
    // They are -1 to start and drawing is false because we haven't started drawing yet.

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){
        //check if startMouseX is -1. set them to the current
			//startMouse X and Y if it is. Also set drawing to true and load pixels 
            //to start modifying frames

		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}
            
            //else keep updating frame with the new line starting from 
            //where mouse started to current location

			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
        
        //if the user has released the mouse we want to set the startMouse values 
		//back to -1 and set drawing to false.

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
