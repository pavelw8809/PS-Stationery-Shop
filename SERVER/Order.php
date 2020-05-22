<?php
    include('server.php');

    $json = file_get_contents('php://input');
    $data = json_decode($json);

    $con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
    $con -> set_charset("utf8");

    $response = new \stdClass();

    $userid = $data->uid;
    $compid = $data->compid;
    $privid = $data->privid;
    $total = $data->total;

    // CHECK ACOUNT TYPE

    $AT;

    if (empty($data->compid)) {
        $AT = 1; // this is an individual account
        $compid = null;
    }
    if (empty($data->privid)) {
        $AT = 0; // this is a company account
        $privid = null;
    }

    $e = 0;
    $epos;

    // SET THE LAST ORDER NUMBER

    $checkordno = "SELECT MAX(o_number), MAX(o_id) FROM orders";

    $checknumber = mysqli_query($con, $checkordno);

    if (mysqli_num_rows($checknumber) === 1) {
        $r = mysqli_fetch_array($checknumber);
        $orderno = $r["MAX(o_number)"]+1;
        $orderkey = $r["MAX(o_id)"]+1;
    } else {
        $e++;
        $epos = 1;
    }

    // REGISTER A NEW ORDER

    if ($AT === 0) {
        $neworder = "INSERT INTO orders
                    VALUES (NULL, NULL, $compid, $orderno, 'NOWE', CURDATE(), $total)";
    }
    if ($AT === 1) {
        $neworder = "INSERT INTO orders
                    VALUES (NULL, $privid, NULL, $orderno, 'NOWE', CURDATE(), $total)";
    }

    if ($con->query($neworder) === false) {
        $e++;
        $epos = 2;
    }

    // ADD NEW PRODUCTS

    foreach($data->articles as $item) {
        $prodid = $item->prodid;
        $quantity = $item->quantity;
        $itemquery = "INSERT INTO order_details VALUES (NULL, $orderkey, $prodid, $quantity)";
        if ($con->query($itemquery) === false) {
            $e++;
            $epos = 3;
        }
    }

    if ($e > 0) {
        $response->result = "Błąd połączenia z bazą danych - error ".$con->error." - segment ".$epos;
    } else {
        $response->result = "success";
        $response->orderno = $orderno;
        echo json_encode($response);
    }

    $con->close();

?>