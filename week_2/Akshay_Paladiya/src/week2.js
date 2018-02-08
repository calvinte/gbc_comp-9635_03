//console.log(google);
google.maps.event.addDomListener(window, 'load', function(){
  //console.log('page is loaded');

  navigator.geolocation.getCurrentPosition(function(position){
   // console.log(position);

    var map_canvas = document.getElementById('map-canvas');

    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var myLoc = {lat:lat,lng:lng}
    var myLatLng = new google.maps.LatLng(lat,lng);
    var myMap = new google.maps.Map(map_canvas,{
      zoom:15,
      center: myLatLng,
    });
    var marker = new google.maps.Marker({
          position: myLatLng,
          map: myMap
        });

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("demo").innerHTML = "Location Address:" + obj.results[0].formatted_address;
            //console.log(obj);
          }
        };
        xhttp.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key=AIzaSyDEZaZXA6vU2TMoN04fMLgYybvfJ4Jp_9w", true);
        xhttp.send();

  })
  
  
})

function getAddress(){
  
   
}