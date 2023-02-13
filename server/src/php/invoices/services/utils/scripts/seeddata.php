<?php

include_once 'utils/utils.php';


$conn = getConn();

$fName = "ddd";
$lName = "ddd";
$quantity = 2;
$address = "ddd";
$phone = "ddd";
$email = "ddd";
$company = "ddd";
$deliveryMethod = "D";
$instructions = "ddd";



$sql = "insert into orders(firstName, lastName, quantity, address, phone, email, company, deliveryMethod, instructions) 
values ('$fName','$lName',$quantity,  '$address', '$phone', '$email','$company', '$deliveryMethod', '$instructions')";

$result = mysqli_query($conn, $sql );




//$sql = "SHOW TABLES FROM lobster";
//$result = mysql_query($sql);








?>