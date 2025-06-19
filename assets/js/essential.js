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
	
	// Hide all pages first, then load and show home
	$('.page').hide();
	$("#home.page").load("pages/home.html", function(response, status, xhr) {
		if (status == "error") {
			console.error("Error loading home page:", xhr.status, xhr.statusText);
			$("#home.page").html("<p>Home page failed to load</p>");
		} else {
			console.log("Home page loaded successfully");
			$("#home.page").show();
			// Fallback: if still empty, show a message
			if (!$("#home.page").html().trim()) {
				$("#home.page").html("<p>Home page is empty.</p>");
			}
		}
	});
	
	// Use event delegation for dynamically loaded content
	$(document).on('click', 'a[name]', function(e) {
		e.preventDefault();
		var divname = this.name;
		console.log("Navigation clicked:", divname);
		
		// Special handling for staff page interactions
		if (divname.startsWith('div')) {
			console.log("Showing staff profile:", divname);
			$('.staffpage').hide();
			$('#' + divname).show();
			return;
		}
		
		// Regular page navigation
		$('.page').hide();
		
		// Load and show the selected page into the correct .page div
		$("#" + divname + ".page").load("pages/" + divname + ".html", function(response, status, xhr) {
			if (status == "error") {
				console.error("Error loading page:", xhr.status, xhr.statusText);
				$("#" + divname + ".page").html("<p>Page failed to load</p>");
			} else {
				console.log("Page loaded successfully:", divname);
			}
			$("#" + divname + ".page").show();
		});
	});
});
