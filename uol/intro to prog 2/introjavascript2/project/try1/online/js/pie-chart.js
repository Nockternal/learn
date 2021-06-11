function PieChart(x,y,diameter) 
{
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.labelSpace = 30;
    var mouseAngle = 0, pieDelta = 0, hover = 0;
    this.get_radians = function(data) {
        var total = sum(data);
        var radians = [];
    
        for (let i = 0; i < data.length; i++) {
          radians.push((data[i] / total) * TWO_PI);
        }
    
        return radians;
      };

    this.draw = function(data, labels, colours, title)
    {
        if (data.length ==0)
        {
            alert('No data loaded')
        }
        else if (![labels, colours].every((array) => {
            return array.length == data.length;
          })) {
            alert(`Data (length: ${data.length})
          Labels (length: ${labels.length})
          Colours (length: ${colours.length})
          Arrays must be the same length!`);
          }

        var angles = this.get_radians(data);
        //console.log(angles);
        var lastAngle = 0;
        var colour;
        
          
        for (var i = 0,dx=0,dy=0; i < data.length; i++,dx=0,dy=0) {
            if (colours) {
                colour = colours[i];
            }
            else
            {
                colour = map(i,0,data.length,0,255)
            }
            fill(colour)
            stroke(0)
            strokeWeight(1)
            
            if(mouseAngle >= lastAngle && mouseAngle<lastAngle+angles[i])
            {
                dx = Math.cos((lastAngle + lastAngle+angles[i])/2) * 10;
                dy = Math.sin((lastAngle + lastAngle+angles[i])/2) * 10;
            }
            arc(
                this.x+dx,this.y+dy,
                this.diameter,this.diameter,
                lastAngle,lastAngle+angles[i]+0.001,PIE)

            if (labels)
            {
                this.makeLegendItem(labels[i],i,colour)
            }
            lastAngle += angles[i]
        }
        if (title)
        {
            fill('black')
            noStroke();
            textAlign('center', 'center');
            textSize(24);
            text(title, this.x, this.y - this.diameter * 0.6);

        }
    }
    // tried adapting http://bl.ocks.org/infographicstw/8a76612985ea52c5be1f
    this.mouseMoved = function () {
        mouseAngle = Math.PI / 2 - Math.atan((320 - mouseX) / (200 - mouseY));
        if(mouseY < 200) mouseAngle = mouseAngle + Math.PI;
      }
    this.makeLegendItem = function(label ,i,colour)
    {
        var x = this.x+50+this.diameter/2;
        var y = this.y+(this.labelSpace*i)-this.diameter/3;
        var boxWidth = this.labelSpace;
        var boxHeight = this.labelSpace ;

        fill(colour);
        rect(x, y, boxWidth, boxHeight);
        fill('black');
        noStroke();
        textAlign('left', 'center');
        textSize(12);
        text(label, x + boxWidth + 10, y + boxWidth / 2);

    }
}