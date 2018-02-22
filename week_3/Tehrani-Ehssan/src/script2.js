function initMap(){

	
	var mapElement = document.getElementById('places-map');
	
	var mapList = document.getElementById('places-list');

	var myHomeLatLng = new google.maps.LatLng(29.979175, 31.134358);
	console.log(myHomeLatLng);
	var mapOptions = {
		center: myHomeLatLng,
		zoom: 2,
	};

	var myMap = new google.maps.Map(mapElement, mapOptions);

	var myPlaces = [{
		location: 'Toronto, Ontario',
		tagLine: 'There is no place like home',
		website: '<a href="http://www.wikipedia.com" target=_new>wikipedia.com</a>',
		lat: 29.979175, 
		lng: 31.134358,
	},{
		location: 'London, England',
		tagLine: 'Buckingham Palace',
		website: '<a href="http://www.wikipedia.com" target=_new>wikipedia.com</a>',
		lat: 51.507351,
		lng: -0.127758,
	},{
		location: 'Paris, France',
		tagLine: 'The Eiffel Tower and the Louvre',
		website: '<a href="http://www.wikipedia.com" target=_new>wikipedia.com</a>',
		lat: 48.856614,
		lng: 2.352222,
	},{
		location: 'Cairo, Egypt',
		tagLine: 'The Pyramids',
		website: '<a href="http://www.wikipedia.com" target=_new>wikipedia.com</a>',
		lat: 30.044420,
		lng: 31.235712,
	},{
		location: 'Bangkok, Thailand',
		tagLine: 'Muay Thai and Temples',
		website: '<a href="http://www.wikipedia.com" target=_new>wikipedia.com</a>',
		lat: 13.756331,
		lng: 100.501765,
	},{
		location: 'Havana, Cuba',
		tagLine: 'Cigars and Rum',
		website: '<a href="http://www.wikipedia.com" target=_new>wikipedia.com</a>',
		lat: 23.113592,
		lng: -82.366596,
	},{
		location: 'San Diego, California',
		tagLine: 'You stay classy San Diego',
		website: '<a href="http://www.wikipedia.com" target=_new>wikipedia.com</a>',
		lat: 32.715738,
		lng: -117.161084,
	}]

	myPlaces.forEach(function(place){
		var latLng = new google.maps.LatLng(place.lat, place.lng);

		var myMarker = new google.maps.Marker({
			map: myMap,
			position: latLng,
		})

	})
}


function zoomFunction(lat, lng){
	console.log("zoom function");

	var newZoom = new google.maps.LatLng(lat, lng);
	console.log(newZoom);

	var newMarker = new google.maps.Marker({
		map: myMap,
		position: newZoom,
	});

	myMap.setZoom(12);
	myMap.panTo(newMarker.position);
}


function locationSelector(x){
	var lat=0;
	var lng=0;

	if (x=='location1'){
		
		lat=29.979175;
		lng=31.134358;
		console.log("there is no place like home");

		zoomFunction(979175, 31.134358);

	}
	else{
		console.log("Travel Bug");
	}
}







