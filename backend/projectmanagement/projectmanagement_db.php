<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    try {
        $stmt = $db->prepare("INSERT INTO projectmanagement (datestart,dateend,requirements_id) VALUES (?,?,?)");
        $stmt->bindParam(1, $data->datestart);
        $stmt->bindParam(2, $data->dateend);
        $stmt->bindParam(3, $data->requirements_id);
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
        $projectmanagement = array();
        $stmt = $db->prepare("SELECT * from projectmanagement
        JOIN requirements on projectmanagement.requirements_id = requirements.id 
        JOIN status on requirements.status_id = status.id
        WHERE status = 2 AND YEAR(datestart)=?");
        $stmt->execute([$_GET['year']]);
        foreach ( $stmt as $row) {
            array_push(
                $projectmanagement,
                array(
                    'idplan' => $row[0],
                    'id' => $row[3],
                    'processname' => $row['processname'],
                    'startdate' => $row[1],
                    'enddate' => $row[2],
                    'statusname' => $row[30]
                )
            );
        }
        echo json_encode($projectmanagement);
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'PATCH') {

    switch ($_SERVER['REQUEST_URI']) {
        case '/projectbacklog/backend/projectmanagement/projectmanagement_db.php/statusupdate':
            try {
                $stmt = $db->prepare("UPDATE requirements SET status=? WHERE id=?");
                $stmt->bindParam(1, $data->status);
                $stmt->bindParam(2, $data->id);
                if ($stmt->execute()) {
                    echo json_encode(array("status" => "OK"));
                } else {
                    echo json_encode(array("status" => "ERROR"));
                }
            } catch (PDOException $e) {
                print "Error!: " . $e->getMessage() . "<br/>";
                die();
            }
          break;
        case '/projectbacklog/backend/projectmanagement/projectmanagement_db.php/changedate':
            try {
                $stmt = $db->prepare("UPDATE projectmanagement SET datestart=?,dateend=? WHERE id=?");
                $stmt->bindParam(1, $data->startdate);
                $stmt->bindParam(2, $data->enddate);
                $stmt->bindParam(3, $data->planid);

                if ($stmt->execute()) {
                    echo json_encode(array("status" => "OK"));
                } else {
                    echo json_encode(array("status" => "ERROR"));
                }
            } catch (PDOException $e) {
                print "Error!: " . $e->getMessage() . "<br/>";
                die();
            }
        
          break;
        default:
          header('HTTP/1.1 404 Not Found');
          exit;
      }

   
}
// if ($_SERVER['REQUEST_METHOD'] == 'PATCH') {
//     try {
//         $stmt = $db->prepare("UPDATE requirements SET status=? WHERE id=?");
//         $stmt->bindParam(1, $data->status);
//         $stmt->bindParam(2, $data->id);
//         if ($stmt->execute()) {
//             echo json_encode(array("status" => "OK"));
//         } else {
//             echo json_encode(array("status" => "ERROR"));
//         }
//     } catch (PDOException $e) {
//         print "Error!: " . $e->getMessage() . "<br/>";
//         die();
//     }
// }
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    try {
        $stmt1 = $db->prepare("UPDATE requirements SET status = 1 WHERE id=?");
        $stmt1->bindParam(1, $data->id);
        $stmt1->execute();
        $stmt2 = $db->prepare("DELETE FROM projectmanagement WHERE requirements_id =?");
        $stmt2->bindParam(1, $data->id);
     
        if ($stmt2->execute()) {

            echo json_encode(array("status" => "OK"));
        } else {
            echo json_encode(array("status" => "ERROR"));
        }
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}






?>
<?php

?>