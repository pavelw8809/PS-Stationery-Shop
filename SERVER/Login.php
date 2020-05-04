<?php
include('server.php');
session_start();

$json = file_get_contents('php://input');
$data = json_decode($json);

// Inicjalizacja zmiennych

$errors = array(); 
//$errors = 0;
//file_put_contents("log.txt", $data->user."    ".md5($data->password));

// połączenie z bazą danych
//$db = mysqli_connect('localhost', 'root', '', 'shop');
$con = new mysqli($dbserv, $dbuser, $dbpass, $dbname);
$con -> set_charset("utf8");

//$username = $data->user;
//$password = $data->password;
//$username = mysqli_real_escape_string($data[0]->user);
//$password = mysqli_real_escape_string($data[0]->password);

//if (isset($_POST['login_user'])) {
  //$username = mysqli_real_escape_string($db, $_POST['username']);
  //$password = mysqli_real_escape_string($db, $_POST['password']);

  if (empty($data->user)) {
	  //echo("Nazwa użytkownika jest wymagana");
	  //$errors = $errors+1;
  	array_push($errors, "Nazwa użytkownika jest wymagana");
  }
  if (empty($data->password)) {
	  //echo("Hasło jest wymagane");
	  //$errors = $errors+1;
  	array_push($errors, "Hasło jest wymagane");
  }

  if (count($errors) == 0) {
	$username = $data->user;
  	$password = md5($data->password);
  	$query = "SELECT u_id, u_login FROM users WHERE u_login='$username' AND u_password='$password'";
  	$results = mysqli_query($con, $query);
  	if (mysqli_num_rows($results) === 1) {
			$_SESSION['username'] = $username;
			while($r = mysqli_fetch_assoc($results)) {
				$output = $r;
			}

			echo json_encode($output);
  	  	//$_SESSION['success'] = "Zalogowano pomyślnie";
  	} else {
		array_push($errors, "Błędna nazwa użytkownika lub hasło");
		echo json_encode($errors);
  		//array_push($errors, "Błędnie podano nazwę użytkownika lub hasło");
  	}
  } else {
	  echo json_encode($errors);
  }
//}

?>