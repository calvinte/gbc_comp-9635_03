
$(document).ready(function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            // get the current location lat & lng

            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            var latlng = new google.maps.LatLng(lat, lng);
            var map = new google.maps.Map(document.getElementById('foursquare-map'), {
                center: latlng,
                zoom: 10
            });
        
    });

    var markers = [];
    let lastinfowindow;

    $('#mybutton').click(function () {
        var city = $('#city_input').val(); //get city value
        var stores = document.getElementById("store_type");
        var store_type = stores.options[stores.selectedIndex].value; //get store_type value
        clearPreviousMarkers();//First clear the all previous markers

        // ajax request to Four-Square API
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: 'https://api.foursquare.com/v2/venues/search?client_id=XUXLO0NUOU5C54RCWE2UXF50MHWEL52I1APLQVSMBQJDGFPX&client_secret=0BEDRXQL312RAUAK2M5ON35BLUWSBRNCQDQNKADJ5COXJ4VJ&v=20180212&near=' + city + '&query=' + store_type,
            success: function (response) {
               // map for entered city
                var element = document.getElementById('foursquare-map')
                var options = {
                    zoom: 10,
                    center: new google.maps.LatLng(response.response.geocode.feature.geometry.center.lat, response.response.geocode.feature.geometry.center.lng),
                }
                var map = new google.maps.Map(element, options)


                response.response.venues.forEach(function (venue) {
                    //lat & lng for each venue location
                    var vanuelatlang = new google.maps.LatLng(venue.location.lat, venue.location.lng);
                 
                    //Infowindow for marker
                    let infowindow = new google.maps.InfoWindow({
                        content: 'Name:' + venue.name + '<br>' +
                            'Address:' + venue.location.formattedAddress[0] + ',' + venue.location.formattedAddress[1] + ',' + venue.location.formattedAddress[2] + '<br>' +
                            'Phone:' + venue.contact.formattedPhone + '<br>' +
                            'Website:<a href="' + venue.url + '" target="_blank">' + venue.url + '</a><br>'
                    })

                   

                    //set the marker for each venue
                    var marker = new google.maps.Marker({
                        map: map,
                        position: vanuelatlang,
                        animation: google.maps.Animation.DROP,
                        icon: 'images/' + store_type + '.ico',
                    });
                  
                    markers.push(marker);

                

                    //click listner for the marker
                    google.maps.event.addListener(marker, 'click', function () {

                        map.setZoom(12);
                        map.setCenter(marker.position);
                        infowindow.open(map, marker);

                    });
                    
                    //close all infowindow onclick of map
                    google.maps.event.addListener(map, 'click', function () {
                        infowindow.open(null, null);
                    });


                });

              
            }

        });
    })
    
    //clear markers of previous query 
    function clearPreviousMarkers() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
    }
   
})


