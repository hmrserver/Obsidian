jQuery(function($){
	var admin_table = ".main-content";
	$(admin_table).find('td').contents().unwrap();//Removing all Td tags
	$(admin_table).find('tr').contents().unwrap();//Removing all Td tags
	$(admin_table).find('tbody').contents().unwrap();//Removing all Td tags
	$(admin_table).find('table').contents().unwrap();//Removing all Td tags
});