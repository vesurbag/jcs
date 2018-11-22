<?php
$to      = "organic@jcs.by";
$subject = "Organic Digital: Новая заявка";
$message = "<b>Имя Фамилия:</b> " . $_POST["name"] . "<br>";
$message .= "<b>Должность и компания:</b> " . $_POST["job"] . "<br>";
$message .= "<b>Email:</b> " . $_POST["email"] . "<br>";
$message .= "<b>Телефон:</b> " . $_POST["phone"] . "<br>";
$message .= "<b>Способ связи:</b> " . $_POST["type"];
$headers = "From: muvp.by <info@jcs.by>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

mail($to, $subject, $message, $headers);
?> 