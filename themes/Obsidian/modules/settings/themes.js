$(document).ready(function() {
$('form[action="?m=settings&p=themes"] tr:nth-child(5)').hide();
$('form[action="?m=settings&p=themes"]').after('<br><h2>Extra Options</h2><table class="center more-option"><tbody></tbody></table>');
$('.more-option tbody').append('<tr><td align="right"><label><a href="#"><i class="fa fa-eye" id="fp" aria-hidden="true"><span class="preview-f"><img src="" /></span></i></a> Favicon:</label></td><td align="left"><input id="favicon" name="favicon" type="text" size="50"></td><td><div class="image-tip" original-title="The Favicon Icon URL."><img src="themes/Obsidian/images/icon_help_small.png"></div></td></tr>');
$('.more-option tbody').append('<tr><td align="right"><label><a href="#"><i class="fa fa-eye" id="lbp" aria-hidden="true"><span class="preview-lb"><img src="" /></span></i></a> Login Background Image:</label></td><td align="left"><input id="loginbg" name="loginbg" type="text" size="50"></td><td><div class="image-tip" original-title="The Login Page\'s Background Image URL."><img src="themes/Obsidian/images/icon_help_small.png"></div></td></tr>');
$('.more-option tbody').append('<tr><td align="right"><label>Background Blur Effect:</label></td><td align="left"><select id="bgblur" name="bgblur"><option value="1">Enable</option><option value="0">Disable</option></select></td><td><div class="image-tip" title="Enables/Disable Blur Effect of Login/Register Background."><img src="themes/Obsidian/images/icon_help_small.png"></div></td></tr>');
$('.more-option tbody').append('<tr><td align="right"><label><a href="#"><i class="fa fa-eye" id="lp" aria-hidden="true"><span class="preview-l"><img src="" /></span></i></a> Logo:</label></td><td align="left"><input id="logo" name="logo" type="text" size="50"></td><td><div class="image-tip" original-title="The Logo image URL."><img src="themes/Obsidian/images/icon_help_small.png"></div></td></tr>');
$('.more-option tbody').append('<tr><td align="right"><label>Loading Bar:</label></td><td align="left"><select id="pace" name="pace"><option value="default">Default</option><option value="big-counter">Big Counter</option><option value="bounce">Bounce</option><<option value="center-circle">Center Circle</option><option value="center-radar">Center Radar</option><option value="center-simple">Center Simple</option><option value="corner-indicator">Corner Indicator</option><option value="center-rotate">Center Rotate</option><option value="material">Material</option></select></td><td><div class="image-tip" title="Change style of Loading Bar."><img src="themes/Obsidian/images/icon_help_small.png"></div></td></tr>');
$('.more-option tbody').append('<tr><td align="right"><label>Responsive Mode:</label></td><td align="left"><select id="responsive" name="responsive"><option value="1">Enable</option><option value="0">Disable</option></select><span class="beta">Beta - unstable</span></td><td><div class="image-tip" title="Enables/Disable Responsiveness for the whole theme."><img src="themes/Obsidian/images/icon_help_small.png"></div></td></tr>');
$('.more-option').after('<p class="center update_options"><img id="op_load" style="display: none;" src="images/loading.gif" /><button id="update_options">Update Options</button></p>');
		$.ajax({
    type: "GET",
    url: "themes/Obsidian/config/config.xml",
    dataType: "xml",
    success: function (xml) {

        // Parse the xml file and get data
        var xmlDoc = $.parseXML(xml),
         $xml = $(xmlDoc);
    var favicon = $(xml).find('favicon').text();  
    var loginbg = $(xml).find('loginbg').text();   
    var bgblur = $(xml).find('bgblur').text(); 
    var logo = $(xml).find('logo').text();  
    var pace = $(xml).find('pace').text();   
    var responsive = $(xml).find('responsive').text(); 
	$('#favicon').attr('value', favicon);
	$('#loginbg').attr('value', loginbg);
	if(bgblur == 1) {
		$('#bgblur option[value="1"]').attr('selected', 'selected');
	} else if(bgblur == 0) {
		$('#bgblur option[value="0"]').attr('selected', 'selected');
	}
	$('#logo').attr('value', logo);
		$('#pace option[value="' + pace + '"]').attr('selected', 'selected');
	if(responsive == 1) {
		$('#responsive option[value="1"]').attr('selected', 'selected');
	} else if(responsive == 0) {
		$('#responsive option[value="0"]').attr('selected', 'selected');
	}
	}
});	
		
		
	$('#update_options').click(function(){
		$('#update_options').hide();
		$('#op_load').show();
		var favicon = $('#favicon').val();
		var loginbg = $('#loginbg').val();
		var bgblur = $('#bgblur').val();
		var logo = $('#logo').val();
		var pace = $('#pace').val();
		var responsive = $('#responsive').val();
		$.ajax({
			url: 'themes/Obsidian/config/config.php',
			type: 'POST',
			data: {
				favicon:favicon,
				loginbg:loginbg,
				bgblur:bgblur,
				logo:logo,
				pace:pace,
				responsive:responsive
				},
			success: function(data) {
		$('#op_load').hide();
		$('#update_options').show();
			alert('Updated Options successfully');
			},
			error: function(xhr, textStatus, error){
      console.log(xhr.statusText);
      console.log(textStatus);
      console.log(error);
		$('#op_load').hide();
		$('#update_options').show();
			alert("Failed to Update Options");
			}
		});
		
	e.preventDefault();
	});
	
	$('#fp').hover(function(){
	$('.preview-f img').attr('src', $('#favicon').val() + '?' + Math.random() );
	});
	$('#lbp').hover(function(){
	$('.preview-lb img').attr('src', $('#loginbg').val() + '?' + Math.random() );
	});
	$('#lp').hover(function(){
	$('.preview-l img').attr('src', $('#logo').val() + '?' + Math.random() );
	});
});