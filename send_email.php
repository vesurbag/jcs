<?php
// $to      = 'organic@jcs.by';
$to      = 'sfitfordiablo@gmail.com';
$subject = 'Organic Digital: Новая заявка';
$message = '<b>Имя Фамилия:</b> ' . $_POST['name'] . '<br>';
$message .= '<b>Должность и компания:</b> ' . $_POST['job'] . '<br>';
$message .= '<b>Email:</b> ' . $_POST['email'] . '<br>';
$message .= '<b>Телефон:</b> ' . $_POST['phone'] . '<br>';
$message .= '<b>Способ связи:</b> ' . $_POST['type'];
$headers = 'From: info@jcs.by' . "\r\n" .
    'Reply-To: info@jcs.by' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

?> 