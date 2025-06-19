// Essential JavaScript for MakeshiftCake
$(document).ready(function(){
	// Set copyright year
	var currentYear = (new Date).getFullYear();
	$("#currentYear").text(currentYear);
	
	// Load navbar
	$("#navbar").load("widgets/navbar.html", function(response, status, xhr) {
		if (status == "error") {
			console.error("Error loading navbar:", xhr.status, xhr.statusText);
			$("#navbar").html("<p>Navigation failed to load</p>");
		}
	});
	
	// Use event delegation for dynamically loaded content
	$(document).on('click', 'a[name]', function(e) {
		e.preventDefault();
		var divname = this.name;
		
		// Hide all pages first
		$('.page').hide();
		
		// Load and show the selected page
		$("#" + divname).load("pages/" + divname + ".html", function(response, status, xhr) {
			if (status == "error") {
				console.error("Error loading page:", xhr.status, xhr.statusText);
				$("#" + divname).html("<p>Page failed to load</p>");
			}
			$("#" + divname).show();
		});
	});
});
