// Essential JavaScript for MakeshiftCake
$(document).ready(function(){
	$.ajaxSetup({ cache: false }); // Prevent AJAX caching
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
	
	// Navigation logic: show/hide pages
	$(document).on('click', 'a[name]', function(e) {
		e.preventDefault();
		var divname = this.name;

		// Special handling for staff page interactions
		if (divname.startsWith('div')) {
			console.log("Showing staff profile:", divname);
			$('.staffpage').hide();
			$('#' + divname).fadeIn();
			return;
		}

		// Hide all pages, then show the selected one with fadeIn
		$('.page').fadeOut(150, function() {
			$('#' + divname + '.page').fadeIn(150);
		});
	});

	// Ensure only home is visible on load
	$('.page').hide();
	$('#home.page').show();
});
