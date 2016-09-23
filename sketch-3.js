function setup() {
  createCanvas(500,500);
  background(255);
}

function draw() {
	
	for (var x = 0; x < width; x = x + 10){
		line(x,0,x,x*2);
	}
}
