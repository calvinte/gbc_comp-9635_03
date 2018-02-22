$.ajax({
	type:"GET",
	dataType: "jsonp",
	cache: false,
	url: 'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query=gallery',
	success: function(response){

		response.response.venues.forEach(function(venue){
			console.log(venue)
			var location = venue.location
			var html = '<p>'
			html += '<h1>'
			html += venue.name
			html == '</h1>'
			html += '<br/>'
			html += '<h3>'
			html += venue.location.address
			html += '</h3>'
			html += '<br/>'
			html += '<img src="'
			html += 'https://maps.googleapis.com/maps/api/staticmap'
			html += '?zoom=15'
			html += '&size=700x450'
			html += '&maptype=roadmap'
			html += '&center=' + location.lat + ',' + location.lng
			html += '&markers=' + encodeURIComponent('||') + location.lat + ',' + location.lng
			html += '">'
			html += '</p>'
			document.body.innerHTML += html
		})
	},

})






