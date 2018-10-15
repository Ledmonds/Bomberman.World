class Tile {
	constructor(_tile_vector2D,_tile_type)
	{
		this.tile_vector2D = new Vector2D(_tile_vector2D[0],_tile_vector2D[1]); //Needs validation.
		this.tile_type = _tile_type;
	}


	//Gettors
	GetTileType()
	{
		return this.tile_type;
	}
	Gettile_vector2D()
	{
		return this.tile_vector2D;
	}


	//Settors
	SetTileType(_tile_type)
	{
		this.tile_type = _tile_type;
	}
	Settile_vector2D(_tile_vector2D) //Needs Validation.
	{
		this.tile_vector2D = _tile_vector2D;
	}
};