console.log(google)
google.maps.event.addDomListener(window, 'load', function() {
	console.log('Dom has loaded!')
	 var mapEl = document.getElementById('travel-map')
	 var latLng = new google.maps.LatLng(45.662652,-40.557229)
	 var mapOptions = {
			 center: latLng,
			 zoom: 3,
			}
	var map = new google.maps.Map(mapEl, mapOptions)

	var myPlaces = [{
		content: '<h1>El Nido, Palawan</h1> + ',
		lat: 11.266454,
		lng: 119.478024,
	}, {
		content: '<h1>Koh Tao, Thailand</h1>',
		lat: 10.432853,
		lng: 99.846390,
	}, {
		content: '<h1>Barcelona, Spain</h1>',
		lat: 41.382035,
		lng: 2.170054,
	}, {
		content: '<h1>Paros, Greece</h1>',
		lat: 37.086120,
		lng: 25.149451,
	}, {
		content: '<h1>Capri, Italy</h1>',
		lat: 40.554906,
		lng: 14.222046,
	}, {
		content: '<h1>Tulum, Mexico</h1>',
		lat: 20.163364,
		lng: -87.453222,
	},{
		content: '<h1>Barbados</h1>',
		lat: 13.177805,
		lng: -59.564783,
	},{
		content: '<h1>Montego Bay, Jamaica</h1>',
		lat: 18.470570,
		lng: -77.855751,
	}, {
		content: '<h1>Sydney, Australia</h1>',
		lat: -33.859701,
		lng: 151.204735,
	}, {
		content: '<h1>Ballymena, Ireland</h1>',
		lat: 54.873663,
		lng: -6.279885,
	}]

	myPlaces.forEach(function(place) {
		console.log(place.content)

		var latLng = new google.maps.LatLng(place.lat, place.lng)
		
		
		var marker = new google.maps.Marker({
			map: map, 
			position: latLng,
			})
		var infowindow = new google.maps.InfoWindow({
			content: place.content,
			})

		google.maps.event.addListener(marker, 'click', function ClickHandler() {
		map.setCenter(marker.position)
		map.setZoom(12)
		infowindow.open(map, marker)
		})

		google.maps.event.addListener(infowindow, 'closeclick', function() {
	      map.panTo(this.getPosition());
	      map.setZoom(2);
   		})
	})

	
})
