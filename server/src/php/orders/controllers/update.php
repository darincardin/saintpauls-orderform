<?php

include_once ($_SERVER['DOCUMENT_ROOT'] . '/php/orders/services/update.php');
include_once ($_SERVER['DOCUMENT_ROOT'] . '/php/orders/order.php');

if(isLoggedIn()){

	$_POST = json_decode(file_get_contents('php://input'), true);

	$o = Order::createFromPost($_POST);

    update($o->id, $o->fName, $o->lName, $o->quantity, $o->address, $o->phone, $o->email, $o->company, $o->deliveryMethod, $o->time, $o->instructions);
}
?>