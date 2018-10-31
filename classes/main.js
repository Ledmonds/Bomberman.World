function preload()
{
	Board = new Board();
}

function setup()
{
	createCanvas(window.innerWidth, window.innerHeight);
	Board.SetupBoard();
}

function windowResized()
{
	resizeCanvas(window.innerWidth,window.innerHeight);
}

function mouseMoved()
{
	Board.UpdateMouseVector();
}

function mouseClicked()
{
	Board.EditTile();
}


//Main
function draw() { 
	clear();
	
	translate(window.innerWidth/2,window.innerHeight/2);

	cursor(HAND)
	Board.DrawGameArea();
	Board.DrawMouseTracer();
	Board.DrawMouseHighlight();
	
}



