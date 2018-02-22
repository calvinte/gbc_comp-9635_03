google.maps.event.addDomListener(window, 'load', function(){



	var mapElement = document.getElementById('places-map');
	
	var mapList = document.getElementById('places-list');
	
	navigator.geolocation.getCurrentPosition(function(position){

		var homeLat = position.coords.latitude;
		var homeLng = position.coords.longitude;
		var myHomeLatLng = new google.maps.LatLng(29.979175, 31.134358);

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

		var myMap = new google.maps.Map(mapElement, mapOptions);


		var myPlaces = [{
			location: 'Toronto, Ontario',
			tagLine: 'There is no place like home',
			website: '<a href="http://www.wikipedia.com" target=_new>wikipedia.com</a>',
			lat: homeLat,
			lng: homeLng,
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
			console.log(place.content);
			var latLng = new google.maps.LatLng(place.lat, place.lng);

			//this is an object literal
			var myMarker = new google.maps.Marker({
				//variables in an object literal is denoted with : and ending with ,
				map: myMap,
				position: latLng,
			})

			var myInfoWindow = new google.maps.InfoWindow({
				content: '<h3>' + place.location + '</h3>',

			})

			

			google.maps.event.addListener(myMarker, 'mouseover', function HoverHandlerOver(){
				myInfoWindow.open(myMap, myMarker);


			});

			google.maps.event.addListener(myMarker, 'mouseout', function HoverHandlerOut(){
				myInfoWindow.close(myMap, myMarker);
			});

			google.maps.event.addListener(myMarker, 'click',  function ClickHandler(){
				myMap.setCenter(myMarker.position);
				myMap.setZoom(12);
				myInfoWindow.open(myMap, myMarker);
				document.getElementById('places-list').style.visibility = "visible";
				document.getElementById('places-list').innerHTML = '<p>' + '<h4>' + place.location + '</h4>' + place.tagLine + place.website + '</p>';

			});

			google.maps.event.addListener(myInfoWindow,'closeclick',function(){
				myMap.setCenter(myHomeLatLng);
				myMap.setZoom(2);
				document.getElementById('places-list').style.visibility = "hidden";
			});

		})
	})
})


