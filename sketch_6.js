function setup() {
  createCanvas (500,500);
  background(0);
}

function draw() {
	
	var y = 20;
	
	for (var columns = 1; columns <= 13; columns++){
		
		for (var x = columns*20; x < 250; x = x + 20){
			ellipse(x,y,15);
		}
		
		y = y + 20;
	
	}
	
	x = 260;
	
	for (columns = 11; columns >=0; columns--){
		for (y = columns*20; y >= 20; y = y - 20){
			ellipse(x,y,15);
		}
		x = x + 20;
	}
}
