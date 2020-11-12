/*

Officer: 3337827
CaseNum: 401-2-55285321-3337827

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If strychnine dips below 0.62 or insecticide dips below 0.45, decrement CalciumChloride by 0.01
	- When formaldehyde dips below 0.47 or sarin goes above 0.52, try increasing CalciumChloride by 0.03
	- When either chlorine goes above 0.42, insecticide dips below 0.32, or perhaps deadlyNightshade dips below 0.32, decrease protamine by 0.02
	- When strychnine dips below 0.51 or formaldehyde goes above 0.3, whilst at the same time, sarin goes above 0.29, increase protamine by 0.03
	- If insecticide dips below 0.58 and sarin goes above 0.6, reduce antitoxin by 0.01
	- If chlorine goes above 0.64 and deadlyNightshade goes above 0.73, try increasing antitoxin by 0.04
	- When strychnine dips below 0.7, chlorine goes above 0.61, and also insecticide dips below 0.36, decrease chalk by 0.04
	- When sarin dips below 0.42 and formaldehyde goes above 0.6, raise chalk by 0.05


Your conditional statements should:

consider the following poisons:

	- sarin
	- insecticide
	- formaldehyde
	- chlorine
	- deadlyNightshade
	- strychnine


and modify the following antidotes:

	- CalciumChloride
	- protamine
	- antitoxin
	- chalk


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var sarin;
var insecticide;
var formaldehyde;
var chlorine;
var deadlyNightshade;
var strychnine;


//Declare the antidote variables
var CalciumChloride;
var protamine;
var antitoxin;
var chalk;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	sarin = 0.5;
	insecticide = 0.5;
	formaldehyde = 0.5;
	chlorine = 0.5;
	deadlyNightshade = 0.5;
	strychnine = 0.5;
	CalciumChloride = 0.5;
	protamine = 0.5;
	antitoxin = 0.5;
	chalk = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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
	if(strychnine < 0.62 || insecticide < 0.45)
	{
		CalciumChloride -= 0.01;
	};
	if(formaldehyde < 0.47 || sarin > 0.52)
	{
		try {
			CalciumChloride += 0.03;
			}
		catch(err) {
			console.log("Error increasing CalciumChloride by 0.03 current CalciumChloride = ",CalciumChloride);
			};
	};
	if(chlorine > 0.42 || insecticide < 0.32 || deadlyNightshade < 0.32)
	{
		protamine -= 0.02;
	};
	if((strychnine < 0.51 || formaldehyde > 0.3) && sarin > 0.29)
	{
		protamine += 0.03;
	};

	if(insecticide < 0.58 && sarin > 0.6)
	{
		antitoxin -= 0.01;
	};
	if(chlorine > 0.64 && deadlyNightshade > 0.73)
	{
		try {
			antitoxin += 0.04;
			}
		catch(err) {
			console.log("Error increasing antitoxin by 0.03 current antitoxin = ",antitoxin);
			};
	};
	if(strychnine < 0.7 && chlorine > 0.61 && insecticide < 0.36)
	{
		chalk -= 0.04;
	};
	if(sarin < 0.42 && formaldehyde > 0.6)
	{
		chalk += 0.05;
	};



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	sarin = nextValue(graphs[0],sarin);
	insecticide = nextValue(graphs[1],insecticide);
	formaldehyde = nextValue(graphs[2],formaldehyde);
	chlorine = nextValue(graphs[3],chlorine);
	deadlyNightshade = nextValue(graphs[4],deadlyNightshade);
	strychnine = nextValue(graphs[5],strychnine);


	CalciumChloride = constrain(CalciumChloride, 0, 1);
	protamine = constrain(protamine, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);
	chalk = constrain(chalk, 0, 1);


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
	text('sarin: ' + nf(sarin,1,2), 20,20);
	fill(colors[1]);
	text('insecticide: ' + nf(insecticide,1,2), 20,40);
	fill(colors[2]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,60);
	fill(colors[3]);
	text('chlorine: ' + nf(chlorine,1,2), 20,80);
	fill(colors[4]);
	text('deadlyNightshade: ' + nf(deadlyNightshade,1,2), 20,100);
	fill(colors[5]);
	text('strychnine: ' + nf(strychnine,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(CalciumChloride,50,'CalciumChloride');
	drawBar(protamine,200,'protamine');
	drawBar(antitoxin,350,'antitoxin');
	drawBar(chalk,500,'chalk');


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
