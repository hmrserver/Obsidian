<?php
if(!isset($_SESSION)){
		session_name("opengamepanel_web");
		session_start();
	}
if ($_POST && ($_SESSION['users_group'] == 'admin')) {  
	if(isset($_POST['favicon'])) {
		ConfigWrite('favicon', $_POST['favicon']);
	}
	if(isset($_POST['loginbg'])) {
		ConfigWrite('loginbg', $_POST['loginbg']);
	}
	if(isset($_POST['bgblur'])) {
		ConfigWrite('bgblur', $_POST['bgblur']);
	}
	if(isset($_POST['logo'])) {
		ConfigWrite('logo', $_POST['logo']);
	}
	if(isset($_POST['pace']) && file_get_contents("../css/pace/".$_POST['pace'].".css")) {
		ConfigWrite('pace', $_POST['pace']);
		copyemz("../css/pace/".$_POST['pace'].".css","../css/pace/pace.css");
		
	}
	if(isset($_POST['responsive'])) {
		ConfigWrite('responsive', $_POST['responsive']);
	}
}
function copyemz($file1,$file2){
	$error =  null;
	$contentx = '';
	$econtex = '';
	if(!file_get_contents($file1)) {
		$error[1]=error_get_last();
	} else {
          $contentx =@file_get_contents($file1);
	}
	if(!fopen($file2, "w")) {
		$error[2]=error_get_last();
	} else {
                   $openedfile = fopen($file2, "w");
	}
	if(!@fwrite($openedfile, $contentx)) {
		$error[3]=error_get_last();
	}
	if(!@fclose($openedfile)) {
		$error[4]=error_get_last();
	}
					if($error) {
					$errorlog = fopen("error.log", "w");
					foreach($error as $element)	{
						if($element) {
							$econtex = $element['message'];
							break;
						}
					}
					fwrite($errorlog, $econtex);
					fclose($errorlog);
					}
    } 
	
function ConfigWrite( $type, $data) {
 
$xml = new DOMDocument('1.0', 'UTF-8');
$xml->formatOutput = true; 
$xml->preserveWhiteSpace = false;
$xml->load('config.xml');
$theme = $xml->getElementsByTagName('theme')->item(0);  
$type = $theme->getElementsByTagName($type)->item(0);
$type->nodeValue = $data;
htmlentities($xml->save('config.xml'));
}
function ConfigRead($type) {
 
$xml = new DOMDocument('1.0', 'UTF-8');
$xml->formatOutput = true; 
$xml->preserveWhiteSpace = false;
$xml->load('config.xml');
$theme = $xml->getElementsByTagName('theme')->item(0);  
$type = $theme->getElementsByTagName($type)->item(0);
return $type->nodeValue;
}
 ?>