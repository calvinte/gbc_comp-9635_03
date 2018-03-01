console.log('testing');

(function () {

    var location ="";
    var query ="";
    var myCurrentLocation = "";
    var element = "";
 //   var map = "";
    var infoWindow = "";


    $(document).ready(function() {

      console.log("inside map function");
        element = document.getElementById('map');

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 34.0983425, lng: -118.3267434},
          zoom: 12
        });
         
        infoWindow = new google.maps.InfoWindow;


      if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                  var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                  };

                  infoWindow.setPosition(pos);
                  infoWindow.setContent('Location found.');
                  infoWindow.open(map);
                  map.setCenter(pos);
                }, function() {
                  handleLocationError(true, infoWindow, map.getCenter());
                });
              } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
              }



      // Add Submit Function
      $('#submit').click(function(){  
          console.log("submitting");
          location = document.getElementById("location").value;
          query = document.getElementById("query").value;
          console.log(location);
          console.log(query);
     // call the drawmap fuction
          drawMap(location);
        })


      // add a function Drawmap
      function drawMap(myCurrentLocation) {      
          console.log("draw map");  
          var options = {
              center: myCurrentLocation,
              zoom:12,
          };
         map = new google.maps.Map(element, options);
          foursquare();
        }
        // end of DrawMap section 
        //  map = new google.maps.Map(element, options); 



      function foursquare() {    
          $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            cache: false,
            url: 'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near='+ location +'&query=' + query,
            success: function(response) {
              console.log(response);
              response.response.venues.forEach(function(venue) {
                var venueLatLng = new google.maps.LatLng(venue.location.lat, venue.location.lng);
                var marker = new google.maps.Marker({
                  map: map,
                  position: venueLatLng,
                });
                var infowindow = new google.maps.InfoWindow({ 
                  content: venue.name, 
                });
                google.maps.event.addListener(marker, 'click', function() {
                  map.setZoom(12);
                  infowindow.open(map, marker);
                })
              })
            },
          })
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }


    });

}) ();

