<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));


if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {
        $requirementsall = array();
        foreach ($db->query('SELECT * from doingby JOIN requirements on requirements.doingby_id = doingby.id WHERE status=1') as $row) {             
            array_push($requirementsall, array(
                'id' => $row['id'],
                'processname' => $row['processname'],
                'startdate' => $row['startdate'],
                'enddate' => $row['enddate'],           
                'doingby_id' => $row['name'],   
            )            
         ); 
        }
        echo json_encode($requirementsall);
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}


?>
<?php

?>