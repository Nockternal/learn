var data;
var waffles = [];
var waffle

function preload() {
	// load file
	data = loadTable("finalData.csv", "csv", "header");
}

function setup() {
	createCanvas(1000, 1000);
	// each of the 7 waffel charts
	var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
		"Sunday"
	];
	// values that users / survey provides  
	var values = ['Take-away', 'Cooked from fresh', 'Ready meal', 'Ate out',
		'Skipped meal', 'Left overs'
	]

	//waffle = new Waffle(30, 30, 200, 200, 15, 15, data, "Monday", values)
	for (var i = 0; i < days.length; i++) {
		// put them into rows  
		if (i < 4) {
			waffles.push(new Waffle(20 + (i * 220), 20, 200, 200, 15, 15, data, days[i], values))
		} else {
			// we got to start at i-4
			waffles.push(new Waffle(20 + ((i - 4) * 220), 240, 200, 200, 15, 15, data, days[i], values))
		}
	}
}

function draw() {
	background(255);
	for (var i = 0; i < waffles.length; i++) {
		waffles[i].draw();
	}
	for (var i = 0; i < waffles.length; i++) {
		waffles[i].checkMouse();
	}
	//waffle.draw()
	//waffle.checkMouse(mouseX, mouseY)
}