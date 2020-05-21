<?php
include('server.php');

$json = file_get_contents('php://input');
$data = json_decode($json);

$con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
$con -> set_charset("utf8");

$response = new \stdClass();
$e = 0;
$epos;

$AT = $data->accounttype;
$login = mysqli_real_escape_string($con, $data->login);
$email = mysqli_real_escape_string($con, $data->email);
$pass0 = mysqli_real_escape_string($con, $data->pass0);
$pass1 = mysqli_real_escape_string($con, $data->pass1);

// CHECK IF LOGIN EXISTS
/*
$prequery = "SELECT u_login FROM users WHERE u_login='$login'"


*/

// INITIAL QUERIES

$query0 = "INSERT INTO users (u_login, u_mail, u_password) VALUES
('$login', '$email', '$pass1')";

if ($e === 0) {
    if ($con->query($query0) === false) {
        $e++;
        $epos = 1;
    }
}

$query1 = "SELECT u_id FROM users WHERE u_login='$login'";

if ($e === 0) {
    $result = mysqli_query($con, $query1);

    if (mysqli_num_rows($result) === 1) {
        $r = mysqli_fetch_array($result);
        $userid = $r->u_id;
    } else {
        $e++;
        $epos = 2;
    }
}

// ACCOUNT SPECIFIC QUERIES

if ($AT === 0) {
    // company
    //echo("company");
    $cname = mysqli_real_escape_string($con, $data->cname);
    $cnip = mysqli_real_escape_string($con, $data->cnip);
    $cregon = mysqli_real_escape_string($con, $data->cregon);
    $cstreet = mysqli_real_escape_string($con, $data->cstreet);
    $chouse = mysqli_real_escape_string($con, $data->chouse);
    $cflat = mysqli_real_escape_string($con, $data->cflat);
    $czip = mysqli_real_escape_string($con, $data->czip);
    $ccity = mysqli_real_escape_string($con, $data->ccity);

    // QUERY2
 
    $query2 = "INSERT INTO client_company (cc_id, cc_u_id, cc_name, cc_NIP, cc_REGON, cc_street, cc_number, cc_number_flat, cc_city, cc_zip) VALUES
                (NULL, '$userid', '$cname', '$cnip', '$cregon', '$cstreet', '$chouse', '$cflat', '$ccity', '$czip')";

    if ($e === 0) {
        if ($con->query($query2) === false) {
            $e++;
            $epos = 3;
        }
    }


} else {
    //echo("individual");
    $iname = mysqli_real_escape_string($con, $data->iname);
    $isurname = mysqli_real_escape_string($con, $data->isurname);
    $istreet = mysqli_real_escape_string($con, $data->istreet);
    $ihouse = mysqli_real_escape_string($con, $data->ihouse);
    $iflat = mysqli_real_escape_string($con, $data->iflat);
    $izip = mysqli_real_escape_string($con, $data->izip);
    $icity = mysqli_real_escape_string($con, $data->icity);

    $query2 = "INSERT INTO client_individual (ci_id, ci_u_id, ci_name, ci_surname, ci_street, ci_number, ci_number_flat, ci_city, ci_zip) VALUES
                (NULL, '$userid', '$iname', '$isurname', '$istreet', '$ihouse', '$iflat', '$icity', '$izip')";

    if ($e === 0) {
        if ($con->query($query2) === false) {
            $e++;
            $epos = 3;
        }
    }
}

if ($e > 0) {
    echo ("Błąd połączenia z bazą danych - error ".$con->error." - segment ".$epos);
    //echo("Błąd połączenia z bazą danych - error ".$con->error." - segment ".$epos);
} else {
    echo "success";
}

$con -> close();

?>