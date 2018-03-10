$(document).ready(function(){
  var element = document.getElementById('foursquare-map')
  var options = {
    zoom: 10,
    center: new google.maps.LatLng(43.6532, -79.3832), 
  }
  var map = new google.maps.Map(element,options)
  var lastInfoWindow = null


// initialize the map and listen for any clicks to the search button
  $('#map-input button').click(function() {
    var term = $('#map-input input').val();
    loadMarkersFromTerm(term);
  });
});
function loadMarkersFromTerm(term) {
  var url = 'https://api.foursquare.com/v2/venues/search?client_id=XUXLO0NUOU5C54RCWE2UXF50MHWEL52I1APLQVSMBQJDGFPX&client_secret=0BEDRXQL312RAUAK2M5ON35BLUWSBRNCQDQNKADJ5COXJ4VJ&v=20180212&near=Toronto&query=' + term;

  $.ajax({
    type:'GET',
    dataType:'jsonp',
    cache: false,
    success: function (response) {
      response.response.venues.forEach(function(venue){
        
        var venueLatLng = new google.maps.LatLng(venue.location.lat,venue.location.lng)
        var marker = new google.maps.Marker({
          map:map,
          position: venueLatLng,
        })
        var infowindow = new google.maps.InfoWindow({
          content: venue.name, 
        })

        google.maps.event.addListener(marker,"click", function ClickHandler(){
          map.setCenter(marker.position)
          map.setZoom(10)
          infowindow.open(map, marker)
          if (lastInfoWindow) {
            lastInfoWindow.close()
          }
          lastInfoWindow = infowindow
        })
        
        google.maps.event.addListener(infowindow,'closeclick', function(){
          lastInfoWindow = null
        })
        
      })
    },
 })
}
