<?php
include('server.php');

$data = file_get_contents('php://input');

$con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
$con -> set_charset("utf8");

$e = false;

$prequery = "SELECT u_login FROM users WHERE u_login='$data'";

$preresult = mysqli_query($con, $prequery);

if (mysqli_num_rows($preresult) > 0) {
    $e = true;
}

echo($e);