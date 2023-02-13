<?php


class Order
{
	var $id = "";
	var $fName = "";
	var $lName = "";
	var $quantity = "";
	var $address = "";
	var $phone = "";
	var $company = "";
	var $deliveryMethod = false;
	var $time = "";
	var $instructions = "";
	
	
	public static function create($obj){
	    $order = new Order();
	    
	    $order->id = $obj[0];
		$order->fName = $obj[1];
		$order->lName = $obj[2];
		$order->quantity = $obj[3];
		$order->address = $obj[4];
		$order->phone = $obj[5];
		$order->email = $obj[6];
		$order->company = $obj[7];	
		$order->deliveryMethod = $obj[8];	
		$order->time = $obj[9];
		$order->instructions = $obj[10];		    
	    
	    return $order;
	}
	
    
    public static function createFromPost($Post){
        
        $order = new Order();

        $order->id =               isset($Post["id"])             ? escape($Post["id"]) : "";
        $order->fName =            isset($Post["fName"])          ? escape($Post["fName"]) : "";
        $order->lName =            isset($Post["lName"])          ? escape($Post["lName"]) : "";
        $order->email =            isset($Post["email"])          ? escape($Post['email']) : "";
        $order->phone =            isset($Post["phone"])          ? escape($Post['phone']) : "";
        
        $order->quantity =         isset($Post["quantity"])       ? escape($Post['quantity']) : "";
        $order->deliveryMethod =   isset($Post["deliveryMethod"]) ? escape($Post['deliveryMethod']) : false; 
        $order->address =          isset($Post["address"])        ? escape($Post['address']) : "";
        $order->instructions =     isset($Post["instructions"])   ? escape($Post['instructions']) : "";
        $order->time =             isset($Post["time"])           ? escape($Post['time']) : "";
        $order->company =          isset($Post["company"])        ? escape($Post['company']) : "";

        return $order;
    }
    
}



?>