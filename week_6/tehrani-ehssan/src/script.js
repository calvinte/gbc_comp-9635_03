(function () {

	var location = "";
	var query = "";
	var lat = "";
	var lng = "";
	var currentInfoWindow = null; 
	var myCurrentLocation = null;
	var myMap;
	var counter = 0;
	var options;
	var myVenueName;
	var online = navigator.onLine;
	var numberOfResults;
	var labels;

	var id = "SNOB1AJMLCJFBJYOKRRMLMSGD3TZJNZKCDU3WMUGT2XS04QL";
	var secret = "EIL2SL5OCWVXNJ0NIV5XKROSPIFR25UPF0OGO4BJB4CFHGLC";
	var VENUE_ID;




	$(document).ready(function(){

		initMap();


		function initMap(){

			console.log("Inside initMap");
			console.log(online);

			element = document.getElementById("foursquare-map");
			if (online) {
				console.log("internet connection found");
				navigator.geolocation.getCurrentPosition(function(position) {
			    lat = position.coords.latitude;
				lng = position.coords.longitude;

				myCurrentLocation = new google.maps.LatLng(lat,lng);

				drawMap(myCurrentLocation);

				});
			}
			else{
				console.log("no internet connection found");
				document.getElementById("submit").style.visibility = "hidden";
				document.getElementById("error-message").innerHTML = "No Internet Connection Found.  This web application will not work without an internet connection";
			}
		}

		//}

	    $('#submit').click(function(){ 

	    	

			
			console.log("Inside Click");
			console.log(counter);

		





			location = document.getElementById("locationBox").value;
			query = document.getElementById("queryBox").value;

			console.log(location);
			console.log(query);
			console.log(lat);
			console.log(lng);

			codeAddress(location);
		});


	    function codeAddress(address) {
	    	console.log("Inside codeAddress ");
	    	console.log(address);
	    	geocoder = new google.maps.Geocoder();
			geocoder.geocode( {address:address}, function(results, status) {
			
				if (status == google.maps.GeocoderStatus.OK) {
				    var current = results[0].geometry.location;//center the map over the result
				    console.log("My Current is: " + current);

				    drawMap(current);
				    foursquare();
				} 
				else {
					alert('Geocode was not successful for the following reason: ' + status);
				}
			});
		}		

		function drawMap(thisLocation) {	
			console.log("inside drawMap");
			//object literal
			myCurrentLocation = thisLocation
			var options = {
				center: myCurrentLocation,
				zoom: 12,


			}

			myMap = new google.maps.Map(element, options);
		}

		function foursquare(){
			console.log("inside foursquare");
			$.ajax({
				cache: false,
				dataType: "jsonp",
				type: "GET",
				url: 'https://api.foursquare.com/v2/venues/search?client_id=' +id
				+'&client_secret=' +secret
				+'&near='+ location +'&query=' + query
				+'&v=20180228',

				success: function(response) {
					console.log("inside success");
					console.log(response);
					
					document.getElementById("counter-element").innerHTML = "";	
					document.getElementById("places-list").innerHTML = "";
					numberOfResults = 0;

					var myVenues = response.response.venues;

					numberOfResults = myVenues.length;



					displayNumberOfResults(numberOfResults);
					displayListOfResults(myVenues);
					
						myVenues.forEach(function(venue){

						var venueLatLng = new google.maps.LatLng(venue.location.lat, venue.location.lng);		
						
						var myMarker = new google.maps.Marker({
							map: myMap,
							position: venueLatLng,
    						animation: google.maps.Animation.DROP,

						});

						var myInfoWindow = new google.maps.InfoWindow({
							content: venue.name,
							//image: venue.photo,
						});

			
						google.maps.event.addListener(myMarker, 'click', function() {
							if (currentInfoWindow != null) { 
								currentInfoWindow.close(); 
								myMarker.setAnimation(null);
							} 

							myMap.setCenter(myMarker.position);
							myMap.setZoom(15);
							myInfoWindow.open(myMap, myMarker);
							currentInfoWindow = myInfoWindow; 
							myMarker.setAnimation(google.maps.Animation.BOUNCE);
						});

						//implement a close window
						google.maps.event.addListener(myInfoWindow, 'closeclick', function(){
							myInfoWindow.close();
							myMap.setCenter(myCurrentLocation);
							myMap.setZoom(12);
							myMarker.setAnimation(null);
						});
					});
				}
			});
		}

		function displayNumberOfResults(numberOfResults){
			var counterHTML;
			counterHTML = '<h4>';
			counterHTML += 'Number of results: ';
			counterHTML += numberOfResults;
			counterHTML += '</h4>';
			document.getElementById("counter-element").innerHTML += counterHTML;	
		}


		function displayListOfResults(myVenues){
			
			console.log("inside displayListOfResults");
			

			
			for (var i = 0; i < myVenues.length; i++){

				var venueURL = myVenues[i].url;
				var venueAddress = myVenues[i].location.address;
				
				fourSquareImage(myVenues[i], function(venue, myImgURL) {
					console.log("myImgURL inside DisplayofResults: " + myImgURL);

					var listHTML;
					listHTML = '<p>';
					listHTML += venue.name;
					listHTML += '<br>';
					if (venueAddress){
						listHTML += venueAddress;
						listHTML += '<br>';
					}
					
					if (venueURL){
						listHTML += '<a href="'
						listHTML += venueURL
						listHTML += '">';
						listHTML += venueURL
						listHTML += '</a>';
						listHTML += '<br>';
					}

						listHTML += '<br>';
						listHTML += '<img src="';
						listHTML += myImgURL
						listHTML += '">';
						listHTML += '<br>';

					listHTML += '</p>';
					listHTML += '<hr class="HRClass">';
					document.getElementById("places-list").innerHTML += listHTML;
				});


			}
		}

		function fourSquareImage(venue, cb){
			
			var myImgURL = ""
			$.ajax({
				cache: false,
				dataType: "jsonp",
				type: "GET",
				url: 'https://api.foursquare.com/v2/venues/'
				+venue.id
				+'/photos?limit=1'
				+'&client_id=' +id
				+'&client_secret=' +secret
				+'&v=20180228',

				success: function(response) {
					
					var myImages = response.response.photos.items;


					myImages.forEach(function(val){
						console.log(val); 

				    	myImgURL = val.prefix+"200x200"+val.suffix;
				    	console.log("URL Conc: " + myImgURL);

					});
					cb(venue, myImgURL)
					
				}
			});

		}
	});
}());

