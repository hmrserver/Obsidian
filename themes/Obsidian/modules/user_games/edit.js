
jQuery(function($){
	
$( "a[href*='delete_ip']" ).each(function( index ) {
	$(this).addClass('mini-btn'); //gives links a mini button style	
$( this ).addClass('red-btn'); //gives red color to buttons
this.textContent = this.textContent.replace(/]|\[/g, ""); //removes [ and ] from buttons
});
})
