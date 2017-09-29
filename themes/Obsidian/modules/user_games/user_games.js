
jQuery(function($){
	$('tr > td:last-child > a:nth-child(1)').each(function() {
	$(this).addClass('red-btn'); //gives yellow color to buttons
	});
	
	$( "tr > td:last-child" ).each(function( index ) {
$( this ).find( "a:eq(1)" ).addClass('yellow-btn'); //gives red color to buttons
});

	$('tr > td > a').each(function() {
	$(this).addClass('mini-btn'); //gives links a mini button style	
	this.textContent = this.textContent.replace(/]|\[/g, ""); //removes [ and ] from buttons
	});
	$('tr > td > div').each(function() {
	this.textContent = this.textContent.replace(/]|\[/g, ""); //removes [ and ] from buttons
	});
})