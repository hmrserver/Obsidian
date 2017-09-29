jQuery(function($){		
	$("body").attr("id", "login-bg");
	$(".menu-bg").addClass("menu-hidder");
	$('.main-content h2').addClass('register_header'); //Adds class to Title
			$('tbody tr:last').html($('tbody tr:last td[align="right"]').contents());
			$('tbody tr:last').contents().wrapAll("<td>");
			$('tbody tr:last td').attr('align', 'center');
		$(".g-recaptcha").attr('data-theme', 'dark'); // makes the Google Captcha dark!
			$('tr').each(function() {
		if($(this).find('td[align="left"]')[0]) {
	$(this).find('td[align="left"] input').attr('placeholder', ($(this).find('td[align="right"]').text().replace(':','')));
	$(this).html($(this).find('td[align="left"]').contents());
		}
});
$('input[name="Submit"]').addClass('register_button');
});