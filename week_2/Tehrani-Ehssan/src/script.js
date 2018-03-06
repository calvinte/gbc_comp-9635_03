console.log(google)

//this function is annonymous
google.maps.event.addDomListener(window, "load", function() {

	console.log("Page is loaded")

		navigator.geolocation.getCurrentPosition(function(position){
		console.log(position)

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
		console.log(myLatLng)


	})
})