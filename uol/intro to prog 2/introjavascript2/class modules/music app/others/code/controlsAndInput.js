//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput(){
	
	this.menuDisplayed = false;
	
	//playback button displayed in the top left of the screen
	this.playbackButton = new PlaybackButton();

	//make the window fullscreen or revert to windowed
	
	this.mousePressed = function()
	{
		
		this.playbackButton.hitCheck();
		let fs = fullscreen();
		fullscreen(!fs);

		
		//???
		//check if the playback button has been clicked
		//if not make the visualisation fullscreen
	};

	//responds to keyboard presses
	//@param keycode the ascii code of the keypressed
	this.keyPressed = function(keycode){
			if(keycode == 32){
			this.menuDisplayed = !this.menuDisplayed; //32 = space bar
		}

		if(keycode > 48 && keycode < 58){
			var visNumber = keycode - 49; // 48 - 58 numbers 0 -9
			vis.selectVisual(vis.visuals[visNumber].name); 
		}
	};

	//draws the playback button and potentially the menu
	this.draw = function(){
		push();
		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(34);

		//playback button//Idee: Dropdown Menü über DOM
		this.playbackButton.draw();
		//only draw the menu if menu displayed is set to true.
		if(this.menuDisplayed){

			text("Select a visualisation:", 100, 30);
			this.menu();
		}	
		pop();

	};

	this.menu = function(){
		for(i = 0; i <vis.visuals.length; i++)
		{
			
			console.log(vis.visuals[i].name);	
			push();
			fill("white");
			stroke("black");
			strokeWeight(2);
			textSize(24);	

			for(var i = 0; i < vis.visuals.length; i++)
			{
				text(i + 1 + (". ") + vis.visuals[i].name, 100, 100 + i * 50);
			}
		}

		//draw out menu items for each visualisation
		//???
	};
}


