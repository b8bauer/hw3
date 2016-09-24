function setup() {
  createCanvas(500,500);
  background(0);
}

var minSize = 2;
var maxSize = 10;
var minSpread = 5;
var maxSpread = 50;

function draw() {
	background(0,20);
	fill(random(200,255),random(200,255),random(200,255));
  	noStroke;
  		
	ellipse(mouseX-random(minSpread/2,maxSpread/2),mouseY-random(minSpread,maxSpread),random(minSize,maxSize));
	ellipse(mouseX+random(minSpread,maxSpread),mouseY+random(minSpread,maxSpread),random(minSize,maxSize));
	ellipse(mouseX-random(minSpread,maxSpread),mouseY+random(minSpread,maxSpread),random(minSize,maxSize));
	ellipse(mouseX+random(minSpread,maxSpread),mouseY-random(minSpread/2,maxSpread/2),random(minSize,maxSize));

}
