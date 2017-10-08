<?php
if(!isset($_SESSION)){
		session_name("opengamepanel_web");
		session_start();
	}
	$avatar = '';
	$valid_extensions = array('.jpeg', '.jpg', '.png', '.gif', '.bmp');
	foreach($valid_extensions as $ext) {
		if(file_exists($_SESSION['user_id'].$ext)){
$avatar = $_SESSION['user_id'].$ext;
break;
		}
}
if($avatar == '') {
	echo "images/default_avatar.png";
}else {
echo "upload/".$avatar;
}
?>