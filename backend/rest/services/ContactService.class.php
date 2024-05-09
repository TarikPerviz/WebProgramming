<?php

require_once __DIR__ . '/../dao/ContactDao.class.php';

class ContactService {
    private $contact_dao;

    public function __construct() {
        $this->contact_dao = new ContactDao();
    }
    public function add_contact($contact) {
        return $this->contact_dao->add_contact($contact);
    }
}