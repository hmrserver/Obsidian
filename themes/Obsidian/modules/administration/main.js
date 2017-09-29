jQuery(function($){
		$('a.administration-buttons').each(function() {
		$(this).find("img").remove();
		$(this).find("br").remove();
		var button_title = $(this).find("div").html();
		$(this).find("div").remove();
		$(this).append(button_title);
		$(this).wrapAll('<div class="administration-buttons">');
		$(this).removeClass("administration-buttons");
	});
	var admin_table = ".administration-table:first";
	$(admin_table).find('td').contents().unwrap();//Removing all Td tags
	$("td.administration-buttons-hmargin").remove();
	$(admin_table).find('tr').contents().unwrap();//Removing all Td tags
	$(admin_table).find('tbody').contents().unwrap();//Removing all Td tags
	$(admin_table).find('td').remove();//Removing all Td tags
	$(admin_table).contents().wrapAll('<div style="text-align: center;">');
	$(admin_table).replaceWith($(admin_table).contents());
});