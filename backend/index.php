<?php
require 'vendor/autoload.php';
require 'rest/routes/car_routes.php';
require 'rest/routes/employee_routes.php';
require 'rest/routes/user_routes.php';
require 'rest/routes/contact_routes.php';
require 'rest/routes/auth_routes.php';
require 'rest/routes/middleware_routes.php';
header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
Flight::start();
?>
