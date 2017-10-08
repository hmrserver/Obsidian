<?php
if(!isset($_SESSION)){
		session_name("opengamepanel_web");
		session_start();
	}
	$valid_extensions = array('.jpeg', '.jpg', '.png', '.gif', '.bmp');
if($_POST && $_POST['remove'] == "1") {
	foreach($valid_extensions as $ext) {
		if(file_exists($_SESSION['user_id'].$ext)){
unlink($_SESSION['user_id'].$ext);
		}
	}
}
?>