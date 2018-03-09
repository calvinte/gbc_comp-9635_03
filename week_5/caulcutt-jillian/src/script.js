console.log('testing');

(function() {

  var location = "";
  var query = "";
  var myCurrentLocation = "";
  var element = "";
  var infoWindow = "";
  var myCurrentPosition = "";
  var online = navigator.onLine;
  var map = "";
  var options = "";


  $(document).ready(function() {

    console.log("inside map function");

// To find out if you have internet access and find your geo location
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
// set the infowindow to current position
        infoWindow = new google.maps.InfoWindow;
        infoWindow.setContent('You are here.');
        infoWindow.setPosition(myCurrentPosition);
        infoWindow.open(map);

        console.log(pos);
      })
    } else {
      console.log("you are not online");
    }
// end of geolocation function

//call the markers and venues arrays
    var markers = [];
    var venues = [];

// Add Submit Function
    $('#submit').click(function() {
      console.log("submitting");
      location = document.getElementById("location").value;
      query = document.getElementById("query").value;
      console.log(location);
      console.log(query);

      $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        url: 'https://api.foursquare.com/v2/venues/search?client_id=XUXLO0NUOU5C54RCWE2UXF50MHWEL52I1APLQVSMBQJDGFPX&client_secret=0BEDRXQL312RAUAK2M5ON35BLUWSBRNCQDQNKADJ5COXJ4VJ&v=20180212&near=' + location + '&query=' + query,
        success: function(response) {
          var venues = response.response.venues;
          console.log(response);
          //clear the map first
          clearTheMap();
          createSideBarHtml(venues);

          venues.forEach(function(venue) {
            venues.push(venue);
            var venueLatLng = new google.maps.LatLng(venue.location.lat, venue.location.lng);
//marker hover
// set roll over marker
            var icon2 = {
              url: "marker_blue.svg",
              scaledSize: new google.maps.Size(50, 50)
            };
// set original marker
            var icon1 = {
              url: "marker_red.svg",
              scaledSize: new google.maps.Size(50, 50)
            };
            var marker = new google.maps.Marker({
              map: map,
              position: venueLatLng,
              icon: icon1,
              animation: google.maps.Animation.DROP,
            });


            $('.marker').hover(
// mouse in
              function() {
// first we need to know which <div class="marker"></div> we hovered
                var index = $('.marker').index(this);
                markers[index].setIcon(icon2);
              },
// mouse out
              function() {
// first we need to know which <div class="marker"></div> we hovered
                var index = $('.marker').index(this);
                markers[index].setIcon(icon1);
              }
            );
//end marker hover

//calls the toggle bounce click event
            marker.addListener('click', toggleBounce);

            markers.push(marker);
            var infowindow = new google.maps.InfoWindow({
              content: venue.name,
            });
// event listener for the info window. Zooms into selected marker
            google.maps.event.addListener(marker, 'click', function() {
              map.setZoom(15);
              map.setCenter(marker.position);
              infowindow.open(map, marker);
            })
//toggle the bounce feature on and off with click
            function toggleBounce() {
              if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
              } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
              }
            }
// close event for the info window. Zooms back to original size
            google.maps.event.addListener(infowindow, 'closeclick', function() {
              map.panTo(this.getPosition());
              map.setZoom(12);
            })
          })
          console.log(venues);
        },
      })
    })

//clears the map for every new call
    function clearTheMap() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = []; // clears the map markers
      venues = []; // clears the venues in the sidebar
    }
//adds the html for the venues to the sidebar of the page
    function createSideBarHtml(venues) {
      var html = '';
      venues.forEach(function(venue) {
        html += '<div id="venues">'
        html += '<div class="marker">'
        html += '<p>'
        html += '<strong>'
        html += "<a onmouseover='javascript:google.maps.event.trigger(markers['+i+'],'onmouseover');''>"
        html += venue.name 
        html += '</a>'
        html += '</strong><br />'
        html += venue.location.address
        html += '<br>'
        html += venue.contact.formattedPhone
        html += '</p>'
        html += '</div>'
        html += '</div>'
      })
      $('#venueContainer').html(html); 
    }

  });


})();