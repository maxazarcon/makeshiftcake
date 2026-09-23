// Essential JavaScript for MakeshiftCake
$(document).ready(function(){
	// Set copyright year
	$("#currentYear").text(new Date().getFullYear());

	// Navigation logic: show/hide pages
	$(document).on('click', 'a[name]', function(e) {
		e.preventDefault();
		var divname = this.name;

		// Special handling for staff page interactions
		if (divname.startsWith('div')) {
			$('.staffpage').hide();
			$('#' + divname).fadeIn();
			return;
		}

		// Hide all pages, then show the selected one once every fade has finished
		$('.page').stop(true, true).fadeOut(150).promise().done(function() {
			$('#' + divname + '.page').fadeIn(150);
		});
	});

	// Ensure only home is visible on load
	$('.page').hide();
	$('#home.page').show();
});
