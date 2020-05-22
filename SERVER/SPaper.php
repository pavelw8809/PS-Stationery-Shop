<?php

    include('server.php');

    header('Access-Control-Allow-Methods: GET');
    header("Access-Control-Allow-Headers: X-Requested-With");

    $con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
    $con -> set_charset("utf8");

    if ($con->connect_error) {
        die("Connection error");
    }

    $sqlquery = "SELECT * FROM products WHERE p_c_id = 3";
    $result = mysqli_query($con, $sqlquery);
    while ($r = mysqli_fetch_assoc($result)) {
        $output[] = $r;
    }

    echo json_encode($output);

    $con->close();

?>