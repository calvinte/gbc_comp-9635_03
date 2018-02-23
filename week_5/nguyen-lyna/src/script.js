/*
  $ = jquery
  document = HTML document
  ready = function
  function() = anonymous function/action
*/

$(document).ready(function() {
  // Executing Map constructor, Google Maps API
  var element = document.getElementById('foursquare-map');
  var options = {
    center: new google.maps.LatLng(43.6532, -79.3832), // Lat + Lng constructor accessible Google Maps Object
    zoom: 10
  } // Object literal
  var myMap = new google.maps.Map(element, options); // or var map = Map()

  $.ajax({
    type: 'GET',
    dataType: 'jsonp', // Allows callback JS file w JS code, jquery adds p for padding
    cache: false,
    url: 'https://api.foursquare.com/v2/venues/search?client_id=FP54LMRY0H5RBPVEAF4AEQRWT3LFUOI4MLPGY0XMUNNZQI4F&client_secret=TFITB2WTPZ0SEZMQDQTCJM0P24CXRX4JGHWCJ4ZJEIQSW3MJ&v=20180230&near=Toronto&query=vietnamese&limit=10',
    // jquery loads url successfully, executes next line/function
    success: function(response) {
      console.log(response);
      response.response.venues.forEach(function(venue) { //forEach = iterator
        var restoLatLng = new google.maps.LatLng(venue.location.lat, venue.location.lng); // Will create LatLng for map marker
        var marker = new google.maps.Marker({
          // Object literal
          map: myMap, // Variable map created previously
          position: restoLatLng,
          map: myMap,
          animation: google.maps.Animation.DROP
        });

        // Info Window when click on marker
        var infowindow = new google.maps.InfoWindow({
           content: '<div id="content">' + venue.name + '<br/>' + 'Call: '+ venue.contact.phone + '<br/>' + 'Address: ' + venue.location.address + '</div>'
         });

         // Listens for a 'click' to execute below function
         marker.addListener('click', function() {
           infowindow.open(myMap, marker);
           myMap.setZoom(12);
           myMap.setCenter(marker.getPosition());
         });

        //  When close infoWindow
        google.maps.event.addListener(infowindow, 'closeclick', function() {
          myMap.setZoom(11);
          myMap.setCenter(marker.getPosition());
        });

        // 3 seconds after the center of the map has changed, pan back to the marker
        myMap.addListener('center_changed', function() {
          window.setTimeout(function() {
            myMap.panTo(marker.getPosition());
          }, 5000);
        });


        /* All does the same things
          marker.addListener('click', function() {}
          google.maps.addListener(marker, 'click', function() {})
          google.maps.addEventListener(marker, 'click', function() {})
        */

      });
    },
  });

});
