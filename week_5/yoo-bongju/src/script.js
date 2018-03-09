
$(document).ready(function() {
	var element = document.getElementById('foursquare-map')
	var options = {
		center: new google.maps.LatLng(43.6532, -79.3832),
		zoom: 12,
	}
	var map = new google.maps.Map(element, options)

		$.ajax({
			type: 'GET',
			dataType: 'jsonp', //specific way of packaging
			success: function(response) {
				console.log(response)
				response.response.venues.forEach(function(venue) {
					var venueLatLng = new google.maps.LatLng(venue.location.lat, venue.location.lng);
					var marker = new google.maps.Marker({ // pin marker
						map: map,
						position: venueLatLng,
					})
					var infowindow = new google.maps.InfoWindow({ 
						content: venue.name,

					});
					google.maps.event.addListener(marker, 'click', function() {
						map.setZoom(12);
						infowindow.open(map, marker);
					});
				})
			},
			cache: false,
			url: 'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query=tacos', 
			
		}) // ajax ends
}) // jquery ends