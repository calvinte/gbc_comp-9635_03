$$(document).ready(function(){
  var element = document.getElementById('foursquare-map')
  var options = {
    zoom: 10,
    center: new google.maps.LatLng(43.6532, -79.3832), 
  }
  var map = new google.maps.Map(element,options)
var lastInfoWindow = null;
var markers = {};

$('mybutton').click(function(){
  var term = $('#myinput').val();
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: 'https://api.foursquare.com/v2/venues/search?client_id=XUXLO0NUOU5C54RCWE2UXF50MHWEL52I1APLQVSMBQJDGFPX&client_secret=0BEDRXQL312RAUAK2M5ON35BLUWSBRNCQDQNKADJ5COXJ4VJ&v=20180212&near=Toronto&query=' + term,
    success: function(response) {
      //clear the map first
      clearTheMap();
      response.response.venues.forEach(function(venue) {
        var location = venue.location
        var latlng = new google.maps.LatLng(location.lat, location.lng);
        var marker = new google.maps.Marker({
          position: latlng,
          map: map
        });
        markers.push(marker)
        var infowindow = new google.maps.InfoWindow({ content: venue.name });
        google.maps.event.addListener(marker, 'click', function() {
          map.setZoom(12);
          infowindow.open(map, marker)
          if (lastInfoWindow) {
            lastInfoWindow.close()
          }
          lastInfoWindow = infowindow
        })
        
        google.maps.event.addListener(infowindow,'closeclick', function(){
          lastInfoWindow = null
});
        });
      });
    }
  });
});

function clearTheMap(){
for(var i =0; i<markers.length; i++){
  markers [i].setMap(null);
}
markers = [];
}
});