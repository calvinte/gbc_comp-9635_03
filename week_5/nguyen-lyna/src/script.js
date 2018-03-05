/*
  $ = jquery
  document = HTML document
  ready = function
  function() = anonymous function/action
*/

$(document).ready(function() {
  // Executing Map constructor, Google Maps API
  var latlng = new google.maps.LatLng('43.6532', '-79.3832');
  var myMap = new google.maps.Map(document.getElementById('foursquare-map'), {
    center: latlng,
    zoom: 11
  });
  var markers = [];
  var lastOpenedWindow; // will store value as it goes along

  // Function to clear the map after each search
  function clearTheMap() {
    for(var i = 0; i < markers.length; i ++) {
      markers[i].setMap(null);
    }
      markers = [];
  }

 /* Search function */
 $('#searchBtn').click(function() {
   var searchInput = $('input#searchInput').val();

   $.ajax({
     type: 'GET',
     dataType: 'jsonp', // Allows callback JS file w JS code, jquery adds p for padding
     cache: false,
     url: 'https://api.foursquare.com/v2/venues/search?client_id=FP54LMRY0H5RBPVEAF4AEQRWT3LFUOI4MLPGY0XMUNNZQI4F&client_secret=TFITB2WTPZ0SEZMQDQTCJM0P24CXRX4JGHWCJ4ZJEIQSW3MJ&v=20180280&near=Toronto&categoryId=4d4b7105d754a06374d81259&limit=20&query=' + searchInput,
       // near Toronto, food category only, search limit 20
     // jquery loads url successfully, executes next line/function
     success: function(response) {
       console.log(response);
       // clear the map
       clearTheMap();

       response.response.venues.forEach(function(venue) { //forEach = iterator
         var location = venue.location;
         var latLng = new google.maps.LatLng(location.lat, location.lng); // Will create LatLng for map marker
         var marker = new google.maps.Marker({
           // Object literal
           map: myMap, // Variable map created previously
           position: latLng,
           animation: google.maps.Animation.DROP
         });

        // Info Window when click on marker
         markers.push(marker);
         var infoWindow = new google.maps.InfoWindow({ content: '<div>' + venue.name + '<br/>' + 'Call: '+ venue.contact.phone + '<br/>' + 'Address: ' + venue.location.address + '</div>' })
         google.maps.event.addListener(marker, 'click', function() {
           infoWindow.open(myMap, marker);
           if(lastOpenedWindow) {
             lastOpenedWindow.close() // checks if there's a value to lastOpenedWindow, then replaces with infoWindow
           }
          //
          lastOpenedWindow = infoWindow
           myMap.setZoom(14);
         });

          //  When close infoWindow
          google.maps.event.addListener(infoWindow, 'closeclick', function() {
            myMap.setCenter(marker.getPosition());
            myMap.setZoom(13);
          });

          }); // function(venue) end
        }, //function(response) end
      }); // ajax end
    }); // searchBtn click end

});


/****** OPTIONAL: ******/

// 5 seconds after the center of the map has changed, pan back to the marker
// myMap.addListener('center_changed', function() {
//   window.setTimeout(function() {
//     myMap.panTo(marker.getPosition());
//   }, 5000);
// });

// InfoWindow Hover
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
