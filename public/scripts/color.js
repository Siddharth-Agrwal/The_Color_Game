console.log("connected");
// This variable keeps track whether we are in the easy mode or hard mode
var numSquares=6;
var colors= [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var display= document.querySelector("#display");
var msg= document.querySelector("#msg");
var h1= document.querySelector("h1");
var resetbutton= document.querySelector("#reset");
var mode= document.querySelectorAll(".mode");


init();

function init()
{
	setmode();
	setupsquares();
	reset();
}

// To define what happens when we click the easy and hard buttons
function setmode()
{
	for(var i=0;i<mode.length;i++)
	{
		mode[i].addEventListener("click",function()
		{
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === " Easy"?numSquares=3:numSquares=6;

			reset();
		})
	}
}

//Adding to the eventlisteners to the squares
function setupsquares()
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor= colors[i];

		squares[i].addEventListener("click",function()
		{
			if(this.style.backgroundColor==pickedColor)
				correctfn(pickedColor);
			else
			{
				msg.textContent="Try Again";
				this.style.backgroundColor="#232323"
			}	
		})
	}
}

function reset()
{
	colors= generateRandomColours(numSquares);
	pickedColor=pickedcolor();
	display.textContent= pickedColor;
	resetbutton.textContent="New Colours";
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{	
			squares[i].style.display="block";
			squares[i].style.backgroundColor= colors[i];
		}
		else
			squares[i].style.display="none";
	}	
	h1.style.backgroundColor= "steelblue";
	msg.textContent="";
}

// If the play again button is clicked
resetbutton.addEventListener("click", function()
{
	reset();
})


//chose the correct square
function correctfn(pickedColor)
{
	h1.style.backgroundColor = pickedColor;
	msg.textContent="Correct";
	resetbutton.textContent="Play Again?";
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=pickedColor;
	}
}

//Picking a random colour
function pickedcolor()
{
	var random= Math.floor(Math.random()* colors.length)
	return colors[random];
}

// Generating Random colours for the squares
function generateRandomColours(length)
{
	var arr = [];
	for(var i=0;i<length;i++)
	{
		arr.push(randomColour());
	}
	return arr;
}

// For generating a random colour for the above function
function randomColour()
{
	// Choosing for red
	var r = Math.floor(Math.random()* 256);
	// Choosing for green
	var g = Math.floor(Math.random()* 256);
	// Choosing for blue
	var b = Math.floor(Math.random()* 256);

	var rgb= "rgb("+r+", "+g+", "+ b+")";
	return rgb;		
}