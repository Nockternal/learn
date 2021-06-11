function Box(x, y, width, height, category) {

    // keep code clean & neat:  
    var x = x;
    var y = y;
    var height = height;
    var width = width;

    this.category = category;

    // pass in mouseX and mouseY to make the code more readable
    this.mouseOver = function (mouseX, mouseY) {

        // check if mouse is over a box
        if (mouseX > x && mouseX < x + width && mouseY > y && mouseY < y + height) {
            return this.category.name
        }
        return false;
    }

    this.draw = function () {
        fill(category.colour);
        rect(x, y, width, height);
    }
}