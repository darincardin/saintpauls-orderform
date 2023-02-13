<?php
include_once ($_SERVER['DOCUMENT_ROOT'] . '/php/invoices/services/search.php');
include_once ($_SERVER['DOCUMENT_ROOT'] . '/php/invoices/services/utils/utils.php');


    $value = $_GET['value'] ? $_GET['value'] : "";
    
    
    if(isLoggedIn()){
        $value1 = "an";
    	$data = json_encode(search($value));
        
    	echo "{\"data\":$data}";
    }


?>