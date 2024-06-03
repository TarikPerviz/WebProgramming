<?php

require_once __DIR__ . '/../services/UserService.class.php';

Flight::set('user_service', new UserService());

Flight::group('/users', function(){
    Flight::route('POST /add',function(){
        $payload=Flight::request()->data->getData();
        $user=Flight::get('user_service')->add_user($payload);
        Flight::json(['message'=>"You succesfully added the user",'data'=>$user]);
    });
});
?>
