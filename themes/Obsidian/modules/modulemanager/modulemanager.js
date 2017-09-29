jQuery(function($){
	$( "table:eq(1) > tbody > tr" ).each(function( index ) {
$( this ).find( "td:eq(-1) > a" ).addClass('mini-btn'); //gives yellow color to buttons
$( this ).find( "td:eq(-1) > a" ).addClass('yellow-btn'); //gives yellow color to buttons
});

	$( "table:eq(-1) > tbody > tr" ).each(function( index ) {
$( this ).find( "td:eq(-1) > a" ).addClass('mini-btn'); //gives yellow color to buttons
});
})