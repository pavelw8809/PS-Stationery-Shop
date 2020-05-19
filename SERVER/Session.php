<?php
include('server.php');

$data = file_get_contents('php://input');

//file_put_contents("log.txt", $data);

$con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
$con -> set_charset("utf8");

if ($con->connect_error) {
	die("Connection failed: " . $con->connect_error);
}

//$query = "SELECT u_id, u_login from sessions, users WHERE u_id=s_u_id AND s_token = '$data'";
$query = "SELECT u_id, u_login, ci_id, cc_id 
            FROM sessions 
                LEFT JOIN users ON s_u_id=u_id 
                LEFT JOIN client_individual ON s_u_id=ci_u_id 
                LEFT JOIN client_company ON s_u_id=cc_u_id 
            WHERE s_token='$data'";
$result = mysqli_query($con, $query);

if(mysqli_num_rows($result) === 1) {
    $output = new \stdClass();
    while ($r = mysqli_fetch_object($result)) {
        $output->uid = $r->u_id;
        $output->login = $r->u_login;
        $output->compid = $r->cc_id;
        $output->privid = $r->ci_id;
        //$output[] = $r;
    }

    $jsonoutput = json_encode($output);

    echo $jsonoutput;
}

$con -> close();


//$username = $data->user;
//$sessioncode = md5($username.rand(0,99999999));

//$sessioninfo = array(
//    'sessionid' => $sessioncode
//);

//$data[] = $sessioninfo;

//$sessioninfoenc = json_encode($data);

//array_push($arraydata, $data);

//echo($sessioncode);
//array_push($data, 'session: '.$sessioncode);
//$data->sessionid = $sessioncode;

//echo json_encode($data);

?>