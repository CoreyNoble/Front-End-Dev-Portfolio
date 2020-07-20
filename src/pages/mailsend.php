<?php
  $captcha;
  
  if (isset($_POST['firstName'])) {
    $firstName=$_POST['firstName'];
  }
  if (isset($_POST['lastName'])) {
    $lastName=$_POST['lastName'];
  }
  if (isset($_POST['email'])) {
    $email=$_POST['email'];
  }
  if (isset($_POST['company'])) {
    $company=$_POST['company'];
  }
  if (isset($_POST['inquiry'])) {
    $inquiry=$_POST['inquiry'];
  }
  if (isset($_POST['g-recaptcha-response'])) {
    $captcha=$_POST['g-recaptcha-response'];
  }
  if (!$captcha) {
    // REDIRECT TO CONFIRM
    header('Location:contact.html?captcha=none&#no-captcha');
    exit;
  }

  $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6Lcj8wYUAAAAAJzXlZ3l8udJWF1HK9-XA-lfR0YB&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);

  if ($response.success==false) {
    header('Location:contact.html?captcha=failed&#no-captcha');
  } else {
    // MESSAGE PROPERTIES
    $to = 'coreynoble@hotmail.ca';
    $subject = 'Contact Inquiry - corey-noble.com';

    // USER DATA VARIABLES
    $firstName = $_REQUEST['firstName'];
    $lastName = $_REQUEST['lastName'];
    $email = $_REQUEST['email'];
    $company = $_REQUEST['company'];
    $inquiry = $_REQUEST['inquiry'];

    // MESSAGE STRING
    $message =
    "\n" . "\n" . "Contact Inquiry - corey-noble.com" .
    "\n" . "\n" . "First Name: " . "\n" . $firstName .
    "\n" . "\n" . "Last Name: " . "\n" . $lastName .
    "\n" . "\n" . "Email Address: " . "\n" . $email .
    "\n" . "\n" . "Company: " . "\n" . $company .
    "\n" . "\n" . "Inquiry: " . "\n" . $inquiry .
    "\r\n". "\r\n". "\r\n";

    // SEND
    mail($to, $subject, $message);

    // REDIRECT TO CONFIRM
    header('Location:confirm.html');
  }
?>
