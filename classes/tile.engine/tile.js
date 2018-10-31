class Tile
{
	//Constructor
	constructor(_TileVector,_TileType)
	{
		this.TileVector = new Vector2D(_TileVector[0],_TileVector[1]); //Needs validation.
		this.TileType = _TileType;
		
		this.IsDecaying = false;
		this.DecayCounter = 0;
	}


	//Gettors
	GetTileType()
	{
		return this.TileType;
	}
	GetTileVector()
	{
		return this.TileVector;
	}
	GetIsDecaying()
	{
		return this.IsDecaying;
	}
	GetDecayCounter() {
		return this.DecayCounter;
	}


	//Settors
	SetTileType(_TileType)
	{
		this.TileType = _TileType;
		this.IsDecaying = true;
	}
	SetTileVector(_TileVector)
	{
		this.TileVector = _TileVector;
	}

	//Modifiers
	DecayTile()
	{
		if (this.DecayCounter >= 5)
		{
			this.IsDecaying = false;
			this.DecayCounter = 0;
		}
		else
		{
			++this.DecayCounter;
		}
	}
};