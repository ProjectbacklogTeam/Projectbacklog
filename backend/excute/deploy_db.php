<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] == 'PATCH') {
    try {
        $stmt1 = $db->prepare("UPDATE requirements SET statusforprocess=? WHERE id=?");
        $stmt1->bindParam(1, $data->statusforprocess);
        $stmt1->bindParam(2, $data->Requirements_id);
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