<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    try {
        $stmt1 = $db->prepare("INSERT INTO plancoding (startcoding,endcoding,format,name_university,languages,databasecoding,excute_id,statusplan) VALUES (?,?,?,?,?,?,?,?)");
        $stmt1->bindParam(1, $data->startcoding);
        $stmt1->bindParam(2, $data->endcoding);
        $stmt1->bindParam(3, $data->formatcoding);
        $stmt1->bindParam(4, $data->nameuniversitycoding);
        $stmt1->bindParam(5, $data->languagescoding);
        $stmt1->bindParam(6, $data->databasecoding);
        $stmt1->bindParam(7, $data->idexcute);
        $stmt1->bindParam(8, $data->statusplan);
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
        $stmt = $db->prepare("UPDATE plancoding SET startcoding = ?,endcoding = ?,format=?,name_university=?,languages=?,databasecoding=? WHERE excute_id =?");
        $stmt->bindParam(1, $data->startcoding);
        $stmt->bindParam(2, $data->endcoding);
        $stmt->bindParam(3, $data->formatcoding);
        $stmt->bindParam(4, $data->nameuniversitycoding);
        $stmt->bindParam(5, $data->languagescoding);
        $stmt->bindParam(6, $data->databasecoding);
        $stmt->bindParam(7, $data->idexcute);
   
        
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