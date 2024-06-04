<?php
header('Access-Control-Allow-Origin: https://octopus-app-aicvb.ondigitalocean.app');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');
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
    /**
     * @OA\Get(
     *      path="/users/user",
     *      tags={"users"},
     *      summary="Get user by ID",
     *      @OA\Response(
     *           response=200,
     *           description="Get patient by ID"
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="query", name="user_id", example="1", description="User ID")
     * )
     */
    Flight::route('GET /user', function () {
        $body = Flight::request()->query;

        $user_service = new UserService();
        $user = $user_service->get_user_by_id($body['user_id']);
        Flight::json($user, 200);
    });
     /**
     * @OA\Get(
     *      path="/users/details",
     *      tags={"users"},
     *      summary="Get user details",
     *      security={
     *          {"ApiKey": {}}   
     *      },
     *      @OA\Response(
     *           response=200,
     *           description="User details"
     *      )
     * )
     */
    Flight::route('GET /details', function() {
        Flight::json(Flight::get('patient_service')->get_patient_by_id(Flight::get('user')->id));
    });
});
?>
