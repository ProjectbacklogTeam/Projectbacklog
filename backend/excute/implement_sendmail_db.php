<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

use PHPMailer\PHPMailer\PHPMailer;

require_once "../PHPMailer/PHPMailer.php";
require_once "../PHPMailer/SMTP.php";
require_once "../PHPMailer/Exception.php";

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    try {

        $topic = $data->topic;
        $email = $data->email;
        $detail = $data->detail;



        if (strlen($topic) == 0 || strlen($email) == 0 || strlen($detail) == 0) {
            echo json_encode(array("status" => "ERROREMAIL"));
        } else {

        $stmt = $db->prepare("INSERT INTO implement (email_implement,topic_implement,detail_implement,id_excute ) VALUES (?,?,?,?)");
        $stmt->bindParam(1, $data->email);
        $stmt->bindParam(2, $data->topic);
        $stmt->bindParam(3, $data->detail);
        $stmt->bindParam(4, $data->idexcute);

        $stmt3 = $db->prepare("UPDATE requirements SET statusforprocess_req=? WHERE id=?");
        $stmt3->bindParam(1, $data->idstatusforprocess);
        $stmt3->bindParam(2, $data->idreq);
        $stmt3->execute();

        $mail = new PHPMailer();
        $mail->CharSet = 'UTF-8';
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "projectmanagement00001@gmail.com";
        $mail->Password = "mjxizexthwyfgkpd";
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;



        $mail->setFrom($data->email);
        $mail->addAddress($data->email);

        $mail->isHTML(true);
        $mail->Subject = $data->topic;
        $mail->Body = $data->detail;

        $mail->send();

        if ($stmt->execute()) {
            echo json_encode(array("status" => "OK"));
        } else {
            echo json_encode(array("status" => "ERROR"));
        }
    }
    } catch (exception $e) {
        echo 'error :' . $e->getMessage() . '<br/>';
    }
}

