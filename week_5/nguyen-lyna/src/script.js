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
    zoom: 11
  } // Object literal
  var myMap = new google.maps.Map(element, options); // or var map = Map()

  $.ajax({
    type: 'GET',
    dataType: 'jsonp', // Allows callback JS file w JS code, jquery adds p for padding
    cache: false,
    url: 'https://api.foursquare.com/v2/venues/search?client_id=FP54LMRY0H5RBPVEAF4AEQRWT3LFUOI4MLPGY0XMUNNZQI4F&client_secret=TFITB2WTPZ0SEZMQDQTCJM0P24CXRX4JGHWCJ4ZJEIQSW3MJ&v=20180270&near=Toronto&categoryId=4d4b7105d754a06374d81259&limit=20',
      // near Toronto, categoryID for Food:  4d4b7105d754a06374d81259, search limit 20
    // jquery loads url successfully, executes next line/function
    success: function(response) {
      console.log(response);

      /* Search function */
      function search() {
        $('#searchBtn').click(function() {
          var searchInput = $('input#searchInput').val();
          console.log(searchInput);
          
          /****
            NOTE:  How do I link the search keywords to the results and marker?
            NOTE:  How to take the keyword search and filter results via marker loop
          ****/
        });
      }
      // Call the Search function
      search();


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
        var infoWindow = new google.maps.InfoWindow({
          content: '<div id="content">' + venue.name + '<br/>' + 'Call: '+ venue.contact.phone + '<br/>' + 'Address: ' + venue.location.address + '</div>'
        });

         // Listens for a 'click' to execute below function
         marker.addListener('click', function() {
           infoWindow.open(myMap, marker);
           myMap.setZoom(14);
         });

        //  When close infoWindow
        google.maps.event.addListener(infoWindow, 'closeclick', function() {
          myMap.setZoom(13);
          myMap.setCenter(marker.getPosition());
        });

        // 5 seconds after the center of the map has changed, pan back to the marker
        myMap.addListener('center_changed', function() {
          window.setTimeout(function() {
            myMap.panTo(marker.getPosition());
          }, 5000);
        });


        // OPTIONAL:  InfoWindow Hover
        // marker.addListener('mouseover', function() {
        //     infoWindow.open(myMap, this);
        // });

        // // assuming you also want to hide the infowindow when user mouses-out
        // marker.addListener('mouseout', function() {
        //     infoWindow.close();
        // });


        /* All does the same things
          marker.addListener('click', function() {}
          google.maps.addListener(marker, 'click', function() {})
          google.maps.addEventListener(marker, 'click', function() {})
        */

      });
    },
  });

});
