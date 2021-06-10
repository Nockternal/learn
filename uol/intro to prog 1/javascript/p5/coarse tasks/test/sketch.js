var x;
function setup() {
  createCanvas(400, 400);
  x = 0;
}

function draw() {
  var a = "100";
  var b = "0";
  var c = 2;

  var d = (Number(a)+Number(b))*c ;

  if(d == 2000){
    console.log("success!");
  }
  /*
  Number((c*a)+(c*b))
  Number(a+b)*c
  Number(a)+Number(b)*c
  (Number(a)+Number(b))*c
  */
  //console.log(x)
}
