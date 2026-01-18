<?php
header('Content-Type: application/json');
$host = (empty($_SERVER['HTTPS']) ? 'http://' : 'https://').$_SERVER['HTTP_HOST'];
$response = [];
if (isset($_GET['id'])) {
	$id = $_GET['id'];
	$cards = 'images/'.$id.'.png';

    if ($id !=null && file_exists($cards)) {
        $image = $host.'/api/images/'.$id.'.png';
        $response['image'] = $image;
        $response['success'] = true;
    }else{
    	$response['error'] = 'Invalid ID.';
    	$response['success'] = false;
    }
}else{
	$response['error'] = 'Invalid ID.';
    $response['success'] = false;
}
$responseData = json_encode($response);
echo $responseData;
die();
?>