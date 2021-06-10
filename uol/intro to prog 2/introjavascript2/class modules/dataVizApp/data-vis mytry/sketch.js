
// Global variable to store the gallery object. The gallery object is
// a container for all the visualisations.
var gallery;

/*
var employeeHpbgData;
var occupationHpbgData;
var tempData;
var genderData;
var raceData;

var employeeHpbgFile;
var occupationHpbgFile;
var tempFile;
var genderFile;
var raceFile;
*/
/*
function preload() {
  
  employeeHpbgFile = 'data//pay-gap//all-employees-hourly-pay-by-gender-1997-2017.csv'
  occupationHpbgFile = 'data/pay-gap/occupation-hourly-pay-by-gender-2017.csv'
  tempFile = 'data/surface-temperature/surface-temperature.csv'
  genderFile = 'data/tech-diversity/gender-2018.csv'
  raceFile = 'data/tech-diversity/race-2018.csv'
  
  
  employeeHpbgData = loadTable(employeeHpbgFile, 'csv', 'header')
  occupationHpbgData = loadTable(occupationHpbgFile, 'csv', 'header')
  tempData = loadTable(tempFile, 'csv', 'header')
  genderData = loadTable(genderFile, 'csv', 'header')
  raceData = loadTable(raceFile, 'csv', 'header')
  
}
*/
function setup() {
  // Create a canvas to fill the content div from index.html.
  var c = createCanvas(1024, 576);
  c.parent('app');

  // Create a new gallery object.
  gallery = new Gallery();

  // Add the visualisation objects here.
  gallery.addVisual(new TechDiversityRace());
  gallery.addVisual(new TechDiversityGender());
  gallery.addVisual(new PayGapByJob2017());
  gallery.addVisual(new PayGapTimeSeries());
  gallery.addVisual(new ClimateChange());

  // my additional testing starts here
  /*
  var firstrow = employeeHpbgData.getRow(0);
  console.log(firstrow);
  var firstFind = employeeHpbgData.findRow('2000', 'year')
  console.log(firstFind);
  console.log(firstFind.getString(0,'year'))
  var allFinds = employeeHpbgData.findRows('10.3', 'median_female')
  console.log(allFinds[0])
  console.log(allFinds)
  for (i = 0; i < allFinds.length; i++){
    console.log(
      'Year = ',allFinds[i].getString('year'), 
      '\npay_gap = ',allFinds[i].getString('pay_gap'))
  }
  var listColumb = employeeHpbgData.getColumn('year')
  console.log(listColumb)
  */
  // my additional tesing stops here
  
}

function draw() {
  background(255);
  if (gallery.selectedVisual != null) {
    gallery.selectedVisual.draw();
  }
}
