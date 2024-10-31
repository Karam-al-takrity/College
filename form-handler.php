<?php 
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$Subject = $_POST['Subject'];
$Message = $_POST['Message'];

$email_from = 'info@yourwebsite.com';

$email_subject = 'New From Submission'

$email_body = "User Name : $name.\n.
               User Email : $visitor_email.\n.
               Subject : $Subject.\n.
               User Message : $Message.\n.;
$to = 'bigkaram00@gmail.com'; 
$header = "From : $email_from \r\n";
$headers .= "Reply-To : $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");
?>