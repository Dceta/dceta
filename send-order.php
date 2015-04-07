<?php

    /*
    $name="Denys";
    $name="3495i";
    $to = 'dceta@email.com';
    $subject = 'Order';
    $message = "Имя: " . $name . "\n" . "Телефон: " . $number;
    $headers = 'From: Dceta Studio <support@dceta.com>' . "\r\n";

    mail($to, $subject, $message, $headers);
    echo "Dceta";

    */


     require_once "Mail.php";

     $name = $_POST["name"];
     $message = $_POST["message"];
     $email = $_POST["email"];
     $type = $_POST["subject"];

     $from = "Dceta Studio <support@dceta.com>";
     $to = "Dceta Studio <dceta@email.com>";
     $subject = "Hi!";
     $body = $name." ".$message." ".$email." ".$type;

     $host = "customers.freehosting.com";
     $username = "support@dceta.com";
     $password = "mrSIr6390a";

     $headers = array ('From' => $from,
       'To' => $to,
       'Subject' => $subject);
     $smtp = Mail::factory('smtp',
       array ('host' => $host,
         'auth' => true,
         'username' => $username,
         'password' => $password));

     $mail = $smtp->send($to, $headers, $body);

     if (PEAR::isError($mail)) {
       echo("<p>" . $mail->getMessage() . "</p>");
      } else {
       echo("<p>Message successfully sent!</p>");
      }

?>