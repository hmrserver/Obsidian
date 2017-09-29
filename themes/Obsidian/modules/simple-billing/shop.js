jQuery(function($){
	$('img').each(function() {
if ($(this).attr('src') == 'images/cart.png') {
$(this).remove();
}
});
});