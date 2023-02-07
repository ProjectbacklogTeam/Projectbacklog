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
        foreach ($db->query('SELECT * from projectmanagement JOIN requirements on projectmanagement.requirements_id = requirements.id WHERE status = 1')  as $row) {

            array_push(
                $projectmanagement,
                array(
                    'id' => $row['id'],
                    'processname' => $row['processname'],
                    'startdate' => $row[1],
                    'enddate' => $row[2],
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
}




?>
<?php

?>