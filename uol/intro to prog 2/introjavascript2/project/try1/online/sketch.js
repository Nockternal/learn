var gallery;

function setup() {
  // Create a canvas to fill the content div from index.html.
  canvasContainer = select('#app');
  var c = createCanvas(1024, 768);
  c.parent('app');

  gallery = new Gallery();

  gallery.addVisual(new TechDiversityRace());

}

function draw() {
  background(255);
  if (gallery.selectedVisual != null) 
  {
    gallery.selectedVisual.draw();
  }

}
