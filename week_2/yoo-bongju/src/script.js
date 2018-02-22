console.log(google)
google.maps.event.addDomListener(window, 'load', function() {
	console.log('page is loaded')
	navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position)
		var map_canvas = document.getElementById('map-canvas')
		var lat = position.coords.latitude
		var lng = position.coords.longitude
		//console.log(lat, lng)
		var myLatLng = new google.maps.LatLng(lat, lng)
		var myMap = new google.maps.Map(map_canvas, {
			zoom: 20,
			center: myLatLng,
			mapTypeId:google.maps.MapTypeId.HYBRID, // Hybrid Type
			mapTypeControl: true,
    		mapTypeControlOptions: {
      			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      			position: google.maps.ControlPosition.TOP_CENTER
    		} // Map Type Control Center
		})
		new google.maps.Marker({
			position: myLatLng,
			map: myMap,
			icon: "mario-jump-sm.png", // Mario Icon
			animation: google.maps.Animation.BOUNCE // Bouncing Marker
			})
		console.log (myLatLng)
	})
})
