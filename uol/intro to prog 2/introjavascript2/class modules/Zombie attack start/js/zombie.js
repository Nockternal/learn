//constructor for the Zombies
function zombie(y, h) {
	//initial x so all zombies start to the left of the screen
	this.x = -10;
	this.y = y;
    this.health = h;
	//set a random speed
	this.speed = random(0.1, 0.7);

	//draw the zombie to the screen
	this.draw = function() {
		push();
		//arms
		fill(128, 0, 128);
		rect(this.x - 10, this.y - 50, 65, 15);
		rect(this.x - 10, this.y + 35, 65, 15);
		//shoulders
		rect(this.x - 20, this.y - 50, 35, 100, 10);
		//head
		fill(50);
		ellipse(this.x, this.y, 50);
		pop();
        this.drawHealth(this.health);
	}

	//update the zombies x location as it lumbers across the screen
	this.updateLocation = function() {
		this.x += this.speed;
	}
    //detects if zombie is clicked and decrements health
    this.clicked = function (x,y) {
        if(dist(x, y, this.x, this.y) <= 25){
            this.health -= 1;
        }
            
    }
    //draw health bar
    this.drawHealth = function(health)
    {
        fill(255,health*21,0)
        rect(this.x - 10, this.y +50,health*10,5)
    }
}