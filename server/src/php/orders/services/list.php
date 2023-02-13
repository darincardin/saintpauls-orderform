<?php

include_once 'utils/utils.php';
include_once ($_SERVER['DOCUMENT_ROOT'] . '/php/orders/order.php');

function readCount($search){
    $conn = getConn();
    
    $searchSQl = $search != "" ? "where lower(concat(FIRSTNAME, ' ', LASTNAME, ' ', ADDRESS, ' ', PHONE)) LIKE '%$search%'" :"" ; 
    
    $rows =  mysqli_query($conn, "select count(*) as total from orders $searchSQl");

    $data = mysqli_fetch_assoc($rows);
   return $data['total']; 
}

function read($page, $offset, $sortBy, $sortDir, $search) {	

    $search = trim($search);
    
	$conn = getConn();
    $pos = $page * $offset;

    $searchSQl = $search != "" ? "where lower(concat(FIRSTNAME, ' ', LASTNAME, ' ', ADDRESS, ' ', PHONE)) LIKE '%$search%'" :"" ; 
    
	$sql = "select * from orders $searchSQl order by $sortBy $sortDir limit $pos, $offset";
	
	$result = mysqli_query($conn, $sql );
	 
	  
	$rows = [];

	while ($row = mysqli_fetch_row($result)) {    
		$o = Order::create($row);

		array_push($rows, $o);
	}
	
	return $rows;
}

?>