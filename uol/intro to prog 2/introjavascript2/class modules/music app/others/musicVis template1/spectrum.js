function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();	

		for (var i = 0; i < spectrum.length; i++){
			var y = map(i, 0, spectrum.length, 0, height);
			var w = width + map(spectrum[i], 0, 255, 0, width);	
			rect(-width, y, w, height/spectrum.length);

			var g = map(spectrum[i], 0, 255, 255, 0);
			fill(spectrum[i], g, 0);
  		}
		
		pop();
	};
}
