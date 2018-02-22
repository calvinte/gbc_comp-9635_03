console.log(google)
google.maps.event.addDomListener(window, 'load', function() {

	console.log ('DOM HAS LOADED')

	var mapEl = document.getElementById('places-map')
	// you get element from the dom that is the div places-map
	var latLng = new google.maps.LatLng (-13.531950, -71.967463)
	var mapOptions ={
		center: latLng,
		zoom:6,
	}
	var myMap= new google.maps.Map(mapEl, mapOptions)


	var myPlaces = [{
		content: '<h2>Cuzco, Peru</h2>',
		lat: -13.531950,
		lng: -71.967463,
		image: '<img height="100" src="http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1428071023/CUZCO0415-view.jpg?itok=3hl8GH2c">',
	}, {
		content: '<h2>Ollantaytambo, peru</h2>',
		lat: -13.258369,
		lng: -72.264268,
		image: '<img height="100" src="https://www.matrixdisclosure.com/wp-content/uploads/2017/05/ollantaytambo.jpg">',

	}, {
		content: '<h2>Agua Calientes, Peru</h2>',
		lat: -13.154706,
		lng: -72.525441,
		image: '<img height="100"  src="https://9227-presscdn-0-11-pagely.netdna-ssl.com/wp-content/uploads/2015/07/Aguas-Calientes-Peru.jpg">',

	}, {
		content: '<h2>Machu Picchu, peru</h2>',
		lat: -13.163141,
		lng: -72.544963,
		image: '<img height="100"  src="http://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/05/28/50/Machu-Picchu-Mountain.rend.hgtvcom.616.347.suffix/1491584261034.jpeg">',

	},{
		content: '<h2>Cuzco, Peru</h2>',
		lat: -13.531950,
		lng: -71.967463,
		image: '<img height="100"  src="http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1428071023/CUZCO0415-view.jpg?itok=3hl8GH2c">',

	},{
		content: '<h2>Puno, Peru</h2>',
		lat: -15.840222,
		lng: -70.021881,
		image: '<img height="100"  src="http://explorandes.com/wp-content/uploads/2016/12/lake-titicaca-tourism-in-peru.jpg">',

	},{
		content: '<h2>Copacabana, Peru</h2>',
		lat: -12.070362,
		lng: -77.057042,
		image: '<img height="100"  src="http://turismokolla.com/wp-content/uploads/2016/04/800px-Panoramica_de_Copacabana_Bolivia-720x385.jpg">',
	},{
		content: '<h2>La Paz, Bolivia</h2>',
		lat: -16.489689,
		lng: -68.119294,
		image: '<img height="100"  src="http://www.lapazlife.com/wp-content/uploads/2014/06/cable-car-la-paz-bolivia.jpg">',
	},{
		content: '<h2>Salar d Uyuni, Bolivia</h2>',
		lat: -20.133777,
		lng: -67.489134,
				image: '<img height="100"  src="http://www.atlantisbolivia.org/tunupagallery_files/salaruyunicraze.jpg">',
	},{
		content: '<h2>San Pedro de Atacama, Chile</h2>',
		lat: -22.908707,
		lng: -68.199716,
				image: '<img height="100"  src="https://www.atraveler.world/wp-content/uploads/2015/12/agency-san-pedro-atacama-chile-a-traveler-002.jpg">',
	},{
		content: '<h2>Arequipa, Peru</h2>',
		lat: -16.409047,
		lng: -71.537451,
				image: '<img height="100"  src="https://static1.squarespace.com/static/5388e453e4b0813d343199fc/t/5849dd77bebafb2ceef94f22/1481235854682/arequipa+peru+tour">',
	},{
		content: '<h2>Huacachina, Peru</h2>',
		lat: -14.087459,
		lng: -75.762586,
				image: '<img height="100"  src="https://d1bv4heaa2n05k.cloudfront.net/user-images/1486986919221/3shutterstock-228186094_main_1486986926323.jpeg">',
	},{
		content: '<h2>Paracas, Peru</h2>',
		lat: -13.840915,
		lng: -76.250830,
				image: '<img height="100"  src="https://www.twoscotsabroad.com/wp-content/uploads/2015/04/Isa-Ballestas-Peru-penguins.jpg">',
	},{
		content: '<h2>Lima, Peru</h2>',
		lat: -12.046373,
		lng: -77.042754,
				image: '<img height="100"  src="https://www.dvrxthreads.com/wp-content/uploads/2017/05/panorama_cathedral_square_lima_peru-1920x1080.jpg">',
	}]

myPlaces.forEach(function(place){
	console.log(place.content)
var latLng = new google.maps.LatLng(place.lat, place.lng)
var marker = new google.maps.Marker({
	map:myMap,
	position:latLng,
})


if (place.image) {
	var infowindow = new google.maps.InfoWindow({
		content:place.content + ' '+ place.image
	})

} else {
	var infowindow = new google.maps.InfoWindow({
		content:place.content
	})

}


	google.maps.event.addListener (marker, 'click', function ClickHandler() {
		myMap.setCenter(marker.position)
		//makes the marker in center on the page
		myMap.setZoom(5)
		//set a zoom when you click on it
		infowindow.open(myMap, marker);
		// will allow the info window to open after it's clicked
	})
})

})

// allows to ad a listener event to the DOM
