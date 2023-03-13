<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';
//[$_GET['id']]
$data = json_decode(file_get_contents("php://input"));
try {
    $stmtone = $db->prepare("SELECT * FROM requirements 
    JOIN doingby on requirements.doingby_id = doingby.id 
    JOIN asis on requirements.asis_id = asis.id 
    JOIN tobe on requirements.tobe_id = tobe.id 
    JOIN budget on requirements.budget_id = budget.id 
    LEFT JOIN admin on requirements.admin_id = admin.id
    LEFT JOIN approver on requirements.approver_id = approver.id
    LEFT JOIN user on requirements.user_id = user.id
    JOIN detail on admin.detail_admin_id = detail.id OR approver.detail_approver_id = detail.id OR user.detail_user_id = detail.id
    JOIN division on detail.division_id = division.id
    JOIN section on detail.section_id = section.id
    JOIN department on detail.department_id = department.id
    WHERE requirements.id = ?");
    $stmtone->execute([$_GET['id']]);
    foreach ($stmtone as $row) {


        $workflowname = $row['work_flow_req'];
        $bussinessflowname = $row['bussinessflow_req'];
        $extractfilename = $row['extract_file_req'];
        $scopeofworkname = $row['scopeofwork_req'];
        $riskmanagementname = $row['riskmanagement_req'];

        $req = array(
            'id' => $row[0],
            'processname' => $row['processname_req'],
            'startdate' => $row['startdate_req'],
            'enddate' => $row['enddate_req'],
            'doingbyid' => $row['doingby_id'],
            'doingby' => $row['name_doingby'],
            'asisid' => $row['asis_id'],
            'asis' => $row['name_asis'],
            'tobeid' => $row['tobe_id'],
            'tobe' => $row['name_tobe'],
            'budgetid' => $row['budget_id'],
            'budget' => $row['name_budget'],
            'empid'=> $row['codeuser_detail'],
            'firstname'=> $row['firstname_detail'],
            'lastname'=> $row['lastname_detail'],
            'division'=> $row['name_division'],
            'department'=> $row['name_department'],
            'section'=> $row['name_section'],
            'processnameshortname'=> $row['shortname_req'],
            'workflowname'=> $workflowname,
            'bussinessflowname'=> $bussinessflowname,
            'extractfilename'=> $extractfilename,
            'scopeofworkname'=> $scopeofworkname,
            'riskmanagementname'=> $riskmanagementname,
            'painpoint' => $row["painpoint_req"],
            'results' => $row["results_benefit_req"],
            'description' => $row["description_req"],   
            'relative' => $row["refer_req"],   
            'admin_id' => $row['admin_id'],
            'approver_id' => $row['approver_id'],
            'user_id' => $row['user_id'],
        );
        echo json_encode($req);
        break;
    }
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}


?>
<?php

?>