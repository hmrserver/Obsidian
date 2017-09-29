jQuery(function($){
	$( "table.center:nth-child(3) > tbody > tr > td:nth-child(1)" ).each(function( index ) {
$( this ).find( "a" ).addClass('mini-btn'); //gives button look
$( this ).find( "br" ).remove();
$( this ).find( "a:eq(1)" ).addClass('red-btn'); //gives red color to buttons
});

	$('.mini-btn').each(function() {
	this.textContent = this.textContent.replace(/]|\[/g, ""); //removes [ and ] from buttons
	});
})