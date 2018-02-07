console.log(google)

google.maps.event.addDomListener(window,'load', function() {
	console.log ('page is loaded')
	 navigator.geolocation.getCurrentPosition(function(position) {
		var map_canvas = document.getElementById('map-canvas')
		var lat = -25.344//position.coords.latitude
		var lng = 131.036//position.coords.longitude
		var Uluru = new google.maps.LatLng(lat,lng)
		var myMap = new google.maps.Map(map_canvas, {
			zoom:15,
			center:Uluru,
		})

	var contentString = '<div id="info-window">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

	var infowindow = new google.maps.InfoWindow({
    	content: contentString
  });


		new google.maps.Marker({
			position:Uluru,
			map:myMap,
		})
		marker.addListener('click', function() {
    infowindow.open(myMap, marker);
  });

		console.log(Uluru)
	})
})