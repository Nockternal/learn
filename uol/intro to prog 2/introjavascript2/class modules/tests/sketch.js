var myArray = [12,54,2,95,578,23,3,32]

var groups = 
[
  ["Anthony", "Becky", "Claire", "David", "Elaine", "Freddy" ],
  ["Simone", "Janie", "Majid", "Ali", "Christopher"],
  ["Helena", "John", "steph", "Emily"],
  ["Jin", "Matthew", "Mohammed", "Elizabeth", "Eric", "Laura"], 
  ["Anna", "Melissa", "Donny", "Izzy" ]
]
function setup() {
  createCanvas(800, 600);
  background(220);  
	for(var i = 0; i < 7; i++)
    {
      console.log('loop1 - ',i);
      for(var j = 0; j < 5; j++)
      {
        console.log('loop2 - ',i);
      }
    }   
}

function draw() {
  
}
