class Tilemap
{
	//Constructor
	constructor(_tilemap_filepath)
	{
		this.tilemap_file = loadStrings(_tilemap_filepath);
		this.valid_tiles = ['Wall','Grass','Brick']; //Chacter array containing all current valid tile types.
	}


	//Gettors
	GetTile(_tile_vector)
	{
		if (!this.IsValidTileVector(_tile_vector)) return null;
		else if (this.tilemap_file[_tile_vector.GetX()][_tile_vector.GetY()].toLowerCase() == 'w') return "Wall";
		else if (this.tilemap_file[_tile_vector.GetX()][_tile_vector.GetY()].toLowerCase() == 'g') return "Grass";
		else if (this.tilemap_file[_tile_vector.GetX()][_tile_vector.GetY()].toLowerCase() == 'b') return "Brick";
	}
	GetTilemapVector()
	{
		return new Vector2D(this.tilemap_file[0].length,this.tilemap_file.length);
	}
	GetSpriteSize()
	{
		return this.SpriteSize;
	}
	GetValidTiles(){
		return this.valid_tiles;
	}
	GetSprite(_SpriteType)
	{
		if (_SpriteType == 'w') {var x = 1; var y = 0;}
		if (_SpriteType == 's') {var x = 5; var y = 0;}
		else if (_SpriteType == 'b') {var x = 2; var y = 0;}
		else if (_SpriteType == 'g' || _SpriteType == ' ') {var x = 3; var y = 0;}

		return this.spritemap_file.get(x*this.SpriteSize+(this.SpriteOffset*x),y*this.SpriteSize+(this.SpriteOffset*y),16,16);
	}


	//Checkers
	IsValidTileVector(_tile_vector)
	{
		return (_tile_vector.GetX() >= 0 || _tile_vector.GetX() < this.GetTilemapVector().GetX() || _tile_vector.GetY() >= 0 || _tile_vector.GetY() < this.GetTilemapVector().GetY()) ? true : false;
	}
}