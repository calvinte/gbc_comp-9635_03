
function searchBtn() {
    var cityName = document.getElementById("searchCity").value;
    var storeName = document.getElementById("searchStore").value;

	$.ajax({
	type: "GET",
	dataType: "jsonp",
	cache: false,
	url: "https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near="+cityName+"&query="+storeName+"",
	success: function(response) {
		//console.log(response)
		response.response.venues.forEach(function(venue) {
			console.log(venue)
			var location = venue.location //shorter reference
			var html = '<p>'
			html += venue.name
			html += '<br />'
			html += '<img src="' //img src starts
			html += 'https://maps.googleapis.com/maps/api/staticmap'
			html += '?zoom=15'
			html += '&size=600x450'
			html += '&maptype=roadmap' //road map type
			html += '&center=' + location.lat + ',' + location.lng // var location
			html += '&markers=' + encodeURIComponent('||') +  location.lat + ',' + location.lng // markers
			html += '">' //img src ends
			html += '</p>'
			document.body.innerHTML += html
		})
	}
});


} // searchBtn Ends
