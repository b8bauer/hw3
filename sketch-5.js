function setup() {
  createCanvas(500,500);
  background(255);
}

function draw() {
	var x = 50;
	var y = 100;
	
	for (var repeat = 0; repeat <= 5; repeat++){
		var z = 50;
	for (var boxes = 0; boxes < 4; boxes++){
		noFill();
		rectMode(CENTER);
		rect(x,y,z,z);
		z = z - 15;
	}
	x = x + 70;
	}
	
}
