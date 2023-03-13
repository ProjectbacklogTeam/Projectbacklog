<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';




$data = json_decode(file_get_contents("php://input"));
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    try {
        $startDateStamp = strtotime($data->startdate);
        $endDateStamp = strtotime($data->enddate);
     


        if($startDateStamp > $endDateStamp){
            echo json_encode(array("status" => "TIMEERROR"));
        }else{
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
        JOIN detail on admin.detail_admin_id = detail.id OR approver.detail_approver_id = detail.id OR user.detail_user_id = detail.id
        LEFT JOIN approvals on approvals.Requirements_id = requirements.id
        LEFT JOIN excute on excute.Approvals_id = approvals.id
        LEFT JOIN valuerelease on valuerelease.excute_id = excute.id
        JOIN feedback
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
                    'role_id' => $row['role_id'],
                    'workflowname'=> $workflowname,
                    'bussinessflowname'=> $bussinessflowname,
                    'extractfilename'=> $extractfilename,
                    'scopeofworkname'=> $scopeofworkname,
                    'riskmanagementname'=> $riskmanagementname,
                    'department_id'=> $row['department_id'],
                    'benefitpeoples_value_number' => $row["benefitpeoples_value_number"],
                    'benefitmoneys_value_number' => $row["benefitmoneys_value_number"],
                    'benefitpeoplemandayss_value_number' => $row["benefitpeoplemandayss_value_number"],
                    'link_feedback' => $row["link_feedback"],
                    'status_req' => $row["status_req"],
                    'processnameshortname'=> $row['shortname_req'],
                    'relative'=> $row['refer_req'],

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
        $workflow_state = isset($_SESSION['workflow_state']);
        $scopeofwork_state = isset($_SESSION['scopeofwork_state']);
        $riskmanagement_state = isset($_SESSION['riskmanagement_state']);
        $extractfile_state = isset($_SESSION['extractfile_state']);
        $bussinessflow_state = isset($_SESSION['bussinessflow_state']);
 

        if($workflow_state || $scopeofwork_state || $riskmanagement_state || $extractfile_state || $bussinessflow_state ){
            $processnameshortnameunput = $data->processnameshortname;

            if(strlen($processnameshortnameunput) > 0){
                $stmt = $db->prepare("UPDATE requirements SET processname_req = ?,startdate_req = ?,enddate_req = ?,painpoint_req = ?,description_req = ?,results_benefit_req =?,tobe_id = ?,asis_id =?,doingby_id =?,budget_id = ?,status_req=?,statusforprocess_req=?,shortname_req=?,refer_req=?,admin_id=?,user_id=?,approver_id=? WHERE id=?");
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
                $stmt->bindParam(13, $data->processnameshortname);
                $stmt->bindParam(14, $data->relative);
                $stmt->bindParam(15, $data->adminid);
                $stmt->bindParam(16, $data->userid);
                $stmt->bindParam(17, $data->approverid);
                $stmt->bindParam(18, $data->id);
                if ($stmt->execute()) {

                    unset($_SESSION['workflow_state']);
                    unset($_SESSION['scopeofwork_state']);
                    unset($_SESSION['riskmanagement_state']);
                    unset($_SESSION['extractfile_state']);
                    unset($_SESSION['bussinessflow_state']);

                    echo json_encode(array("status" => "OK"));
                } else {
                    echo json_encode(array("status" => "ERROR"));
                }
            }else{
                echo json_encode(array("status" => "INPUTTEXT"));
    
            }
        }else{
            $processnameshortnameunput = $data->processnameshortname;
            if(strlen($processnameshortnameunput) > 0){
                $stmt = $db->prepare("UPDATE requirements SET processname_req = ?,startdate_req = ?,enddate_req = ?,painpoint_req = ?,description_req = ?,results_benefit_req =?,tobe_id = ?,asis_id =?,doingby_id =?,budget_id = ?,status_req=?,statusforprocess_req=?,shortname_req=?,refer_req=?,admin_id=?,user_id=?,approver_id=? WHERE id=?");
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
                $stmt->bindParam(13, $data->processnameshortname);
                $stmt->bindParam(14, $data->relative);
                $stmt->bindParam(15, $data->adminid);
                $stmt->bindParam(16, $data->userid);
                $stmt->bindParam(17, $data->approverid);
                $stmt->bindParam(18, $data->id);

                // echo $data->adminid;
                // echo $data->userid;
                // echo $data->approverid;
                if ($stmt->execute()) {
                    echo json_encode(array("status" => "OK"));
                } else {
                    echo json_encode(array("status" => "ERROR"));
                }

            }else{
                echo json_encode(array("status" => "INPUTTEXT"));
    
            }
        }

     

      
        // $stmt = $db->prepare("UPDATE requirements SET processname_req = ?,startdate_req = ?,enddate_req = ?,painpoint_req = ?,description_req = ?,exclusion_constraints_req =?,tobe_id = ?,asis_id =?,doingby_id =?,budget_id = ?,status_req=?,statusforprocess_req=? WHERE id=?");
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}
?>