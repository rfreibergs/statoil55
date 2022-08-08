/**
 *	Worker JS
 *
 *	Description: Uses Wave JS to build waves to a canvas element
 *	Author: RITESH KUKREJA
 *	Website: riteshkukreja.wordpress.com
 *
**/

/**
 *	Canvas Element and Canvas Context
**/
var canvas = document.getElementById("anim");
var context = canvas.getContext("2d");

/**
 *	WaveList to store all the waves in the list
 *	colors list to allow multiple colors to chose from
**/
var waveList = [];
var colors = ["#FFFFFF"];


window.onload = function() {

	// Canvas will cover up the entire screen
	canvas.width = window.innerWidth;
	canvas.height = 650;

	/**
	 *	Clear Method to clear the entire canvas
	**/
	var clear = function() {
		context.clearRect(0, 0, canvas.width, canvas.height);
	}

	/**
	 *	Returns a random Integer between min and max range.
	**/
	var getRandomInt = function(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	/**
	 *	Clear the canvas and then draw all the waves on the canvas. Utilize requestAnimationFrame for recursion.
	**/
	var draw = function() {
		setTimeout(draw, 1000/30);
		// draw all features
		clear();

		for(var w of waveList)
			w.redraw();
	}

	/**
	 *	Initialize the appliation
	**/
	var init = function() {
		for(var i = 0; i < 2; i++) {
			waveList.push(
				new Wave({
					canvas: canvas, 
					color: "#be3323", 
					phase: getRandomInt(0, 10), 
					shift: getRandomInt(-20, 20), 
					amplitude: getRandomInt(60, 70),
					frequency: 0.005,
					fixedStart: false,
					fixedEnd: false,
					outline: true
				})
			);
			waveList.push(
				new Wave({
					canvas: canvas, 
					color: "#e3612e", 
					phase: getRandomInt(0, 10), 
					shift: getRandomInt(-20, 20), 
					amplitude: getRandomInt(60, 70),
					frequency: 0.005,
					fixedStart: false,
					fixedEnd: false,
					outline: true
				})
			);

			//waveList[0].draw();
		}

		draw();
	}

	// Let it go
	init();
}


