<?php

$id = isset($_GET['id']) ? $_GET['id'] : null;

$cards = 'images/'.$id.'.png';

if ($id !=null && $id > 0 && file_exists($cards)) {
    $image = 'http://'.$_SERVER['HTTP_HOST'].'/api/images/'.$id.'.png';
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
    <title>هوية عيد الفطر2024</title>
    <meta name="title" content="هوية عيد الفطر2024" />
    <meta name="description" content="لحظات فرح تعيشها، ومشاعر مستحيل تنساها بين #أهلك_وناسك" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://gea-eid-dynamic.stocker.team/api/share.php?id=<?=$id?>" />
    <meta property="og:title" content="هوية عيد الفطر2024" />
    <meta property="og:description" content="لحظات فرح تعيشها، ومشاعر مستحيل تنساها بين #أهلك_وناسك" />
    <meta property="og:image" content="<?=$image?>" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://gea-eid-dynamic.stocker.team/api/share.php?id=<?=$id?>" />
    <meta property="twitter:title" content="هوية عيد الفطر2024" />
    <meta property="twitter:description" content="لحظات فرح تعيشها، ومشاعر مستحيل تنساها بين #أهلك_وناسك" />
    <meta property="twitter:image" content="<?=$image?>" />

<!-- Meta Tags Generated with https://metatags.io -->
    <meta property="og:image" content="assets/Eid-al-Fitr-2024-Identity.jpeg" />
    <link rel="apple-touch-icon" href="assets//logo192.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&family=Space+Grotesk:wght@300..700&display=swap"
        rel="stylesheet">
</head>

<body><noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
        <?php
            if ($image != null) {
                echo "<img src='".$image."' class='prev_image' />" ;
            }
        ?>
        <a href="/">create your card</a>
    </div>
</body>

</html>