<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));
if ($_SERVER['REQUEST_METHOD'] == 'PATCH') {

    try {
        $stmt = $db->prepare("UPDATE feedback SET link_feedback=? WHERE id=?");
        $stmt->bindParam(1, $data->link_feedback);
        $stmt->bindParam(2, $data->idfeedback);
  
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