<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {
        $requirementsall = array();
        $stmtoneexcute = $db->prepare("SELECT * from `excute`
        JOIN approvals on excute.Approvals_id = approvals.id
        JOIN requirements on approvals.Requirements_id = requirements.id
        JOIN doingby on  requirements.doingby_id = doingby.id 
        JOIN tobe on requirements.tobe_id = tobe.id 
        JOIN asis on requirements.asis_id = asis.id 
        JOIN budget on requirements.budget_id = budget.id 
        JOIN status on requirements.status_id = status.id
        LEFT JOIN admin on requirements.admin_id = admin.id
        LEFT JOIN approver on requirements.approver_id = approver.id
        LEFT JOIN user on requirements.user_id = user.id
        JOIN detail on admin.detail_id = detail.id OR approver.detail_id = detail.id OR user.detail_id = detail.id
        JOIN division on detail.division_id = division.id
        JOIN section on detail.section_id = section.id
        JOIN department on detail.department_id = department.id
        LEFT JOIN prototype on prototype.excute_id = excute.id
        LEFT JOIN coding on coding.excute_id = excute.id
        LEFT JOIN testing on testing.excute_id = excute.id
        LEFT JOIN preparedata on preparedata.excute_id = excute.id
        LEFT JOIN plancoding on plancoding.excute_id = excute.id
        LEFT JOIN confirmprototype on confirmprototype.prototype_id = prototype.id
		LEFT JOIN implement on implement.id_excute = excute.id WHERE excute.id = ?");
        $stmtoneexcute->execute([$_GET['idexcute']]);

        foreach($stmtoneexcute as $row) {

            $workflowname = $row['work_flow_req'];
            $bussinessflowname = $row['bussinessflow_req'];
            $extractfilename = $row['extract_file_req'];
            $scopeofworkname = $row['scopeofwork_req'];
            $riskmanagementname = $row['riskmanagement_req'];

            array_push(
                $requirementsall,
                array(
                    'idexcute' => $row[0],
                    'id' => $row[5],
                    'processname' => $row["processname_req"],
                    'startdate' => $row["startdate_req"],
                    'enddate' => $row["enddate_req"],
                    'painpoint' => $row["painpoint_req"],
                    'description' => $row["description_req"],
                    'results_benefit' => $row["results_benefit_req"],
                    'exclusion_constraints' => $row["exclusion_constraints_req"],
                    'work_flow' => $row["work_flow_req"],
                    'extract_file' => $row["extract_file_req"],
                    'riskmanagement' => $row["riskmanagement_req"],
                    'scopeofwork' => $row["scopeofwork_req"],
                    'bussinessflow' => $row["bussinessflow_req"],
                    'statusforprocess' => $row["statusforprocess_req"],
                    'doing_by' => $row["name_doingby"],
                    'tobe' => $row["name_tobe"],
                    'asis' => $row["name_asis"],
                    'budget' => $row["name_budget"],
                    'status' => $row["name_status"],
                    'codeuser' => $row["codeuser_detail"],
                    'firstname' => $row["firstname_detail"],
                    'lastname' => $row["lastname_detail"],
                    'fileprototype' => $row["file_prototype"],
                    'linkprototype' => $row["link_prototype"],
                    'linkcoding' => $row["link_coding"],
                    'linktesting' => $row["link_testing"],
                    'system_status' => $row['systemflowchart_status_preparedata'],
                    'dataflow_status' => $row['dataflowdiagram_status_preparedata'],
                    'erdiagram_status' => $row['erdiargram_status_preparedata'],
                    'datadic_status' => $row['datadic_status_preparedata'],
                    'usecase_status' => $row['usecasediagram_status_preparedata'],
                    'linkprepare' => $row['linkprepare_preparedata'],
                    'statusplan' => $row['statusplan_plancoding'],
                    'start_coding' => $row['startcoding_plancoding'],
                    'end_coding' => $row['endcoding_plancoding'],
                    'format_coding' => $row['format_plancoding'],
                    'name_university_coding' => $row['name_university_plancoding'],
                    'database_coding' => $row['databasecoding_plancoding'],
                    'languages_coding' => $row['languages_plancoding'],
                    'idprototype' => $row[53],
                    'emailconfirmprototype' => $row['email_confirmprototype'],
                    'topicconfirmprototype' => $row['topic_confirmprototype'],
                    'detailconfirmprototype' => $row['detail_confirmprototype'],
                    'emailimplement' => $row['email_implement'],
                    'topicimplement' => $row['topic_implement'],
                    'detailimplement' => $row['detail_implement'],
                    'empid' => $row['codeuser_detail'],
                    'division'=> $row['name_division'],
                    'department'=> $row['name_department'],
                    'section'=> $row['name_section'],
                    'prototypeid'=> $row[64],
                    'workflowname'=> $workflowname,
                    'bussinessflowname'=> $bussinessflowname,
                    'extractfilename'=> $extractfilename,
                    'scopeofworkname'=> $scopeofworkname,
                    'riskmanagementname'=> $riskmanagementname,
                    'status_id'=>$row['status_id'],
                    'sitemap'=>$row['sitemap_preparedata'],
                    'fileplancoding'=>$row['file_plancoding'],
                    
                )
            );
        }
        echo json_encode($requirementsall);
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}



//
?>
<?php

?>