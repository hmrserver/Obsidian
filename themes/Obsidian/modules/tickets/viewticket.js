jQuery(function($){
$('.divTable').each(function() {
	$('.divTableCell.infoblock_ticket').each(function(){
		$(this).replaceWith('<td class="divTableCell infoblock_ticket">'+$(this).html()+'</td>');
	});
	$('.divTableCell.contentblock_ticket').each(function(){
		$(this).replaceWith('<td class="divTableCell contentblock_ticket">'+$(this).html()+'</td>');
	});
	$('.divTableRow').each(function(){
		$(this).replaceWith('<tr class="divTableRow">'+$(this).html()+'</tr>');
	});
	$('.divTableBody').each(function(){
		$(this).replaceWith('<tbody class="divTableBody">'+$(this).html()+'</tbody>');
	});
	$('.divTable').each(function(){
		$(this).replaceWith('<table class="divTable">'+$(this).html()+'</table>');
	});
});

$('.message').each(function() {
	$(this).contents().wrapAll("<span class='message'></span>");
	$(this).contents().unwrap();
});
});