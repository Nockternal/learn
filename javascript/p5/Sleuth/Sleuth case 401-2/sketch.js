/*

Officer: 3337827
CaseNum: 401-1-36959074-3337827

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When chlorine goes above 0.58, decrease charcoal by 0.01
	- If spider_venom goes above 0.63, raise charcoal by 0.01
	- When chlorine goes above 0.34, reduce chalk by 0.01
	- If ricin dips below 0.5, try increasing chalk by 0.04
	- If chlorine goes above 0.45 or mercury goes above 0.46, try decreasing insulin by 0.01
	- If spider_venom dips below 0.66, increment insulin by 0.02
	- If chlorine goes above 0.53 and mercury goes above 0.59, decrease calciumChloride by 0.04
	- If spider_venom dips below 0.37 or ricin goes above 0.57, increment calciumChloride by 0.01


Your conditional statements should:

consider the following poisons:

	- chlorine
	- ricin
	- spider_venom
	- mercury


and modify the following antidotes:

	- charcoal
	- chalk
	- insulin
	- calciumChloride


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var chlorine;
var ricin;
var spider_venom;
var mercury;


//Declare the antidote variables
var charcoal;
var chalk;
var insulin;
var calciumChloride;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	chlorine = 0.5;
	ricin = 0.5;
	spider_venom = 0.5;
	mercury = 0.5;
	charcoal = 0.5;
	chalk = 0.5;
	insulin = 0.5;
	calciumChloride = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
	if(chlorine > 0.58)
	{
		charcoal -= 0.01;
	};
	if(spider_venom > 0.63)
	{
		charcoal += 0.01;
	};
	if(chlorine > 0.34)
	{
		chalk -= 0.01;
	};
	if(ricin < 0.5)
	{
		chalk += 0.04;
	};
	if(chlorine > 0.45 || mercury > 0.46)
	{
		try {
			insulin -= 0.01;
			}
		catch(err) {
			console.log("Error decreasing insulin by 0.01 current insulin = ",insulin);
			}
	};
	if(spider_venom < 0.66)
	{
		insulin += 0.02;
	};
	if(chlorine > 0.53 && mercury > 0.59)
	{
		calciumChloride -= 0.04;
	};
	if(spider_venom < 0.37 || ricin > 0.57)
	{
		calciumChloride += 0.01;
	};



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	chlorine = nextValue(graphs[0],chlorine);
	ricin = nextValue(graphs[1],ricin);
	spider_venom = nextValue(graphs[2],spider_venom);
	mercury = nextValue(graphs[3],mercury);


	charcoal = constrain(charcoal, 0, 1);
	chalk = constrain(chalk, 0, 1);
	insulin = constrain(insulin, 0, 1);
	calciumChloride = constrain(calciumChloride, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('chlorine: ' + nf(chlorine,1,2), 20,20);
	fill(colors[1]);
	text('ricin: ' + nf(ricin,1,2), 20,40);
	fill(colors[2]);
	text('spider_venom: ' + nf(spider_venom,1,2), 20,60);
	fill(colors[3]);
	text('mercury: ' + nf(mercury,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(charcoal,50,'charcoal');
	drawBar(chalk,200,'chalk');
	drawBar(insulin,350,'insulin');
	drawBar(calciumChloride,500,'calciumChloride');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
