function TechDiversityRace()
{
    this.name = 'Tech Diversity: Race';
    this.id = 'tech-diversity-race';
    this.loaded = false;
    this.pie = new PieChart(width / 2, height / 2, width * 0.4);
    
    this.preload = function() {
        var self = this;
        this.data = loadTable(
          './data/tech-diversity/race-2018.csv', 'csv', 'header',
          // Callback function to set the value
          // this.loaded to true.
          function(table) {
            self.loaded = true;
          });
      };
    
    this.setup = function() 
    {
        if (!this.loaded) 
        {
            console.log('Data not loaded');
            return;
        }
        this.select = createSelect();
        this.select.position(350,40);
        var companies = this.data.columns;
        for (var i =1; i <companies.length; i++)
        {
            this.select.option(companies[i])
        }
    }
    this.destroy = function() {
        this.select.remove();
      };
    this.draw = function ()
    {
        //console.log(this.data)
        //console.log('drawing')
        if (!this.loaded)
        {
            console.log('Data not yet loaded');
            return;
        }
        var colors = ['blue', 'red', 'green', 'pink', 'purple', 'yellow']
        var companyName = this.select.value();
        //console.log(companyName)
        
        var col = this.data.getColumn(companyName)
        col = stringsToNumbers(col)
        //console.log(col) 
        var labels = this.data.getColumn(0);
        var title = 'Employee diversity at ' + companyName;
        this.pie.draw(col,labels,colors,title);
        this.pie.mouseMoved();
    }
}