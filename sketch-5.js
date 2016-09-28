function setup() {
  createCanvas(500,500);
  background(255);
}

function draw() {
	var x = 50;
	var y = 100;
	rectMode(CENTER);

	
	for (var repeat = 0; repeat <= 4; repeat++){
		var z = 80;
		
		for (var boxes = 0; boxes < 4; boxes++){
			noFill();
			rect(x,y,z,z);
			z = z - 20;
	}
	x = x + 100;
	}
	
}
