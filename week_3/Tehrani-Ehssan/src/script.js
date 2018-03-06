(function () {
	var myMap;
	var myMarker;
	var myHomeLatLng;

	window.onload = function() {
    	initMap();
	};

	function initMap(){

		
		var mapElement = document.getElementById('places-map');
		
		var mapList = document.getElementById('places-list');

		myHomeLatLng = new google.maps.LatLng(29.979175, 31.134358);

		var mapOptions = {
			center: myHomeLatLng,
			zoom: 2,


			styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
		};
		
		myMap = new google.maps.Map(mapElement, mapOptions);


		var myPlaces = [{
			//Toronto, Ontario
			lat: 43.653226, 
			lng: -79.383184,
		},{
			//London, England
			lat: 51.507351,
			lng: -0.127758,
		},{
			//Paris, France
			lat: 48.856614,
			lng: 2.352222,
		},{
			//Cairo, Egypt
			lat: 30.044420,
			lng: 31.235712,
		},{
			//Bangkok, Thailand
			lat: 13.756331,
			lng: 100.501765,
		},{
			//Havana, Cuba
			lat: 23.113592,
			lng: -82.366596,
		},{
			//San Diego, California
			lat: 32.715738,
			lng: -117.161084,
		}]

		myPlaces.forEach(function(place){
			var latLng = new google.maps.LatLng(place.lat, place.lng);

			myMarker = new google.maps.Marker({
				map: myMap,
				position: latLng,
			})

		})
	}

	function zoomFunction(event){

		var latZoom = event.data.lat;
		var lngZoom = event.data.lng;

		console.log("zoom function");

		console.log(latZoom);
		console.log(lngZoom);

		var myZoom = new google.maps.LatLng(latZoom,lngZoom);

		myMarker = new google.maps.Marker({
				map: myMap,
				position: myZoom,
		});
		document.getElementById('places-info').style.visibility="visible";
		myMap.setCenter(myMarker.position);
		myMap.setZoom(12);
		document.getElementById('places-info').innerHTML = '<h4>' + event.data.location + '</h4>' + '<p>' + event.data.tagLine + '<br>' + event.data.website + '</p>';
	}

	$('#refreshButton').click(function(){
		
		myMap.setCenter(myHomeLatLng);
		myMap.setZoom(2);
		document.getElementById('places-info').style.visibility="hidden";

	});


	$().ready(function () {
  		$('#myLinkId1').click({ 
  			console.log("Hello");
  			location: 'Toronto, Ontario',
			tagLine: 'There is no place like home',
			website: '<a href="https://en.wikipedia.org/wiki/Toronto" target=_new>wikipedia.com - Toronto</a>',
  			lat: 43.653226,
  			lng: -79.383184,
  		}, zoomFunction);
  		

  		$('#myLinkId2').click({ 
  			location: 'San Diego, California',
			tagLine: 'You stay classy San Diego',
			website: '<a href="https://en.wikipedia.org/wiki/San_Diego" target=_new>wikipedia.com - San Diego</a>',
			lat: 32.715738,
			lng: -117.161084,
  		}, zoomFunction);


  		$('#myLinkId3').click({ 
  			location: 'London, England',
			tagLine: 'Buckingham Palace',
			website: '<a href="https://en.wikipedia.org/wiki/London" target=_new>wikipedia.com - London</a>',
			lat: 51.507351,
			lng: -0.127758,
  		}, zoomFunction);

  		$('#myLinkId4').click({ 
  			location: 'Paris, France',
			tagLine: 'The Eiffel Tower and the Louvre',
			website: '<a href="https://en.wikipedia.org/wiki/Paris" target=_new>wikipedia.com - Paris</a>',
			lat: 48.856614,
			lng: 2.352222,
  		}, zoomFunction);

  		$('#myLinkId5').click({ 
  			location: 'Cairo, Egypt',
			tagLine: 'The Pyramids',
			website: '<a href="https://en.wikipedia.org/wiki/Cairo" target=_new>wikipedia.com - Cairo</a>',
			lat: 30.044420,
			lng: 31.235712,
  		}, zoomFunction);

		$('#myLinkId6').click({ 
  			location: 'Bangkok, Thailand',
			tagLine: 'Muay Thai and Temples',
			website: '<a href="https://en.wikipedia.org/wiki/Bangkok" target=_new>wikipedia.com - Bangkok</a>',
			lat: 13.756331,
			lng: 100.501765,
  		}, zoomFunction);

  		$('#myLinkId7').click({ 
  			location: 'Havana, Cuba',
			tagLine: 'Cigars and Rum',
			website: '<a href="https://en.wikipedia.org/wiki/Havana" target=_new>wikipedia.com - Havana</a>',
			lat: 23.113592,
			lng: -82.366596,
  		}, zoomFunction);


	});

}());








