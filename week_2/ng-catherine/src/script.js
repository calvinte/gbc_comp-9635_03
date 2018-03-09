console.log(google)

google.maps.event.addDomListener(window, 'load', function(){
	console.log('page is loaded')
	navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position)
		var map_canvas = document.getElementById('map-canvas')
		var lat = 43.616047
		var lng = -79.661073
		var myLatLng = new google.maps.LatLng(lat, lng)
		var myMap = new google.maps.Map(map_canvas, {
			zoom: 15,
			center: myLatLng,
		})
		new google.maps.Marker({
			position: myLatLng,
			map: myMap,
		})


		console.log(myLatLng)
	})
})
43.616047,-79.661073