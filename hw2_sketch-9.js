function setup() {
  createCanvas (500,500);
  background(0);
}

function draw() {
	var x = 10;
	var y = 10;
	
	while (y < 490){
	stroke (255);
	line (x, y, y + 10, 10);
	y = y + 10;
	}
	
	y = 20;
	
	while (x < 490){
	stroke (255);
	line (x, 490, 490, y);
	x = x + 10;
	y = y + 10;
	}
	
	noStroke();
	textSize(400);
	textStyle(BOLD);
	text("P",100,50,500,500);
}
