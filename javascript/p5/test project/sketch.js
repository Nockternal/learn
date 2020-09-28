function setup() {
  createCanvas(800, 800);
  
}

function draw() {
  background(220);
  // fill(r,g,b) // following object
  fill(100,20,150)
  // circle(x axis pos, y axis pos, diameter size)
  
  circle(100,100,100)
  
  fill(204);
  //triangle(x axis point1, yaxis point1,
  //         x axis point2, yaxis point2,
  //         x axis point3, yaxis point3)
  triangle(18, 30, 60, 400, 81, 360);

  fill(102);
  //rect = rectangle (x axis,y axis, width, height)
  rect(100, 400, 50, 63);

  fill(204);
  //quad(    x axis point1, yaxis point1,
  //         x axis point2, yaxis point2,
  //         x axis point3, yaxis point3,
  //         x axis point4, yaxis point4)
  quad(200, 50, 216, 18, 216, 360, 144, 360);

  fill(255);
  // circle behind (x pos, y pos, width, height)
  ellipse(300, 144, 100, 72);

  fill(255);
  //arc / half ricle (x pos, y pos, 
  //                  width, heigh, 
  //                  fill from right, fill from left)
  arc(500, 200, 100, 100, PI, TWO_PI);

}
