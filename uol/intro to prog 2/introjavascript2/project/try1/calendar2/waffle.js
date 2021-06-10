// we need to say where all the waffels are drawn
function Waffle(x, y, width, height, boxes_across, boxes_down, table,
    columnHeading, possibleValues) {

    // keep code clean & neat:  
    var x = x;
    var y = y;
    var height = height;
    var width = width;
    var boxes_down = boxes_down;
    var boxes_across = boxes_across;

    // this is for the actual data:
    var column = table.getColumn(columnHeading);
    // we need all possible Values to create the waffle chart
    var possibleValues = possibleValues;
    // make them stylish
    var colours = [];
    for (var i = 0; i < 10; i++) {
        colours.push([20 * i % 255, 80 * i % 255, 50 * i % 255])
    }

    // store each value / proportion of answers
    var categories = [];
    var boxes = [];

    // we need to find the categories
    function categoryLocation(categoryName) {
        for (var i = 0; i < possibleValues.length; i++) {
            if (categoryName == categories[i].name) {
                return i;
            }
        }
        // not explained see min 15:44 - till 17: 24
        return -1;
    }

    function addCategories() {
        // iterate over the possible values
        for (var i = 0; i < possibleValues.length; i++) {

            categories.push({
                "name": possibleValues[i],
                // how many did answer this
                "count": 0,
                // use modulo to make sure you don't run out of colors
                "colour": colours[i % colours.length]
            })
        }
        // we need to know how many answers we got 
        for (var i = 0; i < column.length; i++) {
            // which category we have to increase the count
            var catLocation = categoryLocation(column[i])
            if (catLocation != -1) {
                categories[catLocation].count++
            }
        }
        // iterate over categories and add proportions
        for (var i = 0; i < categories.length; i++) {
            // turn raw value into a proportion
            categories[i].boxes = round((categories[i].count / column.length) * (boxes_down * boxes_across));
        }
    }

    // iterate over possible boxes to know how many boxes we have to add for each category  
    function addBoxes() {
        // keep track were we are
        var currentCategory = 0;
        var currentCategoryBox = 0;

        // size of each box
        var boxWidth = width / boxes_across;
        var boxHeight = height / boxes_down;

        for (var i = 0; i < boxes_down; i++) {
            // we push into this array each box
            boxes.push([]);
            for (var j = 0; j < boxes_across; j++) {
                // if we reach the end reset and go to next category
                if (currentCategoryBox == categories[currentCategory].boxes) {
                    currentCategoryBox = 0;
                    currentCategory++;
                }
                boxes[i].push(new Box(x + (j * boxWidth), y + (i * boxHeight),
                    boxWidth, boxHeight, categories[currentCategory]));

                currentCategoryBox++;

            }
        }
    }
    // add categories -> to check set here a breakpoint
    addCategories();
    addBoxes();

    this.draw = function () {
        // draw waffle diagram
        for (var i = 0; i < boxes.length; i++) {
            for (var j = 0; j < boxes[i].length; j++) {
                // make sure there is a box
                if (boxes[i][j].category != undefined) {
                    boxes[i][j].draw();
                }
            }
        }
    }

    // some interaction
    this.checkMouse = function (mouseX, mouseY) {
        // check if mouse is over a box
        for (var i = 0; i < boxes.length; i++) {
            for (var j = 0; j < boxes[i].length; j++) {

                // if there is a box
                if (boxes[i][j].category != undefined) {
                    var mouseOver = boxes[i][j].mouseOver(mouseX, mouseY)

                    if (mouseOver != false) {
                        push();
                        fill(0);
                        textSize(20);
                        var tWidth = textWidth(mouseOver);
                        textAlign(LEFT, TOP)
                        rect(mouseX, mouseY, tWidth + 20, 40);
                        fill(255);
                        text(mouseOver, mouseX + 10, mouseY + 10);
                        pop();
                        // stop us from looking
                        break;
                    }
                }
            }
        }
    }
}