<?php
include('server.php');

$data = file_get_contents('php://input');
//$data = json_decode($json);

//$userid = $data->id;

//file_put_contents("log.txt", $data->id);

$con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
$con -> set_charset("utf8");

$query = "SELECT u_id, u_login, u_mail, cc_name, cc_NIP, cc_REGON, cc_street, cc_number, cc_number_flat, cc_city, cc_zip, ci_name, ci_surname, ci_street, ci_number, ci_number_flat, ci_city, ci_zip FROM users u LEFT JOIN client_company cc ON u.u_id=cc.cc_u_id LEFT JOIN client_individual ci ON u.u_id=ci.ci_u_id LEFT JOIN sessions s ON u.u_id=s.s_u_id WHERE s_token='$data' AND s_special=1";
//$query_company = "SELECT * FROM client_company WHERE cc_u_id='$userid'";
//$query_individ = "SELECT * FROM client_individual WHERE ci_u_id='$userid'";

//$result_company = mysqli_query($con, $query_company);
//$result_individ = mysqli_query($con, $query_individ);
$result = mysqli_query($con, $query);

while($r = mysqli_fetch_assoc($result)) {
    $output[] = $r;
}

//while($r = mysqli_fetch_assoc($result_individ)) {
//    $output[] = $r;
//}

if (count($output) === 1) {
    $jsonoutput = json_encode($output, true);
    echo($jsonoutput);
}

?>