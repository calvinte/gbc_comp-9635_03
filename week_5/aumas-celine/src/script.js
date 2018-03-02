console.log ('testing')

$(document).ready(function(){
  var element = document.getElementById ('foursquare-map')
  var options = {
    center: new google.maps.LatLng(43.6532, -79.3832),
    zoom: 10,
  }
  var map = new google.maps.Map(element, options)

// as we are adding different venues we make sure the markers are pushed in an array
var markers =[];




$('#mybutton').click(function(){
    var term = $('#myinput').val();
    console.log(term);


    $.ajax({
      type:'GET',
      dataType:'jsonp',
      cache:'false',
      url:'https://api.foursquare.com/v2/venues/search?client_id=XUXLO0NUOU5C54RCWE2UXF50MHWEL52I1APLQVSMBQJDGFPX&client_secret=0BEDRXQL312RAUAK2M5ON35BLUWSBRNCQDQNKADJ5COXJ4VJ&v=20180212&near=Toronto&query=' + term,

      success:function(response){
        console.log(response)
        clearTheMap();


        response.response.venues.forEach(function(venue){
          var venueLatLng = new google.maps.LatLng(venue.location.lat, venue.location.lng)
          var marker = new google.maps.Marker({
            map:map,
            position:venueLatLng,
          });
          markers.push(marker)


          var infowindow = new google.maps.InfoWindow({ content: venue.name });
  				google.maps.event.addListener(marker, 'click', function() {
            // other way to do it marker.addListener('click', function() {})
            // way 2 google.maps.addListener(marker, 'click', function() {})
            //way 3 google.maps.addEventListener(marker, 'click', function() {})
  					map.setZoom(13);
  					infowindow.open(map, marker);
          })

          google.maps.event.addListener(infowindow, 'closeclick', function() {
            map.setZoom(11);
            infowindow.close(map,marker);
          });
        });
      },
    });
  });


    // clear map
    //taking a function to loop into all of them and each one of them are taken off the map
    function clearTheMap() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

});




function placeMarkersOnMap(){


}
