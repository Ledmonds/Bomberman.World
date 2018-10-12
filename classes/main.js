function preload()
{
	tilemap = new TileMap();
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	sprite_array = tilemap.GenerateTileMapArray();
}

function windowResized() {
	resizeCanvas(window.innerWidth,window.innerHeight);
}

//Main
function draw() { 
	clear();
	translate(window.innerWidth/2,window.innerHeight/2);

	background([0,0,0,255]);

	for (var y = 0; y < sprite_array.length; ++y)
	{
		for (var x = 0; x < sprite_array[y].length; ++x)
		{
			sprite_array[y][x].DrawSprite(tilemap.GetSpriteSize()*2,[sprite_array.length,sprite_array[0].length]);
		}
	}

}



