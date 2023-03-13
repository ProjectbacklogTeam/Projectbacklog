<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    switch ($_SERVER['REQUEST_URI']) {
        case '/projectbacklog/backend/excute/plancoding_db.php/saveplancoding':
            try {
                $startcoding =  $_POST['startcoding'];
                $endcoding =  $_POST['endcoding'];
                $formatcoding =  $_POST['formatcoding'];
                $nameuniversitycoding =  $_POST['nameuniversitycoding'];
                $languagescoding =  $_POST['languagescoding'];
                $databasecoding =  $_POST['databasecoding'];
                $idexcute =  $_POST['idexcute'];
                $statusplan =  $_POST['statusplan'];

                if (isset($_FILES['fileplancoding']['name'])) {
                    $filename1 = $_FILES['fileplancoding']['name'];
                    $newFileName1 = uniqid("fileplancoding") . '-' . $filename1;
                    $location1 = 'plancoding_file/' . $newFileName1;
                    $file_extension1 = pathinfo($location1, PATHINFO_EXTENSION);
                    $file_extension1 = strtolower($file_extension1);
                    $valid_ext1 = array("pdf", "doc", "docx", "jpg", "png", "jpeg");

                    echo $newFileName1;
                    if (in_array($file_extension1, $valid_ext1)) {
                        if (move_uploaded_file($_FILES['fileplancoding']['tmp_name'], $location1)) {
                        }
                    }
                } else {
                    $newFileName1 = "";
                }


                $stmt1 = $db->prepare("INSERT INTO plancoding (startcoding_plancoding,endcoding_plancoding,format_plancoding,name_university_plancoding,languages_plancoding,databasecoding_plancoding,excute_id,statusplan_plancoding,file_plancoding) VALUES (?,?,?,?,?,?,?,?,?)");
                $stmt1->bindParam(1, $startcoding);
                $stmt1->bindParam(2, $endcoding);
                $stmt1->bindParam(3, $formatcoding);
                $stmt1->bindParam(4, $nameuniversitycoding);
                $stmt1->bindParam(5, $languagescoding);
                $stmt1->bindParam(6, $databasecoding);
                $stmt1->bindParam(7, $idexcute);
                $stmt1->bindParam(8, $statusplan);
                $stmt1->bindParam(9, $newFileName1);

                if ($stmt1->execute()) {
                    echo json_encode(array("status" => "OK"));
                } else {
                    echo json_encode(array("status" => "ERROR"));
                }
            } catch (PDOException $e) {
                print "Error!: " . $e->getMessage() . "<br/>";
                die();
            }
            break;

        case '/projectbacklog/backend/excute/plancoding_db.php/updateplancoding':
            try {
                $idexcute =  $_POST['idexcute'];

                $startcoding =  $_POST['startcoding'];
                $endcoding =  $_POST['endcoding'];
                $formatcoding =  $_POST['formatcoding'];
                $nameuniversitycoding =  $_POST['nameuniversitycoding'];
                $languagescoding =  $_POST['languagescoding'];
                $databasecoding =  $_POST['databasecoding'];
                $idexcute =  $_POST['idexcute'];
                $statusplan =  $_POST['statusplan'];

                if (isset($_FILES['fileplancoding']['name'])) {
                    $filename2 = $_FILES['fileplancoding']['name'];
                    $newFileName2 = uniqid("fileplancoding") . '-' . $filename2;
                    $location2 = 'plancoding_file/' . $newFileName2;
                    $file_extension2 = pathinfo($location2, PATHINFO_EXTENSION);
                    $file_extension2 = strtolower($file_extension2);
                    $valid_ext2 = array("pdf", "doc", "docx", "jpg", "png", "jpeg");
                    $stmt2 = $db->prepare("UPDATE plancoding SET file_plancoding=? WHERE excute_id =?");
                    $stmt2->bindParam(1, $newFileName2);
                    $stmt2->bindParam(2, $idexcute);
                    $stmt2->execute();
                    if (in_array($file_extension2, $valid_ext2)) {
                        if (move_uploaded_file($_FILES['fileplancoding']['tmp_name'], $location2)) {
                        }
                    }
                } else {
                    $newFileName2 = "";
                }


                $stmt = $db->prepare("UPDATE plancoding SET startcoding_plancoding = ?,endcoding_plancoding = ?,format_plancoding=?,name_university_plancoding=?,languages_plancoding=?,databasecoding_plancoding=? WHERE excute_id =?");
                $stmt->bindParam(1, $startcoding);
                $stmt->bindParam(2, $endcoding);
                $stmt->bindParam(3, $formatcoding);
                $stmt->bindParam(4, $nameuniversitycoding);
                $stmt->bindParam(5, $languagescoding);
                $stmt->bindParam(6, $databasecoding);
                $stmt->bindParam(7, $idexcute);


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



?>
<?php

?>