<?php
if($_GET['action'] == 'getplaces'){
	$mysqli = new mysqli("localhost","root","root","proj");
	if ($mysqli->connect_errno) {
    echo "Echec lors de la connexion à MySQL : (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;}
	$mysqli->set_charset("utf8");
	$res = $mysqli->query("SELECT * FROM places");
    while($row = $res->fetch_assoc()) {
            $ar[] = $row;
    }
	echo json_encode($ar);
}

?>