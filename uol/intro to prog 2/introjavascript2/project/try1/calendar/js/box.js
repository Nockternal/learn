function Box(x,y,width,height,category)
{
    // private variables 
    var x = x;
    var y = y;
    var height;
    var width;
    // public variables
    this.category = category;


    // public functions
    this.mouseOver = function()
    {
        if (
            (mouseX > x) && 
            (mouseX < x + width) && 
            (mouseY > y) && 
            (mouseY < y + height)
            ) 
        {
            return this.category.name
        }
        return false;
    }
    this.draw = function()
    {
        fill(category.colour);
        rect(x,y,width,height);
    }
}