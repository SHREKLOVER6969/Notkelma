function switchPic(thisImage) {
	document.getElementById("bP").src = thisImage.src;


}

//adds products to cart
function addToList(){
	alert("gay");
	var listItem = document.createElement('li');
	listItem.appendChild(document.createTextNode("kyrpä"));
	NotkelmaCart.getElementById("cartList").appendChild(listItem);
}