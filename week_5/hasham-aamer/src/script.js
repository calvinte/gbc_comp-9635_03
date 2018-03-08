

$(document).ready(function(){
  //var element=document.getElementById('foursquare-map')
  //var options={
    //zoom: 10,
    //center: new google.maps.LatLng(43.6532, -79.3832),
  //}
  //var map= new google.maps.Map(element,options)

  var markers= [];

  $('#mybutton').click(function(){

    //getting the input on the city @ button ClickHandler
    var term=$('#myinput').val();
    console.log(term);
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      cache: false,
      url: 'https://api.foursquare.com/v2/venues/search?client_id=XUXLO0NUOU5C54RCWE2UXF50MHWEL52I1APLQVSMBQJDGFPX&client_secret=0BEDRXQL312RAUAK2M5ON35BLUWSBRNCQDQNKADJ5COXJ4VJ&v=20180212&near='+term+'&query=tacos' ,

      success: function(response) {
        console.log(response)
        var element=document.getElementById('foursquare-map')
        var options={
          zoom: 10,
          center: new google.maps.LatLng(response.response.geocode.feature.geometry.center.lat, response.response.geocode.feature.geometry.center.lng),
        }
        var map= new google.maps.Map(element,options)

        clearTheMap();
        //console.log(response.response.geocode.feature.geometry.center.lat);
        response.response.venues.forEach(function(venue) {
          var latLng=new google.maps.LatLng(venue.location.lat, venue.location.lng)
          var marker= new google.maps.Marker({
            map: map,
            position: latLng,
          })
          markers.push(marker);
          var infowindow=new google.maps.InfoWindow({
            content: venue.name,

          })

          google.maps.event.addDomListener(marker,'click', function ClickHandler(){
            map.setCenter(marker.position)
            map.setZoom(12)
            infowindow.open(map,marker)
          })

        })
      }
    })
  })

function clearTheMap(){

  for (var i=0;i<markers.length;i++){

    markers[i].setMap(null);
  }
  markers=[];
}

})
