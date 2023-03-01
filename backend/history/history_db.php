<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';
date_default_timezone_set('Asia/Bangkok');

$data = json_decode(file_get_contents("php://input"));

$timestamp = date('Y-m-d H:i:sa');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    try {
        $stmt = $db->prepare("INSERT INTO history(processname_history,startdate_history, enddate_history,painpoint_history,description_history, results_benefit_history, exclusion_constraints_history, work_flow_history, extract_file_history,admin_id, approver_id, user_id, tobe_id, asis_id, doingby_id,budget_id) SELECT processname_req, startdate_req, enddate_req, painpoint_req,description_req, results_benefit_req, exclusion_constraints_req, work_flow_req, extract_file_req, admin_id, approver_id, user_id, tobe_id, asis_id, doingby_id,budget_id FROM requirements WHERE id=?");
        $stmt->bindParam(1, $data->id);
        $stmt2 = $db->prepare("INSERT INTO history(reason_history,deletetime_history) VALUES (?,?)");
        $stmt2->bindParam(1, $data->reason);
        $stmt2->bindParam(2, $timestamp);
        $stmt2->execute();

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
