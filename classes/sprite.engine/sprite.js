class Sprite {
	constructor(_Sprite2DVector,_SpriteType,_SpriteImage) //Game Variables
	{
		this.Sprite2DVector = _Sprite2DVector;
		this.SpriteType = _SpriteType;
	}

	//Gettors
	GetSpriteType() {return this.SpriteType;}

	//Settors
	SetSpriteType(_SpriteType) {this.SpriteType = _SpriteType;}

	//Drawers
	DrawSprite(_SpriteSize,_Offset2DVector) {
		noStroke();
		var sprite_image = tilemap.GetSprite(this.SpriteType);
		image(sprite_image,(this.Sprite2DVector[1]*_SpriteSize)-_Offset2DVector[1]/2*_SpriteSize,(this.Sprite2DVector[0]*_SpriteSize)-_Offset2DVector[0]/2*_SpriteSize,_SpriteSize,_SpriteSize);
	}

};