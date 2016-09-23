function setup() {
  createCanvas(500,500);
  background(255);
}

function draw() {
	var x = 250;
	var y = 5;
	
	while(y <= 250){
		line(x-y, y, x+y, y);
		y = y + 10;
	}
	
	while(y <= 500){
		line(y-x, y, x-(y-500), y);
		y = y + 10;
	}
}
