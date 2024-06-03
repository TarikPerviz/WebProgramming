<?php

require_once __DIR__ . '/../services/EmployeeService.class.php';

Flight::set('employee_service', new EmployeeService());

Flight::group('/employees', function(){
    Flight::route('GET /', function(){
        $data = Flight::get('employee_service')->get_employees();
        Flight::json($data);
    });
});
?>
