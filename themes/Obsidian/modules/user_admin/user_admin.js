
jQuery(function($){
	$('.actions > a:nth-child(1)').each(function() {
	$(this).addClass('yellow-btn'); //gives yellow color to buttons
	});
	
	$( ".actions" ).each(function( index ) {
$( this ).find( "a:eq(1)" ).addClass('red-btn'); //gives red color to buttons
});

	$('.actions > a').each(function() {
	$(this).addClass('mini-btn'); //gives links a mini button style	
	this.textContent = this.textContent.replace(/]|\[/g, ""); //removes [ and ] from buttons
	});

	$('.actions > br').each(function() {
	$(this).remove();
	});
})