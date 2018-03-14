console.log(google)

google.maps.event.addDomListener(window, 'load', function() {
     var colors = ['Blue and Yellow', 'Red and White', 'Red and White', 'Blue White and Red'];
	var wonders = [
		{
			name: '<h2>Stockholm</h2>',
			description: '',
		image: '<img height="100" src="https://vignette.wikia.nocookie.net/pvx/images/a/a4/Sweden-flag.jpg/revision/latest?cb=20080611175424">',
			lat: '59.3293',
			lng: '18.0686',
            color: '<br><br><b>National colours:</b> '+colors[0],
		},
		{
			name: '<h2>Paris</h2>',
//			description: '<p>The <b>Hanging Gardens of Babylon</b> were one of the <a target="_blank" href="http://en.wikipedia.org/wiki/Seven_Wonders_of_the_Ancient_World" title="Seven Wonders of the Ancient World">Seven Wonders of the Ancient World</a>, and the only one whose location has not been definitely established.</p>',
		image: '<img height="100" src="https://www.graphicmaps.com/r/w1047/images/flags/fr-flag.jpg">',
			lat: '48.8566',
			lng: '2.3522',
             color: '<br><br><b>National colours:</b> '+colors[3],
		},
        {
			name: '<h2>Toronto</h2>',
//			description: '<p>The <b>Hanging Gardens of Babylon</b> were one of the <a target="_blank" href="http://en.wikipedia.org/wiki/Seven_Wonders_of_the_Ancient_World" title="Seven Wonders of the Ancient World">Seven Wonders of the Ancient World</a>, and the only one whose location has not been definitely established.</p>',
		image: '<img height="100" src="https://vignette.wikia.nocookie.net/canada/images/d/d4/Canadian_Flag.jpg/revision/latest/scale-to-width-down/640?cb=20100820020541">',
			lat: '43.6532',
			lng: '-79.3832',
             color: '<br><br><b>National colours:</b> '+colors[1],
		},
          {
			name: '<h2>Copenhagan</h2>',
//			description: '<p>The <b>Hanging Gardens of Babylon</b> were one of the <a target="_blank" href="http://en.wikipedia.org/wiki/Seven_Wonders_of_the_Ancient_World" title="Seven Wonders of the Ancient World">Seven Wonders of the Ancient World</a>, and the only one whose location has not been definitely established.</p>',
			image: '<img height="100" src="https://vignette.wikia.nocookie.net/harrypotter/images/d/d8/Flag_of_Denmark.jpg/revision/latest?cb=20091208000818">',
			lat: '55.6761',
			lng: '12.5683',
               color: '<br><br><b>National colours:</b> '+colors[1],
		},
		
	];
    
   
	var latlng = new google.maps.LatLng('40', '15');
	var mapOptions = {
		center: latlng,
		zoom: 3,
	};
	var map = new google.maps.Map(document.getElementById('wonders-map'), mapOptions);
	wonders.forEach(function(wonder) {
		var latlng = new google.maps.LatLng(wonder.lat, wonder.lng);
		var marker = new google.maps.Marker({
			position: latlng,
			map: map
		});
		var infowindow = new google.maps.InfoWindow({
			content:  wonder.name + wonder.image +  wonder.color 
		});
		google.maps.event.addListener(marker, 'click',  function() {
			map.setCenter(marker.position);
			map.setZoom(4);
			infowindow.open(map, marker);
		});
        google.maps.event.addListener(map, "click", function(event) {
    infowindow.close();
});
        
        
        
	});

})
