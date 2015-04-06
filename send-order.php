<?php

    /*$name = $_POST["name"]
    $number = $_POST["message"]*/
    $name="Denys";
    $name="3495i";
    $to = 'dceta@email.com';
    $subject = 'Order';
    $message = "Имя: " . $name . "\n" . "Телефон: " . $number;
    $headers = 'From: Dceta Studio <support@dceta.com>' . "\r\n";
 
    mail($to, $subject, $message, $headers);
    echo "Dceta";
?>