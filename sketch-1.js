function setup() {
  createCanvas(500,500);
  background(255);
}

function draw() {
  for (var x = 20; x <= 480; x = x + 10){
  	line(250, 20, x, 480);
  }
}
