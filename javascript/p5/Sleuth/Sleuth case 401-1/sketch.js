/*

Officer: 3337827
CaseNum: 401-0-30657434-3337827

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When arsenic dips below 0.69, decrement calcium_chloride by 0.05
	- When lead dips below 0.34, raise calcium_chloride by 0.01
	- If lead dips below 0.55, decrement sulphates by 0.03
	- When arsenic dips below 0.42, increase sulphates by 0.01
	- If lead goes above 0.54, try decreasing Hydrochloric_Acid by 0.05
	- If arsenic dips below 0.73, raise Hydrochloric_Acid by 0.05


Your conditional statements should:

consider the following poisons:

	- SnakeVenom
	- lead
	- arsenic


and modify the following antidotes:

	- calcium_chloride
	- sulphates
	- Hydrochloric_Acid


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var SnakeVenom;
var lead;
var arsenic;


//Declare the antidote variables
var calcium_chloride;
var sulphates;
var Hydrochloric_Acid;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	SnakeVenom = 0.5;
	lead = 0.5;
	arsenic = 0.5;
	calcium_chloride = 0.5;
	sulphates = 0.5;
	Hydrochloric_Acid = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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
	if(arsenic < 0.69)
	{
		calcium_chloride -= 0.05;
	}
	if(lead < 0.34)
	{
		calcium_chloride += 0.01;
	}
	if(lead < 0.55)
	{
		sulphates -= 0.03;
	}
	if(arsenic < 0.42)
	{
		sulphates += 0.01;
	}
	if(lead > 0.54)
	{
		Hydrochloric_Acid -= 0.05;
	}
	if(arsenic < 0.73)
	{
		Hydrochloric_Acid += 0.05;
	}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	SnakeVenom = nextValue(graphs[0],SnakeVenom);
	lead = nextValue(graphs[1],lead);
	arsenic = nextValue(graphs[2],arsenic);


	calcium_chloride = constrain(calcium_chloride, 0, 1);
	sulphates = constrain(sulphates, 0, 1);
	Hydrochloric_Acid = constrain(Hydrochloric_Acid, 0, 1);


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
	text('SnakeVenom: ' + nf(SnakeVenom,1,2), 20,20);
	fill(colors[1]);
	text('lead: ' + nf(lead,1,2), 20,40);
	fill(colors[2]);
	text('arsenic: ' + nf(arsenic,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(calcium_chloride,50,'calcium_chloride');
	drawBar(sulphates,200,'sulphates');
	drawBar(Hydrochloric_Acid,350,'Hydrochloric_Acid');


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
