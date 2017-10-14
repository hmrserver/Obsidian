<?php
if($_POST) {
	if(isset($_POST['link']) && isset($_POST['url'])) {
		$post = [
    'link' => "https://hmrworld.tk/panel",
];
		$ch = curl_init($_POST['url']);                                                                             
		curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
		curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, false );
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                                                                
		$result = curl_exec($ch);
		echo $result;
	}
}
?>