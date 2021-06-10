function sprayCan() {
  //for referencing spread variable
  var self = this;

  //name, icon, points, spread
  (this.name = "sprayCanTool"),
    (this.icon = "assets/sprayCan.jpg"),
    (this.points = 13),
    (this.spread = 10),
    (this.draw = function () {
      //if the mouse is pressed paint on the canvas
      //spread describes how far to spread the paint from the mouse pointer
      //points holds how many pixels of paint for each mouse press.
      if (mouseIsPressed) {
        for (var i = 0; i < self.points; i++) {
          point(
            random(mouseX - self.spread, mouseX + self.spread),
            random(mouseY - self.spread, mouseY + self.spread)
          );
        }
      }
    });
}
