<?php
include_once 'utils/utils.php';



function update($id, $fName, $lName, $quantity, $address, $phone, $email, $company, $deliveryMethod, $time, $instructions){

	$conn = getConn();
	
	$x = $deliveryMethod? 1 : 0;

	$sql = "update orders set firstName='$fName', lastName='$lName', quantity=$quantity, address='$address', phone='$phone', email='$email', company='$company', deliveryMethod=$x, time='$time', instructions='$instructions'  where id=" . $id;
	
	$result = mysqli_query($conn, $sql );
	 
	if(!$result) showError($conn);


	if($result) echo "{\"success\": true}";
    else echo "{\"success\": false}";
}

?>