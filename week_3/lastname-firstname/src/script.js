google.maps.event.addDomListener(window, 'load', function() {
  var mapEl = document.getElementById('places-map')
  console.log(mapEl)
  var latLng = new google.maps.LatLng(0, 0)
  var mapOptions = {
    center: latLng,
    zoom: 5,
  }

  var map = new google.maps.Map(mapEl, mapOptions)

  var myPlaces = [{
    content: 'This is my first place',
    lat: 0,
    lng: 0,
  }, {
    content: 'This is other place',
    lat: 5,
    lng: 5,
  }, {
    content: 'This is the third place',
    lat: -5,
    lng: -5,
  }]

  myPlaces.forEach(function(place) {
    console.log(place.content)
    var latLng = new google.maps.LatLng(place.lat, place.lng)
    var marker = new google.maps.Marker({
      map: map,
      position: latLng,
    })
    var infowindow = new google.maps.InfoWindow({
      content: place.content,
    })

    google.maps.event.addListener(marker, 'click', function ClickHandler() {
      map.setCenter(marker.position)
      map.setZoom(12)
      infowindow.open(map, marker)
    })
  })
})
