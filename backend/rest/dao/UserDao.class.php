<?php

require_once __DIR__ . '/BaseDao.class.php';

class UserDao extends BaseDao {
    public function __construct(){
        parent::__construct('users');
    }
    public function add_user($user){
        return $this->insert('users', $user);
    }
    public function get_user_by_id($user_id){
        return $this->query_unique("SELECT * FROM users WHERE id = :id", ["id" => $user_id]);
    }
}