console.log('test');
google.maps.event.addDomListener(window, 'load', function(){
    
    console.log('dom has loaded');
    var mapEl = document.getElementById('places-map');
    
//    var Options = {
//        center:latLng,
//        zoom:5,
//   }
//    
//    var map = new google.maps.Map(mapEl, Options);
//    
    
    
    
    var places = [{content:'Sweden', lat:5, lng: 10}, {content:'Russia', lat: 10, lng:12}, { content:'Russia' , lat: 213, lng: 500}];
    
    places.forEach(function(p){
        console.log(p.content);
    var latLng = new google.maps.LatLng(p.lat,p.lng);
        var marker = new google.maps.Marker({
        
        map:map,
        position:latLng
    })
          var infow = new google.maps.InfoWindow({
        
        content:p.content,
    });
        
        google.maps.event.addListener(marker, 'click', function click(){
        map.setCenter(marker.position);
        
        map.setZoom(1);
    infow.open(map, marker);    
        
    })
        
    })
    
    
    
  
    
    
    
});