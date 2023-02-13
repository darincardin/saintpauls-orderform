<?php

include_once 'utils/utils.php';


class Invoice
{
	var $id = "";
	var $item = "";
	var $price = "";
}


function readCount(){
    $conn = getConn();
    $rows =  mysqli_query($conn, "select count(*) as total from orders " );

    $data = mysqli_fetch_assoc($rows);
    return $data['total']; 
}

function read($page, $offset, $sortBy, $sortDir){	

	$conn = getConn();
    $pos = $page * $offset;

	$sql = "select * from invoices order by $sortBy $sortDir limit $pos, $offset";
	$result = mysqli_query($conn, $sql );
	 
	$count = mysqli_query($conn, "select count(*) from orders" );
	 
	 
	$rows = [];

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