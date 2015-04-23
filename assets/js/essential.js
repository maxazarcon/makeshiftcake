// Load navbar -----------------------------------------

$(document).ready(function(){
	$("#navbar").load("widgets/navbar.html");
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
	
	$('a').click(function() {
		var divname = this.id;

		$("#" + divname + "Page").show("slow").siblings().hide("slow");
	});
});

// Set copyright year ------------------------------------------

$(document).ready(function(){
	var currentYear = (new Date).getFullYear();
	
	$("#currentYear").text(currentYear);
});
