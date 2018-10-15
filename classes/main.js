function preload()
{
	board = new Board();
}

function setup()
{
	createCanvas(window.innerWidth, window.innerHeight);
	board.SetupBoard();
}

function windowResized()
{
	resizeCanvas(window.innerWidth,window.innerHeight);
}

function mouseMoved() {
	board.UpdateMouseVector();
}


//Main
function draw() { 
	clear();
	
	
	translate(window.innerWidth/2,window.innerHeight/2);
	
	board.DrawGameArea();
	board.DrawMouseHighlight();
	
}



