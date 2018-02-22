console.log (google)
google.maps.event.addDomListener(window,'load', function() {
  console.log ('page is loaded')
  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position)
    var map_canvas = document.getElementById('map-canvas')
    console.log('map-canvas')
    var lat = position.coords.latitude
    var lng = position.coords.longitude
    console.log ('lat, lng')
    var myLatLng = new google.maps.LatLng (lat, lng)
    console.log ('myLatLng')
    var myMap= new google.maps.Map(map_canvas,{
      zoom:15,
      center: myLatLng,
    })
    new google.maps.Marker({
      position: myLatLng,
      map:myMap,
    })
    console.log(myLatLng)
  })
})
// anonymous fonction because it has no name
// we are going to use a htnl file called navigateur that will gave our current location based on our IP address
// grab the map-canvas element
// to get latitude

//we are using the google map javascrip API
// https://developers.google.com/maps/documentation/javascript/get-api-key
// change location on map and explain what is the place
// style the file

//navigator on google with MDN and you get neonavigator.geolocation to have more infos on what it is
