/// <reference path="jquery-1.3.2-vsdoc2.js" />
$(document).ready(function() {
	$('.tracks dd a.del').click(function() {
		return confirm('Are you sure?');
	});
});
