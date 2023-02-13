<?php
include_once ($_SERVER['DOCUMENT_ROOT'] . '/php/api/update.php');



if(isLoggedIn()){

	$_POST = json_decode(file_get_contents('php://input'), true);

	$id = $_POST['id'];
	$fName = escape($_POST['fName']);
	$lName = escape($_POST['lName']);
	$quantity = escape($_POST['quantity']);
	$address = escape($_POST['address']);
	$phone = escape($_POST['phone']);
	$email = escape($_POST['email']);
	$company = escape($_POST['company']);
	$deliveryMethod = escape($_POST['deliveryMethod']);
	$instructions = escape($_POST['instructions']);


	update($id, $fName, $lName, $quantity, $address, $phone, $email, $company, $deliveryMethod, $instructions);
}
?>