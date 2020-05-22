<?php

    include('server.php');

    header('Access-Control-Allow-Methods: GET');
    header("Access-Control-Allow-Headers: X-Requested-With");

    $con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
    $con -> set_charset("utf8");

    if ($con -> connect_error) {
        die("Connection error");
    }

    $sqlquery = "SELECT distinct * FROM products p 
    left join order_details od on p.p_id=od.od_o_id 
    ORDER BY od.od_quality DESC LIMIT 5";
    
    $result = mysqli_query($con, $sqlquery);
    while ($r = mysqli_fetch_assoc($result)) {
        $output[] = $r;
    }

    echo json_encode($output);

    $con->close();
?>
