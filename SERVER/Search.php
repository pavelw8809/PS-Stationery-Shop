<?php 
    include('server.php');

    $data = file_get_contents('php://input');
    $json = json_decode($data);

    $con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
    $con -> set_charset("utf8");

    if ($con->connect_error) {
        die("Connection error");
    }

    $output = [];

    $sqlquery = "SELECT * FROM products WHERE p_name LIKE '%$data%'";
    $result = mysqli_query($con, $sqlquery);

    while ($r = mysqli_fetch_assoc($result)) {
        $output[] = $r;
    }

    $jsonoutput = json_encode($output);

    echo $jsonoutput;

    $con->close();
?>