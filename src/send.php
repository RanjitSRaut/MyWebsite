<?php

    $name = $_POST['name'];
	$email = $_POST['email']; 
	  
	$query = $_POST['message'];
	$email_from = $name.'<'.$email.'>';
$to="admin@ranjitraut.in"; 
 $subject="Enquiry from site(ranjitraut.in)!";
 $headers  = 'MIME-Version: 1.0' . "\r\n";
 $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 $headers .= "From: ".$email_from."\r\n";
 $message="	  
 	   
 		 Name:
		 $name 	   
         <br>
 		 Email-Id:
		 $email 	   
         <br>		 
 		 Message:
		 $query 	   
      
   ";
	if(mail($to,$subject,$message,$headers))
		echo "ok";
	else
		echo "Failed"; 

?>



<?php
