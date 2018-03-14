google.maps.event.addDomListener(window, 'load', function() {
  var mapEl = document.getElementById('places-map')
  console.log(mapEl)
  var latLng = new google.maps.LatLng(43.613406, -79.663114)
  var mapOptions = {
    center: latLng,
    zoom: 15,
  }

  var map = new google.maps.Map(mapEl, mapOptions)

  var myPlaces = [{
    content: '<h3>Savour of the World Chinese Catholic Church</h3>',
    image: '<img height="100" src="https://www.emporis.com/images/show/913850-Medium-saviour-of-the-world-chinese-catholic-church-mississauga-canada-canada-exterior-fullheightview-looking-northwest.jpg">',
    lat: 43.613406,
    lng: -79.663114,
  }]

  myPlaces.forEach(function(place) {
    console.log(place.content)
    var latLng = new google.maps.LatLng(place.lat, place.lng)
    var marker = new google.maps.Marker({
      map: map,
      position: latLng,
    })
    var infowindow = new google.maps.InfoWindow({
      content: place.content + place.image
    })

    google.maps.event.addListener(marker, 'click', function ClickHandler() {
      map.setCenter(marker.position)
      map.setZoom(18)
      infowindow.open(map, marker)
    })
    google.maps.event.addListener(infowindow,'closeclick', function(){
      map.setZoom(15)
    });
  })
})