// Your JS goes here

/*
Each tile should be a div
Each tile's width is 11.1%
Set each tile's float property to left
Each tile's paddingBottom is 11.1%
9 x 7 grid
*/

window.onload = function(){


// Create for loop to alternate black/red backgroundColor

for(var i = 0; i < 63; i++)
{

	// Create a div
	// Need to keep re-defining the div inside of a for-loop
	// so appendChild will recognize NEW divs, if not, appendChild
	// will only append only the 1 time i define it
	var div = document.createElement("div");

	var randomOne = Math.floor(Math.random() * 255) + 1;
	var randomTwo = Math.floor(Math.random() * 255) + 1;
	var randomThree = Math.floor(Math.random() * 255) + 1;


	//Add Random Style using rgb(#,#,#)

	console.log("rgb("+randomOne+","+randomTwo+","+randomThree+")");
	div.style.backgroundColor = "rgb("+randomOne+","+randomTwo+","+randomThree+")";
	
	
	div.style.width = "11.1%";
	div.style.paddingBottom = "11.1%";
	div.style.cssFloat = "left";


	// Append to parent
	document.body.appendChild(div);
}




}   // END ONLOAD



