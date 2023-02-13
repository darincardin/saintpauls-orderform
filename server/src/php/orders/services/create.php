<?php
include_once 'utils/utils.php';



function create($fName, $lName, $quantity, $address, $phone, $email, $company, $deliveryMethod, $time, $instructions){

	$conn = getConn();

    $x = $deliveryMethod? 1 : 0;

	$sql = "insert into orders(firstName, lastName, quantity, address, phone, email, company, deliveryMethod, time, instructions) values ('$fName','$lName',$quantity,  '$address', '$phone', '$email','$company', $x, '$time', '$instructions')";
	$result = mysqli_query($conn, $sql );// or throw new Error("Server is down. Try again later.");
   

    if($result)  {
		
		$id = mysqli_insert_id($conn); 	//email("darincardin@gmail.com", $id, $fName, $lName, $quantity, $address, $phone, $email, $company, $deliveryMethod, $instructions);
		echo $id;
	} 
	else  error_log("ERROR:"  . mysqli_error($conn)) ;
}

?>