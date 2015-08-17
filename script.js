// Your JS goes here

/*
Each tile should be a div
Each tile's width is 11.1%
Set each tile's float property to left
Each tile's paddingBottom is 11.1%
9 x 7 grid
*/


// write code to change each tile's color to a new random color 
// every 2 seconds.


window.onload = function(){


//Create Audio for BONUS FEATURES!!!

var audioPlayer = document.createElement("AUDIO");

// audioPlayer.setAttribute("src")





// Create for loop to alternate black/red backgroundColor

for(var i = 0; i < 63; i++)
{

	// Create a div
	// Need to keep re-defining the div inside of a for-loop
	// so appendChild will recognize NEW divs, if not, appendChild
	// will only append only the 1 time i define it
	var div = document.createElement("div");

	var randomOne = Math.floor(Math.random() * 355) + 50;
	var randomTwo = Math.floor(Math.random() * 355) + 50;
	var randomThree = Math.floor(Math.random() * 355) + 50;

    div.style.backgroundColor = "rgb("+randomOne+","+randomTwo+","+randomThree+")";


	 // Set an interval per div created to change colors every 2 seconds
	var count = 0;
	var timerID = setInterval(changeColor.bind(null,div),Math.random() * 2000);	

	div.style.width = "11.1%";
	div.style.paddingBottom = "11.1%";
	div.style.cssFloat = "left";


	// Append to parent
	document.body.appendChild(div);
} // End of for loop

function changeColor(div){
    count++;
    console.log(count);
   
	randomOne = Math.floor(Math.random() * 355) + 50;
	randomTwo = Math.floor(Math.random() * 355) + 50;
	randomThree = Math.floor(Math.random() * 355) + 50;

    if(count >= 3)
    {
        clearInterval(timerID);
    }
    div.style.backgroundColor = "rgb("+randomOne+","+randomTwo+","+randomThree+")";}

}   // END ONLOAD



