$.ajax({
	type:"GET", 
	//http request methods
	dataType:"jsonp",
	//jquery ajax data types
	cache:false,
	url:'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query=dance center',
	success:function(response) {
		//can be any name ^
		response.response.venues.forEach(function(venue) {
			console.log(venue)
			var location = venue.location
			var html = '<div>'
			html += '<p>'
			html += venue.name
			html += '<br />'
			html += '<img src="'
			html += 'https://maps.googleapis.com/maps/api/staticmap'
			html += '?zoom=15'
			html += '&size=400x250'
			html += '&maptype=roadmap'
			html += '&center=' + location.lat +',' + location.lng
			html += '&markers=' + encodeURIComponent('||') + location.lat + ',' + location.lng
			html +='">'
			html += '</p>' 
			html += '</div>'
			document.body.innerHTML+= html
		// javascript maps take time to load and develop, but image maps are faster but not interactive
		})
	},
})