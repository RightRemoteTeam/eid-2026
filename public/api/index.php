<?php
// echo phpinfo();
// exit();
// error_reporting(E_ALL);
//ini_set('display_errors', 1);

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
// $name = $_POST['name'];
//     $message = $_POST['message'];
//     $card = $_POST['card'];

if (is_array($decoded)) {
  if (isset($decoded['name']) && isset($decoded['message']) && isset($decoded['card'])) {
    $name = trim($decoded['name']);
    $message = trim($decoded['message']);
    $name = html_entity_decode($name, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    $message = html_entity_decode($message, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    $card = check_card($decoded['card']);
    if (!empty($name) && !empty($message)) {
      $response['name'] = $name;
      $response['message'] = $message;
      $response['card'] = $card;
    } else {
      $response['error'] = 'Name,Message and Card cannot be empty.';
      $response['success'] = false;
    }
  } else {
    $response['error'] = 'Missing name or message or card.';
    $response['success'] = false;
  }
} else {
  $response['error'] = 'Request must be JSON';
  $response['success'] = false;
}


if (!empty($name) && !empty($message) && !empty($card)) {
    $imagePath = $_SERVER['DOCUMENT_ROOT'].'/api/cards/g'.$card.'.jpg';
    $fontPath = $_SERVER['DOCUMENT_ROOT']."/api/font/IBM_Plex_Sans/IBMPlexSansArabic-Bold.ttf";
    $image = new Imagick();
    $image->readImage($imagePath);
    $image_width = $image->getImageWidth();

    $fontcolor = ($card == '1') ? "white" : "#191838";

    $nameDraw = new ImagickDraw();
    $nameDraw->setFont($fontPath);
    $nameDraw->setFontSize(100);
    $nameDraw->setFillColor(new ImagickPixel($fontcolor));


    $messageDraw = new ImagickDraw();
    $messageDraw->setFont($fontPath);
    $messageDraw->setFontSize(70);
    
    $messageDraw->setFillColor(new ImagickPixel($fontcolor));


    centerText($image, $nameDraw, $name, 950);

    centerText($image, $messageDraw, $message, 350);

    $image->drawImage($nameDraw);
    $image->drawImage($messageDraw);
    if(!is_dir('images')){
        mkdir('images',0755);
    }
    $time = time();
    $image_name = 'images/'.$time.'.jpg';
    $image->writeImage($_SERVER['DOCUMENT_ROOT'].'/api/'.$image_name);
    $response['success'] = true;

    $scheme = $_SERVER['SERVER_SCHEME'];
    $host = $_SERVER['HTTP_HOST'];
    $port = ($_SERVER['SERVER_PORT'] == '80' || $_SERVER['SERVER_PORT'] == '443') ? '' : ':' . $_SERVER['SERVER_PORT'];
    // $baseUrl = $scheme . '://' . $host . $port;
    // $baseUrl = 'http://' . $host . $port;
    $baseUrl = 'https://' . $host . $port;

    $response['image']=$baseUrl.'/api/'.$image_name;
    $response['time']=$time;

}


$responseData = json_encode($response);
echo $responseData;

if (!empty($name) && !empty($message) && !empty($card)) {
    // Clear memory
    $nameDraw->clear();
    $messageDraw->clear();
    $image->clear();
    $image->destroy();
}

exit;
?>