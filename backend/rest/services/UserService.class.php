<?php

require_once __DIR__ . '/../dao/UserDao.class.php';

class UserService {
    private $user_dao;

    public function __construct() {
        $this->user_dao = new UserDao();
    }
    public function add_user($user) {
        $user['password'] = password_hash($user['password'], PASSWORD_BCRYPT);
        return $this->user_dao->add_user($user);
    }
    public function get_user_by_id($user_id) {
        return $this->user_dao->get_user_by_id($user_id);
    }
}