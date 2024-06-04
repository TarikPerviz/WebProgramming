<?php

require_once __DIR__ . '/../services/CarService.class.php';

Flight::set('car_service', new CarService());

Flight::group('/cars', function(){
    /**
     * @OA\Get(
     *      path="/cars",
     *      tags={"cars"},
     *      summary="Get all cars",
     *      @OA\Response(
     *           response=200,
     *           description="Array of all cars in the databases"
     *      )
     * )
     */
    Flight::route('GET /', function(){
        $data = Flight::get('car_service')->get_cars();
        Flight::json($data);
    });
});