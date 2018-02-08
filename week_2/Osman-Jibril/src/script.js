console.log(google);
google.maps.event.addDomListener(window,'load',function(){
	console.log('page is loaded');
	navigator.geolocation.getCurrentPosition(function(position){
		console.log(position);
		var map_canvas = document.getElementById('map-canvas');
		console.log(map_canvas);
		var lat = position.coords.latitude
		var lng = position.coords.longitude
		console.log(lat, lng);
		var myLatLng = new google.maps.LatLng(lat, lng)
		var myMap = new google.maps.Map(map_canvas,{
			zoom: 15,
			center: myLatLng,
		})
		new google.maps.Marker({
			position: myLatLng,
			map: myMap,
		})
		console.log(myLatLng);
	})
});