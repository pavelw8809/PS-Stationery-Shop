<?php
include('server.php');

$json = file_get_contents('php://input');
$data = json_decode($json);

//$errors = array(); 

$con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
$con -> set_charset("utf8");

$articles = $data->articles;

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

// SET THE LAST ORDER NUMBER

$checkordno = "SELECT MAX(o_number) FROM orders";

$checknumber = mysqli_query($con, $checkordno);

if (mysqli_num_rows($checknumber) === 1) {
    //$lastnumber = new \stdClass();
    $r = mysqli_fetch_array($checknumber);
    $orderno = $r["MAX(o_number)"]+1;
} else {
    echo("Błąd połączenia z bazą danych - error ".$con->error);
}

//echo $orderno;

//echo $lastnumber;

// REGISTER A NEW ORDER

if ($AT === 0) {
    $neworder = "INSERT INTO orders
                VALUES (NULL, NULL, $compid, $orderno, 'NOWE', CURDATE(), $total)";
}
if ($AT === 1) {
    $neworder = "INSERT INTO orders
                VALUES (NULL, $privid, NULL, $orderno, 'NOWE', CURDATE(), $total)";
}

if ($con->query($neworder) === true) {
    echo "success";
    
    //echo $sessioncode;
} else {
    echo("Błąd połączenia z bazą danych - error ".$con->error);
}
/*
function saveOrderItem() {

}

foreach($data->articles as $item) {
    $prodid = $item->prodid;
        echo $item->name;
}
*/

$con -> close();

?>