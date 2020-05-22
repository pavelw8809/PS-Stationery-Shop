<?php
    include('server.php');

    $data = file_get_contents('php://input');

    $con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
    $con -> set_charset("utf8");

    if ($con->connect_error) {
        die("Connection failed: " . $con->connect_error);
    }

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
        }

        $jsonoutput = json_encode($output);

        echo $jsonoutput;
    }

    $con -> close();
?>