function setup() {
  createCanvas (500,500);
  background(167);
}

function draw() {
	
	var x = 20;
	stroke(255);

	for (var y = 30; y <= 470; y = y + 10){
		line (x,y,470,y)
	}
	
	y = 30;
	
	for (x = 20; x <= 470; x = x +10){
		line(x,y,x,470);
	}
}
