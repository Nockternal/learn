/*

Officer: 3337827
CaseNum: 202-1-43335684-3337827

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Dark Violet filled text with a Magenta outline.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(697,727);
	textFont(letterFont);
	textSize(34);
}

function draw()
{
	background(255);

	fill(65,105,225);
	stroke(128,0,128);
	//text("My", 8,34);
	fill(127,255,0);
	stroke(139,0,139);
	//text("thout", 511,366);
	fill(139,0,0);
	stroke(184,134,11);
	//text("longer", 122,292);
	fill(0,255,255);
	stroke(25,25,112);
	//text("do", 242,292);
	fill(148,0,211);
	stroke(220,20,60);
	//text("and", 16,255);
	fill(240,230,140);
	stroke(127,255,0);
	//text("it", 496,143);
	fill(186,85,211);
	stroke(0,206,209);
	//text("I", 296,292);
	fill(210,105,30);
	stroke(0,128,0);
	//text("be", 416,330);
	fill(250,128,114);
	stroke(128,0,0);
	//text("will", 290,330);
	fill(255,140,0);
	stroke(0,128,0);
	//text("?", 123,366);
	fill(153,50,204);
	stroke(153,50,204);
	//text("feels", 548,405);
	fill(128,0,0);
	stroke(124,252,0);
	//text("small", 352,405);
	fill(160,82,45);
	stroke(139,0,0);
	//text("to", 397,179);
	fill(240,128,128);
	stroke(34,139,34);
	//text("lon", 13,330);
	fill(0,0,128);
	stroke(0,128,128);
	//text("last", 71,179);
	fill(0,139,139);
	stroke(128,0,0);
	//text("m", 318,143);
	fill(255,127,80);
	stroke(0,250,154);
	//text("o", 351,143);
	fill(255,0,255);
	stroke(255,255,0);
	//text("wi", 474,366);
	fill(135,206,250);
	stroke(255,0,255);
	//text("miss", 118,102);
	fill(0,0,128);
	stroke(0,0,139);
	//text("many", 211,143);
	fill(64,224,208);
	stroke(0,250,154);
	//text("ging", 65,330);
	fill(135,206,250);
	stroke(153,50,204);
	//text("your", 448,445);
	fill(0,255,255);
	stroke(218,165,32);
	//text("arm", 77,214);
	fill(128,128,0);
	stroke(0,255,127);
	//text("in", 601,179);
	fill(218,165,32);
	stroke(46,139,87);
	//text("night", 469,214);
	fill(128,0,128);
	stroke(0,128,0);
	//text("at", 89,405);
	fill(0,128,128);
	stroke(107,142,35);
	//text("swift", 536,445);
	fill(144,238,144);
	stroke(255,69,0);
	//text("my", 13,214);
	fill(139,0,0);
	stroke(128,0,128);
	//text("I", 184,214);
	fill(75,0,130);
	stroke(148,0,211);
	//text("this", 279,405);
	fill(176,224,230);
	stroke(139,0,0);
	//text("ing", 330,445);
	fill(128,128,0);
	stroke(0,255,255);
	//text("x", 116,619);
	fill(0,250,154);
	stroke(154,205,50);
	//text("your", 151,551);
	fill(152,251,152);
	stroke(0,206,209);
	//text("long", 312,179);
	fill(32,178,170);
	stroke(50,205,50);
	//text("united", 470,330);
	fill(0,0,205);
	stroke(0,206,209);
	//text("er", 105,551);
	fill(0,255,127);
	stroke(0,0,255);
	//text("my", 134,405);
	fill(30,144,255);
	stroke(178,34,34);
	//text("can", 113,255);
	fill(176,224,230);
	stroke(0,206,209);
	//text("I", 291,179);
	fill(233,150,122);
	stroke(255,0,0);
	//text("?", 151,330);
	fill(25,25,112);
	stroke(25,25,112);
	//text("I", 92,255);
	fill(255,215,0);
	stroke(0,139,139);
	//text("How", 11,102);
	fill(100,149,237);
	stroke(255,140,0);
	//text("?", 262,179);
	fill(139,69,19);
	stroke(255,69,0);
	//text("I", 97,102);
	fill(250,128,114);
	stroke(255,0,255);
	//text("around", 408,102);
	fill(0,0,139);
	stroke(139,69,19);
	//text("you", 527,179);
	fill(127,255,212);
	stroke(160,82,45);
	//text("Even", 152,366);
	fill(34,139,34);
	stroke(32,178,170);
	//text("t", 186,255);
	fill(107,142,35);
	stroke(220,20,60);
	//text("How", 125,143);
	fill(75,0,130);
	stroke(128,128,0);
	//text("town", 453,405);
	//text("only", 283,255);
	fill(153,50,204);
	stroke(75,0,130);
	//text("Bob,", 198,34);
	fill(255,0,255);
	stroke(0,139,139);
	//text("on", 394,445);
	fill(165,42,42);
	stroke(34,139,34);
	//text("you.", 410,255);
	fill(0,255,127);
	stroke(0,206,209);
	//text("hink", 199,255);
	fill(244,164,96);
	stroke(255,0,0);
	//text("much", 15,292);
	fill(165,42,42);
	stroke(255,69,0);
	//text("desolate.", 14,445);
	fill(123,104,238);
	stroke(0,255,0);
	//text("s.", 144,214);
	fill(233,150,122);
	stroke(0,128,0);
	//text("place.", 11,143);
	fill(238,232,170);
	stroke(50,205,50);
	//text("stare", 205,214);
	fill(124,252,0);
	stroke(220,20,60);
	//text("the", 289,366);
	fill(148,0,211);
	stroke(255,0,255);
	text("side", 198,405);
	text("bank", 245,445);
	fill(218,112,214);
	stroke(128,0,128);
	//text("I'm", 182,445);
	fill(255,105,180);
	stroke(0,206,209);
	//text("return.", 14,483);
	fill(72,209,204);
	stroke(139,0,139);
	//text("of", 366,255);
	fill(50,205,50);
	stroke(139,69,19);
	//text("sky,", 568,214);
	fill(255,140,0);
	stroke(220,20,60);
	//text("darling", 68,34);
	fill(255,0,255);
	stroke(255,69,0);
	//text("How", 495,255);
	fill(0,255,255);
	stroke(0,139,139);
	//text("we", 11,179);
	fill(238,130,238);
	stroke(255,0,255);
	//text("Daisy", 11,619);
	fill(107,142,35);
	stroke(128,0,0);
	//text("to", 412,292);
	fill(123,104,238);
	stroke(160,82,45);
	//text("s,", 228,551);
	fill(255,215,0);
	stroke(0,128,0);
	//text("we", 356,330);
	fill(152,251,152);
	stroke(153,50,204);
	//text("kissed", 143,179);
	fill(148,0,211);
	stroke(255,0,255);
	//text("store", 457,292);
	fill(0,0,205);
	stroke(50,205,50);
	//text("you", 15,405);
	fill(220,20,60);
	stroke(0,255,255);
	//text("again", 17,366);
	fill(0,191,255);
	stroke(128,0,128);
	//text("Forev", 11,551);
	fill(128,0,0);
	stroke(139,0,139);
	//text("have", 317,292);
	fill(160,82,45);
	stroke(255,0,255);
	//text("the", 540,102);
	fill(148,0,211);
	stroke(255,0,255);
	text("at", 357,214);
	text("hold", 442,179);
	text("up", 302,214);
	fill(255,0,255);
	stroke(210,105,30);
	//text("since", 529,143);
	fill(0,255,255);
	stroke(165,42,42);
	//text("in", 247,366);
	fill(139,0,139);
	stroke(210,105,30);
	//text("this", 554,292);
	fill(148,0,211);
	stroke(255,0,255);
	text("spring", 356,366);
	fill(0,0,139);
	stroke(128,0,128);
	//text("is", 458,143);
	fill(0,191,255);
	stroke(0,206,209);
	//text("nths", 372,143);
	fill(178,34,34);
	stroke(0,128,128);
	//text("you", 334,102);
	fill(173,216,230);
	stroke(199,21,133);
	//text("the", 402,214);
	fill(255,255,0);
	stroke(107,142,35);
	//text("having", 207,102);
	fill(148,0,211);
	stroke(139,0,139);
	//text("When", 180,330);




}
