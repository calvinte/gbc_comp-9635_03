console.log(google)

google.maps.event.addDomListener(window,'load', function() {
	console.log ('page is loaded')
	 navigator.geolocation.getCurrentPosition(function(position) {
		var map_canvas = document.getElementById('map-canvas')
		var lat = -25.344//position.coords.latitude
		var lng = 131.036//position.coords.longitude
		var Uluru = new google.maps.LatLng(lat,lng)
		var myMap = new google.maps.Map(map_canvas, {
			zoom:5,
			center:Uluru,
		})

		var marker = new google.maps.Marker({
			position:Uluru,
			map:myMap,
			title:"Ayers Rock"+" " + "Family Vacation 2012"
		})

   		//var infoWindow = new google.maps.InfoWindow({
       // content: \"Ayers Rock"+" " + "Family Vacation 2012"
    	//});

		//google.maps.event.addListener(marker, 'click', function() {
        	//infoWindow.open(map, marker);
    	 //});
		console.log(Uluru)
	})
})