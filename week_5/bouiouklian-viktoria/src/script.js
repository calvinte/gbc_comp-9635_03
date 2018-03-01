console.log("testing");

$(document).ready(function(){
  var element = document.getElementById('foursquare-map')
  var options = {
    center: new google.maps.LatLng(43.6532, -79.3832),
    zoom: 10,
  }//object literal but something else
  var map = new google.maps.Map(element, options) //executing map constructor; accessing Google Maps API properties within properties or something; new is an object literal
  //writing properties element and options
  $.ajax({ //does not matter which order
    type: 'GET',
    dataType: 'jsonp',
    cache: false,
    url: 'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query=tacos',
    success: function(response){
      console.log(response);



    response.response.venues.forEach(function(venue){ //venue is a variable name that can be changed
        var latLng = new google.maps.LatLng(venue.location.lat, venue.location.lng)
        var marker = new google.maps.Marker({ //pass an object literal
          map: map,
          position: latLng,
        })
        var infowindow = new google.maps.InfoWindow({
          content: venue.name +'<br>'+ venue.location.address+ '<br>' + venue.stats.chekingsCount,
        })

        google.maps.event.addListener(infowindow, 'closeclick', function() {
          map.panTo(marker.position);
          // map.setZoom(5)
        })


        google.maps.event.addListener(marker, 'click', function ClickHandler() {
          map.setCenter(marker.position)
          //map.setZoom(13)
          infowindow.open(map, marker)
        })

      })



    }, //venue provided by the foursquare api
  })
});
