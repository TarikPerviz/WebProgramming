<?php
header('Access-Control-Allow-Origin: http://localhost');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');
require_once __DIR__ . '/rest/services/UserService.class.php';

$payload=$_REQUEST;



$user_service = new UserService();
$user=$user_service->add_user($payload);

echo json_encode(['message'=>"You succesfully added the user",'data'=>$user]);