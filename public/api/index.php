<?php

// error_reporting(E_ALL);
// ini_set('display_errors', 1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // The request is using the OPTIONS method, so it's a preflight request.
    http_response_code(204);
    exit;
}
header('Content-Type: application/json');


include("functions.php");
$response = [];
if (!extension_loaded('imagick')) {
    
     $response['error'] = 'Imagick extension is not available.';
     $responseData = json_encode($response);
     echo $responseData;
    exit;
}

// Get the raw POST data
$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content, true);
// echo "<pre>".print_r($decoded)."</pre>";
// exit();
// $name = $_GET['name'];
// $card = $_GET['card'];

if (is_array($decoded)) {
  if (isset($decoded['name']) && isset($decoded['card'])) {
    $name = htmlspecialchars($decoded['name'], ENT_QUOTES, 'UTF-8');
    $card = check_card($decoded['card']);
    if (!empty($name) && !empty($card)) {
      $response['name'] = $name;
      $response['card'] = $card;
    } else {
      $response['error'] = 'Name and Card cannot be empty.';
      $response['success'] = false;
    }
  } else {
    $response['error'] = 'Missing name or card.';
    $response['success'] = false;
  }
} else {
  $response['error'] = 'Request must be JSON';
  $response['success'] = false;
}


if (!empty($name) && !empty($card)) {
    $imagePath = $_SERVER['DOCUMENT_ROOT'].'/api/cards/g'.$card.'.png';
    $fontPath = $_SERVER['DOCUMENT_ROOT']."/api/font/IBM_Plex_Sans/IBMPlexSansArabic-Bold.ttf";
    $image = new Imagick();
    $image->readImage($imagePath);
    $image_width = $image->getImageWidth();

    $whitCards = array('1','2','3','4','5');
    $fontcolor = "rgb(128, 77, 191)";
    if (!in_array($card, $whitCards)) {
        $fontcolor = "white";
    }

    $nameDraw = new ImagickDraw();
    $nameDraw->setFont($fontPath);
    $nameDraw->setFontSize(40);
    $nameDraw->setFillColor(new ImagickPixel($fontcolor));


   
    centerText($image, $nameDraw, $name, 450);

    

    $image->drawImage($nameDraw);
    if(!is_dir('images')){
        mkdir('images',0755);
    }
    $time = time();
    $image_name = 'images/'.$time.'.png';
    $image->writeImage($_SERVER['DOCUMENT_ROOT'].'/api/'.$image_name);
    $response['success'] = true;

    
    $host = $_SERVER['HTTP_HOST'];
    $port = ($_SERVER['SERVER_PORT'] == '80' || $_SERVER['SERVER_PORT'] == '443') ? '' : ':' . $_SERVER['SERVER_PORT'];

    $baseUrl = 'http://' . $host . $port;

    $response['image']=$baseUrl.'/api/'.$image_name;
    $response['time']=$time;

}


$responseData = json_encode($response);
echo $responseData;

if (!empty($name) && !empty($card)) {
    // Clear memory
    $nameDraw->clear();
    $image->clear();
    $image->destroy();
}

exit;
?>
