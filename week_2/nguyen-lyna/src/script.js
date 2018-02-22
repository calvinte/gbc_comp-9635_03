// GOOGLE MAPS API

/* Google Geolocation for specific address */
console.log(google);

google.maps.event.addDomListener(window, 'load', function initMap() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 10,
    // centers on the city
    center: {lat: 43.65, lng: -79.4}
  });
  // console.log(map);
  var geocoder = new google.maps.Geocoder();
  // console.log(geocoder);
  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });

  function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
      if(status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker( {
          map: resultsMap,
          // finds address in value
          position: results[0].geometry.location,
          animation: google.maps.Animation.DROP
        });
      }
      else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
});

/* Google Gelocation for Current Location */
// console.log(google);
// google.maps.event.addDomListener(window, 'load', function() {
//   console.log("Page is loaded")
//   // Navigator geolocation based on GPS
//   navigator.geolocation.getCurrentPosition(function(position) {
//     console.log(position);
//     var mapCanvas = document.getElementById('map-canvas')
//     var lat = position.coords.latitude
//     var lng = position.coords.longitude
//     var myLatLng = new google.maps.LatLng(lat, lng)
//     var myMap = new google.maps.Map(mapCanvas, {
//       zoom: 15,
//       center: myLatLng,
//     })
//     new google.maps.Marker({
//       position: myLatLng,
//       map: myMap,
//       animation:google.maps.Animation.DROP
//     })
//     console.log(myLatLng)
//   });
// });