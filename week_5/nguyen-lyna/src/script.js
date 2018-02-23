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
        });

        // Info Window when click on marker
        var infowindow = new google.maps.InfoWindow({
           content: venue.name
         });

        //  Markers will present venue location, and others
         var marker = new google.maps.Marker({
           position: venue.location,
           map: myMap,
           title: 'Blah'
         });
         // Listens for a 'click' to execute below function
         marker.addListener('click', function() {
           infowindow.open(myMap, marker);
         });



      });
    },
  });

});
