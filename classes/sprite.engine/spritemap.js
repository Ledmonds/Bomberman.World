class Spritemap
{
	constructor(_SpritesheetFilepath, _SpriteSize, _SpriteOffset)
	{	
		this.SpritemapImage = loadImage(_SpritesheetFilepath)
		this.SpriteSize = _SpriteSize;
		this.SpriteOffset = _SpriteOffset;

		this.SpriteHashmap = {};
	}


	//Setup
	SetupSpriteHashmap() //Defines the types of hashes within the spritemap.
	{
		//General Environment Blocks
		this.SpriteHashmap["Wall"] = this.GenerateSubSprite(new Vector2D(1,0));
		this.SpriteHashmap["Grass"] = this.GenerateSubSprite(new Vector2D(3,0));
		this.SpriteHashmap["ShadowGrass"] = this.GenerateSubSprite(new Vector2D(5,0));
		this.SpriteHashmap["Brick"] = this.GenerateSubSprite(new Vector2D(2,0));		

		//Decaying Brick States
		this.SpriteHashmap["DecayingBrick0"] = this.GenerateSubSprite(new Vector2D(0,6));
		this.SpriteHashmap["DecayingBrick1"] = this.GenerateSubSprite(new Vector2D(1,6));
		this.SpriteHashmap["DecayingBrick2"] = this.GenerateSubSprite(new Vector2D(2,6));
		this.SpriteHashmap["DecayingBrick3"] = this.GenerateSubSprite(new Vector2D(3,6));
		this.SpriteHashmap["DecayingBrick4"] = this.GenerateSubSprite(new Vector2D(4,6));
		this.SpriteHashmap["DecayingBrick5"] = this.GenerateSubSprite(new Vector2D(5,6));
	}
	GenerateSubSprite(_SubSpriteVector)
	{
		return this.SpritemapImage.get
		(
			_SubSpriteVector.GetX()*this.SpriteSize+(this.SpriteOffset*_SubSpriteVector.GetX()),
			_SubSpriteVector.GetY()*this.SpriteSize+(this.SpriteOffset*_SubSpriteVector.GetY()),
			this.SpriteSize,
			this.SpriteSize
		);	
	}

	//Gettors
	GetSprite(_TileType)
	{
		return this.SpriteHashmap[_TileType];
	}
	GetSpriteSize()
	{
		return this.SpriteSize;
	}
	GetSpriteOffsetVector()
	{
		return this.SpriteOffset;
	}
};