
//This is the function to connect and pull data from Foursquare
$.ajax({
	type: "GET", //To get data from the server
	dataType: "jsonp", //JSON with Padding
	cache: false,  //By setting the cache property to false jQuery will append a timestamp to the URL, so the browser won't cache it 
	url: 'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212'+
	'&near=Toronto&query=tacos', //This is the key provided by the instructor.  The "near" is the location, and "Query" is the search keyword.  So these can be changed
	success: function(response) { //Upon success the following will be executed
		response.response.venues.forEach(function(venue) { //For each itiration of the venue (this is from Foursquare)
			var location = venue.location //similar to the google maps, venue.location 
			
			//This is our HTML rendering
			var html = '';
			html += '<p>'
			html += '<strong>'
			html += venue.name //Name of the place
			html += '</strong><br />'
			html += '<img src="https://maps.googleapis.com/maps/api/staticmap' //this displays a map image of the location so that it loads quicker, but it isn't dynamic
			html += '?zoom=15' //zoom on the map
			html += '&size=600x300' //size of the image
			html += '&maptype=roadmap'
                        html += '&center=' + location.lat + ',' + location.lng //Center of the map
                        html += '&markers=' + encodeURIComponent('||') + location.lat + ',' + location.lng //Marker of the location
			html += '">';
			html += '</p>'
			document.body.innerHTML += html;  //adds the html to the body of the html pageß
		});
	}
});


