google.maps.event.addDomListener(window, 'load', function() {
  var mapEl = document.getElementById('places-map')
  console.log(mapEl)
  var latLng = new google.maps.LatLng(43.65, -79.38)
  var mapOptions = {
    center: latLng,
    zoom: 15,
  }

  var map = new google.maps.Map(mapEl, mapOptions)

  var myPlaces = [{
    content: '<h3>George Brown College</h3>',
    description: '<p>This is where I learn web design and web development.</p>',
    image: '<img height="100" src="http://dialognews.ca/wp-content/uploads/2014/08/ielts.jpg">',
    lat: 43.651782,
    lng: -79.365563,
  }, {
    content: '<h3>Subway, 259 King Street East</h3>',
    description: '<p>I pick up my dinner at this place before class every week.',
    image: '<img height="100" src="https://b.zmtcdn.com/data/pictures/6/8907006/e30a1ae4a5e1ce80a8802c534d7b36e5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A">',
    lat: 43.651571,
    lng: -79.366874,
  }, {
    content: '<h3>Toronto Eaton Centre</h3>',
    description: '<p>I like to shop at the Toronto Eaton Centre during my lunch hours when I was working at the Atrium on Bay many years ago.</p>',
    image: '<img height="100" src="http://www.torontomalls.com/wp-content/uploads/2013/04/toronto-eaton-centre.jpg">',
    lat: 43.654064,
    lng: -79.380697,
  }, {
    content: '<h3>Ryerson University</h3>',
    description: '<p>I spent 10 years working part-time to get my undergrat degree from Ryerson University. The effort is worth it!</p>',
    image: '<img height="100" src="https://shawglobalnews.files.wordpress.com/2017/07/ryerson.jpg?quality=70&strip=all&w=720&h=480&crop=1">',
    lat: 43.658299,
    lng: -79.380785,
  }, {
    content: '<h3>Union Station Bus Terminal</h3>',
    description: '<p>I ride GO bus to George Brown every week. The Union Station Bus Terminal is a familiar place to me.',
    image: '<img height="100" src="http://www.gotransit.com/public/en/stations/aboutunionstation/AboutUnionStation_1.jpg">',
    lat: 43.645221,
    lng: -79.380570,
  }]

  myPlaces.forEach(function(place) {
    console.log(place.content)
    var latLng = new google.maps.LatLng(place.lat, place.lng)
    var marker = new google.maps.Marker({
      map: map,
      position: latLng,
    })
    var infowindow = new google.maps.InfoWindow({
      content: place.content + place.image + place.description
    })

    google.maps.event.addListener(marker, 'click', function ClickHandler() {
      map.setCenter(marker.position)
      map.setZoom(5)
      infowindow.open(map, marker)
    })
    google.maps.event.addListener(infowindow,'closeclick', function(){
      map.setZoom(15)
    });
  })
})