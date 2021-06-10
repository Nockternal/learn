/*

Officer: 3337827
CaseNum: 401-3-99243072-3337827

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When strychnine dips below 0.5 and Deadly_Nightshade dips below 0.4, whilst at the same time, spiderVenom goes above 0.35 or Nerve_Gas goes above 0.43, try decreasing methylene by 0.04
	- When ricin goes above 0.48, insecticide goes above 0.6, and also sarin goes above 0.42, try increasing methylene by 0.02
	- When sarin dips below 0.6 and insecticide dips below 0.59, or on the other hand, strychnine goes above 0.71 and spiderVenom dips below 0.55, try decreasing Sodium_Bicarbonate by 0.04
	- When Deadly_Nightshade dips below 0.4 or Nerve_Gas dips below 0.55, or on the other hand, methanol goes above 0.64 and ricin goes above 0.67, raise Sodium_Bicarbonate by 0.02
	- If spiderVenom goes above 0.67 and ricin dips below 0.5, whilst at the same time, insecticide goes above 0.53 or sarin dips below 0.5, decrement CalciumGluconate by 0.02
	- If either Deadly_Nightshade dips below 0.52, strychnine goes above 0.54, or perhaps Nerve_Gas dips below 0.72, increment CalciumGluconate by 0.03
	- If spiderVenom goes above 0.34, whilst at the same time, strychnine goes above 0.54 or Deadly_Nightshade goes above 0.37, decrease insulin by 0.02
	- If Nerve_Gas goes above 0.68 or ricin goes above 0.27, or on the other hand, sarin dips below 0.49 and methanol dips below 0.59, raise insulin by 0.05
	- If insecticide dips below 0.42 or methanol dips below 0.69, or on the other hand, ricin dips below 0.49 and sarin dips below 0.53, decrease plasma by 0.02
	- If Deadly_Nightshade goes above 0.37, whilst at the same time, Nerve_Gas dips below 0.64 or strychnine dips below 0.75, increase plasma by 0.05


Your conditional statements should:

consider the following poisons:

	- strychnine
	- sarin
	- Nerve_Gas
	- insecticide
	- spiderVenom
	- ricin
	- methanol
	- Deadly_Nightshade


and modify the following antidotes:

	- methylene
	- Sodium_Bicarbonate
	- CalciumGluconate
	- insulin
	- plasma


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var strychnine;
var sarin;
var Nerve_Gas;
var insecticide;
var spiderVenom;
var ricin;
var methanol;
var Deadly_Nightshade;


//Declare the antidote variables
var methylene;
var Sodium_Bicarbonate;
var CalciumGluconate;
var insulin;
var plasma;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	strychnine = 0.5;
	sarin = 0.5;
	Nerve_Gas = 0.5;
	insecticide = 0.5;
	spiderVenom = 0.5;
	ricin = 0.5;
	methanol = 0.5;
	Deadly_Nightshade = 0.5;
	methylene = 0.5;
	Sodium_Bicarbonate = 0.5;
	CalciumGluconate = 0.5;
	insulin = 0.5;
	plasma = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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

	//- When strychnine dips below 0.5 and Deadly_Nightshade dips below 0.4, whilst at the same time, spiderVenom goes above 0.35 or Nerve_Gas goes above 0.43, try decreasing methylene by 0.04
	if((strychnine < 0.5 && Deadly_Nightshade < 0.4)&&(spiderVenom > 0.35 || Nerve_Gas > 0.43))
	{
		try {
			methylene -= 0.04;
			}
		catch(err) {
			console.log("Error decreasing methylene by 0.03 current methylene = ",methylene);
			};
	};
	//- When ricin goes above 0.48, insecticide goes above 0.6, and also sarin goes above 0.42, try increasing methylene by 0.02
	if(ricin > 0.48 && insecticide > 0.6 && sarin > 0.42)
	{
		try {
			methylene += 0.02;
		} 
		catch (err) {
			console.log("Error increasing methylene by 0.02 current methylene = ",methylene);
		}
	};
	//- When sarin dips below 0.6 and insecticide dips below 0.59, or on the other hand, strychnine goes above 0.71 and spiderVenom dips below 0.55, try decreasing Sodium_Bicarbonate by 0.04
	if((sarin < 0.6 && insecticide < 0.59) || (strychnine > 0.71 && spiderVenom < 0.55))
	{
		try {
			Sodium_Bicarbonate -= 0.04;
		} 
		catch (err) {
			console.log("Error increasing Sodium_Bicarbonate by 0.04 current Sodium_Bicarbonate = ",Sodium_Bicarbonate);
		}
	};
	//- When Deadly_Nightshade dips below 0.4 or Nerve_Gas dips below 0.55, or on the other hand, methanol goes above 0.64 and ricin goes above 0.67, raise Sodium_Bicarbonate by 0.02
	if((Deadly_Nightshade < 0.4 || Nerve_Gas < 0.55) || (methanol > 0.64 && ricin > 0.67))
	{
		Sodium_Bicarbonate += 0.02;
	};
	//- If spiderVenom goes above 0.67 and ricin dips below 0.5, whilst at the same time, insecticide goes above 0.53 or sarin dips below 0.5, decrement CalciumGluconate by 0.02
	if((spiderVenom > 0.67 && ricin < 0.5) && (insecticide > 0.53 || sarin < 0.5 ))
	{
		CalciumGluconate -= 0.02;
	};
	//- If either Deadly_Nightshade dips below 0.52, strychnine goes above 0.54, or perhaps Nerve_Gas dips below 0.72, increment CalciumGluconate by 0.03
	if(Deadly_Nightshade < 0.52 || strychnine > 0.54 || Nerve_Gas < 0.72)
	{
		CalciumGluconate += 0.03;
	}
	//- If spiderVenom goes above 0.34, whilst at the same time, strychnine goes above 0.54 or Deadly_Nightshade goes above 0.37, decrease insulin by 0.02
	if(spiderVenom > 0.34 && (strychnine > 0.54 || Deadly_Nightshade > 0.37))
	{
		insulin -= 0.02;
	}
	//- If Nerve_Gas goes above 0.68 or ricin goes above 0.27, or on the other hand, sarin dips below 0.49 and methanol dips below 0.59, raise insulin by 0.05
	if((Nerve_Gas > 0.68 || ricin > 0.27)||(sarin < 0.49 && methanol < 0.59))
	{
		insulin += 0.05;
	}
	//- If insecticide dips below 0.42 or methanol dips below 0.69, or on the other hand, ricin dips below 0.49 and sarin dips below 0.53, decrease plasma by 0.02
	if((insecticide < 0.42 || methanol < 0.69) || ( ricin < 0.49 && sarin < 0.53))
	{
		plasma -= 0.02;
	}
	//- If Deadly_Nightshade goes above 0.37, whilst at the same time, Nerve_Gas dips below 0.64 or strychnine dips below 0.75, increase plasma by 0.05
	if(Deadly_Nightshade > 0.37 && (Nerve_Gas < 0.64 || strychnine < 0.75))
	{
		plasma += 0.05;
	}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	strychnine = nextValue(graphs[0],strychnine);
	sarin = nextValue(graphs[1],sarin);
	Nerve_Gas = nextValue(graphs[2],Nerve_Gas);
	insecticide = nextValue(graphs[3],insecticide);
	spiderVenom = nextValue(graphs[4],spiderVenom);
	ricin = nextValue(graphs[5],ricin);
	methanol = nextValue(graphs[6],methanol);
	Deadly_Nightshade = nextValue(graphs[7],Deadly_Nightshade);


	methylene = constrain(methylene, 0, 1);
	Sodium_Bicarbonate = constrain(Sodium_Bicarbonate, 0, 1);
	CalciumGluconate = constrain(CalciumGluconate, 0, 1);
	insulin = constrain(insulin, 0, 1);
	plasma = constrain(plasma, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('strychnine: ' + nf(strychnine,1,2), 20,20);
	fill(colors[1]);
	text('sarin: ' + nf(sarin,1,2), 20,40);
	fill(colors[2]);
	text('Nerve_Gas: ' + nf(Nerve_Gas,1,2), 20,60);
	fill(colors[3]);
	text('insecticide: ' + nf(insecticide,1,2), 20,80);
	fill(colors[4]);
	text('spiderVenom: ' + nf(spiderVenom,1,2), 20,100);
	fill(colors[5]);
	text('ricin: ' + nf(ricin,1,2), 20,120);
	fill(colors[6]);
	text('methanol: ' + nf(methanol,1,2), 20,140);
	fill(colors[7]);
	text('Deadly_Nightshade: ' + nf(Deadly_Nightshade,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(methylene,50,'methylene');
	drawBar(Sodium_Bicarbonate,200,'Sodium_Bicarbonate');
	drawBar(CalciumGluconate,350,'CalciumGluconate');
	drawBar(insulin,500,'insulin');
	drawBar(plasma,650,'plasma');


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
