function LineToTool(){
	//icon file, name
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	//draw drunction to draw line to the screen
	this.draw = function(){
		//draw if mouse is pressed
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//save current pixels
				loadPixels();
			}
			
			else{
				//update the screen with the saved pixls to hide any previous line between mouse pressed and released
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
