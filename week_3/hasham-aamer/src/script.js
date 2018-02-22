console.log(google);
google.maps.event.addDomListener(window,'load', function() {

  console.log('DOM HAS LOADED!')
  var mapEl = document.getElementById('places-map')
  var latLng = new google.maps.LatLng(51.705420, -86.500644)
  var mapOptions={
    center: latLng,
    zoom: 2,
  }
  var map=new google.maps.Map(mapEl,mapOptions)



  var myPlaces = [

    {name:'<h2>University of Calgary</h2>',description:'<br><h4>My school..reminiscing about the past...</h4>',image:'<img height="100" src="http://www.ucalgary.ca/mediacentre/files/mediacentre/160624_edit_campus-sign-new-logo-4b.jpg">',lat:51.089984, lng: -114.134858},
    {name: '<h2>The Hogtown Vegan</h2>', description:'<br><h4>My favorite restaurant..a bit dangerous as I could keep on going nonstop..</h4> <br>',image:'<img height="100" src="http://www.toronto4kids.com/images/cache/cache_b/cache_6/cache_b/hog-town-vegan-2-1ad31b6b.jpeg?ver=1469211249&aspectratio=1.5">', lat:43.660892, lng:-79.432607},
    {name: '<h2> My Javascript Class</h2>',description: '<br><h4>Javascript Class that I am really enjoying these days...<h4>', image:'<img height="100" src="https://coned.georgebrown.ca/assets/0/124/125/162/5ad7e4b7-88f0-472a-a59a-353f9f629566.jpg">', lat:43.652714, lng:-79.365610}
  ]

  myPlaces.forEach(function(place){
    console.log(place.content)
    var latLng=new google.maps.LatLng(place.lat, place.lng)
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,

    })

    var infowindow = new google.maps.InfoWindow({
      content: place.name+place.description+place.image,

    })
  google.maps.event.addDomListener(marker,'click', function ClickHandler(){

    map.setCenter(marker.position)
    map.setZoom(12)
    infowindow.open(map, marker)
  })
})
})
