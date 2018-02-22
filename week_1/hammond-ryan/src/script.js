 "use strict";
$(document).ready(function(){

	var image = $("#ryan");
	var replace = $("#noRyan");
	$("#ryan").click(function() {
		image.hide();
		//out of ideas, its been a long day 
		alert("Bye bye photo.");
		replace.show();
	});

});