<?php
include('server.php');

$data = file_get_contents('php://input');

$con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
$con -> set_charset("utf8");

$query = "SELECT u_id, u_login, u_mail, cc_name, cc_NIP, cc_REGON, cc_street, cc_number, cc_number_flat, cc_city, cc_zip, ci_name, ci_surname, ci_street, ci_number, ci_number_flat, ci_city, ci_zip FROM users u LEFT JOIN client_company cc ON u.u_id=cc.cc_u_id LEFT JOIN client_individual ci ON u.u_id=ci.ci_u_id LEFT JOIN sessions s ON u.u_id=s.s_u_id WHERE s_token='$data' AND s_special=1";
?>