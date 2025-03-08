<?php

$id = isset($_GET["id"]) ? $_GET["id"] : null;

$cards = "images/" . $id . ".jpg";

if ($id != null && $id > 0 && file_exists($cards)) {
    $image = "https://" . $_SERVER["HTTP_HOST"] . "/api/images/" . $id . ".jpg";
} else {
    $image = null;
}
?>
<!doctype html>
<html lang="en">

<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF8">
    <link rel="icon" href="assets/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <!-- Primary Meta Tags -->
    <title>فعاليات العيد 2025</title>
    <meta name="title" content="فعاليات العيد 2025" />
    <meta name="description" content="لحظات فرح تعيشها، ومشاعر مستحيل تنساها. فعاليات العيد والفرحة تزيد" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://eid.gea.gov.sa/api/share.php?id=<?= $id ?>" />
    <meta property="og:title" content="فعاليات العيد 2025"/>
    <meta property="og:description" content="لحظات فرح تعيشها، ومشاعر مستحيل تنساها بين #أهلك_وناسك" />
    <meta property="og:image" content="<?= $image ?>" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://eid.gea.gov.sa/api/share.php?id=<?= $id ?>" />
    <meta property="twitter:title" content="فعاليات العيد 2025"/>
    <meta property="twitter:description" content="لحظات فرح تعيشها، ومشاعر مستحيل تنساها بين #أهلك_وناسك" />
    <meta property="twitter:image" content="<?= $image ?>" />

    <link rel="apple-touch-icon" href="https://eid.gea.gov.sa/assets/logo192.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&family=Space+Grotesk:wght@300..700&display=swap"
        rel="stylesheet">
        
        <style>
        html, body {
            margin: 0;
            padding: 0;
            height: 100%;
        }

        body {
            text-align: center;
            font-family: 'Space Grotesk', sans-serif;
        }

        #root {
            display: flex;
            height: 100vh;
            min-height: 400px;
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            gap: 25px;
        }

        #root img {
            width: auto;
            max-width: 80%;
            min-width: 300px;
            min-height: 300px;
            max-height: calc(100vh - 200px);
            border-radius: 14px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
            object-fit: contain;
        }

        .btn_wrapper {
            width: 100%;
            min-width: 240px;
            display: flex;
            justify-content: center;
        }

        .btn {
            border: none;
            border-radius: 50rem;
            cursor: pointer;
            font-family: inherit;
            width: 240px;
            font-size: 16px;
            font-weight: 600;
            padding: 17px 0;
            background: #005339;
            color: #fff;
            text-decoration: none;
            transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
        }

        .btn:hover {
            background-color: #F7C73F;
            color: #005339;
            box-shadow: -6px 0px 20px -8px #F7C73F;
        }
    </style>
</head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
        <?php if ($image != null) {
            echo "<img src='" . $image . "' alt='Eid Greetings' />";
        } ?>
        <div class="btn_wrapper">
            <a href="/ar/greetings" class="btn">Create Your Card</a>
        </div>
    </div>
</body>
</html>
