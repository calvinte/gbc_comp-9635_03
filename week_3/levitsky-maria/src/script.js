<<<<<<< HEAD
google.maps.event.addDomListener(window, 'load', function(){

  console.log('dom has loaded')

 var mapEl = document.getElementById('places-map')
 var latLng = new google.maps.LatLng(0,0)
 var mapOptions = {
   center: latLng,
   zoom: 2,
<<<<<<< HEAD
   //Styling in Nightmode
  styles: [
  {elementType: 'geometry', stylers: [{color: '#303373'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#000000'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#ffff00'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#00FF00'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#FF00FF'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}]
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#000000'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#ffffff'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}]
  }
 ]
 }
 
var map = new google.maps.Map(mapEl, mapOptions)
=======
 }
 var map = new google.maps.Map(mapEl, mapOptions)
 //var marker = new google.maps.Marker({
//   map: map,
//.   position: latLng,
 //})
 //var infowindow = new google.maps.InfoWindow({
//   content: 'This is an info window, pretty cool yea',
// })

>>>>>>> 2c8e96aa4d206647b62e61be6eaa749669c6d2e1
var myPlaces = [{
  name: '<h2>Hong Kong, Hong Kong</h2>',
  description: '<p><a href="https://en.wikipedia.org/wiki/Hong_Kong">Hong Kong</a> is an autonomous territory, and former British colony, in southeastern China. Its vibrant, densely populated urban centre is a major port and global financial hub with a skyscraper-studded skyline. Central (the business district) features architectural landmarks like I.M. Peis Bank of China Tower. Hong Kong is also a major shopping destination, famed for bespoke tailors and Temple Street Night Market.</p>',
  image: '<img height="100" width="300" src="https://wikitravel.org/upload/shared//0/06/Hong_Kong_Banner.jpg">',
  lat: 22.286394,
  lng: 114.149139,
}, {
<<<<<<< HEAD
  name: '<h2>Berlin, Germany</h2>',
=======
  name: '<h2>Berlin, Germany<h2>',
>>>>>>> 2c8e96aa4d206647b62e61be6eaa749669c6d2e1
  description: '<p><a href="https://en.wikipedia.org/wiki/Berlin">Berlin</a>, Germanys capital, dates to the 13th century. Reminders of the city turbulent 20th-century history include its Holocaust memorial and the Berlin Wall graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963.</p>',
  image: '<img height="100" width="300" src="https://www.visitberlin.de/system/files/styles/visitberlin_hero_visitberlin_desktop_2x/private/image/Museumsinsel%2BDom_iStock_c_Chalabala_DL_PPT_0.jpg?itok=GzX54IDM">',
  lat: 52.520008,
  lng: 13.404954,
}, {
  content: 'SEOUL',
<<<<<<< HEAD
  name: '<h2>Seoul, South Korea</h2>',
  description: '<p><a href="https://en.wikipedia.org/wiki/Seoul">Seoul</a>, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace, which once had more than 7,000 rooms; and Jogyesa Temple, site of ancient locust and pine trees.</p>',
=======
  name: '',
  description: '<p></p>',
>>>>>>> 2c8e96aa4d206647b62e61be6eaa749669c6d2e1
  image: '<img height="100" width="300" src="https://media.webjet.com.au/Images/cities/1200x472/GMP1.jpg">',
  lat: 37.517235,
  lng: 127.047325,
}, {
  content: 'NEW YORK',
<<<<<<< HEAD
  name: '<h2>New York City, New York, U.S.A.</h2>',
  description: '<p><a href="https://en.wikipedia.org/wiki/New_York">New York City</a> comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.</p>',
=======
  name: '',
  description: '<p></p>',
>>>>>>> 2c8e96aa4d206647b62e61be6eaa749669c6d2e1
  image: '<img height="100" width="300" src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Lower_Manhattan_from_Jersey_City_November_2014_panorama_3.jpg">',
  lat: 40.730610,
  lng: -73.935242,
}, {
  content: 'LOS ANGELES',
<<<<<<< HEAD
  name: '<h2>Los Angeles, California U.S.A.</h2>',
  description: '<p><a href="https://en.wikipedia.org/wiki/Los_Angeles">Los Angeles</a> is a sprawling Southern California city and the center of the nation’s film and television industry. Near its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours. On Hollywood Boulevard, TCL Chinese Theatre displays celebrities’ hand- and footprints, the Walk of Fame honors thousands of luminaries and vendors sell maps to stars’ homes.</p>',
  image: '<img height="100" width="300" src="https://www.digitalwest.com/wp-content/uploads/2015/09/colocation_los_angeles.png">',
=======
  name: '',
  description: '<p></p>',
  image: '<img height="100" width="300" src="https://media1.britannica.com/eb-media/40/189440-049-A9F1124D.jpg">',
>>>>>>> 2c8e96aa4d206647b62e61be6eaa749669c6d2e1
  lat: 34.052235,
  lng: -118.243683,
}]


 myPlaces.forEach(function(place) {
   console.log(place.content)
   var latLng = new google.maps.LatLng(place.lat, place.lng)
   var marker = new google.maps.Marker({
     map: map,
     position: latLng,
<<<<<<< HEAD
     //Custom Marker
    icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            strokeColor: '#00FF00',
          },
   })
   var infowindow = new google.maps.InfoWindow({
     content: place.name + place.description + place.image,
     //Info Window width
     maxWidth: 300
=======
   })
   var infowindow = new google.maps.InfoWindow({
     content: place.name + place.description + place.image
>>>>>>> 2c8e96aa4d206647b62e61be6eaa749669c6d2e1
   })

   google.maps.event.addListener(marker, 'click', function ClickHandler() {
     map.setCenter(marker.position)
     map.setZoom(2)
     infowindow.open(map, marker)
   })

  })
 })
