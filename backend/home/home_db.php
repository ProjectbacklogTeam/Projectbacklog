<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    try {
        $stmt = $db->prepare("INSERT INTO requirements (processname,startdate,enddate,asis_id,budget_id,doingby_id,tobe_id,admin_id,user_id,approver_id,status) VALUES (?,?,?,?,?,?,?,?,?,?,?)");
        $stmt->bindParam(1, $data->processname);
        $stmt->bindParam(2, $data->startdate);
        $stmt->bindParam(3, $data->enddate);
        $stmt->bindParam(4, $data->asis_id);
        $stmt->bindParam(5, $data->budget_id);
        $stmt->bindParam(6, $data->doingby_id);
        $stmt->bindParam(7, $data->tobe_id);
        $stmt->bindParam(8, $data->admin_id);
        $stmt->bindParam(9, $data->user_id);
        $stmt->bindParam(10, $data->approver_id);
        $stmt->bindParam(11, $data->status);
        if ($stmt->execute()) {
            echo json_encode(array("status" => "OK"));
        } else {
            echo json_encode(array("status" => "ERROR"));
        }
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        try {
            $requirementsall = array();
            foreach ($db->query('SELECT * from doingby JOIN requirements on requirements.doingby_id = doingby.id') as $row) {             
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
//}
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    try {
        $stmt = $db->prepare("DELETE FROM requirements WHERE id=?");
        $stmt->bindParam(1, $data->id);
        if ($stmt->execute()) {

            echo json_encode(array("status" => "OK"));
        } else {
            echo json_encode(array("status" => "ERROR"));
        }
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}



//
?>
<?php

?>