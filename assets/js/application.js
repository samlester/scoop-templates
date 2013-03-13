$(document).ready(function() {
	$('button').click(function(event){
		event.preventDefault();
		$(this).text('Loading...')
		$(this).addClass('disabled');
		$(this).addClass('btn-loading');
	})
})