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
	content: "Tokyo, Japan:" +"<br> "+ "<br>" +"Sushi, Ramen, Deep fried maple leaves",
	lat:35.7,
	lng:139.7,
	//image: <img height="100" src="https://img.grouponcdn.com/deal/fmPws6o2uTweCftZu7yj/p4-2048x1229/v1/c700x420.jpg">
},{
	content: "Paris, France:" +"<br> "+ "<br>" +"Crossant, Macaroon, Wine",
	lat:48.85,
	lng:2.35,
}, {
	content: "Barcelona, Spain:" +"<br> "+ "<br>" +"Paella, Creme Catalana, Tapas",
	lat:41.38,
	lng:2.17,
},{
	content: "Los Angeles, California:" +"<br> "+ "<br>" +"Dodger Dog, Smoked Salmon Pizza, Miso Black Cod",
	lat:41.51,
	lng:-87.65,
},{
	content: "Brooklyn, New York:" +"<br> "+ "<br>" +"Deep Dish Pizza, New York Bagel, New York Cheesecake",
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
    content: place.content,
  })

	google.maps.event.addListener(marker,"click", function ClickHandler(){
		map.setCenter(marker.position)
		map.setZoom(2)
		infowindow.open(map, marker)
	})
})

	
})

