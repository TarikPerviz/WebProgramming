<?php

require_once __DIR__ . '/../services/CarService.class.php';

Flight::set('car_service', new CarService());

Flight::group('/cars', function(){
    Flight::route('GET /', function(){
        //$car_service = new CarService();
        $data = Flight::get('car_service')->get_cars();
    
        //echo json_encode($data);
        Flight::json($data);
    });
});