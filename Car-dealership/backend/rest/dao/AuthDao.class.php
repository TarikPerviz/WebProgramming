<?php

require_once __DIR__ . '/BaseDao.class.php';

class AuthDao extends BaseDao {
    public function __construct(){
        parent::__construct('users');
    }
    public function get_user_by_username($username){
        $query = "SELECT * FROM users WHERE username= :username";
        return $this->query_unique($query,['username'=>$username]);
    }
}