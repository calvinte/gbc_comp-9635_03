$(document).ready(function() {
  // AJAX function with object literal
  $.ajax({
    type: "GET",  // HTTP request
    dateType: "jsonp", // flag for API to listen, provides data to interact w jQuery
    cache: false, // give fresh every time
    url: 'https://api.foursquare.com/v2/venues/search?client_id=FP54LMRY0H5RBPVEAF4AEQRWT3LFUOI4MLPGY0XMUNNZQI4F&client_secret=TFITB2WTPZ0SEZMQDQTCJM0P24CXRX4JGHWCJ4ZJEIQSW3MJ&v=20180212&near=Toronto&query=pizza', // Typically would hide client secret key for Production
    success: function(response) {
      console.log(response);
      response.response.venues.forEach(function(venue) { // iterate venues is an array & name function venue
        // console.log(venue);
          // Query Parameters
        var location = venue.location
        var html = '<p>'
        html += venue.name
        html += '<br />'
        html += '<img src="'
        html += 'https://maps.googleapis.com/maps/api/staticmap'
        html += '?zoom=15' // query to show end, staticmap can serve different maps
        html += '&size=600x450' // AND this
        html += '&maptype=roadmap'
        html += '&center=' + location.lat + ', ' + location.lng
        // encodeURIComponent to allow use of special characters, || to separate options, need pipe parameters
        html += '&markers=' + encodeURIComponent('||') + location.lat + ', ' + location.lng
        html += '">'
        html += '</p>'
        document.body.innerHTML += html // += appends instead of assign
      })
    },
  });

});
