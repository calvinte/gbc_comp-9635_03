google.maps.event.addDomListener(window, 'load', function(){
	var mapEl = document.getElementById('places-map')
	console.log (mapEl)
	var latLng = new google.maps.LatLng (0,0)
	var mapOptions = {
		zoom:2,
		center: latLng,
	}

	var map = new google.maps.Map(mapEl, mapOptions)

	var myPlaces =[{
	name:'<h2>Tokyo, Japan</h2>',
	description: '<p>Sushi, Ramen, Deep fried maple leaves</p>',
	image: '<img height="100" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png">',
	lat:35.7,
	lng:139.7,
	
},{
	name: "<h2>Paris, France</h2>", 
	description:"<p>Crossant, Macaroon, Wine</p>",
	image: '<img height="100" src="http://flagpedia.net/data/flags/normal/fr.png">',
	lat:48.85,
	lng:2.35,
}, {
	name: "<h2>Barcelona, Spain</h2>", 
	description:"<p>Paella, Creme Catalana, Tapas</p>",
	image: '<img height="100" src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Spain_flag_300.png">',
	lat:41.38,
	lng:2.17,
},{
	name: "<h2>Los Angeles, California</h2>", 
	description:"<p>Dodger Dog, Smoked Salmon Pizza, Miso Black Cod</p>",
	image: '<img height="100" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png">',
	lat:41.51,
	lng:-87.65,
},{
	name: "<h2>Chicago, New York</h2>", 
	description:"<p>Deep Dish Pizza, New York Bagel, New York Cheesecake</p>",
	image: '<img height="100" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png">',
	lat:40.67,
	lng:-73.94,
}]

myPlaces.forEach(function(place){
	console.log(place.content)
	
	var latLng = new google.maps.LatLng(place.lat,place.lng)
	var marker = new google.maps.Marker({
		map: map,
		position: latLng, 
	})
	var infowindow = new google.maps.InfoWindow({
    content: place.name + place.image +place.description,
  })

	google.maps.event.addListener(marker,"click", function ClickHandler(){
		map.setCenter(marker.position)
		map.setZoom(2)
		infowindow.open(map, marker)
	})
})

	
})

