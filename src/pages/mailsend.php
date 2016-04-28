<?php
// things to configure:
// set the to address
$to = 'coreynoble@hotmail.ca, corey@corey-noble.com';
// set the subject
$subject = 'Contact Inquiry - Web Development Portfolio';

// get the post data
$firstName = $_REQUEST['firstName'];
$lastName = $_REQUEST['lastName'];
$email = $_REQUEST['email'];
$company = $_REQUEST['company'];
$inquiry = $_REQUEST['inquiry'];


// build the message
$message = "
First Name: " . $firstName .
"\n" . "Last Name: " . $lastName .
"\n" . "Email: " . $email .
"\n" . "Company: " . $company .
"\n" . $inquiry;

// send
$sendrtn =  mail($to, $subject, $message, "From:" . $email);

//redirect
header('Location:confirm.php');

exit(); 

?>
