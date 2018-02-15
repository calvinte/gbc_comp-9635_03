
$(document).ready(function(){


console.log(google);


function map(){
  /*var myHouse = {lat:-34.7784272, lng:-58.2694053};
  var marDelPlata ={lat:-38.0174836, lng:-57.7406184};
  var map_canvas = document.getElementById('map-canvas');


  var myMap = new google.maps.Map(map_canvas, {
    zoom:5,
    center:myHouse,


  });//myMap


  var marker = new google.maps.Marker({
    //position:myHouseLatLng,
    position:myHouse,
    map:myMap,
  });//Marker

var marker2 = new google.maps.Marker({
  position:marDelPlata,
  map:myMap,
})//marker2
*/

var locations=[{lat:-34.7784272, lng:-58.2694053},
          {lat:-34.7788589, lng:-58.2692429}];
var map_canvas = document.getElementById('map-canvas');

var myMap = new google.maps.Map(map_canvas, {
  zoom:15,
  center:locations[0],


});//myMap

//Event listener for myMap
myMap.addListener('center_changed', function(){
  window.setTimeout(function(){
    myMap.panTo(marker.getPosition());
  },3000);
});





for(var i=0;i<locations.length;i++){
  var marker = new google.maps.Circle({
    strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
    center:locations[i],
    map:myMap,
    radius:30,
  })//marker


  //Event listener for marker
  marker.addListener('click',function(){
    myMap.setZoom(18);
    myMap.setCenter(marker.getPosition());
  });

}//for




//coordinates Information
var coordInfoWindow = new google.maps.InfoWindow();
coordInfoWindow.setContent()



//Tile
var TILE_SIZE=256;
function createInfoWindowContent(latLng, zoom){
  var scale= 1<<zoom;
  var worldCoordinate = project(latLng);
  var pixelCooridinate = new google.maps.Point(
    Math.floor(worldCoordinate.x * scale),
    Math.floor(worldCoordinate.y * scale)
  );//PixelCoordinate

  var tileCoordinate

}


}// function map

map();
/*google.maps.event.addDomListener(window, 'load', function(){
  //console.log('page is loaded');
  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    var map_canvas = document.getElementById('map-canvas');


    //My Current position
    var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      //My house Position in Argentina
      var myHouse = {lat:-34.7784272, lng:-58.2694053};
      //var myHouseLat = -34.7784272;
      //var myHouseLng = -58.2694053;

      var myLatLng = new google.maps.LatLng(lat, lng);
      //var myHouseLatLng =new google.maps.LatLng(myHouse);

      var myMap = new google.maps.Map(map_canvas, {
        zoom:15,
        center:myHouse,


      })
      var marker = new google.maps.Marker({
        //position:myHouseLatLng,
        position:myHouse,
        map:myMap,
      })
console.log(myLatLng);


  })
})//Google maps*/


});//document ready jquery
