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
     content: 'I like this place because I live here.',
     lat: 43.6532,
     lng: 79.3832,
   }, {
     content: 'This is another place',
     lat: 4,
     lng: 20,
   }, {
     content: 'This is also another place',
     lat: 10,
     lng: 10,
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