$(document).ready(function(){
	var element = document.getElementById('foursquare-map')
	var options = {
    center: new google.maps.LatLng(43.6532, -79.3832),
		zoom: 13,
	}
  var map = new google.maps.Map(element, options)
	$.ajax({
		type: 'GET',
		datatype: 'jsonp',
		cache: false,
		url: 'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query=gallery',
    success: function(response){
			console.log(response)
			response.response.venues.forEach(function(gallery){
				var venueLatLng = new google.maps.LatLng(gallery.location.lat, gallery.location.lng)
				var marker = new google.maps.Marker({
					map: map,
					position: venueLatLng,

				})
				var infowindow = new google.maps.InfoWindow({
					content: gallery.name
				})
				google.maps.event.addListener(marker, 'click', function(){
					map.setZoom(15);
					infowindow.open(map, marker);
				})



				google.maps.event.addListener(infowindow, 'closeclick', function(){
          map.panTo(this.getPosition());
					map.setZoom(15);
				})


			})
		},

	})

var transitLayer = new google.maps.TransitLayer();
transitLayer.setMap(map);

})



/*
$(document).ready(function() {
	var latlng = new google.maps.LatLng('43.6532', '-79.3832');
	var map = new google.maps.Map(document.getElementById('foursquare-map'), {
		center: latlng,
		zoom: 10
	});

	$.ajax({
		type: "GET",
		dataType: "jsonp",
		cache: false,
		url: 'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query=tacos',
		success: function(response) {
			response.response.venues.forEach(function(venue) {
				var location = venue.location
		                var latlng = new google.maps.LatLng(location.lat, location.lng);
				var marker = new google.maps.Marker({
					position: latlng,
					map: map
				});
				var infowindow = new google.maps.InfoWindow({ content: venue.name });
				google.maps.event.addListener(marker, 'click', function() {
					map.setZoom(12);
					infowindow.open(map, marker);
				});
			});
		}
	});
})
*/
