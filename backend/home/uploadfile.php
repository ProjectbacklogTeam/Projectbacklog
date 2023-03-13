<?php
include '../connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $processnameshortname =  $_POST['processnameshortname'];


    if(strlen($processnameshortname) > 0){
        $idreq =  $_POST['idreq'];

        if (isset($_FILES['workflow']['name'])) {
            $filename1 = $_FILES['workflow']['name'];
            $newFileName1 = uniqid("workflow") . '-' . $filename1;
            $location1 = 'fileupload/workflow/' . $newFileName1;
            $file_extension1 = pathinfo($location1, PATHINFO_EXTENSION);
            $file_extension1 = strtolower($file_extension1);
            $valid_ext1 = array("pdf", "doc", "docx", "jpg", "png", "jpeg");
    
    
            if (in_array($file_extension1, $valid_ext1)) {
                $_SESSION['workflow_state'] = 1;
                $stmt1 = $db->prepare("UPDATE requirements SET work_flow_req = ? WHERE id=?");
                $stmt1->bindParam(1, $newFileName1);
                $stmt1->bindParam(2, $idreq);
                $stmt1->execute();
                
                if (move_uploaded_file($_FILES['workflow']['tmp_name'], $location1)) {
                }
            } else {
                header("HTTP/1.1 400 Bad Request");
                echo json_encode(array("status" => "ERROR"));
            }
        }
    
        if (isset($_FILES['scopeofwork']['name'])) {
            $filename2 = $_FILES['scopeofwork']['name'];
            $newFileName2 = uniqid("scopeofwork") . '-' . $filename2;
            $location2 = 'fileupload/scopeofwork/' . $newFileName2;
            $file_extension2 = pathinfo($location2, PATHINFO_EXTENSION);
            $file_extension2 = strtolower($file_extension2);
            $valid_ext2 = array("pdf", "doc", "docx", "jpg", "png", "jpeg");
    
    
    
            if (in_array($file_extension2, $valid_ext2)) {
                $_SESSION['scopeofwork_state'] = 1;
                $stmt2 = $db->prepare("UPDATE requirements SET scopeofwork_req = ? WHERE id=?");
                $stmt2->bindParam(1, $newFileName2);
                $stmt2->bindParam(2, $idreq);
                $stmt2->execute();
    
                if (move_uploaded_file($_FILES['scopeofwork']['tmp_name'], $location2)) {
                }
            } else {
                header("HTTP/1.1 400 Bad Request");
                echo json_encode(array("status" => "ERROR"));
            }
        }
    
    
        if (isset($_FILES['bussinessflow']['name'])) {
            $filename3 = $_FILES['bussinessflow']['name'];
            $newFileName3 = uniqid("bussinessflow") . '-' . $filename3;
            $location3 = 'fileupload/bussinessflow/' . $newFileName3;
            $file_extension3 = pathinfo($location3, PATHINFO_EXTENSION);
            $file_extension3 = strtolower($file_extension3);
            $valid_ext3 = array("pdf", "doc", "docx", "jpg", "png", "jpeg");
    
            if (in_array($file_extension3, $valid_ext3)) {
                $_SESSION['bussinessflow_state'] = 1;
                $stmt3 = $db->prepare("UPDATE requirements SET bussinessflow_req=? WHERE id=?");
                $stmt3->bindParam(1, $newFileName3);
                $stmt3->bindParam(2, $idreq);
                $stmt3->execute();
    
                if (move_uploaded_file($_FILES['bussinessflow']['tmp_name'], $location3)) {
                }
            } else {
                header("HTTP/1.1 400 Bad Request");
                echo json_encode(array("status" => "ERROR"));
            }
        }
    
    
        if (isset($_FILES['riskmanagement']['name'])) {
            $filename4 = $_FILES['riskmanagement']['name'];
            $newFileName4 = uniqid("riskmanagement") . '-' . $filename4;
            $location4 = 'fileupload/riskmanagement/' . $newFileName4;
            $file_extension4 = pathinfo($location4, PATHINFO_EXTENSION);
            $file_extension4 = strtolower($file_extension4);
            $valid_ext4 = array("pdf", "doc", "docx", "jpg", "png", "jpeg");
    
    
    
            if (in_array($file_extension4, $valid_ext4)) {
                $_SESSION['riskmanagement_state'] = 1;
                $stmt4 = $db->prepare("UPDATE requirements SET riskmanagement_req = ? WHERE id=?");
                $stmt4->bindParam(1, $newFileName4);
                $stmt4->bindParam(2, $idreq);
                $stmt4->execute();
                if (move_uploaded_file($_FILES['riskmanagement']['tmp_name'], $location4)) {
                }
            } else {
                header("HTTP/1.1 400 Bad Request");
                echo json_encode(array("status" => "ERROR"));
            }
        }
    
    
        if (isset($_FILES['extractfile']['name'])) {
            $filename5 = $_FILES['extractfile']['name'];
            $newFileName5 = uniqid("extractfile") . '-' . $filename5;
            $location5 = 'fileupload/extractfile/' . $newFileName5;
            $file_extension5 = pathinfo($location5, PATHINFO_EXTENSION);
            $file_extension5 = strtolower($file_extension5);
            $valid_ext5 = array("pdf", "doc", "docx", "jpg", "png", "jpeg");
    
    
    
            if (in_array($file_extension5, $valid_ext5)) {
                $_SESSION['extractfile_state'] = 1;
                $stmt5 = $db->prepare("UPDATE requirements SET extract_file_req = ? WHERE id=?");
                $stmt5->bindParam(1, $newFileName5);
                $stmt5->bindParam(2, $idreq);
                $stmt5->execute();
                if (move_uploaded_file($_FILES['extractfile']['tmp_name'], $location5)) {
                }
            } else {
                header("HTTP/1.1 400 Bad Request");
                echo json_encode(array("status" => "ERROR"));
            }
        }

    }else{
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(array("status" => "INPUTTEXT"));    
    }


}
