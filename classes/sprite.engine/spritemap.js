class Spritemap
{
	constructor(_spritesheet_filepath,_sprite_size, _sprite_offset)
	{	
		this.spritemap_file = loadImage(_spritesheet_filepath)
		this.sprite_size = _sprite_size;
		this.sprite_offset = _sprite_offset;

		this.sprite_hashmap = this.SetupSpriteHashmap();
	}


	//Setup
	SetupSpriteHashmap() //Defines the types of hashes within the spritemap.
	{
		var hashmap = {};
		
		hashmap["Wall"] = new Vector2D(1,0);
		hashmap["Brick"] = new Vector2D(2,0);
		hashmap["Grass"] = new Vector2D(3,0);
		hashmap["ShadowGrass"] = new Vector2D(5,0);

		return hashmap;
	}


	//Gettors
	GetSpriteHashmapVector(_tile_type)
	{
		return this.sprite_hashmap[_tile_type];
	}
	GetSubSprite(_tile_type)
	{
		var sub_sprite_vector2D = this.GetSpriteHashmapVector(_tile_type);

		return this.spritemap_file.get
		(
			sub_sprite_vector2D.GetX()*this.sprite_size+(this.sprite_offset*sub_sprite_vector2D.GetX()),
			sub_sprite_vector2D.GetY()*this.sprite_size+(this.sprite_offset*sub_sprite_vector2D.GetY()),
			this.sprite_size,
			this.sprite_size
		);
	}
	GetSpriteSize()
	{
		return this.sprite_size;
	}
	GetSpriteOffsetVector()
	{
		return this.sprite_offset;
	}
};