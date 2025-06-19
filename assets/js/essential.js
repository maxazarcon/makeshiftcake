// Essential JavaScript for MakeshiftCake
$(document).ready(function(){
	console.log("Document ready, initializing MakeshiftCake...");
	
	// Set copyright year
	var currentYear = (new Date).getFullYear();
	$("#currentYear").text(currentYear);
	console.log("Copyright year set to:", currentYear);
	
	// Load navbar
	$("#navbar").load("widgets/navbar.html", function(response, status, xhr) {
		if (status == "error") {
			console.error("Error loading navbar:", xhr.status, xhr.statusText);
			$("#navbar").html("<p>Navigation failed to load</p>");
		} else {
			console.log("Navbar loaded successfully");
		}
	});
	
	// Load initial home page content
	$("#home").load("pages/home.html", function(response, status, xhr) {
		if (status == "error") {
			console.error("Error loading home page:", xhr.status, xhr.statusText);
			$("#home").html("<p>Home page failed to load</p>");
		} else {
			console.log("Home page loaded successfully");
		}
	});
	
	// Use event delegation for dynamically loaded content
	$(document).on('click', 'a[name]', function(e) {
		e.preventDefault();
		var divname = this.name;
		console.log("Navigation clicked:", divname);
		
		// Special handling for staff page interactions
		if (divname.startsWith('div')) {
			// This is a staff member profile link
			console.log("Showing staff profile:", divname);
			$('.staffpage').hide();
			$('#' + divname).show();
			return;
		}
		
		// Regular page navigation
		// Hide all pages first
		$('.page').hide();
		
		// Load and show the selected page
		$("#" + divname).load("pages/" + divname + ".html", function(response, status, xhr) {
			if (status == "error") {
				console.error("Error loading page:", xhr.status, xhr.statusText);
				$("#" + divname).html("<p>Page failed to load</p>");
			} else {
				console.log("Page loaded successfully:", divname);
			}
			$("#" + divname).show();
		});
	});
});
