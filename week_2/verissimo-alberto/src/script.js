

google.maps.event.addDomListener(window, 'load', function(){

console.log(google);
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex =0;


function map(){


var locations=[{lat:-34.7787584, lng:-58.2696544},
          {lat:-34.7786198, lng:-58.2694525},
          {lat:-34.777568, lng:-58.26837},
          {lat:-34.7787215, lng:-58.2666316},
          {lat:-34.7786265, lng:-58.2693011},
          {lat:-34.7796038, lng:-58.2792572}
        ];
var map_canvas = document.getElementById('map-canvas');

var myMap = new google.maps.Map(map_canvas, {
  zoom:15,
  center:locations[0],
  mapTypeId : 'roadmap'

});//myMap


/*var marker = new google.maps.Marker({

  position:locations[0],
  label:labels[labelIndex++ % labels.length],
  map:myMap




})//marker*/

/*var markerb = new google.maps.Marker({

position:locations[1],
label:labels[labelIndex++ % labels.length],
map:myMap,



})//markerb*/
//Service Details of Featured places(My House and School)
var panorama;
var service = new google.maps.places.PlacesService(myMap);
//Event listener for marker

service.getDetails({
          placeId: 'ChIJcYTEBa4uo5URFsvb9MJOL6Q'
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: myMap,
              position: place.geometry.location,
              //position: locations[0],
              label:labels[labelIndex++ % labels.length]
            });

            marker.addListener('click',function(){
              myMap.setZoom(18);
              housewindow.setContent(house + place.formatted_address);
              housewindow.open(myMap, marker);
              schoolwindow.close(myMap);
            $("#bio").html("<p>This is the house that I lived most of my childhood and all my teenage years. it is located in a city called Florencio Varela in the Province of Buenos Aires, Argentina. My mother and my 2 sisters still live there, I go to visit this place once every 2 years.</p>");
            panorama = new google.maps.StreetViewPanorama(
                       document.getElementById('pano'), {
                         position: place.geometry.location,
                         //position: locations[0],
                         pov: {
                           heading: 160,
                           pitch: 0
                         }
                       });

            });//marker
          }//if
        });


service.getDetails({
          placeId: 'EktBbnRvbmlvIEx1aXMgQmVydXRpIDkwMSwgQjE4ODhBWVMgRmxvcmVuY2lvIFZhcmVsYSwgQnVlbm9zIEFpcmVzLCBBcmdlbnRpbmE'

        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var markerb = new google.maps.Marker({
              map: myMap,
              position: place.geometry.location,
              //position: locations[1],
              label:labels[labelIndex++ % labels.length]
            });

            markerb.addListener('click',function(){
              myMap.setZoom(18);
              schoolwindow.setContent(school + place.formatted_address);
              housewindow.close(myMap);
              schoolwindow.open(myMap, markerb);
            $("#bio").html("<p>This is my Elementary school and I studied here for 7 years before going to High School.</p>");
            panorama = new google.maps.StreetViewPanorama(
                       document.getElementById('pano'), {
                         position: place.geometry.location,
                         //position: locations[1],
                         zoom:1,
                         pov: {
                           heading: 90,
                           pitch: 0
                         }
                       });

            });//marker
          }//if
        });




        var house = '<div id="content">'+
        '<h1>My House</h1>'
        +'</div>';
        var school = '<div id="content">'+
        '<h1>My school </h1><b><h2>Instituto Manuel Belgrano</h2></b>'
        +'</div>';

        var housewindow = new google.maps.InfoWindow({
        //content:house
        });

        var schoolwindow = new google.maps.InfoWindow({
        //content:school
        });


/*markerb.addListener('click',function(){
  myMap.setZoom(18);
schoolwindow.setContent(school);
  schoolwindow.open(myMap, markerb);
  housewindow.close(myMap, marker);
  $("#bio").html("<p>This is my Elementary school and I studied here for 7 years before going to High School </p>");
   panorama = new google.maps.StreetViewPanorama(
              document.getElementById('pano'), {
                position: locations[1],
                zoom:-10,
                pov: {
                  heading: 40,
                  pitch: 0
                }
              });
});*/














//Icons for Businesses
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var icons = {
  bus: {
    icon: iconBase + 'bus_maps.png',

  },
  library:{
    icon: iconBase + 'library_maps.png',
  },
  shopping:{
    icon : iconBase + 'shopping_maps.png',
  }

};
var features = [
  {
    position: locations[2],
    type: 'bus'
  },
  {
    position: locations[3],
    type: 'bus'
  },
  {
    position : locations[4],
    type:'library'
  },
  {
    position : locations[5],
    type:'shopping'
  }


];

features.forEach(function(feature){
  var mark = new google.maps.Marker({
    position: feature.position,
   icon: icons[feature.type].icon,

    map: myMap
  });
});



        myMap.setStreetView(panorama);

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
