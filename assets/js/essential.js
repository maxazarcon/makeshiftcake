// Load navbar -----------------------------------------

$(document).ready(function() {
	$("#navbar").load("widgets/navbar.html");
	$("#home").click(function(){
		alert("click");
	});
});

// Load elements ------------------------------------------

$(document).ready(function() {

	$("aboutPage").load("pages/about.html");
	$("#contactPage").load("pages/contact.html");
	$("#donatePage").load("pages/donate.html");
	$("#homePage").load("pages/home.html");
	$("#ranksPage").load("pages/ranks.html");
	$("#rulesPage").load("pages/rules.html");
	$("#staffPage").load("pages/staff.html");
});


// Set copyright year ------------------------------------------

$(document).ready(function() {
	var currentYear = (new Date).getFullYear();

	$("#currentYear").text(currentYear);
});
