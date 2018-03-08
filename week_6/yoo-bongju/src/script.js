var map;
var markers = [];
var toronto = new google.maps.LatLng('43.6532', '-79.3832');
var vancouver = new google.maps.LatLng('49.2827291', '-123.12073750000002');
var calgary = new google.maps.LatLng('51.0486151', '-114.0708459');
var edmonton = new google.maps.LatLng('53.544389', '-113.49092669999999');
var montreal = new google.maps.LatLng('45.5016889', '-73.56725599999999');
var ottawa = new google.maps.LatLng('45.4215296', '-75.69719309999999');
var mapStyle = [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#523735"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#c9b2a6"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#dcd2be"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ae9e90"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#93817c"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a5b076"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#447530"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f8c967"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#e9bc62"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e98d58"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#db8555"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fdfcf8"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#806b63"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8f7d77"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b9d3c2"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#92998d"
            }
        ]
    }
];
var mapStyleGray = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
];

var mapStylePink = [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#e9b5d1"
            },
            {
                "visibility": "on"
            },
            {
                "weight": "4.69"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e9b5d1"
            },
            {
                "saturation": "66"
            },
            {
                "weight": "4.11"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#9fbb93"
            },
            {
                "lightness": "70"
            },
            {
                "saturation": "-25"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#c0bebe"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#676767"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b9b9b9"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d2d2d2"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#808080"
            },
            {
                "lightness": "65"
            },
            {
                "saturation": "-15"
            }
        ]
    }
];

$(document).ready(function() {
      initializeMap();
    // Switch City - Toronto
    $("#btnMap-toronto").click(function(initializeMap){
      map = new google.maps.Map(document.getElementById('foursquare-map'), {
        center: toronto,
        zoom: 10,
        styles: mapStylePink
      });
    var carBrand = $('input[name=rbnCar]:checked').val(); 
    var selectedCity = $('input[name=rbnCity]:checked').val();
    loadMarkersFromcarBrand1(carBrand);
    });
    // Switch City - Calgary
    $("#btnMap-calgary").click(function(initializeMap){
      map = new google.maps.Map(document.getElementById('foursquare-map'), {
        center: calgary,
        zoom: 10,
        styles: mapStylePink
      });
    var carBrand = $('input[name=rbnCar]:checked').val(); 
    var selectedCity = $('input[name=rbnCity]:checked').val();
    loadMarkersFromcarBrand2(carBrand);
    });
    // Switch City - Vancouver
    $("#btnMap-vancouver").click(function(initializeMap){
      map = new google.maps.Map(document.getElementById('foursquare-map'), {
        center: vancouver,
        zoom: 10,
        styles: mapStylePink
      });
    var carBrand = $('input[name=rbnCar]:checked').val(); 
    var selectedCity = $('input[name=rbnCity]:checked').val();
    loadMarkersFromcarBrand3(carBrand);
    });
    // Switch City - Edmonton
    $("#btnMap-edmonton").click(function(initializeMap){
      map = new google.maps.Map(document.getElementById('foursquare-map'), {
        center: edmonton,
        zoom: 10,
        styles: mapStylePink
      });
    var carBrand = $('input[name=rbnCar]:checked').val(); 
    var selectedCity = $('input[name=rbnCity]:checked').val();
    loadMarkersFromcarBrand4(carBrand);
    });
    // Switch City - Montreal
    $("#btnMap-montreal").click(function(initializeMap){
      map = new google.maps.Map(document.getElementById('foursquare-map'), {
        center: montreal,
        zoom: 10,
        styles: mapStylePink
      });
    var carBrand = $('input[name=rbnCar]:checked').val(); 
    var selectedCity = $('input[name=rbnCity]:checked').val();
    loadMarkersFromcarBrand5(carBrand);
    });
    // Switch City - Ottawa
    $("#btnMap-ottawa").click(function(initializeMap){
      map = new google.maps.Map(document.getElementById('foursquare-map'), {
        center: ottawa,
        zoom: 10,
        styles: mapStylePink
      });
    var carBrand = $('input[name=rbnCar]:checked').val(); 
    var selectedCity = $('input[name=rbnCity]:checked').val();
    loadMarkersFromcarBrand6(carBrand);
    });

});



