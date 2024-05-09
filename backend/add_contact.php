<?php
header('Access-Control-Allow-Origin: http://localhost');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');
require_once __DIR__ . '/rest/services/ContactService.class.php';

$payload=$_REQUEST;



$contact_service = new ContactService();
$contact=$contact_service->add_contact($payload);

echo json_encode(['message'=>"You succesfully added the contact",'data'=>$contact]);