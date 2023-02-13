<?php

include_once ($_SERVER['DOCUMENT_ROOT'] . '/php/orders/services/delete.php');



$id = $_GET['id'];

    if(isLoggedIn()){
        delete($id);

    }

?>