<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    try {
        $stmt1 = $db->prepare("INSERT INTO prototype (file,link,excute_id) VALUES (?,?,?)");
        $stmt1->bindParam(1, $data->file);
        $stmt1->bindParam(2, $data->link);
        $stmt1->bindParam(3, $data->excuteid);
        $stmt2 = $db->prepare("UPDATE requirements SET statusforprocess=? WHERE id=?");
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

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {
        $stmt=$db->query('SELECT * FROM prototype WHERE excute_id = ?');
        $stmt->bindParam(1, $data->excute_id);
        $stmt->execute();
        $prototype = array();
        foreach ($stmt as $row) {             
            array_push($prototype, array(
                'id' => $row[0],
                'file' => $row[1],
                'link' => $row[2],
            )            
         ); 
        }
        echo json_encode($prototype);
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'PATCH') {
    try {
        $stmt = $db->prepare("UPDATE prototype SET file = ?,link = ? WHERE excute_id =?");
        $stmt->bindParam(1, $data->file);
        $stmt->bindParam(2, $data->link);
        $stmt->bindParam(3, $data->excuteid);
        
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