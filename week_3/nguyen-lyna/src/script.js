console.log(google);

google.maps.event.addDomListener(window, 'load', function() {
  var travelled = [
    {
      name: '<h2>San Francisco, California</h2>',
      description: '<p><b>San Francisco</b> the first city I have travelled to with friends. <a target="_blank" href="https://en.wikipedia.org/wiki/San_Francisco" title="San Francisco">San Francisco</a>. Here, I got to explore the Piers. The most well known pier is <a target="_blank" "href="https://en.wikipedia.org/wiki/Pier_39">Pier 39</a>. My friends and I had ridden the famous <a target="_blank" href="https://en.wikipedia.org/wiki/San_Francisco_cable_car_system">cable cars</a> and explored the largest Gay Village in the world, <a target="_blank" href="https://en.wikipedia.org/wiki/Castro_District,_San_Francisco">Castro District.</p>',
      image: '<img src="https://i.imgur.com/3qul073.jpg"/img>',
      lat: '37.757815',
      lng: '-122.5076393'
    },
    {
      name: '<h2>Chicago, Illinois</h2>',
      description: '<p><b>Chicago</b> was a city I travelled to for work with the <a target="_blank" href="https://www.youtube.com/watch?v=eqtzsIEn-lg">WE Day</a> team. <a target="_blank" href="https://en.wikipedia.org/wiki/Chicago" title="Chicago">Chicago</a>. I was lucky to have experienced great food, amazing architecture, and first home to <a target="_blank" href="https://en.wikipedia.org/wiki/The_Second_City">Second City</a>, sketch comedy show for the first time. <a target="_blank" "href="https://giordanos.com/">Giordano&#39;s</a>, Chicago&#39;s <a target="_blank" href="https://en.wikipedia.org/wiki/Chicago-style_pizza">deep dish pizza</a>. Also had the pleasure to see the <a target="_blank" href="https://www.architecture.org/experience-caf/tours/detail/chicago-architecture-foundation-river-cruise-aboard-chicagos-first-lady-cruises/">Architecture Boat Tour</a> and watched the <a target="_blank" href="https://www.youtube.com/watch?v=zNLNsSVFtLA">Floyd Mayweather Jr. vs. Manny Pacquiao fight</a> at the University of Illinios.</p>',
      image: '<img src="https://i.imgur.com/QuS0hnC.jpg"/img>',
      lat: '41.8339037',
      lng: '-87.872045',
    },
    {
      name: '<h2>Maui, Hawaii</h2>',
      description: '<p><b>Maui</b> was one of the most beautiful places I have been to in the world. <a target="_blank" href="https://en.wikipedia.org/wiki/Maui" title="Maui">Maui</a>. In Hawaii, I had the pleasure to learn the basics of <a target="_blank" href="http://www.surfing-waves.com/atlas/north_america/hawaii.html">surfing</a> and playing the <a target="_blank" href="https://www.youtube.com/watch?v=sxEuq32tI5s">Ukulele</a>.</p>',
      image: '<img src="https://i.imgur.com/dt5yZJg.jpg"/img>',
      lat: '20.8034103',
      lng: '-156.6181603',
    },
    {
      name: '<h2>Ho Chi Minh City aka Saigon, Vietnam</h2>',
      description: '<p><b>Ho Chi Minh City</b> is also known as Saigon, this is where the food, culture, and people are at! <a target="_blank" href="https://en.wikipedia.org/wiki/Ho_Chi_Minh_City" title="Ho Chi Minh City">Ho Chi Minh City</a>. In this city, I got to ride the local transportation as well as the tour van. About an hour and a half north of the city, the <a target="_blank" href="https://en.wikipedia.org/wiki/C%E1%BB%A7_Chi_tunnels">Cu Chi Tunnels</a>, which was one of many locations of where the <a target="_blank" href="https://en.wikipedia.org/wiki/Vietnam_War">Vietnam War</a>. A few hours south of the city, I got to experience the <a target="_blank" href="https://img.vietnamdiscovery.com/uploads/tour/96/2013/09/24/12/0002VND-Cai-Rang-Floating-Market-Can-Tho-Vietnam-P061-3.jpg">Can Tho Float Market</a> where they sell fresh fruits, vegetables, <a target="_blank" href="https://xotours.vn/blog/wp-content/uploads/2013/02/vietnamese-iced-coffee.jpg">Vietnamese iced coffee with condensed milk</a> and hot meals.</p>',
      image: '<img src="https://i.imgur.com/FLFKuvJ.jpg"/img>',
      lat: '10.7550979',
      lng: '106.5551453',
    },
    {
      name: '<h2>El Nido, Palawan, Philipinnes</h2>',
      description: '<p><b>El Nido</b> is in the Province of Palawan <a target="_blank" href="https://en.wikipedia.org/wiki/Palawan" title="Palawan">Palawan</a>. Palawan is rated #1 Most Beatiful Islands in the world for many years. <a target="_blank" href="https://d1sttufwfa12ee.cloudfront.net/uploads/deal/thumb/66730.jpg">El Nido</a> is definitely a must check out destination with various amazing island, beaches and lagoon <a target="_blank" href="https://www.youtube.com/watch?v=fP1-wjMed9M">tours</a>.</p>',
      image: '<img src="https://i.imgur.com/NXGA5lg.jpg"/img>',
      lat: '11.209882',
      lng: '119.2637949',
    },
  ];

  var latlng = new google.maps.LatLng('32.2760602', '-164.4861343');
  var mapOptions = {
    center: latlng,
    zoom: 3
  };

  // Loop travelled cities
  var map = new google.maps.Map(document.getElementById('travelled-map'), mapOptions);
  travelled.forEach(function(travelled) {
    // Lat and Lng pulled from lat and lng from travelled object
    var latlng = new google.maps.LatLng(travelled.lat, travelled.lng);
    var marker = new google.maps.Marker( {
      // same position as "center"
      position: latlng,
      map: map
    });

    // When City Marker is clicked, info window will appear
    var infowindow = new google.maps.InfoWindow( {
      content: travelled.name + travelled.image + travelled.description,
      maxWidth: 400
    });

    google.maps.event.addListener(marker, 'click', function() {
      map.setCenter(marker.position);
      map.setZoom(12);
      infowindow.open(map, marker);
    });
  });

});
