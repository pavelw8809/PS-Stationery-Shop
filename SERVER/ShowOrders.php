<?php 
include('server.php');

$data = file_get_contents('php://input');

//echo $data;

$con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
$con -> set_charset("utf8");

if ($con->connect_error) {
	die("Connection failed: " . $con->connect_error);
}

$output = [];
/*
$orderquery = "SELECT * FROM orders o LEFT JOIN 
                    (SELECT u.u_id, ci.ci_id FROM users u 
                        LEFT JOIN client_company cc ON u.u_id=cc.cc_u_id 
                        LEFT JOIN client_individual ci ON u.u_id=ci.ci_u_id
                    ) 
                a ON a.ci_id = o.o_ci_id 
                    LEFT JOIN 
                        (SELECT u.u_id, cc.cc_id FROM users u 
                            LEFT JOIN client_company cc ON u.u_id=cc.cc_u_id 
                            LEFT JOIN client_individual ci ON u.u_id=ci.ci_u_id
                        ) 
                    b ON b.cc_id = o.o_cc_id 
                    WHERE a.u_id = '$data' OR b.u_id = '$data'";
*/

$orderquery = "SELECT * FROM orders o 
                    LEFT JOIN (SELECT u.u_id, ci.ci_id, s.s_token, s.s_special, s.s_date FROM users u
                    LEFT JOIN client_company cc ON u.u_id=cc.cc_u_id
                    LEFT JOIN client_individual ci ON u.u_id=ci.ci_u_id
                    LEFT JOIN sessions s ON u.u_id=s.s_u_id) a ON a.ci_id = o.o_ci_id
                    LEFT JOIN (SELECT u.u_id, cc.cc_id, s.s_token, s.s_special, s.s_date FROM users u
                    LEFT JOIN client_company cc ON u.u_id=cc.cc_u_id
                    LEFT JOIN client_individual ci ON u.u_id=ci.ci_u_id
                    LEFT JOIN sessions s ON u.u_id=s.s_u_id) b ON b.cc_id = o.o_cc_id
                WHERE a.s_token = '$data'
                    OR b.s_token = '$data'";

$result = mysqli_query($con, $orderquery);
while ($r = mysqli_fetch_assoc($result)) {
    $output[] = $r;
}

echo json_encode($output);

$con -> close();
?>