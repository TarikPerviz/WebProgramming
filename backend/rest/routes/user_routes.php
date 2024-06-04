<?php

require_once __DIR__ . '/../services/UserService.class.php';

Flight::set('user_service', new UserService());

Flight::group('/users', function(){
    /**
     * @OA\Post(
     *      path="/users/add",
     *      tags={"users"},
     *      summary="Add user data to the database",
     *      @OA\Response(
     *           response=200,
     *           description="User data, or exception if user is not added properly"
     *      ),
     *      @OA\RequestBody(
     *          description="User data payload",
     *          @OA\JsonContent(
     *              required={"username","password","email"},
     *              @OA\Property(property="username", type="string", example="Some username", description="User username"),
     *              @OA\Property(property="password", type="string", example="some_secret_password", description="User password"),
     *              @OA\Property(property="email", type="string", example="example@example.com", description="User email address")
     *          )
     *      )
     * )
     */
    Flight::route('POST /add',function(){
        $payload=Flight::request()->data->getData();
        $user=Flight::get('user_service')->add_user($payload);
        Flight::json(['message'=>"You succesfully added the user",'data'=>$user]);
    });
});
?>
