jQuery(function($){
	$( ".maintr" ).each(function( index ) {
$( this ).find( "td:eq(-1) > a" ).addClass('mini-btn'); //gives buttons shap
$( this ).find( "td:eq(-1) > a:eq(0)" ).addClass('red-btn'); //gives yellow color to buttons
$( this ).find( "td:eq(-1) > a:eq(1)" ).addClass('edit-btn'); //gives yellow color to buttons
$( this ).find( "td:eq(-1) > a:eq(4)" ).addClass('log-btn'); //gives yellow color to buttons
$( this ).find( "td:eq(-1) > a:eq(2)" ).addClass('yellow-btn'); //gives yellow color to buttons
$( this ).find( "td:eq(-1) > a:eq(3)" ).addClass('yellow-btn'); //gives yellow color to buttons
});

	$('tr.maintr > td:last-child > a').each(function() {
this.textContent = this.textContent.replace(/]|\[/g, ""); //removes [ and ] from buttons
	});
$('tr.expand-child > td:last-child > a').each(function() {
this.textContent = this.textContent.replace(/]|\[/g, ""); //removes [ and ] from buttons
$( this ).addClass('mini-btn'); //gives buttons shap
$( this ).addClass('fire-btn'); //gives yellow color to buttons
	});
})