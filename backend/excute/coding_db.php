<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    try {
        $stmt1 = $db->prepare("INSERT INTO coding(link_coding ,excute_id) VALUES (?,?)");
        $stmt1->bindParam(1, $data->link);
        $stmt1->bindParam(2, $data->excuteid);
        $stmt2 = $db->prepare("UPDATE requirements SET statusforprocess_req=? WHERE id=?");
        $stmt2->bindParam(1, $data->statusforprocess);
        $stmt2->bindParam(2, $data->Requirements_id);
        $stmt2->execute();
        if ($stmt1->execute()) {
            echo json_encode(array("status" => "OK"));
        } else {
            echo json_encode(array("status" => "ERROR"));
        }
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'PATCH') {
    try {
        $stmt1 = $db->prepare("UPDATE coding SET link_coding=? WHERE excute_id =?");
        $stmt1->bindParam(1, $data->link);
        $stmt1->bindParam(2, $data->excuteid);
        if ($stmt1->execute()) {
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