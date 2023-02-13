<?php

include_once 'utils/utils.php';



class Order
{
	var $id = "";
	var $fName = "";
	var $lName = "";
	var $quantity = "";
	var $address = "";
	var $phone = "";
	var $company = "";
	var $deliveryMethod = "";
	var $instructions = "";
}


function search($value){	
	$rows = [];
    
	$conn = getConn();

    $sql = "select * from orders where LASTNAME LIKE '%$value%'  order by LASTNAME ASC";
	$result = mysqli_query($conn, $sql );
	 

	while ($row = mysqli_fetch_row($result)) {    
	//	array_push($rows, $row[2]);


		$o = new Order();
		$o->id = $row[0];
		$o->fName = $row[1];
		$o->lName = $row[2];
		$o->quantity = $row[3];
		$o->address = $row[4];
		$o->phone = $row[5];
		$o->email = $row[6];
		$o->company = $row[7];	
		$o->deliveryMethod = $row[8];	
		$o->instructions = $row[9];	

		array_push($rows, $o);
		
	}
	
	return $rows;
}

?>