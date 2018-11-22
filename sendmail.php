<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Title -->
    <title>Organic Digital</title>

    <!-- Description -->
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta property="og:url" content="">
    <meta property="og:site_name" content="HiCars">
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="">
    <meta name="twitter:title" content="">
    <meta property="og:description" content="">
    <meta name="twitter:description" content="">
    <meta name="twitter:text:description" content="">

    <!-- Favicon -->
    <link rel="icon" href="img/favicon.png" type="image/png">
    <link rel="shortcut icon" href="img/favicon.png" type="image/png">

    <!-- Styles -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css?v=1">
</head>
<body>

<?php
if (
        (isset($_POST['name'])) &&
        (isset($_POST['email'])) &&
        (isset($_POST['company'])) &&
        (isset($_POST['phone'])) &&
        (isset($_POST['type'])) &&
        (isset($_POST['f_name']))
):


    $name = $_POST['name'];
    $email = $_POST['email'];
    $company = $_POST['company'];
    $phone = $_POST['phone'];
    $type = $_POST['type'];
    $f_name = $_POST['f_name'];

    $headers = "From: muvp.by <muvp@tut.by>\r\n".
        "MIME-Version: 1.0" . "\r\n" .
        "Content-type: text/html; charset=UTF-8" . "\r\n";

    mail("info@jcs.by", "Заявка с сайта", "Имя: $name \nE-mail: $email \nКомпания: $company \nТелефон: $phone \nСвязь: $type \n Имя цветка: $f_name \n");
    ?>

    <div class="call-order-form">
        <div class="container">
            <div class="row text-center">
                <h1>Ваша заявка принята. Вам перезвонит наш менеджер.</h1>
                <a class="btn btn-default" href="/">Вернуться на главную страницу</a>
            </div>
        </div>
    </div>

<?php else: ?>
    <div class="call-order-form">
        <div class="container">
            <div class="row text-center">
                <div class="col-sm-12">
                    <h1>Ваше сообщение не отправлено</h1>
                    <a class="btn btn-primary" href="/">Вернуться на главную страницу</a>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>

<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>