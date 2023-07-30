<?php

// Replace this with your own email address
$siteOwnersEmail = 'alexy.joaquim@gmail.com';


if(isset($_POST) === true) {

   $name = trim(stripslashes($_POST['contactName']));
   $email = trim(stripslashes($_POST['contactEmail']));
   $subject = trim(stripslashes($_POST['contactSubject']));
   $contact_message = trim(stripslashes($_POST['contactMessage']));
   $message .= "Email de: " . $name . "<br />";
   $message .= "Adresse email : " . $email . "<br />";
   $message .= "Message: <br />";
   $message .= $contact_message;


   $from =  $name . " <" . $email . ">";

   // Email Headers
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
 	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


   if ($error !== null) {

      $mail = mail($siteOwnersEmail, $subject, $message, $headers);

		if ($mail) { 
			echo "OK"; 
		}
      else { 
		echo "Le message n'a pas pu être envoyé"; 
	}
		

	} # end if - no validation error


		$response = (isset($error['name'])) ? $error['name'] . "<br /> \n" : null;
		$response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
		$response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;
		
		echo $response;
}

?>