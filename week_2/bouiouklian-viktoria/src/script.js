console.log(google)
google.maps.event.addDomListener(window, 'load', function() {
  // console.log('page is loaded')
  // navigator.geolocation.getCurrentPosition(function(position){
  //   console.log(position)
  //   var map_canvas = document.getElementById("map-canvas");
  //   console.log(map_canvas);
  //   var lat = position.coords.latitude
  //   var lng = position.coords.longitude
  //   var myLatLng = new google.maps.LatLng(lat,lng)
  //   var myMap = new google.maps.Map(map_canvas, {
  //     zoom: 15,
  //     center: myLatLng,
  //   })
  //   new google.maps.Marker({
  //     position: myLatLng,
  //     map: myMap,
  //   })
    // console.log(lat, lng);
  // })
// end of class stuff

  var map_canvas = document.getElementById("map-canvas");

  var lat= 55.814162;
  var lng= 37.576324;

  var latLng = google.maps.LatLng
  var myLatLng = new latLng(lat,lng)

  var myMap = new google.maps.Map(map_canvas, {
    zoom: 13,
    center: myLatLng,
  })

  new google.maps.Marker({
      position: myLatLng,
      map: myMap,
    })

})
