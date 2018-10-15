class Board
{
	//Constructor
	constructor()
	{
		this.tilemap = new Tilemap("../../assets/Stages/Stage1.tm");
		this.tile_array = [];

		this.spritemap = new Spritemap("../../assets/Sprites/Environment.png",16,1);

		this.draw_offset_x;
		this.draw_offset_y;

		this.mouse_vector;
	}

	//Setup
	SetupBoard()
	{
		this.tile_array = new Array();

		for (var y = 0; y < this.tilemap.GetTilemapVector().GetY(); ++y)
		{
			this.tile_array[y] = new Array();
			for (var x = 0; x < this.tilemap.GetTilemapVector().GetX(); ++x)
			{	
				this.tile_array[y][x] = new Tile([y,x],this.tilemap.GetTile(new Vector2D(y,x)));
			}
		}

		this.draw_offset_x = (this.tilemap.GetTilemapVector().GetX() * this.spritemap.GetSpriteSize()) / 2;
		this.draw_offset_y = (this.tilemap.GetTilemapVector().GetY() * this.spritemap.GetSpriteSize()) / 2;

		this.mouse_vector = this.GetTileNumber(new Vector2D(mouseX,mouseY));
	}


	//Gettors
	GetTileNumber(_mouse_vector)
	{
		var window_offset_x = -window.innerWidth/2;
		var window_offset_y = -window.innerHeight/2;

		var x = floor((window_offset_x + _mouse_vector.GetX() + this.draw_offset_x)/this.spritemap.GetSpriteSize());
		var y = floor((window_offset_y + _mouse_vector.GetY() + this.draw_offset_y)/this.spritemap.GetSpriteSize());

		return new Vector2D(x,y);
	}
	

	//Settors
	UpdateMouseVector()
	{
		this.mouse_vector = this.GetTileNumber(new Vector2D(mouseX,mouseY));
	}

	//Drawers
	DrawGameArea()
	{
		background([0,0,0,255]);
		noStroke();

		for (var y = 0; y < this.tile_array.length; ++y)
		{
			for (var x = 0; x < this.tile_array[y].length; ++x)
			{
				var tile_image = this.IsShadowTile(x,y) ? this.spritemap.GetSubSprite("ShadowGrass") : this.spritemap.GetSubSprite(this.tile_array[y][x].GetTileType()); //Checking if we can shadow the grass block.
				image(	tile_image,
						x*this.spritemap.GetSpriteSize()-this.draw_offset_x,
						y*this.spritemap.GetSpriteSize()-this.draw_offset_y,
						this.spritemap.GetSpriteSize(),
						this.spritemap.GetSpriteSize()
				);
			}
		}
	}

	DrawMouseHighlight(_mouse_vector)
	{
		fill(204,204,255,80);
		rect(	this.mouse_vector.GetX()*this.spritemap.GetSpriteSize()-this.draw_offset_x,
				this.mouse_vector.GetY()*this.spritemap.GetSpriteSize()-this.draw_offset_y,
				this.spritemap.GetSpriteSize(),
				this.spritemap.GetSpriteSize()
			);
	}


	//Checkers
	IsShadowTile(_x,_y)
	{
		return (_x > 0 && _y > 0 && this.tile_array[_y][_x].GetTileType() == "Grass" && this.tile_array[_y-1][_x].GetTileType() != "Grass") ? true : false;
	}
};