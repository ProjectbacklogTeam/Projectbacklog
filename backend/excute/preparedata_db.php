<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
   
    switch ($_SERVER['REQUEST_URI']) {
        case '/projectbacklog/backend/excute/preparedata_db.php/savepreparedata':
            try {

                $excuteid = $_POST['excuteid'];
                $systemflowchart_status = $_POST['systemflowchart_status'];
                $dataflowdiagram_status = $_POST['dataflowdiagram_status'];
                $erdiargram_status = $_POST['erdiargram_status'];
                $usecasediagram_status = $_POST['usecasediagram_status'];
                $linkprepare = $_POST['linkprepare'];
                $statusforprocess = $_POST['statusforprocess'];
                $reqid = $_POST['reqid'];


                if (isset($_FILES['sitemapfile']['name'])) {
                    $filename1 = $_FILES['sitemapfile']['name'];
                    $newFileName1 = uniqid("sitemapfile") . '-' . $filename1;
                    $location1 = 'preparedata_file/' . $newFileName1;
                    $file_extension1 = pathinfo($location1, PATHINFO_EXTENSION);
                    $file_extension1 = strtolower($file_extension1);
                    $valid_ext1 = array("pdf", "doc", "docx", "jpg", "png", "jpeg");
                    
                    if (in_array($file_extension1, $valid_ext1)) {
                        if (move_uploaded_file($_FILES['sitemapfile']['tmp_name'], $location1)) {
            
                        }
                    }
                }else{
                    $newFileName1="";
                }

                $stmt1 = $db->prepare("INSERT INTO preparedata(excute_id,sitemap_preparedata,systemflowchart_status_preparedata,dataflowdiagram_status_preparedata,erdiargram_status_preparedata,datadic_status_preparedata,usecasediagram_status_preparedata,linkprepare_preparedata) VALUES (?,?,?,?,?,?,?,?)");
                $stmt1->bindParam(1,$excuteid);
                $stmt1->bindParam(2, $newFileName1);
                $stmt1->bindParam(3, $systemflowchart_status);
                $stmt1->bindParam(4, $dataflowdiagram_status);
                $stmt1->bindParam(5, $erdiargram_status);
                $stmt1->bindParam(6, $datadic_status);
                $stmt1->bindParam(7, $usecasediagram_status);
                $stmt1->bindParam(8, $linkprepare);

                $stmt2 = $db->prepare("UPDATE requirements SET statusforprocess_req=? WHERE id=?");
                $stmt2->bindParam(1, $statusforprocess);
                $stmt2->bindParam(2, $reqid);
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
            break;
            case '/projectbacklog/backend/excute/preparedata_db.php/updatepreparedata':
                try {

                    $excuteid = $_POST['excuteid'];
                    $systemflowchart_status = $_POST['systemflowchart_status'];
                    $dataflowdiagram_status = $_POST['dataflowdiagram_status'];
                    $erdiargram_status = $_POST['erdiargram_status'];
                    $usecasediagram_status = $_POST['usecasediagram_status'];
                    $linkprepare = $_POST['linkprepare'];
                    $statusforprocess = $_POST['statusforprocess'];


                    if (isset($_FILES['sitemapfile']['name'])) {
                        $filename2 = $_FILES['sitemapfile']['name'];
                        $newFileName2 = uniqid("sitemapfile") . '-' . $filename2;
                        $location1 = 'preparedata_file/' . $newFileName2;
                        $file_extension1 = pathinfo($location1, PATHINFO_EXTENSION);
                        $file_extension1 = strtolower($file_extension1);
                        $valid_ext1 = array("pdf", "doc", "docx", "jpg", "png", "jpeg");
                        $stmt2 = $db->prepare("UPDATE preparedata SET sitemap_preparedata=? WHERE excute_id =?");
                        $stmt2->bindParam(1, $newFileName2);
                        $stmt2->bindParam(2, $excuteid);

                        $stmt2->execute();
                        if (in_array($file_extension1, $valid_ext1)) {
                            if (move_uploaded_file($_FILES['sitemapfile']['tmp_name'], $location1)) {
                
                            }
                        }
                    }
    

                    $stmt1 = $db->prepare("UPDATE preparedata SET systemflowchart_status_preparedata=?,dataflowdiagram_status_preparedata=?,erdiargram_status_preparedata=?,datadic_status_preparedata=?,usecasediagram_status_preparedata=?,linkprepare_preparedata=? WHERE excute_id =?");
                    $stmt1->bindParam(1, $systemflowchart_status);
                    $stmt1->bindParam(2, $dataflowdiagram_status);
                    $stmt1->bindParam(3, $erdiargram_status);
                    $stmt1->bindParam(4, $datadic_status);
                    $stmt1->bindParam(5, $usecasediagram_status);
                    $stmt1->bindParam(6, $linkprepare);
                    $stmt1->bindParam(7,$excuteid);
                    
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
                default:
            header('HTTP/1.1 404 Not Found');
            exit;
    }
   
   
   
}

if ($_SERVER['REQUEST_METHOD'] == 'PATCH') {
  
}


?>
<?php

?>