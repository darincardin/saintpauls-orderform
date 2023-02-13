<?php

session_start();

include_once ($_SERVER['DOCUMENT_ROOT'] . '/php/orders/services/list.php');
include_once ($_SERVER['DOCUMENT_ROOT'] . '/php/orders/services/utils/utils.php');

$page =      isset($_GET['page'])   ?  $_GET['page']   : 0;
$pageSize =  isset($_GET['pageSize']) ?  $_GET['pageSize'] : 5;
$search =    isset($_GET['search']) ?  $_GET['search'] : "";
$sortBy =    isset($_GET['sortBy']) ?  $_GET['sortBy'] : "id";
$sortDir =   isset($_GET['sortDir']) ? $_GET['sortDir'] : "ASC";


$total = readCount($search);

//$totalPages = 0;
$data = [];

if($total == 0) echo "{\"total\":1, \"data\":[]}";
else {
    
    if($sortBy == "fName") $sortBy = "firstname";
    if($sortBy == "lName") $sortBy = "lastname";
    
   // $totalPages = ceil($n/$pageSize);
    
    $data = json_encode(read($page, $pageSize, $sortBy, $sortDir, $search));
    
    echo "{\"total\":$total, \"data\":$data}"; 
}
    


?>