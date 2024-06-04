<?php

require_once __DIR__ . '/../services/EmployeeService.class.php';

Flight::set('employee_service', new EmployeeService());

Flight::group('/employees', function(){
    /**
     * @OA\Get(
     *      path="/employees",
     *      tags={"employees"},
     *      summary="Get all employees",
     *      @OA\Response(
     *           response=200,
     *           description="Array of all employees in the databases"
     *      )
     * )
     */
    Flight::route('GET /', function(){
        $data = Flight::get('employee_service')->get_employees();
        Flight::json($data);
    });
});
?>
