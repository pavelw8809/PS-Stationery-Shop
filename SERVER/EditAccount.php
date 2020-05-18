<?php
include('server.php');

$json = file_get_contents('php://input');
$data = json_decode($json);

$errors = array(); 

$con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
$con -> set_charset("utf8");

if ($con->connect_error) {
	die("Connection failed: " . $con->connect_error);
}

// VALIDATION

//echo($data->czip);
//echo($data->cstreet);

$userid = mysqli_real_escape_string($con, $data->userid);

if ($data->mainquery === true) {
	if (empty($data->login)) {
		array_push($errors, "BŁĄD: Pole login nie może być puste");
	}
	if(count($errors) === 0) {
		$login = mysqli_real_escape_string($con, $data->login);
		$mainquery = "UPDATE users SET u_login='$login' WHERE u_id='$userid'";
		if ($con->query($mainquery) === true) {
			echo "success";
			//echo $sessioncode;
		} else {
			array_push($errors, "Błąd połączenia z bazą danych - error ".$con->error);
		}
	}
}

if ($data->compquery === true) {
	if (empty($data->ccity) || empty($data->cname) || empty($data->cnip) || empty($data->cregon) ||
		empty($data->cstreet) || empty($data->czip)) {
		array_push($errors, "Wszyskie pola muszą być wypełnione");
	}
	if(count($errors) === 0) {
		$city = mysqli_real_escape_string($con, $data->ccity);
		$name = mysqli_real_escape_string($con, $data->cname);
		$nip = mysqli_real_escape_string($con, $data->cnip);
		$regon = mysqli_real_escape_string($con, $data->cregon);
		$street = mysqli_real_escape_string($con, $data->cstreet);
		$snumber = mysqli_real_escape_string($con, $data->chouse);
		$flat = mysqli_real_escape_string($con, $data->cflat);
		$zip = mysqli_real_escape_string($con, $data->czip);
		$compquery = "UPDATE client_company
						SET
						cc_name='$name',
						cc_NIP='$nip',
						cc_REGON='$regon',
						cc_street='$street',
						cc_number='$snumber',
						cc_number_flat='$flat',
						cc_city='$city',
						cc_zip='$zip'
						WHERE cc_u_id='$userid'";
		if ($con->query($compquery) === true) {
			echo "success";
			//echo $sessioncode;
		} else {
			array_push($errors, "Błąd połączenia z bazą danych - error ".$con->error);
		}
	}
	#echo("compquery_true");
}

if ($data->privquery === true) {
	if (empty($data->iname) || empty($data->istreet) || empty($data->ihouse) || empty($data->iname) ||
		empty($data->isurname) || empty($data->izip) || empty($data->icity)) {
		array_push($errors, "Wszyskie pola muszą być wypełnione");
	}
	if(count($errors) === 0) {
		$city = mysqli_real_escape_string($con, $data->icity);
		$name = mysqli_real_escape_string($con, $data->iname);
		$surname = mysqli_real_escape_string($con, $data->isurname);
		$street = mysqli_real_escape_string($con, $data->istreet);
		$snumber = mysqli_real_escape_string($con, $data->ihouse);
		$flat = mysqli_real_escape_string($con, $data->iflat);
		$zip = mysqli_real_escape_string($con, $data->izip);

		$privquery = "UPDATE client_individual 
						SET 
						ci_name='$name', 
						ci_surname='$surname', 
						ci_street='$street', 
						ci_number='$snumber', 
						ci_number_flat='$flat', 
						ci_city='$city', 
						ci_zip='$zip' 
						WHERE ci_u_id='$userid'";
		if ($con->query($privquery) === true) {
			echo "success";
			//echo $sessioncode;
		} else {
			array_push($errors, "Błąd połączenia z bazą danych - error ".$con->error);
		}
	}


	#echo("privquery_true");
} else {
	#echo("privquery_false");
}

if(count($errors) > 0) {
	echo json_encode($errors);
}

$con -> close();

?>