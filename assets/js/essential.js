// Load navbar -----------------------------------------

$(document).ready(function(){
	$("#navbar").load("widgets/navbar.html");
});

// Load elements ------------------------------------------

$(document).ready(function() {
	$('a').click(function() {
		var divname = this.name;

		$("#" + divname).load("pages/" + divname + ".html");
		$("#" + divname).show().siblings().hide();
	});
});

// Set copyright year ------------------------------------------

$(document).ready(function(){
	var currentYear = (new Date).getFullYear();
	
	$("#currentYear").text(currentYear);
});
