jQuery(function($){
	$('img').each(function() {
		fm_img_path = 'modules/litefm/action-images/';
		if ($(this).attr('src') == fm_img_path + 'remove.gif') {
			$(this).replaceWith('<i class="fa fa-trash file-op"></i>');
		}else if ($(this).attr('src') == fm_img_path + 'rename.gif') {
			$(this).replaceWith('<i class="fa fa-edit file-op"></i>');
		}else if ($(this).attr('src') == fm_img_path + 'move.gif') {
			$(this).replaceWith('<i class="fa fa-share-square-o file-op"></i>');
		}else if ($(this).attr('src') == fm_img_path + 'copy.gif') {
			$(this).replaceWith('<i class="fa fa-clipboard file-op"></i>');
		}else if ($(this).attr('src') == fm_img_path + 'compress.gif') {
			$(this).replaceWith('<i class="fa fa-file-archive-o file-op"></i>');
		}else if ($(this).attr('src') == fm_img_path + 'uncompress.gif') {
			$(this).replaceWith('<i class="fa fa-folder-open file-op"></i>');
		}else if ($(this).attr('src') == fm_img_path + 'create_file.gif') {
			$(this).replaceWith('<i class="fa fa-file file-op"></i>');
		}else if ($(this).attr('src') == fm_img_path + 'create_folder.gif') {
			$(this).replaceWith('<i class="fa fa-folder file-op"></i>');
		}else if ($(this).attr('src') == fm_img_path + 'upload.gif') {
			$(this).replaceWith('<i class="fa fa-upload file-op"></i>');
		}else if ($(this).attr('src') == fm_img_path + 'send_by_email.gif') {
			$(this).replaceWith('<i class="fa fa-envelope file-op"></i>');
		}
	});
$('[href^="?m=gamemanager&p=game_monitor&home_id="]').addClass('default-btn'); //gives button look
});