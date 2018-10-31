# Contains notable features to be added into project.

## Easy Addition
	• Document custom .tm extension. Look into some standards around tile map file layouts.
	• Document out classes.
	• Create hash map from .tm files to actual types.
	• Remove p5.js library dependancy upon release, should just link to online p5js repo.

## Medium Addition
	• Add validation for .tm files, such that they can handle erroneous .tm files.
	• Mouse tracking needs some styling, maybe a dotted or flashing line etc. Kind of sucks at the moment. You could map alpha values so that is only starts to appear once at the edge of game area and gets stronger the further away the mouse is.

## Hard Addition
	• Implement some optimisation for the on screen tile drawing.
	• Implement a proper tile decay system, as this will be needed with more than just brick type decaying; used with bomb animations, death animations etc.
	• Implement delta time to run animation and board update clocks.
	• Implement some custom animations with the MouseHighlightOverlay.