function LineToTool() {
  //icon file, name
  this.icon = "assets/lineTo.jpg";
  this.name = "LineTo";

  //
  var startMouseX = -1;
  var startMouseY = -1;
  var drawing = false;

  //draw drunction to draw line to the screen
  this.draw = function () {
    //draw if mouse is pressed
    if (mouseIsPressed) {
      //if it is a new drawing create a new line at mouseX and mouseY values
      if (startMouseX == -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;

        //save current pixels
        loadPixels();
      } else {
        //update the screen with the saved pixls to hide any previous line between mouse pressed and released
        updatePixels();
        line(startMouseX, startMouseY, mouseX, mouseY);
      }
    } else if (drawing) {
      //save the pixels with the most recent line and reset the drawing bool and start locations.
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}
