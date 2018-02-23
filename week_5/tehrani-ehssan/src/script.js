console.log("testing");
//anonymous function passed to jquery when the document is ready
$(document).ready(function(){
	//executing the Map constructor on the google.maps object
	//elemtns and options properties
	var element = document.getElementById("foursquare-map");


    navigator.geolocation.getCurrentPosition(function(position) {
	    var lat = position.coords.latitude
		var lng = position.coords.longitude

		//console.log("lat" + lat)
		//console.log("lng" + lng)

		var myCurrentLocation = new google.maps.LatLng(lat,lng)
		drawMap(myCurrentLocation)

		//console.log(myCurrentLocation)
	})

	//object literal
	function drawMap(myCurrentLocation) {
		var options = {
			center: myCurrentLocation,
			zoom: 10,
		}

		var myMap = new google.maps.Map(element, options);

		$.ajax({

			cache: false,
			dataType: "jsonp",
			success: function(response) {
				console.log(response);

				response.response.venues.forEach(function(venue){
					var venueLatLng = new google.maps.LatLng(venue.location.lat, venue.location.lng);
					var myMarker = new google.maps.Marker({
						map: myMap,
						position: venueLatLng,
					})

					var myInfoWindow = new google.maps.InfoWindow({
						content: venue.name,

					})

					//implement a close window

				})
			},
			type: "GET",
			url: 'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query=tacos',
		
		})
	}
})