=======
google.maps.event.addDomListener(window, 'load', function(){

  console.log('dom has loaded')

 var mapEl = document.getElementById('places-map')
 var latLng = new google.maps.LatLng(0,0)
 var mapOptions = {
   center: latLng,
   zoom: 2,
   //Styling in Nightmode
  styles: [
  {elementType: 'geometry', stylers: [{color: '#303373'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#000000'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#ffff00'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#00FF00'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#FF00FF'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}]
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#000000'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#ffffff'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}]
  }
 ]
 }

var map = new google.maps.Map(mapEl, mapOptions)
var myPlaces = [{
  name: '<h2>Hong Kong, Hong Kong</h2>',
  description: '<p><a href="https://en.wikipedia.org/wiki/Hong_Kong">Hong Kong</a> is an autonomous territory, and former British colony, in southeastern China. Its vibrant, densely populated urban centre is a major port and global financial hub with a skyscraper-studded skyline. Central (the business district) features architectural landmarks like I.M. Peis Bank of China Tower. Hong Kong is also a major shopping destination, famed for bespoke tailors and Temple Street Night Market.</p>',
  image: '<img height="100" width="300" src="https://wikitravel.org/upload/shared//0/06/Hong_Kong_Banner.jpg">',
  lat: 22.286394,
  lng: 114.149139,
}, {
  name: '<h2>Berlin, Germany</h2>',
  description: '<p><a href="https://en.wikipedia.org/wiki/Berlin">Berlin</a>, Germanys capital, dates to the 13th century. Reminders of the city turbulent 20th-century history include its Holocaust memorial and the Berlin Wall graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963.</p>',
  image: '<img height="100" width="300" src="https://www.visitberlin.de/system/files/styles/visitberlin_hero_visitberlin_desktop_2x/private/image/Museumsinsel%2BDom_iStock_c_Chalabala_DL_PPT_0.jpg?itok=GzX54IDM">',
  lat: 52.520008,
  lng: 13.404954,
}, {
  content: 'SEOUL',
  name: '<h2>Seoul, South Korea</h2>',
  description: '<p><a href="https://en.wikipedia.org/wiki/Seoul">Seoul</a>, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace, which once had more than 7,000 rooms; and Jogyesa Temple, site of ancient locust and pine trees.</p>',

  image: '<img height="100" width="300" src="https://media.webjet.com.au/Images/cities/1200x472/GMP1.jpg">',
  lat: 37.517235,
  lng: 127.047325,
}, {
  content: 'NEW YORK',
  name: '<h2>New York City, New York, U.S.A.</h2>',
  description: '<p><a href="https://en.wikipedia.org/wiki/New_York">New York City</a> comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.</p>',

  image: '<img height="100" width="300" src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Lower_Manhattan_from_Jersey_City_November_2014_panorama_3.jpg">',
  lat: 40.730610,
  lng: -73.935242,
}, {
  content: 'LOS ANGELES',
  name: '<h2>Los Angeles, California U.S.A.</h2>',
  description: '<p><a href="https://en.wikipedia.org/wiki/Los_Angeles">Los Angeles</a> is a sprawling Southern California city and the center of the nation’s film and television industry. Near its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours. On Hollywood Boulevard, TCL Chinese Theatre displays celebrities’ hand- and footprints, the Walk of Fame honors thousands of luminaries and vendors sell maps to stars’ homes.</p>',
  image: '<img height="100" width="300" src="https://www.digitalwest.com/wp-content/uploads/2015/09/colocation_los_angeles.png">',

  lat: 34.052235,
  lng: -118.243683,
}]


 myPlaces.forEach(function(place) {
   console.log(place.content)
   var latLng = new google.maps.LatLng(place.lat, place.lng)
   var marker = new google.maps.Marker({
     map: map,
     position: latLng,
     //Custom Marker
    icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            strokeColor: '#00FF00',
          },
   })
   var infowindow = new google.maps.InfoWindow({
     content: place.name + place.description + place.image,
     //Info Window width
     maxWidth: 300
   })

   google.maps.event.addListener(marker, 'click', function ClickHandler() {
     map.setCenter(marker.position)
     map.setZoom(2)
     infowindow.open(map, marker)
   })

  })
 })
>>>>>>> 543a6ce29d009abfe50ffe35936aa76486170e05
