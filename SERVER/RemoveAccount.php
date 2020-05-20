<?php
include('server.php');

$data = file_get_contents('php://input');

$con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
$con -> set_charset("utf8");

$response = new \stdClass();
?>