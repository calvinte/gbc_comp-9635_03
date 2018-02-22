'use strict';
google.maps.event.addDomListener(window, 'load', function() {
	var wonders = [
		{
			name: '<h2>CN Tower</h2>',
			city: '<h3>Toronto, Ontario</h3>',
			description: '<p>The CN Tower has been a landmark in Toronto for over thiry years. It\'s uses are being a tower for radio and television signals as well as a lookout point for tourists. It has been the pride of Toronto since it was built in 1976.</p>',
			image: '<img src="http://cld.escapehere.com/image/upload/t_cn,f_auto,q_auto,$w_800/eh/2013/05/CN-tower-toronto-820x480.jpg">',
			lat: '43.642509',
			lng: '-79.387039',
		},
		{
			name: '<h2>Banff National Park</h2>',
			city: '<h3>Banff, Alberta</h3>',
			description: '<p>One of Canada\'s oldest national parks was established in 1885. Located in the Rocky Mountains, 110–180 kilometres west of Calgary in the province of Alberta. Banff encompasses 6,641 square kilometres of mountainous terrain, with numerous glaciers and ice fields, dense coniferous forest, and alpine landscapes.</p>',
			image: '<img src="http://cld.escapehere.com/image/upload/t_cn,f_auto,q_auto,$w_800/eh/2013/05/shutterstock_126257273-820x480.jpg">',
			lat: '51.496845',
			lng: '-115.928055',
		},
		{
			name: '<h2>Château Frontenac</h2>',
			city: '<h3>Quebec City, Quebec</h3>',
			description: '<p>Designated a National Historic Site of Canada in 1980. Prior to the building of the hotel, the site was occupied by the Château Haldimand, residence of the British colonial governors of Lower Canada and Quebec.</p>',
			image: '<img src="http://cld.escapehere.com/image/upload/t_cn,f_auto,q_auto,$w_800/eh/2013/05/Chateau-Frontenac-Quebec-City.jpg">',
			lat: '46.807163438',
			lng: '-71.202999188',
		},
		{
			name: '<h2>Parliament Hill</h2>',
			city: '<h3>Ottawa, Ontario</h3>',
			description: '<p>Originally the site of a military base in the 18th and early 19th centuries, development of the area into a governmental precinct began in 1859, after Queen Victoria chose Ottawa as the capital of the Province of Canada.</p>',
			image: '<img src="http://cld.escapehere.com/image/upload/t_cn,f_auto,q_auto,$w_800/eh/2013/05/Ottawa-Canada.jpg">',
			lat: '45.424807',
			lng: '-75.699234',
		},
		{
			name: '<h2>Northern Lights</h2>',
			city: '<h3>Whitehorse, Yukon Territories</h3>',
			description: '<p>If mesmerizing ribbons of colour swirling across the sky sounds like a must-see, we have you covered. Come to the Yukon and experience the northern lights, one of the great natural wonders of the world.</p>',
			image: '<img src="http://cld.escapehere.com/image/upload/t_cn,f_auto,q_auto,$w_800/eh/2013/05/Aurora-Borealis-northern-lights.jpg">',
			lat: '60.721188',
			lng: '-135.056839',
		},
		{
			name: '<h2>Peggy\'s Cove</h2>',
			city: '<h3>Peggy’s Cover, Nova Scotia</h3>',
			description: '<p>The community is named after the cove of the same name, a name also shared with Peggy\'s Point, immediately to the east of the cove. The village marks the eastern point of the St. Margaret\'s Bay.</p>',
			image: '<img src="http://cld.escapehere.com/image/upload/t_cn,f_auto,q_auto,$w_800/eh/2013/05/peggys-cove-lighthouse-nova-scotia.jpg">',
			lat: '44.488998044',
			lng: '-63.917162998',
		},
	];
	 
	var latlng = new google.maps.LatLng('57.341346', '-101.777344');
	var mapOptions = {
		center: latlng,
		zoom: 4
	};
	var map = new google.maps.Map(document.getElementById('wonders-map'), mapOptions);
	wonders.forEach(function(wonder) {
		var latlng = new google.maps.LatLng(wonder.lat, wonder.lng);
		var marker = new google.maps.Marker({
			position: latlng,
			map: map
		});
		var infowindow = new google.maps.InfoWindow({
			content: "<div class='info'>" +  wonder.name + wonder.city + wonder.description + "</div><div class='photo'>" + wonder.image + "</div>"
		});
		google.maps.event.addListener(marker, 'click', function() {
			map.setCenter(marker.position);
			map.setZoom(12);
			infowindow.open(map, marker);
		});
	});

})
