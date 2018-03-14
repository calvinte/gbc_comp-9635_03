google.maps.event.addDomListener(window, 'load', function() {
  var mapEl = document.getElementById('places-map')
  console.log(mapEl)
  var latLng = new google.maps.LatLng(34, 125)
  var mapOptions = {
    center: latLng,
    zoom: 4,
  }

  var map = new google.maps.Map(mapEl, mapOptions)

  var myPlaces = [{
    content: 'Seoul',
    lat: 37.566535,
    lng: 126.977969,
   }, {
    content: 'Pyongyang',
    lat: 39.039219,
    lng: 125.762524,
   }, {
    content: 'Tokyo',
    lat: 35.689487,
    lng: 139.691706,
   }, {
    content: 'Osaka',
    lat: 34.693738,
    lng: 135.502165,
   }, {
    content: 'Okinawa',
    lat: 26.212401,
    lng: 127.680932,
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