function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
		
		for (var i = 0; i< spectrum.length; i++){
			var spec_Y = map(i, 0, spectrum.length, 0, height);
		    var spec_X = map(spectrum[i], 0, 255, 0, width);

			fill(spectrum[i], 255 - spectrum[i], 0)

		    rect(50, spec_Y + 200, spec_X, height / spectrum.length);
  		}
		  
		pop();
	};
}
