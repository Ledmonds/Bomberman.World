class Board
{
	//Constructor
	constructor()
	{
		this.Tilemap = new Tilemap("../../assets/Stages/Stage1.tm");
		this.TileArray = [];

		this.Spritemap = new Spritemap("../../assets/Sprites/Environment.png",16,1);

		this.DrawOffsetX;
		this.DrawOffsetY;

		this.MouseVector;
		this.MouseColor = [238,130,238,120];
		this.MouseDirectionColor = [238,130,238,120];

		this.BackgroundColor = [0,0,0,255];
	}

	//Setup
	SetupBoard()
	{
		//Setup for the hashmapping values.
		this.Spritemap.SetupSpriteHashmap();

		//Setup for the Tilemapping values.
		this.TileArray = new Array();

		for (var y = 0; y < this.Tilemap.GetTilemapVector().GetY(); ++y)
		{
			this.TileArray[y] = new Array();
			for (var x = 0; x < this.Tilemap.GetTilemapVector().GetX(); ++x)
			{	
				var tile_type = this.Tilemap.GetTile(new Vector2D(y,x));
				this.TileArray[y][x] = new Tile([y,x],tile_type);
			}
		}

		//Setup for the draw offset values, used to draw tiles in centre screen.
		this.DrawOffsetX = (this.Tilemap.GetTilemapVector().GetX() * this.Spritemap.GetSpriteSize()) / 2;
		this.DrawOffsetY = (this.Tilemap.GetTilemapVector().GetY() * this.Spritemap.GetSpriteSize()) / 2;

		//Setup for mouse mouse draw values.
		this.MouseVector = this.GetTileNumber(new Vector2D(mouseX,mouseY));
	}


	//Gettors
	GetTileNumber(_MouseVector)
	{
		var window_offset_x = -window.innerWidth/2;
		var window_offset_y = -window.innerHeight/2;

		var x = floor((window_offset_x + _MouseVector.GetX() + this.DrawOffsetX)/this.Spritemap.GetSpriteSize());
		var y = floor((window_offset_y + _MouseVector.GetY() + this.DrawOffsetY)/this.Spritemap.GetSpriteSize());

		return new Vector2D(x,y);
	}
	GetXDrawCoords(_x) //Assists with determining where something should be drawn.
	{
		return _x*this.Spritemap.GetSpriteSize()-this.DrawOffsetX;
	}
	GetYDrawCoords(_y) //Assists with determining where something should be drawn.
	{
		return _y*this.Spritemap.GetSpriteSize()-this.DrawOffsetY;
	}
	

	//Settors
	UpdateMouseVector()
	{
		this.MouseVector = this.GetTileNumber(new Vector2D(mouseX,mouseY));
	}

	//Drawers
	DrawGameArea()
	{
		background(this.BackgroundColor);

		for (var y = 0; y < this.TileArray.length; ++y)
		{
			for (var x = 0; x < this.TileArray[y].length; ++x)
			{
				image(this.DetermineSpriteType(new Vector2D(x,y)), this.GetXDrawCoords(x), this.GetYDrawCoords(y));
			}
		}
	}

	DrawMouseHighlight() //Informs player which tile they are currently interacting with.
	{
		if(this.IsMouseWithinGameplayArea())
		{
			stroke(this.MouseColor)
			fill(this.MouseColor);
			rect(	this.GetXDrawCoords(this.MouseVector.GetX()),
					this.GetYDrawCoords(this.MouseVector.GetY()),
					this.Spritemap.GetSpriteSize(),
					this.Spritemap.GetSpriteSize(),
			);
		}
	}

	DrawMouseTracer() //Used to direct player back to game space if they have left.
	{
		/*if(!this.IsMouseWithinGameplayArea())
		{
			stroke(this.MouseDirectionColor);
			line(0, 0, mouseX-window.innerWidth/2, mouseY-window.innerHeight/2);
		}*/
	}


	//Checkers
	IsShadowGrassTile(_TileVector)
	{
		return (_TileVector.GetX() > 0 && _TileVector.GetY() > 0 && this.TileArray[_TileVector.GetY()][_TileVector.GetX()].GetTileType() == "Grass" && this.TileArray[_TileVector.GetY()-1][_TileVector.GetX()].GetTileType() != "Grass") ? true : false;
	}
	IsMouseWithinGameplayArea()
	{
		return (this.MouseVector.GetX() >= 0 && this.MouseVector.GetX() < this.TileArray[0].length && this.MouseVector.GetY() >= 0 && this.MouseVector.GetY() < this.TileArray.length) ? true : false;
	}

	//Gameplay Mechanics
	EditTile() {
		//Check if the mouse is within the game bounds and if the tile is editable.
		if (this.IsMouseWithinGameplayArea() && this.TileArray[this.MouseVector.GetY()][this.MouseVector.GetX()].GetTileType() == "Brick")
		{
			this.TileArray[this.MouseVector.GetY()][this.MouseVector.GetX()].SetTileType("Grass")
		}
	}

	DetermineSpriteType(_TileVector)
	{
		var _Sprite = null;

		if (this.TileArray[_TileVector.GetY()][_TileVector.GetX()].GetIsDecaying())
		{
			_Sprite = this.Spritemap.GetSprite("DecayingBrick"+this.TileArray[_TileVector.GetY()][_TileVector.GetX()].GetDecayCounter());
			this.TileArray[_TileVector.GetY()][_TileVector.GetX()].DecayTile();
		}
		else if(this.IsShadowGrassTile(_TileVector))
		{
			_Sprite	= this.Spritemap.GetSprite("ShadowGrass")
		} 
		else
		{
			_Sprite = this.Spritemap.GetSprite(this.TileArray[_TileVector.GetY()][_TileVector.GetX()].GetTileType());
		}

		return _Sprite;
	}
};