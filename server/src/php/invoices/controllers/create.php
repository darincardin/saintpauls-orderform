<?php

include_once ($_SERVER['DOCUMENT_ROOT'] . '/php/invoices/services/create.php');

$_POST = json_decode(file_get_contents('php://input'), true);


$fName = escape($_POST["fName"]);
$lName = escape($_POST["lName"]);
$quantity = escape($_POST['quantity']);
$address = escape($_POST['address']);
$phone = escape($_POST['phone']);
$email = escape($_POST['email']);
$company = escape($_POST['company']);
$deliveryMethod = "P";// escape($_POST['deliveryMethod']);
$instructions = escape($_POST['instructions']);


create($fName, $lName, $quantity, $address, $phone, $email, $company, $deliveryMethod, $instructions);

?>