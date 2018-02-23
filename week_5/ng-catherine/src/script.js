console.log('testing')
$(document).ready(function() {
	var element = document.getElementById('foursquare-map')
	var options = {
		center: new google.maps.LatLng(43.6532, -79.3832),
		zoom: 10,
	}
	var map = new google.maps.Map(element, options)//defines the map

	//api request
	$.ajax({
		cache: false,
		dataType: 'jsonp',//json packaged with a callback function
		success: function(response) {
			console.log(response)
			response.response.venues.forEach(function(venue) {
				var venueLatLng = new google.maps.LatLng(venue.location.lat, venue.location.lng)
				var marker = new google.maps.Marker({
					map: map,//specifies the map google will put the markers on
					position: venueLatLng,

				})
				var infowindow = new google.maps.InfoWindow({
					content: venue.name,//html content
				})

				//3 methods to achieve the same result:
				/*
				marker.addListener('click', function() {})
				google.maps.addListener(marker, 'click', function() {})
				google.maps.addEventListener(marker, 'click', function() {})*/

				google.maps.event.addListener(marker, 'click', function ClickHandler() {
					map.setCenter(marker.position)
			      	map.setZoom(15)
			      	infowindow.open(map, marker)
			    })
			    google.maps.event.addListener(infowindow,'closeclick', function(){
			    	map.panTo(this.getPosition())
			      	map.setZoom(10)
			    })
			})
		},
		type: 'GET',
		url: 'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query=tacos',
	})
})