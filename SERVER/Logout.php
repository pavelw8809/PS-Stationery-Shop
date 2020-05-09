<?php
include('server.php');

$data = file_get_contents('php://input');

$con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
$con -> set_charset("utf8");

if ($con->connect_error) {
	die("Connection failed: " . $con->connect_error);
}

$delquery = "DELETE FROM sessions WHERE s_token='$data'";
if ($con->query($delquery) === true) {
    //echo json_encode($output);
    echo "success";
} else {
    echo("Błąd połączenia z bazą danych - error ".$con->error);
}
?>