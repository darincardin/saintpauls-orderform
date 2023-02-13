<?php

include_once 'utils/utils.php';


function delete($id) {
	$conn = getConn();
		
	$sql = 'delete from orders where id = ' . $id;
	$result = mysqli_query( $conn, $sql);
	 
	 
	 if(!$result) showError($conn);
	 else echo "{\"success\":true}";
}



?>