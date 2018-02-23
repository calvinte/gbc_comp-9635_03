console.log ('testing')

$(document).ready(function(){
  var element = document.getElementById ('foursquare-map')
  var options = {
    center: new google.maps.LatLng(43.6532, -79.3832),
    zoom: 10,
  }
  var map = new google.maps.Map(element, options)
  $.ajax({
    type:'GET',
    dataType:'jsonp',
    cache:'false',
    url:'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query=coffee',
    success:function(response){
      console.log(response)
      response.response.venues.forEach(function(coffeeShop){
        var venueLatLng = new google.maps.LatLng(coffeeShop.location.lat, coffeeShop.location.lng)
        var marker = new google.maps.Marker({
          map:map,
          position:venueLatLng,
        })


        var infowindow = new google.maps.InfoWindow({ content: coffeeShop.name });
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
        })



      })
    },

  })
})
