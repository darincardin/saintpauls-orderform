<?php
include_once ($_SERVER['DOCUMENT_ROOT'] . '/php/invoices/services/list.php');
include_once ($_SERVER['DOCUMENT_ROOT'] . '/php/invoices/services/utils/utils.php');

    $page =    $_GET['page']   ? $_GET['page']   : 0;
    $amount =  $_GET['amount'] ? $_GET['amount'] : 5;
    $sortBy =  $_GET['sortBy'] ? $_GET['sortBy'] : "id";
    $sortDir = $_GET['sortDir'] ? $_GET['sortDir'] : "ASC";
    
    
    if(isLoggedIn()){
        
        $total = ceil(readCount()/$amount);

    	$data = json_encode(read($page, $amount, $sortBy, $sortDir));
    
    	echo "{\"total\":$total, \"data\":$data}";
    }


?>