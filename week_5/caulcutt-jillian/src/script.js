console.log('testing');

(function () {

    var location ="";
    var query ="";
    var myCurrentLocation = "";
    var element = "";
 //   var map = "";
    var infoWindow = "";
    var myCurrentPosition = "";
    var online = navigator.onLine;

    var map = "";
    var options = "";


    $(document).ready(function() {

      console.log("inside map function");
      



    if (online) {
      console.log("you're online");
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        myCurrentPosition = new google.maps.LatLng(pos);
        element = document.getElementById('map');

        options = {
          center: myCurrentPosition,
          zoom: 12,
        }

        map = new google.maps.Map(element, options);



        infoWindow = new google.maps.InfoWindow;
        infoWindow.setContent('Location found.');
        infoWindow.setPosition(myCurrentPosition);
        infoWindow.open(map);

        console.log(pos);
      })
    }
    else{
      console.log("you are not online");
    }

      var markers = [];
      var venues = [];

      // Add Submit Function
      $('#submit').click(function(){  
          console.log("submitting");
          location = document.getElementById("location").value;
          query = document.getElementById("query").value;
          console.log(location);
          console.log(query);

          $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            cache: false,
            url: 'https://api.foursquare.com/v2/venues/search?client_id=XUXLO0NUOU5C54RCWE2UXF50MHWEL52I1APLQVSMBQJDGFPX&client_secret=0BEDRXQL312RAUAK2M5ON35BLUWSBRNCQDQNKADJ5COXJ4VJ&v=20180212&near='+ location +'&query=' + query,
            success: function(response) {
              var venues = response.response.venues;
              console.log(response);
              //clear the map first
              clearTheMap();
              createSideBarHtml(venues);
              venues.forEach(function(venue) {
                venues.push(venue);
                var venueLatLng = new google.maps.LatLng(venue.location.lat, venue.location.lng);
                var marker = new google.maps.Marker({
                  map: map,
                  position: venueLatLng,
                });
                markers.push(marker);
                var infowindow = new google.maps.InfoWindow({ 
                  content: venue.name, 
                });
                google.maps.event.addListener(marker, 'click', function() {
                  map.setZoom(12);
                  map.setCenter(marker.position);
                  infowindow.open(map, marker);
                })
              })
              console.log(venues);
            },
          })
     // call the drawmap fuction
      //    drawMap(location);
        })


      // add a function Drawmap
      /*function drawMap(myCurrentLocation) {      
          console.log("draw map");  
          var options = {
              center: myCurrentLocation,
              zoom:12,
          };
         map = new google.maps.Map(element, options);
          map();
        }
        // end of DrawMap section 
        //  map = new google.maps.Map(element, options); 
*/


            function clearTheMap() {
                  for(var i =0; i < markers.length; i++) {
                    markers[i].setMap(null);
                  }
                    markers = [];
                    venues =[];
                }

              function createSideBarHtml(venues) {
                html = '';
                venues.forEach(fuction(venue){
                  // do this
                });
                $('#sidebarname').innerHTML(html)
              }

    });



}) ();

