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

	if (empty($data->user)) {
		array_push($errors, "Nazwa użytkownika jest wymagana");
	} else {
		if ($data->user !== $data->userid) {
			array_push($errors, "Błędna nazwa użytkownika lub hasło");
		}
	}

	if (empty($data->password)) {
		array_push($errors, "Hasło jest wymagane");
	}

	if (count($errors) === 0) {
		$username = mysqli_real_escape_string($con, $data->user);
		$password = mysqli_real_escape_string($con, md5($data->password));
		$query = "SELECT u_id, u_login FROM users WHERE u_login='$username' AND u_password='$password'";
		$result = mysqli_query($con, $query);
		if (mysqli_num_rows($result) === 1) {
			$output = new \stdClass();
			$sessioncode = md5($username.rand(0,99999999));
			$output->sessionid = $sessioncode; 
			$r = mysqli_fetch_object($result);
			$uid = $r->u_id;
			$addsession = "INSERT INTO sessions VALUES(null, $uid, '$sessioncode', TRUE, now())";
			if ($con->query($addsession) === true) {
				echo json_encode($output);
			} else {
				echo("Błąd połączenia z bazą danych - error ".$con->error);
			}
		} else {
			array_push($errors, "Błędna nazwa użytkownika lub hasło");
			echo json_encode($errors);
		}
	} else {
		echo json_encode($errors);
	}

	$con->close();

?>