/*

Officer: 3337827
CaseNum: 202-3-43793859-3337827

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Magenta filled text with a Dark Turquoise outline in RonsFont font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(580,365);
	textSize(24);
}

function draw()
{
	background(255);

	push();
	fill(127,255,0);
	stroke(184,134,11);
	textFont(RonsFont);
	//text("send", 202,98);
	pop();
	fill(128,0,128);
	stroke(255,165,0);
	textFont(RonsFont);
	//text("so,", 113,98);
	fill(128,0,0);
	textFont(Ballpointprint);
	//text("Bob,", 109,24);
	fill(199,21,133);
	stroke(128,0,128);
	textFont(Diggity);
	//text("of", 515,72);
	fill(0,0,128);
	stroke(75,0,130);
	textFont(Melissa);
	//text("x", 76,277);
	fill(0,255,255);
	stroke(0,0,205);
	//text("delays.", 347,72);
	fill(128,128,0);
	stroke(220,20,60);
	textFont(Ballpointprint);
	//text("should", 46,128);
	fill(153,50,204);
	stroke(210,105,30);
	textFont(Melissa);
	//text("silen", 349,181);
	fill(0,128,0);
	stroke(0,255,127);
	//text("Is", 481,128);
	fill(0,255,255);
	stroke(0,100,0);
	textFont(Ballpointprint);
	//text("I", 145,98);
	fill(255,99,71);
	stroke(0,139,139);
	textFont(Melissa);
	//text("guarded", 271,156);
	fill(0,128,0);
	stroke(0,255,0);
	//text("not", 461,156);
	fill(255,0,255);
	stroke(255,0,255);
	textFont(Diggity);
	//text("Are", 295,98);
	fill(64,224,208);
	stroke(0,255,0);
	textFont(RonsFont);
	//text("out.", 439,128);
	fill(0,0,139);
	stroke(25,25,112);
	textFont(Ballpointprint);
	//text("I", 13,72);
	fill(255,0,0);
	stroke(255,0,255);
	textFont(RonsFont);
	//text("sort", 324,128);
	push();
	fill(64,224,208);
	stroke(0,0,139);
	textFont(Diggity);
	//text("Are", 397,72);
	pop();
	fill(0,139,139);
	textFont(Melissa);
	//text("can", 174,98);
	fill(178,34,34);
	stroke(0,255,0);
	textFont(Ballpointprint);
	//text("for", 175,128);
	fill(124,252,0);
	stroke(255,0,255);
	textFont(Diggity);
	//text("these", 219,72);
	push();
	fill(50,205,50);
	stroke(0,139,139);
	//text("go", 106,128);
	pop();
	fill(255,105,180);
	stroke(255,215,0);
	textFont(RonsFont);
	//text("me", 443,98);
	fill(240,230,140);
	stroke(139,0,139);
	textFont(Diggity);
	//text("sometimes.", 326,156);
	fill(123,104,238);
	stroke(46,139,87);
	textFont(Ballpointprint);
	//text("Daisy", 13,277);
	push();
	fill(233,150,122);
	textFont(Melissa);
	//text("longer", 108,72);
	pop();
	stroke(255,255,0);
	textFont(Diggity);
	//text("more", 45,181);
	fill(173,216,230);
	stroke(107,142,35);
	//text("our", 502,128);
	fill(240,230,140);
	stroke(153,50,204);
	textFont(Ballpointprint);
	//text("so", 244,156);
	fill(127,255,0);
	stroke(139,0,139);
	textFont(Diggity);
	//text("If", 92,98);
	fill(255,140,0);
	stroke(139,69,19);
	textFont(Ballpointprint);
	//text("continual", 272,72);
	fill(173,216,230);
	stroke(0,0,205);
	textFont(Melissa);
	//text("?", 186,181);
	push();
	fill(244,164,96);
	stroke(128,128,0);
	textFont(Ballpointprint);
	//text("avoiding", 362,98);
	pop();
	stroke(128,0,0);
	textFont(RonsFont);
	//text("all", 411,128);
	fill(139,0,139);
	stroke(139,69,19);
	textFont(Diggity);
	//text("we", 13,128);
	push();
	fill(255,140,0);
	stroke(50,205,50);
	//text("The", 200,181);
	pop();
	fill(233,150,122);
	stroke(127,255,0);
	textFont(Ballpointprint);
	//text("secret", 238,181);
	fill(176,224,230);
	stroke(139,0,139);
	textFont(Melissa);
	//text("cash.", 256,98);
	fill(184,134,11);
	//text("take", 150,181);
	fill(0,255,127);
	stroke(128,128,0);
	//text("short", 473,72);
	push();
	fill(160,82,45);
	stroke(0,0,128);
	textFont(Ballpointprint);
	//text("can", 42,72);
	pop();
	stroke(154,205,50);
	textFont(Ballpointprint);
	//text("darling", 40,24);
	fill(199,21,133);
	stroke(0,100,0);
	textFont(Melissa);
	//text("and", 296,128);
	push();
	fill(0,0,205);
	stroke(0,128,0);
	textFont(Ballpointprint);
	//text("you", 436,72);
	pop();
	fill(173,255,47);
	textFont(RonsFont);
	//text("Forever", 6,229);
	fill(154,205,50);
	stroke(34,139,34);
	textFont(Melissa);
	//text("away", 131,128);
	fill(139,69,19);
	stroke(255,140,0);
	textFont(Diggity);
	//text("are", 208,156);
	push();
	fill(127,255,0);
	stroke(25,25,112);
	//text("Pe", 496,98);
	pop();
	fill(255,69,0);
	stroke(255,69,0);
	//text("?", 74,98);
	fill(255,215,0);
	stroke(0,128,0);
	textFont(Ballpointprint);
	//text("s,", 288,181);
	fill(184,134,11);
	stroke(0,0,128);
	textFont(Melissa);
	//text("My", 13,24);
	push();
	fill(165,42,42);
	stroke(0,139,139);
	textFont(Ballpointprint);
	//text("yours,", 87,229);
	pop();
	stroke(127,255,0);
	textFont(Diggity);
	//text("rhaps", 512,98);
	fill(0,191,255);
	stroke(0,0,128);
	textFont(RonsFont);
	//text("a", 213,128);
	fill(64,224,208);
	stroke(0,0,205);
	textFont(Melissa);
	//text("ce.", 377,181);
	push();
	fill(0,255,127);
	stroke(255,215,0);
	textFont(RonsFont);
	//text("the", 311,181);
	pop();
	fill(107,142,35);
	stroke(34,139,34);
	textFont(RonsFont);
	//text("I'm", 417,156);
	fill(0,191,255);
	stroke(128,128,0);
	textFont(Diggity);
	//text("relationship", 11,156);
	push();
	fill(154,205,50);
	textFont(Ballpointprint);
	//text("You", 167,156);
	pop();
	fill(72,209,204);
	stroke(160,82,45);
	textFont(Melissa);
	//text("can", 122,181);
	fill(0,0,139);
	stroke(0,0,255);
	textFont(RonsFont);
	//text("how", 522,156);
	push();
	fill(123,104,238);
	stroke(124,252,0);
	textFont(Melissa);
	//text("you", 334,98);
	pop();
	fill(255,140,0);
	stroke(178,34,34);
	textFont(Melissa);
	//text("much", 8,181);
	fill(238,232,170);
	stroke(255,165,0);
	textFont(RonsFont);
	//text("?", 479,98);
	fill(255,255,0);
	stroke(46,139,87);
	textFont(Ballpointprint);
	//text("I", 93,181);
	fill(255,0,255);
	stroke(0,206,209);
	textFont(RonsFont);
	text("ignore", 153,72);
	text("safe", 102,156);
	text("money", 10,98);
	text("break", 232,128);
	fill(0,250,154);
	stroke(127,255,0);
	textFont(Melissa);
	//text("sure", 489,156);
	fill(255,69,0);
	stroke(199,21,133);
	textFont(RonsFont);
	//text("?", 150,156);
	fill(0,206,209);
	stroke(107,142,35);
	textFont(Diggity);
	//text("this", 374,128);
	fill(0,0,255);
	stroke(0,255,127);
	textFont(RonsFont);
	//text("no", 79,72);



}
