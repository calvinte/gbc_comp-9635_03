//Opening a Google Map Info Window in a seperate Div on mouseover using Foursquare API.

$(document).ready(function(){
	var element = document.getElementById('foursquare-map')
	var options = {
    center: new google.maps.LatLng(43.6532, -79.3832),
		zoom: 13,
	}
//opening a google map using foursquare api to display venues	
  var map = new google.maps.Map(element, options)
	$.ajax({	
		type: 'GET',
		datatype: 'jsonp',
		cache: false,
		url: 'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query=gallery&limit=25',
    	success: function(response){
			
			console.log(response)
			response.response.venues.forEach(function(gallery){
				var venueLatLng = new google.maps.LatLng(gallery.location.lat, gallery.location.lng)
				var marker = new google.maps.Marker({
					map: map,
					position: venueLatLng,

				})
//if statements for when something appears as undefined will display alternate text
				if (gallery.location.address === undefined){
					gallery.location.address = "Address Not Listed";
				}
				else {
					undefined = "Have a nice day";
				}
//infowindow and what will be displayed inside it
				var infowindow = new google.maps.InfoWindow({
					content: '<h4>'+ gallery.name +'</h4>' 
				})
//addListener event to open infowindow
				google.maps.event.addListener(marker, 'click', function(){
					map.setZoom(13);
					infowindow.open(map, marker);
				})
//addListener event to view response fields inside #more-info div, using if statement
    			google.maps.event.addListener(marker, 'mouseover', function (marker, i) {
				
        		if ($('#more-info').css('display') == 'block') {
           		$('#more-info').css('display', 'none').html("<h2>" + gallery.name + "</h2><br/><p>" + gallery.location.address + "</p>");
        		} 
				else {
            	$('#more-info').css('display', 'block');
        		}

				}); 

				})
			},

	})
//shows local transit routes
var transitLayer = new google.maps.TransitLayer();
transitLayer.setMap(map);

})

