

google.maps.event.addDomListener(window, "load", function() {

	//console.log("Page is loaded")

		navigator.geolocation.getCurrentPosition(function(position){
		//console.log(position)

		var myMapCanvas = document.getElementById("map-canvas")
		var lat = position.coords.latitude
		var lng = position.coords.longitude
		var myLatLng = new google.maps.LatLng(lat,lng)
		
		var myMap = new google.maps.Map(myMapCanvas, {
			zoom: 15,
			center: myLatLng,
		});

		var marker = new google.maps.Marker({
			position: myLatLng,
			map: myMap,
			title: "You are here",
			
		});
		//console.log(myLatLng)


		document.getElementById("myText").innerHTML = "You are currently at: Lat:" + lat + " Lng:" + lng;
 		
    	loadMyButton();

		
	})
})


function loadMyButton()
{

	var btn = document.createElement('button');
	var t = document.createTextNode("Click here to change"); // Create a text node
	btn.appendChild(t);  
	var wrapper = document.createElement('div');
	wrapper.appendChild(btn);

	document.getElementById("myButton").appendChild(wrapper);

	var buttons = wrapper.getElementsByTagName("BUTTON");
	
	buttons[0].onclick = function(){  
		changeLocationFunction(43.729764, -79.403084)
		buttons[0].style.visibility = 'hidden';  
	}
}






			

function changeLocationFunction(newLat, newLng){
	var myMapCanvas = document.getElementById("map-canvas")
		var lat = newLat
		var lng = newLng
		var myLatLng = new google.maps.LatLng(lat,lng)
		
		var myMap = new google.maps.Map(myMapCanvas, {
			zoom: 15,
			center: myLatLng,
		});

		var marker = new google.maps.Marker({
			position: myLatLng,
			map: myMap,
			title: "You are now here",
			
		});

		document.getElementById("myText").innerHTML = "In 1993 my family opened a small shop on Yonge street selling hand made rugs.  Over the years the store has gone through lots of changes including two rebranding and business objectives.  Nearly 25 years later this little shop has been the pride of my family, as well as a symbol of hardwork and dedication demonstrated by my parents.  As my siblings and I have different career objectives, the most difficult part will be the day we close the store for the very last time";

}