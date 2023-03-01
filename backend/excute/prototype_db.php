<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    switch ($_SERVER['REQUEST_URI']) {
        case '/projectbacklog/backend/excute/prototype_db.php/saveprototype':
            try {
                $idreq =  $_POST['Requirements_id'];
                $statusforprocess =  $_POST['statusforprocess'];
                $excuteid =  $_POST['excuteid'];
                $link =  $_POST['link'];
                echo $statusforprocess;
                echo  $link;

                if (isset($_FILES['prototypefile']['name'])) {



                    $filename1 = $_FILES['prototypefile']['name'];
                    $newFileName1 = uniqid("prototype") . '-' . $filename1;
                    $location1 = 'prototype_file/' . $newFileName1;
                    $file_extension1 = pathinfo($location1, PATHINFO_EXTENSION);
                    $file_extension1 = strtolower($file_extension1);
                    $valid_ext1 = array("pdf", "doc", "docx", "jpg", "png", "jpeg");

                    $stmt1 = $db->prepare("INSERT INTO prototype (file_prototype,link_prototype,excute_id) VALUES (?,?,?)");
                    $stmt1->bindParam(1, $newFileName1);
                    $stmt1->bindParam(2, $link);
                    $stmt1->bindParam(3, $excuteid);

                    $stmt2 = $db->prepare("UPDATE requirements SET statusforprocess_req=? WHERE id=?");
                    $stmt2->bindParam(1, $statusforprocess);
                    $stmt2->bindParam(2,  $idreq);
                    $stmt2->execute();

                    if (in_array($file_extension1, $valid_ext1)) {
                        if (move_uploaded_file($_FILES['prototypefile']['tmp_name'], $location1)) {
                            if ($stmt1->execute()) {
                                echo json_encode(array("status" => "OK"));
                            } else {
                                echo json_encode(array("status" => "ERROR"));
                            }
                        }
                    }
                } else {
                    echo json_encode(array("status" => "notok"));
                }
            } catch (PDOException $e) {
                print "Error!: " . $e->getMessage() . "<br/>";
                die();
            }
            break;
        case '/projectbacklog/backend/excute/prototype_db.php/updateprototype':
            try {

                $link =  $_POST['link'];
                $excuteid = $_POST['excuteid'];

                if (isset($_FILES['prototypefile']['name'])) {

                    $filename1 = $_FILES['prototypefile']['name'];
                    $newFileName1 = uniqid("prototype") . '-' . $filename1;
                    $location1 = 'prototype_file/' . $newFileName1;
                    $file_extension1 = pathinfo($location1, PATHINFO_EXTENSION);
                    $file_extension1 = strtolower($file_extension1);
                    $valid_ext1 = array("pdf", "doc", "docx", "jpg", "png", "jpeg");

                    $stmt = $db->prepare("UPDATE prototype SET file_prototype = ?,link_prototype = ? WHERE excute_id =?");
                    $stmt->bindParam(1, $newFileName1);
                    $stmt->bindParam(2, $link);
                    $stmt->bindParam(3, $excuteid);

                    if (in_array($file_extension1, $valid_ext1)) {
                        if (move_uploaded_file($_FILES['prototypefile']['tmp_name'], $location1)) {
                            if ($stmt->execute()) {
                                echo json_encode(array("status" => "OK"));
                            } else {
                                echo json_encode(array("status" => "ERROR"));
                            }
                        }
                    }
                } else {
                    echo json_encode(array("status" => "notok"));
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

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {
        $stmt = $db->query('SELECT * FROM prototype WHERE excute_id = ?');
        $stmt->bindParam(1, $data->excute_id);
        $stmt->execute();
        $prototype = array();
        foreach ($stmt as $row) {
            array_push(
                $prototype,
                array(
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



?>
<?php

?>