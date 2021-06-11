function EatingHabits()
{
    this.name = 'Eating Habits';

    // Each visualisation must have a unique ID with no special
    // characters.
    this.id = 'eating-habbit';
    
    // Property to represent whether data has been loaded.
    this.loaded = false;
    this.data;
    this.waffles = [];
    this.days;


    this.preload = function() {
        var self = this;
        this.data = loadTable(
          './data/food/data1.csv', 'csv', 'header',
          // Callback function to set the value
          // this.loaded to true.
          function(table) {
            self.loaded = true;
          });
          
      };
    this.setup = function() {
        this.days = [
            "Monday" ,
            "Tuesday", 
            "Wednesday",
            "Thursday" ,
            "Friday" ,
            "Saturday",
            "Sunday"
          ];
        
          this.values = [
            'Take-away', 
            'Cooked from fresh',
            'Ready meal', 
            'Ate out', 
            'Skipped meal', 
            'Left overs'
          ]
        for (var i = 0; i < this.days.length; i++) {
            // put them into rows  
            if (i < 4) {
                this.waffles.push(new Waffle(20 + (i * 220), 20, 200, 200, 10, 10, this.data, this.days[i], this.values))
            } else {
                // we got to start at i-4
                this.waffles.push(new Waffle(20 + ((i - 4) * 220), 240, 200, 200, 10, 10, this.data, this.days[i], this.values))
            }
        }
    };
  
    this.destroy = function() {
    };
    this.draw = function() 
    {
        for (var i = 0; i < this.waffles.length; i++) {
            this.waffles[i].draw();
        }
      
        for (var i = 0; i < this.waffles.length; i++) {
            this.waffles[i].checkMouse(mouseX, mouseY);
        }
    }
}