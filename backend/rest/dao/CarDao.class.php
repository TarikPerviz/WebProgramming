<?php

require_once __DIR__ . '/BaseDao.class.php';

class CarDao extends BaseDao {
    public function __construct(){
        parent::__construct('cars');
    }
    public function get_cars(){
        $query = "SELECT c.*, d.dealer_name,d.dealer_phone,d.dealer_email
        FROM cars c
        JOIN dealers d ON c.dealer_id=d.dealer_id";

        return $this->query($query,[]);
    }
}

