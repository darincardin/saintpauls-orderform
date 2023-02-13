<?php
header("Access-Control-Allow-Origin: *");
//session_start();
   
function getConn(){
	$conn = mysqli_connect("localhost", "root", "") or die(mysqli_error());
	mysqli_select_db ( $conn, 'lobster'  );

	return $conn;
}

function showError($conn){
		echo mysqli_errno($conn) . ": " . mysqli_error($conn). "\n" ;
       // error_log($conn);
		throw new Exception( mysqli_errno($conn) . ": " . mysqli_error($conn). "\n" );
}


function email($to, $id, $fName, $lName, $quantity, $address, $phone, $email, $company, $deliveryMethod, $instructions){
	
	
	ini_set("SMTP", "aspmx.l.google.com");
    ini_set("sendmail_from", "darincardin@gmail.com");
	
	//$to = "darincardin@gmail.com";
	$msg = "First line of text\nSecond line of text";


	$subject = "New Order: " . $id;
	$txt = "First Name: " . $fName;
	$txt = $txt . "Last Name: " . $lName;
	$txt = $txt . "Quantity: " . $quantity;
	$txt = $txt . "Address: " . $address;
	$txt = $txt . "Phone: " . $phone;
	$txt = $txt . "Email: " . $email;
	$txt = $txt . "Company: " . $company;
	$txt = $txt . "Delivery Method: " . $deliveryMethod=="P"?"Pickup":"Deliver";
	$txt = $txt . "Instructions: " . $instructions;
	
	$headers = "From: darincardin@gmail.com" . "\r\n";

	mail($to,$subject,$txt,$headers);	
		


	//mail($addr,"Lobster Order 1",$msg);

		
	
}


function escape($str){
	$newStr = str_replace ("'", '"', $str);
	return str_replace ("\\", '/', $newStr);
}



function login($username, $password){
	$_SESSION["isLoggedIn"] = true;	
	return true;
	
	/*
	if($username == 'x' && $password == 'x'){
		$_SESSION["isLoggedIn"] = true;	
		return true;
	} else {	
		$_SESSION["isLoggedIn"] = false;	
		return false;
	}
	*/

}


function logout(){	
	$_SESSION["isLoggedIn"] = false;	
}

function isLoggedIn(){

    
	return true;// $_SESSION["isLoggedIn"];		
}


?>