// initialize the map and listen for any clicks to the search button
/*$(document).ready(function() {
  $('#searchBtn').click(function() {
    var carBrand = $('input[name=rbnCar]:checked').val(); 
    var selectedCity = $('input[name=rbnCity]:checked').val();
    loadMarkersFromcarBrand(carBrand);
    // Radio Button Selection

    //$('#msg').html('<b>' + carBrand + '</b> Dealerships in ' + '<b>' + selectedCity + '</b>');

  });
}); // jQuery Ends
*/



// function to initialize the map to be seen on the screen
function initializeMap() {
  map = new google.maps.Map(document.getElementById('foursquare-map'), {
    center: toronto,
    zoom: 10,
    styles: mapStylePink
  });
}

// load the markers from the carBrand in the input box

function loadMarkersFromcarBrand1(carBrand) {

  //var url = 'https://api.foursquare.com/v2/venues/search?client_id=XUXLO0NUOU5C54RCWE2UXF50MHWEL52I1APLQVSMBQJDGFPX&client_secret=0BEDRXQL312RAUAK2M5ON35BLUWSBRNCQDQNKADJ5COXJ4VJ&v=20180212&near=Toronto&query=' + carBrand;
  var apiUrl = "https://api.foursquare.com/v2/venues/search?client_id=GNNBLN5VXHCI0MFWLBKWFAAO3RQZMCEUVEWUZLP4QV44QX5T&client_secret=J5AO10V045PITHIKKBFBT1X1COI32SFAI0CRLIAMMQFLSGWN&v=20180212&near=' + Toronto + '&query=" + carBrand;

  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: apiUrl,
    success: function (response) {
      clearMap();
      response.response.venues.forEach(function(venue) {
        addVenueMarkerOnMap(venue);
      });
    }
  })
}

function loadMarkersFromcarBrand2(carBrand) {

  //var url = 'https://api.foursquare.com/v2/venues/search?client_id=XUXLO0NUOU5C54RCWE2UXF50MHWEL52I1APLQVSMBQJDGFPX&client_secret=0BEDRXQL312RAUAK2M5ON35BLUWSBRNCQDQNKADJ5COXJ4VJ&v=20180212&near=Toronto&query=' + carBrand;
  var apiUrl = "https://api.foursquare.com/v2/venues/search?client_id=GNNBLN5VXHCI0MFWLBKWFAAO3RQZMCEUVEWUZLP4QV44QX5T&client_secret=J5AO10V045PITHIKKBFBT1X1COI32SFAI0CRLIAMMQFLSGWN&v=20180212&near=' + Calgary + '&query=" + carBrand;

  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: apiUrl,
    success: function (response) {
      clearMap();
      response.response.venues.forEach(function(venue) {
        addVenueMarkerOnMap(venue);
      });
    }
  })
}

function loadMarkersFromcarBrand3(carBrand) {

  //var url = 'https://api.foursquare.com/v2/venues/search?client_id=XUXLO0NUOU5C54RCWE2UXF50MHWEL52I1APLQVSMBQJDGFPX&client_secret=0BEDRXQL312RAUAK2M5ON35BLUWSBRNCQDQNKADJ5COXJ4VJ&v=20180212&near=Toronto&query=' + carBrand;
  var apiUrl = "https://api.foursquare.com/v2/venues/search?client_id=GNNBLN5VXHCI0MFWLBKWFAAO3RQZMCEUVEWUZLP4QV44QX5T&client_secret=J5AO10V045PITHIKKBFBT1X1COI32SFAI0CRLIAMMQFLSGWN&v=20180212&near=' + Vancouver + '&query=" + carBrand;

  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: apiUrl,
    success: function (response) {
      clearMap();
      response.response.venues.forEach(function(venue) {
        addVenueMarkerOnMap(venue);
      });
    }
  })
}

