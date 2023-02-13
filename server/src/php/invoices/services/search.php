<?php

include_once 'utils/utils.php';


class Invoice
{
	var $id = "";
	var $item = "";
	var $price = "";
}


function search($value){	
	$rows = [];
    
	$conn = getConn();

    $sql = "select * from invoices";// where ITEM LIKE '%$value%'  order by ITEM ASC";
	$result = mysqli_query($conn, $sql );
	 

	while ($row = mysqli_fetch_row($result)) {    
		$o = new Invoice();
		$o->id = $row[0];
		$o->item = $row[1];
		$o->price = $row[2];
		
		
	    array_push($rows, $o);
	}
	
	return $rows;
}

?>