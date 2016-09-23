function setup() {
  createCanvas(500,500);
  background(255);
}

function draw() {
	
  var x = 250;
  var y = 250;
  var r = 5;
  
  while (r<=500){
  	noFill();
  	ellipse(x,y,r);
  	r = r + 10;
  }
}
