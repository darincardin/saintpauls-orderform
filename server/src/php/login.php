<?php
session_start();
 header("Access-Control-Allow-Origin: *");
//include_once 'orders/services/utils/utils.php';

$_POST = json_decode(file_get_contents('php://input'), true);

//$user = escape($_POST["username"]);
//$password = escape($_POST["password"]);

//	$_SESSION["xxx"] = "true";	

//if(login($user, $password))  

echo "{\"success\":true}";
//else echo "{\"success\":false}";
?>