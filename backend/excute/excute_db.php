<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {
        $requirementsall = array();
        foreach ($db->query('SELECT * from `excute`
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
        LEFT JOIN prototype on prototype.excute_id = excute.id
        LEFT JOIN coding on coding.excute_id = excute.id
        LEFT JOIN testing on testing.excute_id = excute.id
        LEFT JOIN preparedata on preparedata.excute_id = excute.id
        LEFT JOIN plancoding on plancoding.excute_id = excute.id
            ') as $row) {
            array_push(
                $requirementsall,
                array(
                    'idexcute' => $row[0],
                    'id' => $row[5],
                    'processname' => $row[6],
                    'startdate' => $row[7],
                    'enddate' => $row[8],
                    'painpoint' => $row[9],
                    'description' => $row[10],
                    'results_benefit' => $row[11],
                    'exclusion_constraints' => $row[12],
                    'work_flow' => $row[13],
                    'extract_file' => $row[14],
                    'riskmanagement' => $row[15],
                    'scopeofwork' => $row[16],
                    'bussinessflow' => $row[17],
                    'statusforprocess' => $row[18],
                    'doing_by' => $row[29],
                    'tobe' => $row[31],
                    'asis' => $row[33],
                    'budget' => $row[35], 
                    'status' => $row[38],
                    'codeuser' => $row[49],
                    'firstname' => $row[50],
                    'lastname' => $row[51],
                    'fileprototype' => $row[55],
                    'linkprototype' => $row[56],
                    'linkcoding' => $row[60],
                    'linktesting' => $row[63],
                    'system_status' => $row['systemflowchart_status'],
                    'dataflow_status' => $row['dataflowdiagram_status'],
                    'erdiagram_status' => $row['erdiargram_status'],
                    'datadic_status' => $row['datadic_status'],
                    'usecase_status' => $row['usecasediagram_status'],
                    'linkprepare' => $row['linkprepare'],
                    'statusplan'=> $row['statusplan'],
                    'start_coding'=> $row['startcoding'],
                    'end_coding'=> $row['endcoding'],
                    'format_coding'=> $row['format'],
                    'name_university_coding'=> $row['name_university'],
                    'database_coding'=> $row['databasecoding'],
                    'languages_coding'=> $row['languages'],
               
                    
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