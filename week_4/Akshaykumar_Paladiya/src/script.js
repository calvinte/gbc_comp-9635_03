var count = 1;

$(document).ready(function(){
    $( "#btnSearch" ).click(function() {
 
      var city = $("#city").val().toString();
      var type = $("#venue").val().toString();
     
      $.ajax({
	type: "GET",
	dataType: "jsonp",
	cache: false,
	url: 'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near='+city+'&query='+type+'&limit=5',
	success: function(response) {
		response.response.venues.forEach(function(venue) {
			var location = venue.location;
            
			var html = '';
			html += '<strong>'
            html += count++ +". ";
			html += venue.name+"<br/>"
            html += venue.location.formattedAddress
			html += '</strong><br />'
			html += '<img src="https://maps.googleapis.com/maps/api/staticmap'
			html += '?zoom=15'
         
			html += '&size=600x300'
			html += '&maptype=roadmap'
                        html += '&center=' + location.lat + ',' + location.lng
                        html += '&markers=color:blue' + encodeURIComponent('||') + location.lat + ',' + location.lng
			html += '">';
			
           
            
            document.getElementById("fetched").innerHTML += html;
			//document.body.innerHTML += html;
		});
	}
});
      
      
});
});


