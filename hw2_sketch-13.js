
function setup() {
  createCanvas(500, 500);
}
// "R" stands for "Red", "G" stands for "Green"
var xR = 180;
var yR = 180;
var xG = 350;
var yG = 350;
var xRspeed = 3;
var yRspeed = 4;
var xGspeed = 3;
var yGspeed = 4;


function draw() {
	background (250);

  	fill ("red");
  	noStroke();
  	ellipse (xR, yR, 40);
  	
  	fill("green");
  	ellipse(xG, yG, 40);

  	//travel horizontally
 	 xR = xR + xRspeed;
 	 xG = xG + xGspeed;
  	
  	if (xR > width-20 || xR < 20)  {
     	xRspeed = -xRspeed;
  	}
  	if (xG > width-20 || xG < 20){
  		xGspeed = -xGspeed;
  	}

  	//travel veritcally
  	yR = yR + yRspeed;
  	yG = yG + yGspeed;

  	if (yR > height-20 || yR < 20) {
	 	yRspeed = -yRspeed;
  	}
  	if (yG > height-20 || yG < 20) {
  		yGspeed = -yGspeed;
  	}

}
