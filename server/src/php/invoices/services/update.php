<?php
include_once 'utils/utils.php';



function update($id, $fName, $lName, $quantity, $address, $phone, $email, $company, $deliveryMethod, $instructions){


	$conn = getConn();

	$sql = "update orders set firstName='$fName', lastName='$lName', quantity=$quantity, address='$address', phone='$phone', email='$email', company='$company', deliveryMethod='$deliveryMethod', instructions='$instructions'  where id=" . $id;
	
	
	
	$result = mysqli_query($conn, $sql );
	 
	if(!$result) showError($conn);
	
	
	if($result )echo "{\"success\": true}";
    else echo "{\"success\": false}";


	
}

?>