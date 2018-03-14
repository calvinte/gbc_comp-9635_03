console.log("test");
$(document).ready(function() {
  var element = document.getElementById("foursquare-map");
  var options = {
    center: new google.maps.LatLng(43.6532, -79.3832),
    zoom: 11,
  };
  var map = new google.maps.Map(element, options);
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url:
      "https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query=burgers",
    success: function(response) {
      console.log(response);
      response.response.venues.forEach(function(venue) {
          var location = venue.location
        var latLng = new google.maps.LatLng(location.lat, location.lng);
        var marker = new google.maps.Marker({
          map: map,
          position: latLng
        });
          
          
      });
    }
  });
});
