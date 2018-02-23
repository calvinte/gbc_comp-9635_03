(function () {

	var location = "";
	var query ="";
	var html ="";

	$().ready(function () {
  		$('#submit').click(function(){ 
			

			console.log("you are here now");


			location = document.getElementById("locationBox").value;
			query = document.getElementById("queryBox").value;

			console.log(location);
			console.log(query);

			$.ajax({
				type: "GET", //request type
				dataType: "jsonp", //JSONP is a method for sending JSON data without worrying about cross-domain issues. JSONP does not use the XMLHttpRequest object. 
				cache: false,
				url: 'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near='+ location +'&query=' + query,
				
				success: function(response){
					document.getElementById('output').innerHTML = ''
						html ="";
					response.response.venues.forEach(function(venue){
						
						console.log(response);
						var location = venue.location;
						html = '<p>';
						html += venue.name;
						html +='<br>';
						html +='<img src="';
						html +='https://maps.googleapis.com/maps/api/staticmap';
						html +='?zoom=15';
						html += '&size=600x300';
						html += '&maptype=roadmap';
						html += '&center=' + location.lat + ',' + location.lng;
						//encodeURIComponent is used to encode the || in the URI 
						html += '&markers=' + encodeURIComponent('||') + location.lat + ',' + location.lng;
						html +='">';
						html += '</p>';
						document.getElementById('output').innerHTML += html;

					})
				},
			});
  		});
  	});
}());
