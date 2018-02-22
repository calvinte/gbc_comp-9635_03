function initMap() {
var location = {lat: 48.98808, lng:2.411766};

var map = new google.maps.Map(document.getElementById("map-canvas"), {
zoom:10,
center: location
});

var marker = new google.maps.Marker({
position: location,
map:map
});

}
