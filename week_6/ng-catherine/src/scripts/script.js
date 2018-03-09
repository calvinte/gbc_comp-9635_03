$(document).ready(function() {
  var latlng = new google.maps.LatLng('43.6532', '-79.3832');
  var map = new google.maps.Map(document.getElementById('foursquare-map'), {
    center: latlng,
    zoom: 10
  });
  var markers = [];

	$('#mybutton').click(function () {
		var term = $('#myinput').val();

    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: 'https://api.foursquare.com/v2/venues/search?client_id=XUXLO0NUOU5C54RCWE2UXF50MHWEL52I1APLQVSMBQJDGFPX&client_secret=0BEDRXQL312RAUAK2M5ON35BLUWSBRNCQDQNKADJ5COXJ4VJ&v=20180212&near=Toronto&query=' + term,
      success: function(response) {
        // clear the map first!!!!
        clearTheMap();

        response.response.venues.forEach(function(venue) {
          var location = venue.location
          var latlng = new google.maps.LatLng(location.lat, location.lng);
          var marker = new google.maps.Marker({
            position: latlng,
            map: map
          });
          markers.push(marker);
          var infowindow = new google.maps.InfoWindow({ content: venue.name });
          google.maps.event.addListener(marker, 'click', function() {
            map.setZoom(12);
            infowindow.open(map, marker);
          });
        });
      }
    });
  });

  function clearTheMap() {
    for(var i =0; i < markers.length; i ++) {
      markers[i].setMap(null);
    }
    markers = [];
  }




  //validate registration information
  $("#btnReg").click(function(){

    //initialize for this loop
    validresult = true;

    //exception handling for First Name
    try{
      var fName = $("#firstname").val();
      var patt = new RegExp("\^[a-zA-Z]{2,15}$");
          var res = patt.exec(fName);
      
      if(res){
        $("#firstnameErr").text("");
      }else{
        validresult = false;
        throw new Error(fName+" is not a valid first name!");
      }
    }
    catch(e){
      console.log(e);
      $("#firstnameErr").text("No space with max. 15 characters.");
      $("#firstnameErr").css("color","red");
    }

    //exception handling for Last Name
    try{
      var lName = $("#lastname").val();
      var patt = new RegExp("\^[a-zA-Z]{2,15}$");
      var res = patt.exec(lName);
      
      if(res){
        $("#lastnameErr").text("");
      }else{
        validresult = false;
        throw new Error(lName+" is not a valid last name!");
      }
    }
    catch(e){
      console.log(e);
      $("#lastnameErr").text("No space with max. 15 characters.");
      $("#lastnameErr").css("color","red");
    }

    //exception handling for Email
    try{
      var email = $("#email").val();
      var patt = new RegExp("\^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]+$");
      var res = patt.exec(email);
      
      if(res){
        $("#emailErr").text("");
      }else{
        validresult = false;
        throw new Error(email+" is not a valid E-mail address!");
      }
    }
    catch(e){
      console.log(e);
      $("#emailErr").text("Please enter a valid E-mail address.");
      $("#emailErr").css("color","red");
    }

    //exception handling for Address
    try{
      var address = $("#address").val();
      var patt = new RegExp("\^[0-9a-zA-Z\\s\\W+]{20,250}$");
      var res = patt.exec(address);
      
      if(res){
        $("#addressErr").text("");
      }else{
        validresult = false;
        throw new Error(address+" is not a valid address!");
      }
    }
    catch(e){
      console.log(e);
      $("#addressErr").text("20 to 250 characters.");
      $("#addressErr").css("color","red");
    }

    //exception handling for Postal Code
    try{
      var postalCode = $("#postal").val();
      var patt = new RegExp("\^[A-Z][0-9][A-Z]\\s[0-9][A-Z][0-9]$");
      var res = patt.exec(postalCode);
      
      if(res){
        $("#postalErr").text("");
      }else{
        validresult = false;
        throw new Error(postalCode+" is not a valid postal code!");
      }
    }
    catch(e){
      console.log(e);
      $("#postalErr").text("Please enter valid postal code.");
      $("#postalErr").css("color","red");
    }

    //exception handling for Phone Number
    try{
      var phoneNum = $("#phone").val();
      var patt = new RegExp("\^[0-9]{3}-[0-9]{3}-[0-9]{4}$");
      var res = patt.exec(phoneNum);
      
      if(res){
        $("#phoneErr").text("");
      }else{
        validresult = false;
        throw new Error(phoneNum+" is not a valid phone number!");
      }
    }
    catch(e){
      console.log(e);
      $("#phoneErr").text("Please enter valid phone number. Example: 000-000-0000");
      $("#phoneErr").css("color","red");
    }

    //exception handling for Password
    try{
      var password = $("#password").val();
      var pattNum = new RegExp("\[0-9]+");
      var pattCaC = new RegExp("\[A-Z]+");
      var pattSpC = new RegExp("\[!@#$%^&*()_+=-]+");
      var res = pattNum.test(password) && pattCaC.test(password) && pattSpC.test(password);
      
      if(res){
        $("#passwordErr").text("");
      }else{
        validresult = false;
        throw new Error(password+" is not a valid password!");
      }
    }
    catch(e){
      console.log(e);
      $("#passwordErr").text("Password should contain one special character, one number and one capital letter");
      $("#passwordErr").css("color","red");
    }

    //exception handling for Confirm Password
    try{
      var confirmPassword = $("#passwordCfm").val();

      if(confirmPassword == password){
        $("#passwordCfmErr").text("");
      }else{
        validresult = false;
        throw new Error("Please enter same password!");
      }
    }
    catch(e){
      console.log(e);
      $("#passwordCfmErr").text("Please enter same password.");
      $("#passwordCfmErr").css("color","red");
    }

    if (validresult)
    {
      var customer = {};

      customer['firstname'] = fName;
      customer['lastname'] = lName;
      customer['email'] = email;
      customer['address'] = address;
      customer['postal'] = postalCode;
      customer['phone'] = phoneNum;
      customer['password'] = password;

      console.log(customer);

      $.post("http://localhost:3000/api/personals",
        customer,
        function(data){
          console.log(data);
          alert("Personal data saved!");
        }
      );

      location.href="posting.html";
    }

  });

  //validate posting
  $("#btnPost").click(function(){

    //initialize for this loop
    validresult = true;

    //exception handling for title
    try{
      var title1 = $("#title").val();
      var patt = new RegExp("\^[0-9a-zA-Z\\s\\W+]{1,}$");
          var res = patt.exec(title1);
      
      if(res){
        $("#title1Err").text("");
      }else{
        validresult = false;
        throw new Error("Title cannot be left blank");
      }
    }
    catch(e){
      console.log(e);
      $("#titleErr").text("Title cannot be blank.");
      $("#titleErr").css("color","red");
    }

    //exception handling for Date
    try{
      var date = $("#date").val();
      var patt = new RegExp("\^[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}$");
      var res = patt.exec(date);
      
      if(res){
        $("#dateErr").text("");
      }else{
        validresult = false;
        throw new Error(date+" is not a valid date!");
      }
    }
    catch(e){
      console.log(e);
      $("#dateErr").text("Please enter a valid date, sample: mm-dd-yyyy.");
      $("#dateErr").css("color","red");
    }

    //exception handling for content
    try{
      var content = $("#content").val();
      var patt = new RegExp("\^[0-9a-zA-Z\\s\\W+]{1,}$");
      var res = patt.exec(content);
      
      if(res){
        $("#contentErr").text("");
      }else{
        validresult = false;
        throw new Error("Content cannot be blank");
      }
    }
    catch(e){
      console.log(e);
      $("#contentErr").text("content was left blank.");
      $("#contentErr").css("color","red");
    }


    if (validresult)
    {
      $("#news").append("<h3>title1</h3><h6>date</h6><p>content</p>");

      location.href="index.html";
    }

  });



});






