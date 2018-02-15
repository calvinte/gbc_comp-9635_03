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
<<<<<<< HEAD
     content: 'Richmond Hill elementary school. The elementary school I attended.',
     lat: 43.862494,  
     lng: -79.405990,
   }, {
     content: 'New South Wales, Australia. I dont know any restaurant of note here just thought it would be nice to visit.',
     lat: -33.847927,
     lng: 150.953905,
   }, {
     content: '  Best Tacos outside Mexico, would like to try it. 420 W 15th St, New York, NY 10011, USA',
     lat: 40.742130,
     lng: -74.006090,
   },{
     content: 'Highest rated restaurant in the UK but will probably never try it. Not a fan of Scottish cuisine. Byres Rd, Glasgow G11 5RD, UK',
     lat: 55.870865,
     lng: -4.298876,
   },{
     content: 'Alo. Best rated restaurant in Toronto, would like to try it. 380 Queen St W Toronto, ON M5V',
     lat: 43.648830,
     lng: -79.396010,
   }
   ]
=======
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
>>>>>>> 5222f8ed16b0a96d445083151c00dc80edbe373a
 
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