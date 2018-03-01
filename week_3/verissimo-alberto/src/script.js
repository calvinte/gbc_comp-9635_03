
google.maps.event.addDomListener(window, 'load', function(){

var places=[
  {name:'<h2>Porto Cathedral,Porto, Portugal</h2>',
    lat:'41.142826',lng:'-8.6111836', id:'ChIJv8lgQOBkJA0RCeC5yfNxiOk',image:'<img height="100" src="http://www.localporto.com/wp-content/uploads/porto-se-cathedral-view.jpg"/>', description:"<p>The Porto Cathedral (Portuguese: Sé do Porto) is a Roman Catholic church located in the historical centre of the city of Porto, Portugal. It is one of the city's oldest monuments and one of the most important local Romanesque monuments.</p>"},
    {name:'<h2>Alcala Gate, Madrid,Spain</h2>',lat:'40.420056',lng:'-3.6884699', id:'ChIJ2YUnpZsoQg0RcZynHtKk2DA',image:'<img height="100" src="https://www.esmadrid.com/sites/default/files/recursosturisticos/infoturistica/puertadealcal_1412088970.805.jpg"/>', description:"<p>The Puerta de Alcalá (\"Alcalá Gate\", from the Arabic word القلعة al-qal'a, \"citadel\") is a Neo-classical monument in the Plaza de la Independencia in Madrid, Spain. It is regarded as the first modern post-Roman triumphal arch built in Europe,[1] older than the similar monuments Arc de Triomphe in Paris and Brandenburg Gate in Berlin.</p>" },
    {name:'<h2>Eiffel Tower, Paris,France</h2>',lat:'48.85835',lng:'2.294525', id:'ChIJ4QEl5uFv5kcR02MTNOjmEEA', image:'<img height="100" src="http://cdn.history.com/sites/2/2015/04/hith-eiffel-tower-iStock_000016468972Large-A.jpeg"/>', description:"<p>The Eiffel Tower (/ˈaɪfəl/ EYE-fəl; French: tour Eiffel [tuʁ‿ɛfɛl] ) is a wrought iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.</p>"},
    {name:'<h2>Big Ben,London,UK</h2>',lat:'51.5007286',lng:'-0.124625', id:'ChIJkdtCDcQEdkgRoVLMGkOmIXo', image:'<img height="100" src="https://www.lonelyplanet.com/news/wp-content/uploads/2017/08/London.jpg"/>', description:"<p>Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London[1] and is usually extended to refer to both the clock and the clock tower.[2][3] The tower is officially Elizabeth Tower, renamed to celebrate the Diamond Jubilee of Elizabeth II in 2012; before that, it was known simply as the Clock Tower.</p>"},
    {name:'<h2>Roman Forum, Rome, Italy</h2>',lat:'41.8925473',lng:'12.4853655', id:'EjJWaWEgZGVsbGEgU2FsYXJhIFZlY2NoaWEsIDUsIDAwMTg2IFJvbWEgUk0sIEl0YWxpYQ', image:'<img height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Roman_forum_cropped.jpg/900px-Roman_forum_cropped.jpg"/>', description:"<p>The Roman Forum, also known by its Latin name Forum Romanum (Italian: Foro Romano), is a rectangular forum (plaza) surrounded by the ruins of several important ancient government buildings at the center of the city of Rome. Citizens of the ancient city referred to this space, originally a marketplace, as the Forum Magnum, or simply the Forum.</p>"},
    {name:'<h2>Dracula\'s Castle(\"Bran Castle\"), Bran, Rumania</h2>',lat:'45.5147926',lng:'25.3670621', id:'ChIJjRLTpuVHs0ARp6Qd-QOUick', image:'<img height="100" src="https://happytovisit.com/glib/3/Dracula-Castle-2-9780.png"/>', description:"<p>Bran Castle (Romanian: Castelul Bran; German: Törzburg; Hungarian: Törcsvár), situated near Bran and in the immediate vicinity of Brașov, is a national monument and landmark in Romania. The fortress is situated on the border between Transylvania and Wallachia, on DN73. Commonly known as \"Dracula\'s Castle\" (although it is one among several locations linked to the Dracula legend, including Poenari Castle and Hunyad Castle), it is often erroneously referred to as the home of the title character in Bram Stoker\'s Dracula.</p>"},
    {name:'<h2>Parthenon, Acropolis, Athens, Greece</h2>',lat:'37.9714486',lng:'23.7267694', id:'ChIJIwkFERi9oRQRgAltIDC9ABw', image:'<img height="100" src="https://www.ancient.eu/uploads/images/3372.jpg?v=1485681001"/>', description:"<p>The Parthenon (/ˈpɑːrθəˌnɒn, -nən/; Ancient Greek: Παρθενών; Greek: Παρθενώνας, Parthenónas) is a former temple,[4][5] on the Athenian Acropolis, Greece, dedicated to the goddess Athena, whom the people of Athens considered their patron. Construction began in 447 BC when the Athenian Empire was at the peak of its power.</p>"}


]


var panorama;
var latlng = new google.maps.LatLng('50.0598058','14.3255428');
var mapEl=document.getElementById('map');
var mapOptions ={
  center: latlng,
  zoom:4
}
  var myMap = new google.maps.Map(mapEl,mapOptions);//myMap

//Info  want an info window to close when I click another I have to declare it outside the forEach or for loop
//Then inside of the clickEvent set the content with setContent instead with content inside of the infoWindow
  var infowindow = new google.maps.InfoWindow();//info window Ends
  var service = new google.maps.places.PlacesService(myMap);
//Get all the markers inside of an array for an animation BOUNCE
var markers = [];
  //For Each

  places.forEach(function(place, i){

service.getDetails({
  placeId:place.id
}, function(loc,status){
if (status === google.maps.places.PlacesServiceStatus.OK) {
    var latlng=new google.maps.LatLng(place.lat, place.lng);

setTimeout(function(){
  var marker=new google.maps.Marker({
    position:latlng,
    //position: loc.geometry.location,
    animation: google.maps.Animation.DROP,
    map:myMap
  });

  markers.push(marker);















    google.maps.event.addListener(marker,'click', function clickHandler(){

//Iterate a for loop through the array
      for (var i = 0; i < markers.length; i++) {
                markers[i].setAnimation(null);

              }
              //Toggle function
              toggleBounce(this);





      myMap.setCenter(marker.getPosition()),
//myMap.setZoom(12);
//infowindo starts
infowindow.setContent('<div id="content">'+place.name + '<strong>'+loc.formatted_address+ '</strong>'+'</br></br>'+place.description+'</br></br>' +place.image+'</div>');
  infowindow.open(myMap, marker);

//when I close the info windo through the 'X', it will stop animation
  google.maps.event.addListener(infowindow, 'closeclick', function() {
    marker.setAnimation(null);
  });

//this is for the google streetviw
  panorama = new google.maps.StreetViewPanorama(
             document.getElementById('view'), {
               position: marker.position,

               //zoom:1,
               pov: {
                 heading: 10,
                 pitch: 0
               }
             });//panorama


    });//click events for markers
    }, i*200);//setTimeout
  }//if
})//service getDetails and function

  });//places forEach

//function to toggle each individual Marker
  function toggleBounce(ele) {
    if (ele.getAnimation() !== null  ) {

      ele.setAnimation(null);


    } else {
      ele.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function(){
        ele.setAnimation(null);
      },1450);


    }
  }






})//document
