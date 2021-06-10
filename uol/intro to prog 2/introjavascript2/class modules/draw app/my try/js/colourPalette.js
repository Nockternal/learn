//Displays and handles the colour palette.
function ColourPalette() {
	// Starting colorblack
	this.selectedColour = "#000000";
	
	this.loadColour = function() {
		
		this.selectedColour = this.pickMyColor()
		
	};
	// getting the element value, converting it and calling the setcolour
	this.pickMyColor = function() {
		var x = document.getElementById("myColor");
		var currentVal = x.value;
		this.selectedColour = this.hexToRgb(currentVal)
		this.setColour(this.selectedColour)
	}
	// convert Hex color value to RGB object
	this.hexToRgb = function(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		  } : null;
	}
	
	// setting the fill an stroke to the converted RGB
	this.setColour = function(colour) {
		var r = colour.r;
		var g = colour.g;
		var b = colour.b;
		fill(r,g,b);
		stroke(r,g,b);
	}
	this.loadColour();
}