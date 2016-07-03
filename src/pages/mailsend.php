<?php

  // FORM VALIDATION
  if(isset($_POST['g-recaptcha-response'])&& $_POST['g-recaptcha-response']){
    var_dump($_POST);
    // CATCHA KEY
    $secret = "6Leroh4TAAAAAM10LbxOhcsR3zNEiKWiO8Xab9Ev";

    $ip = $_SERVER['REMOTE_ADDR'];
    $captcha = $_POST['g-recaptcha-response'];
    $rsp  = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip$ip");
    var_dump($rsp);
    $arr = json_decode($rsp,TRUE);

    // CAPTCHA SUCCESS
    if($arr['success']){
      // MESSAGE PROPERTIES
      $to = 'coreynoble@hotmail.ca, corey@corey-noble.com';
      $subject = 'Contact Inquiry - Web Development Portfolio';

      // USER DATA VARIABLES
      $firstName = $_REQUEST['firstName'];
      $lastName = $_REQUEST['lastName'];
      $email = $_REQUEST['email'];
      $company = $_REQUEST['company'];
      $inquiry = $_REQUEST['inquiry'];


      // MESSAGE STRING
      $message = "
      First Name: " . $firstName .
      "\n" . "Last Name: " . $lastName .
      "\n" . "Email: " . $email .
      "\n" . "Company: " . $company .
      "\n" . $inquiry;

      // SEND
      $sendrtn =  mail($to, $subject, $message, "From:" . $email);

      // REDIRECT TO CONFIRM
      header('Location:confirm.php');
    }

    // CAPTCHA FAILED
    else{
      header('Location: contact.php?CaptchaFail=True');
      exit();
    }
  }
}
?>
