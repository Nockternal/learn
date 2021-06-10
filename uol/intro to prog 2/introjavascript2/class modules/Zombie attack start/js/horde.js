function Horde(h) {
	//an array of zombies
	this.zombies = [];

	//call each zombies drawing code and update it's location ready to be drawn again
	this.drawZombies = function() {
		for (var i = 0; i < this.zombies.length; i++) {
			this.zombies[i].draw();
			this.zombies[i].updateLocation();
		}
	}

	//add n zombies to the horde
	this.addZombies = function(n) {
        num = n
		for (var i = 0; i < num; i++) {
			this.zombies.push(new zombie(random(80, height - 80),h))
		}
	}

    this.checkClicked = function(){
        for (var i = 0; i < this.zombies.length; i++) {
			this.zombies[i].clicked(mouseX, mouseY);
            if(this.zombies[i].health < 1 == true){
                this.zombies.splice(i, 1);
                this.zombies.push(new zombie(random(80, height - 80),h))
            }
        }
    }
    
}