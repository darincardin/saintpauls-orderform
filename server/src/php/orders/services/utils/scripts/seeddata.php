<?php

include_once '../utils.php';


$conn = getConn();




$fName = "";
$lName = "";
$quantity = 1;
$address = "";
$phone = "";
$email = "";
$company = "";
$deliveryMethod = "P";
$instructions = "";


$fNameArray = array("Darin", "Cody",   "Kevin", "Joe",   "Ray",   "Smith",    "Ken",  "Jerry", "Tiffany", "Kelly",
                    "Chris", "Morgan", "Kaley", "Emily", "Jesse", "Russell",  "Dave", "Steve", "Rick",    "Jelly");

$lNameArray = array("Cardin", "Jones", "Smith", "McMillian","Buttello","Kellar","Tellar","Rickson","Tiffany","Soso",
                    "Davidsen","Morgan","Couco","Pool","Jesse","Yella","Red","Redding");


for ($i = 0; $i <20; $i++) {

    
    $fName = $fNameArray[rand(0,19)];
    $lName = $lNameArray[rand(0,17)];
    // $address =  rand(0,100) . " " . $lNameArray[rand(0,17)] . " Street";  
    $phone =  rand(100,999) . "-" . rand(100,999) . "-" . rand(1000,9999);   
    $quantity = rand(1,7);
    
    
    $sql = "insert into orders(firstName, lastName, quantity, address, phone, email, company, deliveryMethod, instructions) values ('$fName','$lName',$quantity,  '$address', '$phone', '$email','$company', '$deliveryMethod', '$instructions')";
    
    $result = mysqli_query($conn, $sql );
    
}








//$sql = "SHOW TABLES FROM lobster";
//$result = mysql_query($sql);








?>