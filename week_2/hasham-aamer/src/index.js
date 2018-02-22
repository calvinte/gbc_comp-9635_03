console.log(google);

google.maps.event.addDomListener(window,'load', function()
{
  console.log("page is loaded");
  
  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(function(position){
      var map_canvas=document.getElementById('map-canvas');
      var lat= position.coords.latitude;
      var lng= position.coords.longitude;
      var myLatLng=new google.maps.LatLng(lat,lng);
      var myMap=new google.maps.Map(map_canvas,{
        zoom: 15,
        center: myLatLng,
      })

      new google.maps.Marker({
        position: myLatLng,
        map: myMap,

      })
      console.log(myLatLng);



    })
  }
  
})