function loadMarkersFromcarBrand4(carBrand) {

  //var url = 'https://api.foursquare.com/v2/venues/search?client_id=XUXLO0NUOU5C54RCWE2UXF50MHWEL52I1APLQVSMBQJDGFPX&client_secret=0BEDRXQL312RAUAK2M5ON35BLUWSBRNCQDQNKADJ5COXJ4VJ&v=20180212&near=Toronto&query=' + carBrand;
  var apiUrl = "https://api.foursquare.com/v2/venues/search?client_id=GNNBLN5VXHCI0MFWLBKWFAAO3RQZMCEUVEWUZLP4QV44QX5T&client_secret=J5AO10V045PITHIKKBFBT1X1COI32SFAI0CRLIAMMQFLSGWN&v=20180212&near=' + Edmonton + '&query=" + carBrand;

  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: apiUrl,
    success: function (response) {
      clearMap();
      response.response.venues.forEach(function(venue) {
        addVenueMarkerOnMap(venue);
      });
    }
  })
}

function loadMarkersFromcarBrand5(carBrand) {

  //var url = 'https://api.foursquare.com/v2/venues/search?client_id=XUXLO0NUOU5C54RCWE2UXF50MHWEL52I1APLQVSMBQJDGFPX&client_secret=0BEDRXQL312RAUAK2M5ON35BLUWSBRNCQDQNKADJ5COXJ4VJ&v=20180212&near=Toronto&query=' + carBrand;
  var apiUrl = "https://api.foursquare.com/v2/venues/search?client_id=GNNBLN5VXHCI0MFWLBKWFAAO3RQZMCEUVEWUZLP4QV44QX5T&client_secret=J5AO10V045PITHIKKBFBT1X1COI32SFAI0CRLIAMMQFLSGWN&v=20180212&near=' + Montreal + '&query=" + carBrand;

  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: apiUrl,
    success: function (response) {
      clearMap();
      response.response.venues.forEach(function(venue) {
        addVenueMarkerOnMap(venue);
      });
    }
  })
}

function loadMarkersFromcarBrand6(carBrand) {

  //var url = 'https://api.foursquare.com/v2/venues/search?client_id=XUXLO0NUOU5C54RCWE2UXF50MHWEL52I1APLQVSMBQJDGFPX&client_secret=0BEDRXQL312RAUAK2M5ON35BLUWSBRNCQDQNKADJ5COXJ4VJ&v=20180212&near=Toronto&query=' + carBrand;
  var apiUrl = "https://api.foursquare.com/v2/venues/search?client_id=GNNBLN5VXHCI0MFWLBKWFAAO3RQZMCEUVEWUZLP4QV44QX5T&client_secret=J5AO10V045PITHIKKBFBT1X1COI32SFAI0CRLIAMMQFLSGWN&v=20180212&near=' + Ottawa + '&query=" + carBrand;

  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: apiUrl,
    success: function (response) {
      clearMap();
      response.response.venues.forEach(function(venue) {
        addVenueMarkerOnMap(venue);
      });
    }
  })
}

// add the marker and its window to the map
function addVenueMarkerOnMap(venue) {
  var location = venue.location;
  var latlng = new google.maps.LatLng(location.lat, location.lng);
  //var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: 'img/car-24-pink.png', // Toyota Logo
    //animation: google.maps.Animation.BOUNCE // Bouncing Marker
    animation: google.maps.Animation.DROP // Drop Marker
  });


  // infoWindow Content
  var infoWindow = new google.maps.InfoWindow ({ 
    content: '<strong style="font-size: 150%;">' + venue.name + '</strong>' // Name
    + '<br><span class="glyphicon glyphicon-earphone"></span> ' + venue.contact.formattedPhone // Phone number
    + '<br><span class="glyphicon glyphicon-home"></span> ' + venue.location.address + ', ' +venue.location.city // Address
  });
  //Click Marker
  google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker);
        infoWindow.setContent(infoWindow);
        infoWindow.open(map, marker);  
        marker.setIcon('img/info-24-pink.png'); //Change marker icon
      });
  // Close infoWindow - onClick Map
  google.maps.event.addListener(map, 'click', function() {
        infoWindow.close();
        marker.setIcon('img/car-24-pink.png'); // Return marker icon
      });
  // Close infoWindow - Click Close Button
  google.maps.event.addListener(infoWindow, 'closeclick', function() {
      infoWindow.close();
      marker.setIcon('img/car-24-pink.png'); // Return marker icon
    });
  
  markers.push(marker);
} // addVenueMarker Ends


// clear map
function clearMap() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
