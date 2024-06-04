<?php
require_once __DIR__ . '/../dao/EmployeeDao.class.php';

class EmployeeService {
    private $employee_dao;
    public function __construct(){
        $this->employee_dao=new EmployeeDao();
    }
    public function get_employees(){
        $rows = $this->employee_dao->get_employees();
        return [
            'data' => $rows        
        ];
        
    }
}
