$.ajax({
  type:"GET",
  dataType:"jsonp",
  cache:false,
  url:'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query=tacos',
  success: function(response) {
    console.log(response)
    response.response.venues.forEach(function(restaurantName){
      console.log(restaurantName)
      var location =restaurantName.location
      var html = ' <p>'
      html += restaurantName.name
      html += '<br />'
      //break the image and put it on different lines
      html += '<img src="'
      html += ' https://maps.googleapis.com/maps/api/staticmap'
      // the question mark means we are providing the browser with query information
      html += '?zoom=15'
      //size allows you to give the dimension of the map you want
      html += '&size=600x450'
      //map type depends of Google API available functions of the map
      html += '&maptype=roadmap'
      html += '&center='+location.lat + ',' + location.lng
      // Every | is for a lat and lng
      html += '&markers=' + encodeURIComponent ('||') + location.lat + ',' + location.lng
      html +='">'
      html += '</p>'
      // close the tag because we openned it before
      document.body.innerHTML +=html
    })
  },
})
// call ajax as a function
// the brackets represent an object literal that will tell the ajax method what we want to go
// look at HTTP requests
//response.response.venues get response from venues
