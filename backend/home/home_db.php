<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    try {
        $stmt = $db->prepare("INSERT INTO requirements (processname_req,startdate_req,enddate_req,asis_id,budget_id,doingby_id,tobe_id,admin_id,user_id,approver_id,status_req,status_id,statusforprocess_req) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");
        $stmt->bindParam(1, $data->processname);
        $stmt->bindParam(2, $data->startdate);
        $stmt->bindParam(3, $data->enddate);
        $stmt->bindParam(4, $data->asis_id);
        $stmt->bindParam(5, $data->budget_id);
        $stmt->bindParam(6, $data->doingby_id);
        $stmt->bindParam(7, $data->tobe_id);
        $stmt->bindParam(8, $data->admin_id);
        $stmt->bindParam(9, $data->user_id);
        $stmt->bindParam(10, $data->approver_id);
        $stmt->bindParam(11, $data->status);
        $stmt->bindParam(12,  $data->status_id);
        $stmt->bindParam(13, $data->statusforprocess);
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
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {
        $requirementsall = array();
        foreach ($db->query('SELECT * from requirements
        JOIN doingby  on requirements.doingby_id = doingby.id
        JOIN asis on requirements.asis_id = asis.id
        JOIN tobe on requirements.tobe_id = tobe.id
        JOIN budget on requirements.budget_id = budget.id
        LEFT JOIN admin on requirements.admin_id = admin.id
        LEFT JOIN user on requirements.user_id = user.id
        LEFT JOIN approver on requirements.approver_id = approver.id
        JOIN login on admin.login_id = login.id OR user.login_id = login.id OR approver.id = login.id
        JOIN detail on admin.detail_id = detail.id OR approver.detail_id = detail.id OR user.detail_id = detail.id
            ') as $row) {

            $workflowname = $row['work_flow_req'];
            $bussinessflowname = $row['bussinessflow_req'];
            $extractfilename = $row['extract_file_req'];
            $scopeofworkname = $row['scopeofwork_req'];
            $riskmanagementname = $row['riskmanagement_req'];

            array_push(
                $requirementsall,
                array(
                    'id' => $row[0],
                    'processname' => $row["processname_req"],
                    'startdate' => $row["startdate_req"],
                    'enddate' => $row["enddate_req"],
                    'painpoint' => $row["painpoint_req"],
                    'results' => $row["results_benefit_req"],
                    'description' => $row["description_req"],
                    
                    'doingby' => $row["name_doingby"],
                    'asis' => $row["name_asis"],
                    'tobe' => $row["name_tobe"],
                    'budget' => $row["name_budget"],
                    'statusforprocess' => $row['statusforprocess_req'],
                    'admin_id' => $row['admin_id'],
                    'approver_id' => $row['approver_id'],
                    'user_id' => $row['user_id'],
                    'role_id' => $row[37],
                    'workflowname'=> $workflowname,
                    'bussinessflowname'=> $bussinessflowname,
                    'extractfilename'=> $extractfilename,
                    'scopeofworkname'=> $scopeofworkname,
                    'riskmanagementname'=> $riskmanagementname,
                    'department_id'=> $row['department_id'],

                )
            );
        }
        echo json_encode($requirementsall);
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}
//}
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    try {
        $stmt = $db->prepare("DELETE FROM requirements WHERE id=?");
        $stmt->bindParam(1, $data->id);

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
if ($_SERVER['REQUEST_METHOD'] == 'PATCH') {
    try {
        $stmt = $db->prepare("UPDATE requirements SET processname_req = ?,startdate_req = ?,enddate_req = ?,painpoint_req = ?,description_req = ?,exclusion_constraints_req =?,tobe_id = ?,asis_id =?,doingby_id =?,budget_id = ?,status_req=?,statusforprocess_req=? WHERE id=?");
        $stmt->bindParam(1, $data->processname);
        $stmt->bindParam(2, $data->startdate);
        $stmt->bindParam(3, $data->enddate);
        $stmt->bindParam(4, $data->painpoint);
        $stmt->bindParam(5, $data->description);
        $stmt->bindParam(6, $data->results_benefit);
        $stmt->bindParam(7, $data->tobe_id);
        $stmt->bindParam(8, $data->asis_id);
        $stmt->bindParam(9, $data->doingby_id);
        $stmt->bindParam(10, $data->budget_id);
        $stmt->bindParam(11, $data->status);
        $stmt->bindParam(12, $data->statusforprocess);
        $stmt->bindParam(13, $data->id);
        if ($stmt->execute()) {
            echo json_encode(array("status" => "OK"));
        } else {
            echo json_encode(array("status" => "ERROR"));
        }

        // $stmt = $db->prepare("UPDATE requirements SET processname_req = ?,startdate_req = ?,enddate_req = ?,painpoint_req = ?,description_req = ?,exclusion_constraints_req =?,tobe_id = ?,asis_id =?,doingby_id =?,budget_id = ?,status_req=?,statusforprocess_req=? WHERE id=?");
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}
