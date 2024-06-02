<?php
header('Access-Control-Allow-Origin: http://localhost');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');
require_once __DIR__ . '/rest/services/EmployeeService.class.php';

$employee_service = new EmployeeService();
$data = $employee_service->get_employees();

echo json_encode($data);
?>
