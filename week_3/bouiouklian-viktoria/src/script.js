
google.maps.event.addDomListener(window, 'load', function() {
  var mapEl = document.getElementById('places-map')
  console.log(mapEl)
  var latLng = new google.maps.LatLng('44.325852','8.068007')
  var mapOptions = {
    center: latLng,
    zoom: 4,
  }

  var map = new google.maps.Map(mapEl, mapOptions)

  var myPlaces = [{
    name: '<h2>Copenhagen, Denmark</h2>',
    description: '<p>I really want to visit Copenhagen in the summer after I have read the \"The Litte Book of Hygge\". Hygge means being comfy and cozy and that is the concept the Danes are so proud of. I would like to visit their cafes, restaurants, museums etc and see how every place in Copenhagen has this hygge vibe in it.</p>',
    image: '<img height ="100" src="https://www.thelocal.dk/userdata/images/article/a7d1b5b6e1cb00eb189152476525c6dd17120ddcd6ef1c62f006ceb52d7ae89c.jpg"> ',
    lat: '55.680346',
    lng: '12.565327',
  }, {
    name: '<h2>Madrid, Spain</h2>',
    description: '<p>Heard Spain is nice. Beautiful country with impressive architecture.</p>',
    image: '<img height ="100" src="https://lonelyplanetimages.imgix.net/a/g/hi/t/9d06864e1a551111cd5115d0310489a8-madrid.jpg?sharp=10&vib=20&w=1200"> ',
    lat: '40.289213',
    lng: '-3.519744',
  }, {
    name: '<h2>Rome, Italy</h2>',
    description: '<p>I have watched a few Italian movies from the 80s with Adriano Celentano and the way they showed Italy and its culture in these movies is amazing. Pasta, wine, pasta and pasta and did I mention pasta?</p>',
    image: '<img height ="100" src="https://steemit-production-imageproxy-upload.s3.amazonaws.com/DQmRM3uN7uqtVZfVD6hBo4wSvd9kTnanTAYq27GrTF934t4"> ',
    lat: '41.918736',
    lng: '12.509904',
  }]

  myPlaces.forEach(function(place) {
    console.log(place.content)
    var latLng = new google.maps.LatLng(place.lat, place.lng)
    var marker = new google.maps.Marker({
      map: map,
      position: latLng,
      center: this
    })
    var infowindow = new google.maps.InfoWindow({
      content: place.name + place.image + place.description,
    })

    google.maps.event.addListener(marker, 'click', function ClickHandler() {
      map.setCenter(marker.position)
      map.setZoom(5)
      infowindow.open(map, marker)
    })
  })
})
