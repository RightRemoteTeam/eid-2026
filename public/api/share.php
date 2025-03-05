<?php

$id = isset($_GET['id']) ? $_GET['id'] : null;

$cards = 'images/'.$id.'.jpg';

if ($id !=null && $id > 0 && file_exists($cards)) {
    $image = 'https://'.$_SERVER['HTTP_HOST'].'/api/images/'.$id.'.jpg';
}else{
    $image =null;
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
    <meta property="og:url" content="https://eid25.stocker.team/api/share.php?id=<?=$id?>" />
    <meta property="og:title" content="فعاليات العيد 2025"/>
    <meta property="og:description" content="لحظات فرح تعيشها، ومشاعر مستحيل تنساها بين #أهلك_وناسك" />
    <meta property="og:image" content="<?=$image?>" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://eid25.stocker.team/api/share.php?id=<?=$id?>" />
    <meta property="twitter:title" content="فعاليات العيد 2025"/>
    <meta property="twitter:description" content="لحظات فرح تعيشها، ومشاعر مستحيل تنساها بين #أهلك_وناسك" />
    <meta property="twitter:image" content="<?=$image?>" />

    <link rel="apple-touch-icon" href="https://eid25.stocker.team/assets/logo192.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&family=Space+Grotesk:wght@300..700&display=swap"
        rel="stylesheet">
<style>
    body {
        text-align: center;
        font-family: Tahoma, Geneva, Verdana, sans-serif ;
    }
    .btn_wrapper {
        margin: 20px;
    }
.btn {    
    border: none;
    border-radius: 50rem;
    cursor: pointer;
    display: block;
    font-family: inherit;
    margin: 0 auto;
    width: 240px;
    font-size: 16px;
    font-weight: 600;
    padding: 17px 0;
    background: #005339;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
}
#root {
    width: 1000px;
    padding: 5px;
    border: 1px solid #EEE;
    margin: auto;
}
@media screen and (max-width: 992px) { 
    #root {
        width: 90%;
    }
}

</style>
</head>

<body><noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
        <?php
            if ($image != null) {
                echo "<img src='".$image."' class='prev_image' width='100%' />" ;
            }
        ?>        
    </div>
    <div class="btn_wrapper"><a href="/" class="btn">create your card</a></div>
</body>

</html>