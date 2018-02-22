"use strict";

google.maps.event.addDomListener(window, 'load', function(){
		var position = {lat: 43.822854, lng: -79.024934};
		var mapCanvas = document.getElementById("streetView");

		//create new object
		var myMap = new google.maps.Map(mapCanvas);
		
		//Street View
		var streetLook = new google.maps.StreetViewPanorama(
    		document.getElementById('streetView'), {
    			position: position,
    				pov: {
        				heading: 50,
        				pitch: 5,
        				zoom:2,
        			}
      		});
		myMap.setStreetView(streetLook);
});

window.onload = function() {
    document.getElementById("my_audio").play();
}