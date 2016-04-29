<?php

  if(isset($_POST['g-recaptcha-response'])&& $_POST['g-recaptcha-response']){
    var_dump($_POST);
    $secret = "6Leroh4TAAAAAM10LbxOhcsR3zNEiKWiO8Xab9Ev";
    $ip = $_SERVER['REMOTE_ADDR'];
    $captcha = $_POST['g-recaptcha-response'];
    $rsp  = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip$ip");
    var_dump($rsp);
    $arr = json_decode($rsp,TRUE);
    if($arr['success']){
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
    }else{
      header('Location: contact.php?CaptchaFail=True');

      exit();
    }
  }﻿


  }else{
    header('Location: contact.php?CaptchaFail=True');
    exit();
  }
}

?>
