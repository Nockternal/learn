function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
		
		for (var i = 0; i< spectrum.length; i++){
            var r = spectrum[i];
            var g = map (spectrum[i], 0, 255, 255,0);
            fill(r, g, 0);
            
			var y = map(i, 0, spectrum.length, 0, height);
		    var w = width - map(spectrum[i], 0, 255, width, 0);
		    rect(0, y, w, height / spectrum.length);
  		}
	
		pop();
	};
}





//function Spectrum(){
//	this.name = "spectrum";
//
//	this.draw = function(){
//		push();
//		var spectrum = fourier.analyze();
//		noStroke();
//
//		for (var i = 0; i < spectrum.length; i++){
//			var r = spectrum[i];
//			var g = map (spectrum[i], 0, 255, 255, 0);
//			fill(r, g, 0); 
//
//			var y = map(i, 0, spectrum.length, 0, height);
//		    var w = width - map(spectrum[i], 0, 255, width, 0);
//		    rect(0, y, w, height / spectrum.length); 
//  		}
//	
//		pop();
//	};
//}
