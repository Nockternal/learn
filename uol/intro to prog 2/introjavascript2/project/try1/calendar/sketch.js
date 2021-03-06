/*
Writen by Burger du Plessis
Data dynamically generated by Python file inside Data Subfoler

*/

var data;
var waffles = [];
var waffle;
var days;

function preload() 
{
  data = loadTable("data/data1.csv", "csv",
  "header");
}

function setup() {
  createCanvas(1000, 1000);
  

  var days = [
    "Monday" ,
    "Tuesday", 
    "Wednesday",
    "Thursday" ,
    "Friday" ,
    "Saturday",
    "Sunday"
  ];

  var values = [
    'Take-away', 
    'Cooked from fresh',
    'Ready meal', 
    'Ate out', 
    'Skipped meal', 
    'Left overs'
  ]
  /*
  x,y,width,height,
  boxes_across,boxes_down,table,columnHeading,
  possibleValues
  */
  for (var i = 0; i < days.length; i++) {
		// put them into rows  
		if (i < 4) {
			waffles.push(new Waffle(20 + (i * 220), 20, 200, 200, 10, 10, data, days[i], values))
		} else {
			// we got to start at i-4
			waffles.push(new Waffle(20 + ((i - 4) * 220), 240, 200, 200, 10, 10, data, days[i], values))
		}
	}
  //console.log(data)
}

function draw() {
  background(200);
  //waffles[0].draw();
  for (var i = 0; i < waffles.length; i++) {
		waffles[i].draw();
	}
  
	for (var i = 0; i < waffles.length; i++) {
		waffles[i].checkMouse(mouseX, mouseY);
	}
  
}
