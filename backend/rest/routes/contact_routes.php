<?php

require_once __DIR__ . '/../services/ContactService.class.php';

Flight::set('contact_service', new ContactService());

Flight::group('/contacts', function(){
    Flight::route('POST /add',function(){
        $payload=Flight::request()->data->getData();
        $contact=Flight::get('contact_service')->add_contact($payload);
        Flight::json(['message'=>"You succesfully added the contact",'data'=>$contact]);
    });
});
?>
