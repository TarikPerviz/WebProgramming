<?php

require_once __DIR__ . '/BaseDao.class.php';

class EmployeeDao extends BaseDao {
    public function __construct(){
        parent::__construct('employees');
    }
    public function get_employees(){
        $query = "SELECT e.*,r.name as role_name
            FROM employees e
            JOIN roles r ON e.role_id=r.id";

        return $this->query($query,[]);
    }
}

