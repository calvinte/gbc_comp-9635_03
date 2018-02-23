$(document).ready(function(){
	var element = document.getElementById('foursquare-map')
	var options = {
		zoom: 10,
		center: new google.maps.LatLng(43.6532, -79.3832), 
	}
	var map = new google.maps.Map(element,options)
	$.ajax({
		
		dataType:'jsonp',
		cache: false,
		success:function(response){
			console.log (response)
			response.response.venues.forEach(function(venue){
				var venueLatLng = new google.maps.LatLng(venue.location.lat,venue.location.lng)
				var marker = new google.maps.Marker({
					map:map,
					position: venueLatLng,
				})
				var infowindow = new google.maps.InfoWindow({
					content: venue.name, 
				})

				google.maps.event.addListener(marker,"click", function ClickHandler(){
					map.setCenter(marker.position)
					map.setZoom(10)
					infowindow.open(map, marker)
				})
				
				google.maps.event.addListener(infowindow,'closeclick', function(){
					map.panTo(this.getPosition())
					map.setZoom(10)
					infowindow.close()
				})
				
				google.maps.event.addListener(marker)
			})
		},
		type:'GET',
		url:'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query=tacos',
	})
})
