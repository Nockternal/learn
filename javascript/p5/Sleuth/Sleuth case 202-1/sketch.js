/*

Officer: 3337827
CaseNum: 202-0-32882983-3337827

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Medium Spring Green text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(507,692);
	textFont(letterFont);
	textSize(28);
}

function draw()
{
	background(255);

	fill(153,50,204);
	//text("am", 358,238);
	fill(255,105,180);
	//text("kisses,", 147,523);
	fill(123,104,238);
	//text("Love", 9,523);
	//text("the", 87,84);
	fill(219,112,147);
	//text("darling,", 329,434);
	//text("I", 399,84);
	fill(128,128,0);
	//text("Daisy,", 157,28);
	fill(106,90,205);
	//text("lovely", 64,28);
	fill(165,42,42);
	//text("I", 253,114);
	//text("uiet", 121,268);
	fill(139,0,0);
	//text("x", 72,579);
	fill(0,139,139);
	//text("moment", 207,84);
	fill(65,105,225);
	//text("the", 371,303);
	fill(123,104,238);
	//text("can", 12,434);
	fill(233,150,122);
	//text("one", 64,175);
	//text("alive", 117,368);
	fill(176,224,230);
	//text("I", 250,268);
	fill(173,255,47);
	//text("alone", 411,238);
	fill(210,105,30);
	//text("sunny", 10,205);
	fill(165,42,42);
	//text("confession", 13,238);
	//text("Oh", 15,28);
	fill(32,178,170);
	//text("t", 140,434);
	fill(135,206,235);
	//text("true", 125,175);
	fill(218,165,32);
	//text("person", 11,368);
	//text("that", 333,84);
	fill(127,255,0);
	//text("hink", 151,434);
	fill(138,43,226);
	//text("were", 406,142);
	fill(218,112,214);
	//text("and", 85,523);
	fill(135,206,250);
	//text("It", 196,238);
	fill(250,128,114);
	//text("in", 13,268);
	fill(0,100,0);
	//text("only", 71,434);
	//text("from", 353,114);
	fill(176,224,230);
	//text("of", 335,303);
	//text("your", 256,434);
	fill(139,0,139);
	//text("fir", 142,84);
	fill(100,149,237);
	//text("your", 10,114);
	//text("my", 11,175);
	fill(160,82,45);
	//text("s", 255,142);
	//text("makea", 368,205);
	fill(75,0,130);
	//text("your", 340,268);
	fill(255,0,0);
	//text("few", 96,142);
	fill(0,255,0);
	//text("Bob", 9,579);
	//text("eyes.", 99,467);
	fill(186,85,211);
	//text("that", 193,368);
	fill(0,0,128);
	//text("when", 256,238);
	fill(144,238,144);
	//text("the", 71,303);
	fill(255,0,255);
	//text("last", 334,402);
	fill(0,128,0);
	//text("I", 93,337);
	fill(238,232,170);
	//text("am", 276,368);
	fill(0,128,128);
	//text("your", 329,368);
	fill(0,250,154);
	text("in", 166,205);
	text("day", 105,205);
	fill(148,0,211);
	//text("luckiest", 289,337);
	fill(186,85,211);
	//text("blessed", 126,303);
	fill(72,209,204);
	//text("like", 14,303);
	fill(107,142,35);
	//text("my", 380,175);
	fill(244,164,96);
	//text("voice", 413,268);
	fill(255,0,255);
	//text("be", 190,337);
	fill(0,139,139);
	//text("q", 103,268);
	//text("lovely", 83,114);
	fill(0,0,205);
	//text("that", 279,142);
	fill(0,250,154);
	text("is", 224,238);
	text("chosen", 14,402);
	fill(250,128,114);
	//text("April.", 201,205);
	fill(0,250,154);
	text("date", 394,402);
	fill(25,25,112);
	//text("From", 9,84);
	//text("Ever", 123,402);
	fill(255,99,71);
	//text("music", 243,303);
	fill(154,205,50);
	//text("love.", 192,175);
	fill(255,99,71);
	//text("I", 466,402);
	fill(255,255,0);
	//text("?", 172,238);
	//text("face,", 176,114);
	fill(255,105,180);
	//text("the", 48,268);
	fill(222,184,135);
	//text("saw", 416,84);
	fill(128,0,128);
	//text("of", 220,434);
	//text("those", 9,142);
	fill(178,34,34);
	//text("that", 184,268);
	//text("green", 9,467);
	fill(152,251,152);
	//text("I", 351,205);
	fill(205,133,63);
	//text("knew", 270,114);
	fill(255,140,0);
	//text("you", 345,142);
	fill(178,34,34);
	//text("You", 269,175);
	fill(0,250,154);
	text("second", 155,142);
	fill(244,164,96);
	//text("si", 196,402);
	fill(0,250,154);
	text("May", 284,205);
	fill(128,0,128);
	//text("our", 278,402);
	fill(240,128,128);
	//text("harp.", 10,337);
	//text("I", 259,368);
	fill(0,0,139);
	//text("the", 234,337);
	fill(255,0,0);
	//text("must", 110,337);
	fill(0,0,139);
	//text("st", 172,84);
	fill(255,0,0);
	//text("nce", 219,402);
	fill(128,0,0);
	//text("are", 326,175);
	fill(128,0,128);
	//text("hear", 267,268);
	fill(50,205,50);
	//text("I", 341,238);



}
