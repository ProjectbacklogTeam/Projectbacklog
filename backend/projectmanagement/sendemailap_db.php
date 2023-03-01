<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;


require_once "../PHPMailer/PHPMailer.php";
require_once "../PHPMailer/SMTP.php";
require_once "../PHPMailer/Exception.php";

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    try {

        $stmt = $db->prepare("INSERT INTO emailreqtoapprover (topic_toapprover,email_toapprover,detail_toapprover,projectmanagetment_id) VALUES (?,?,?,?)");
        $stmt->bindParam(1, $data->topic);
        $stmt->bindParam(2, $data->email);
        $stmt->bindParam(3, $data->detail);
        $stmt->bindParam(4, $data->projectmanagementid);
        $stmt->execute();


        $stmt2 = $db->prepare("INSERT INTO approvals (Requirements_id ,approver_id) VALUES (?,?)");
        $stmt2->bindParam(1, $data->idreq);
        $stmt2->bindParam(2, $data->idapprover);
        $stmt2->execute();

        $stmt3 = $db->prepare("UPDATE requirements SET status_req=? WHERE id=?");
        $stmt3->bindParam(1, $data->idstatus);
        $stmt3->bindParam(2, $data->idreq);


        $mail = new PHPMailer();
        $mail->CharSet = 'UTF-8';
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "projectmanagement00001@gmail.com";
        $mail->Password = "roznualebvlzcagz";
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom($data->email);
        $mail->addAddress($data->email);

        $mail->isHTML(true);
        $mail->Subject = $data->topic;
        $mail->Body = $data->detail;
        $mail->send();




        if ($stmt3->execute()) {
            echo json_encode(array("status" => "OK"));
        } else {
            echo json_encode(array("status" => "ERROR"));
        }
    } catch (exception $e) {
        echo 'error :' . $e->getMessage() . '<br/>';
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    switch ($_SERVER['REQUEST_URI']) {
        case '/projectbacklog/backend/projectmanagement/sendemailap_db.php/datalistapprover':
            try {
                $approverall = array();
                foreach ($db->query('SELECT * FROM `approver` JOIN detail on approver.detail_id = detail.id') as $row) {
                    array_push(
                        $approverall,
                        array(
                            'id' => $row[0],
                            'firstname' => $row['firstname_detail'],
                            'lastname' => $row['lastname_detail'],
                            'email' => $row['email_detail'],
                        )

                    );
                }
                echo json_encode($approverall);
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
    try {
        $stmt1 = $db->prepare("UPDATE emailreqtoapprover SET topic_toapprover=?,email_toapprover=?,detail_toapprover=? WHERE projectmanagetment_id  =?");
        $stmt1->bindParam(1, $data->topic);
        $stmt1->bindParam(2, $data->email);
        $stmt1->bindParam(3, $data->detail);
        $stmt1->bindParam(4, $data->projectmanagementid);
      

        $stmt2 = $db->prepare("UPDATE approvals SET approver_id = ?  WHERE Requirements_id = ? ");
        $stmt2->bindParam(1, $data->idapprover);
        $stmt2->bindParam(2, $data->idreq);
        $stmt2->execute();


        $mail = new PHPMailer();
        $mail->CharSet = 'UTF-8';
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->Username = "projectmanagement00001@gmail.com";
        $mail->Password = "roznualebvlzcagz";

        $mail->setFrom($data->email);
        $mail->addAddress($data->email);

        $mail->isHTML(true);
        $mail->Subject = $data->topic;
        $mail->Body = $data->detail;
        $mail->send();

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
