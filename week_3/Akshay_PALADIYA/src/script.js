console.log(google)

google.maps.event.addDomListener(window, 'load', function() {
	var wonders = [
		{
			name: '<h2>CN Tower</h2>',
			description: '<p><b>Canada\'s National Tower </b> (also known as the <b>CN Tower</b> or  <b>la\'tour CN </b>) The CN Tower (French: Tour CN) is a 553.3 m-high (1,815.3 ft) concrete communications and observation tower in downtown Toronto, Ontario, Canada. Built on the former Railway Lands, it was completed in 1976, and held the record for the world\'s tallest free-standing structure for 32 years from 1975–2007 and was the world\'s tallest tower until 2009 being overtaken by Burj Khalifa and Canton Tower, respectively. It is now the third tallest tower in the world and remains the tallest free-standing structure in the Western Hemisphere, a signature icon of Toronto\'s skyline, attracting more than two million international visitors annually.</p>',
			image: '<img height="400" width="400" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Toronto_-_ON_-_Toronto_Harbourfront7.jpg/800px-Toronto_-_ON_-_Toronto_Harbourfront7.jpg">',
			lat: '43.642509',
			lng: '-79.387039',
		},
		{
			name: '<h2>burj Khalifa</h2>',
			description: 'The Burj Khalifa (Arabic: برج خليفة‎, Arabic for "Khalifa Tower"; pronounced English: /ˈbɜːrdʒ kəˈliːfə/), known as the Burj Dubai before its inauguration, is a megatall skyscraper in Dubai, United Arab Emirates. With a total height of 829.8 m (2,722 ft) and a roof height (excluding antenna) of 828 m (2,717 ft), the Burj Khalifa has been the tallest structure in the world since its topping out in late 2008.',
			image: '<img height="400" width="400" src="https://en.wikipedia.org/wiki/Burj_Khalifa#/media/File:Burj_Khalifa.jpg">',
			lat: '25.197525',
			lng: '55.274288',
		},
		{
			name: '<h2>The Shard</h2>',
			description: 'The Shard,[a] also referred to as the Shard of Glass,[10][11] Shard London Bridge[12] and formerly London Bridge Tower,[13][14][15] is a 95-storey skyscraper, designed by the Italian architect Renzo Piano, in Southwark, London, that forms part of the London Bridge Quarter development. Standing 309.7 metres (1,016 ft) high, the Shard is the tallest building in the United Kingdom, the tallest building in the European Union, was the fifth-tallest building in Europe and the 96th-tallest building in the world.[1][16][17] It is also the second-tallest free-standing structure in the United Kingdom, after the concrete tower of the Emley Moor transmitting station.[18] It replaced Southwark Towers, a 24-storey office block built on the site in 1975.</p>',
			image: '<img height="400" width="400" src="https://upload.wikimedia.org/wikipedia/commons/6/66/The_Shard_on_Opening_Night.jpg">',
			lat: '51.504444',
			lng: '-0.086667',
		},
		{
			name: '<h2>One World Trade Center</h2>',
			description: '<p>One World Trade Center (also known as 1 World Trade Center, 1 WTC or Freedom Tower) is the main building of the rebuilt World Trade Center complex in Lower Manhattan, New York City. It is the tallest building in the Western Hemisphere, and the sixth-tallest in the world. The supertall structure has the same name as the North Tower of the original World Trade Center, which was destroyed in the terrorist attacks of September 11, 2001. The new skyscraper stands on the northwest corner of the 16-acre (6.5 ha) World Trade Center site, on the site of the original 6 World Trade Center. The building is bounded by West Street to the west, Vesey Street to the north, Fulton Street to the south, and Washington Street to the east.</p>',
			image: '<img height="500" width="650" src="http://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/16944651.JPG?itok=ZZEu4O5A">',
			lat: '40.712742',
			lng: '-74.013382',
		},
		{
			name: '<h2>The Palm Jumeirah</h2>',
			description: '<p>The Palm Jumeirah is an artificial archipelago in United Arab Emirates, created using land reclamation by Nakheel called the Palm Islands (Palm Jumeirah, Palm Jebel Ali and Palm Deira) extends into the Persian Gulf, increasing Dubai\'s shoreline by a total of 520 kilometres (320 mi). It is located on the Jumeirah coastal area of the emirate of Dubai, in the United Arab Emirates (UAE)..</p>',
			image: '<img height="400" width="650" src="https://i.ytimg.com/vi/bReEvC4CRis/maxresdefault.jpg">',
			lat: '25.112432',
			lng: '55.138978',
		},
		{
			name: '<h2>Patron\'s Tower</h2>',
			description: '<p>The Petronas Towers, also known as the Petronas Twin Towers (Malay: Menara Petronas, or Menara Berkembar Petronas), are twin skyscrapers in Kuala Lumpur, Malaysia. According to the Council on Tall Buildings and Urban Habitat (CTBUH)\'s official definition and ranking, they were the tallest buildings in the world from 1998 to 2004 and remain the tallest twin towers in the world. The buildings are a landmark of Kuala Lumpur, along with nearby Kuala Lumpur Tower.</p>',
			image: '<img height="400" width="650" src="http://www.mbfh.com.my/wp-content/uploads/2017/03/MBF_LocationPageNEW_03.jpg">',
			lat: '3.157764',
			lng: '101.711861',
		},
		{
			name: '<h2>Sydney Opera House</h2>',
			description: '<p>The Sydney Opera House is a multi-venue performing arts centre in Sydney, New South Wales, Australia. It is one of the 20th century\'s most famous and distinctive buildings.Designed by Danish architect Jørn Utzon, the building was formally opened on 20 October 1973 after a gestation beginning with Utzon\'s 1957 selection as winner of an international design competition. The government of New South Wales, led by the premier, Joseph Cahill, authorised work to begin in 1958 with Utzon directing construction. The government\'s decision to build Utzon\'s design is often overshadowed by circumstances that followed, including cost and scheduling overruns as well as the architect\'s ultimate resignation.The building and its surrounds occupy the whole of Bennelong Point on Sydney Harbour, between Sydney Cove and Farm Cove, adjacent to the Sydney central business district and the Royal Botanic Gardens, and close by the Sydney Harbour Bridge.Though its name suggests a single venue, the building comprises multiple performance venues which together host well over 1,500 performances annually, attended by more than 1.2 million people.[6] Performances are presented by numerous performing artists, including three resident companies: Opera Australia, the Sydney Theatre Company and the Sydney Symphony Orchestra. As one of the most popular visitor attractions in Australia, more than eight million people visit the site annually, and approximately 350,000 visitors take a guided tour of the building each year.[7] The building is managed by the Sydney Opera House Trust, an agency of the New South Wales State Government.On 28 June 2007, the Sydney Opera House became a UNESCO World Heritage Site</p>',
			image: '<img height="400" width="650" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Sydney_Opera_House_-_Dec_2008.jpg">',
			lat: '-33.856159',
			lng: '151.215256',
		},
	];
	var latlng = new google.maps.LatLng('35.1697515', '33.4366038');
	var mapOptions = {
		center: latlng,
		zoom: 2
	};
	var map = new google.maps.Map(document.getElementById('wonders-map'), mapOptions);
	wonders.forEach(function(wonder) {
		var latlng = new google.maps.LatLng(wonder.lat, wonder.lng);
		var marker = new google.maps.Marker({
			position: latlng,
			map: map
		});
		var infowindow = new google.maps.InfoWindow({
			content: "<b><h1>"+wonder.name+"</h1></b>" + wonder.image +"<br/>"+ wonder.description
		});
		google.maps.event.addListener(marker, 'click', function() {
			map.setCenter(marker.position);
			map.setZoom(12);
			infowindow.open(map, marker);
		});
	});

})
