/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 3337827
CaseNum: 201-3-88654364-3337827

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(537, 303);
    vertex(653,158 );
    vertex(673,170 );
    vertex(720,120 );
    vertex(750,128 );
    vertex(750,150 );
    vertex(810,168 );
    vertex(785,192 );
    vertex(787,215 );
    vertex(615,398 );
    vertex(728,500 );
    vertex(716,527);
    vertex(700,530 );
    vertex(683,494 );
    vertex(614,458 );
    vertex(543,469 );
    vertex(490,414 );
    vertex(492,300 );
    vertex(450,328 );
    vertex(428,318 );
    vertex(436,302 );

    vertex(505,266 );
    vertex(537,303 );
    
    endShape();



}
