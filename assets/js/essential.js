// Load navbar -----------------------------------------

$(document).ready(function(){
	$("#navbar").load("widgets/navbar.html");
});

// Load elements ------------------------------------------

$(document).ready(function() {
	
	$("about").load("pages/about.html");
	$("#contact").load("pages/contact.html");
	$("#donate").load("pages/donate.html");
	$("#homepage").load("pages/home.html");
	$("#ranks").load("pages/ranks.html");
	$("#rules").load("pages/rules.html");
	$("#staff").load("pages/staff.html");
	
	$('a').click(function() {
		var divname = this.name;

		$("#" + divname).show().siblings().hide();
	});
});

// Set copyright year ------------------------------------------

$(document).ready(function(){
	var currentYear = (new Date).getFullYear();
	
	$("#currentYear").text(currentYear);
});
