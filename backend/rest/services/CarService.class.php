<?php
require_once __DIR__ . '/../dao/CarDao.class.php';

class CarService {
    private $car_dao;
    public function __construct(){
        $this->car_dao=new CarDao();
    }
    public function get_cars(){
        $rows = $this->car_dao->get_cars();
        return [
            'data' => $rows        
        ];
        
    }
}
