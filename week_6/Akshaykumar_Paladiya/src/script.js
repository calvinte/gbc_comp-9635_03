$(document).ready(function() {
	var latlng = new google.maps.LatLng('43.6532', '-79.3832');
	var map = new google.maps.Map(document.getElementById('foursquare-map'), {
		center: latlng,
		zoom: 10
	});
var markers = [];
	
    $('#mybutton').click(function(){
        var city = $('#city_input').val();
        var e = document.getElementById("store_type");
        var term = e.options[e.selectedIndex].value;
        //var term = $('#store_input').val();
        
        console.log(term);
        $.ajax({
		type: "GET",
		dataType: "jsonp",
		cache: false,
        url: 'https://api.foursquare.com/v2/venues/search?client_id=XUXLO0NUOU5C54RCWE2UXF50MHWEL52I1APLQVSMBQJDGFPX&client_secret=0BEDRXQL312RAUAK2M5ON35BLUWSBRNCQDQNKADJ5COXJ4VJ&v=20180212&near='+city+'&query='+term,
		success: function(response) {
            clearTheMap();
            console.log(response);
            var element=document.getElementById('foursquare-map')
            var options={
              zoom: 10,
              center: new google.maps.LatLng(response.response.geocode.feature.geometry.center.lat, response.response.geocode.feature.geometry.center.lng),
            }
            var map= new google.maps.Map(element,options)
    
            clearTheMap();
            response.response.venues.forEach(function(venue){
                var vanuelatlang = new google.maps.LatLng(venue.location.lat, venue.location.lng);

                var marker = new google.maps.Marker({
                    map: map,
                    position:vanuelatlang,
                });
               markers.push(marker);
                var infowindow = new google.maps.InfoWindow({
                    content: venue.name,
                })
                google.maps.event.addListener(marker, 'click', function() {
                    map.setZoom(10);
                    infowindow.open(map, marker);
                });      
                
            });
        }

    });
    })
    
    function clearTheMap(){
        for(var i=0;i<markers.length;i++){
            markers[i].setMap(null);
        }
        markers = [];
    }
})


