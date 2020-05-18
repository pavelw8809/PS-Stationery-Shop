<?php 
include('server.php');
//session_start();

$json = file_get_contents('php://input');
$data = json_decode($json);

// Inicjalizacja zmiennych

$errors = array(); 
$iserror = false;

$con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
$con -> set_charset("utf8");

if ($con->connect_error) {
	die("Connection failed: " . $con->connect_error);
}

if (empty($data->oldpass) || empty($data->newpass0) || empty($data->newpass1)) {
    echo("Pola nie mogą być puste");
    $iserror = true;
}

if ($iserror === false) {
    // CHECK IF PASSWORD IS CORRECT
    $userid = $data->userid;
    $password = mysqli_real_escape_string($con, md5($data->oldpass));
    $newpassword = mysqli_real_escape_string($con, $data->newpass1);

    $checkpassquery = "SELECT u_password FROM users WHERE u_id='$userid'";
    $checkpassresult = mysqli_query($con, $checkpassquery);

    if (mysqli_num_rows($checkpassresult) === 1) {
        //$output = new \stdClass()
        $r = mysqli_fetch_object($checkpassresult);
        $originpass = $r->u_password;
    }

    if ($password === $originpass) {
        echo("success");
    } else {
        echo("Stare hasło jest niepoprawne");
    }
}
?>