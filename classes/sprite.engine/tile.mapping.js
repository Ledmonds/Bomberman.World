class TileMap
{
	constructor()
	{
		this.tilemap_file = loadStrings("./../../tile.mapping/Level1.tm");
		this.ValidTilemapTile = ['w','g','b']; //Chacter array containing all current valid tile types.

		this.SpriteSize = 16;
		this.SpriteOffset = 1;
		this.spritemap_file = loadImage("./../../assets/sprites/environment.png");
	}

	//Generators
	GenerateTileMapArray()
	{
		var sprite_array = new Array();

		for (var y = 0; y < this.tilemap_file.length; ++y)
		{
			sprite_array[y] = new Array();
			for (var x = 0; x < this.tilemap_file[y].length; ++x)
			{
				if (this.tilemap_file[y][x] == ' ' && this.tilemap_file[y-1][x] != ' ')
				{
					sprite_array[y][x] = new Sprite([y,x],'s');	
				} else {
					sprite_array[y][x] = new Sprite([y,x],this.tilemap_file[y][x]);		
				}
			}
		}

		return sprite_array;
	}

	//Gettors
	GetSpriteSize() {return this.SpriteSize;}
	GetValidTiles() {return this.ValidTilemapTile;}
	GetSprite(_SpriteType)
	{
		if (_SpriteType == 'w') {var x = 1; var y = 0;}
		if (_SpriteType == 's') {var x = 5; var y = 0;}
		else if (_SpriteType == 'b') {var x = 2; var y = 0;}
		else if (_SpriteType == 'g' || _SpriteType == ' ') {var x = 3; var y = 0;}

		return this.spritemap_file.get(x*this.SpriteSize+(this.SpriteOffset*x),y*this.SpriteSize+(this.SpriteOffset*y),16,16);
	}
}