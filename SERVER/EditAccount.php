<?php
include('server.php');

$json = file_get_contents('php://input');
$data = json_decode($json);

$errors = array(); 

$con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
$con -> set_charset("utf8");

if ($con->connect_error) {
	die("Connection failed: " . $con->connect_error);
}

?>