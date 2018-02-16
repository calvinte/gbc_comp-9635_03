$.ajax({
	type:"GET", 
	//http request methods
	dataType:"jsonp",
	//jquery ajax data types
	cache:false,
	url:'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query=tacos',
	success:function(response) {
		//can be any name ^
		console.log(response)
		response.response.venues.forEach(function(venue) {
			var html = 'test venue'
			document.body.innerHTML+= html
		})
	},
})