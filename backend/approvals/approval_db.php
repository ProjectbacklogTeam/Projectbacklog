<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));
// foreach ($db->query('SELECT * from  approvals JOIN requirements on approvals.Requirements_id = requirements.id  JOIN status on approvals.status_id = status.id  JOIN approver on approvals.approver_id = approver.id JOIN doingby on  requirements.doingby_id = doingby.id JOIN tobe on requirements.tobe_id = tobe.id JOIN asis on requirements.asis_id = asis.id JOIN budget on requirements.budget_id = budget.id JOIN admin on requirements.admin_id = admin.id JOIN detail on admin.detail_id =detail.id JOIN user on requirements.user_id = user.id JOIN detail on user.detail_id = detail.id JOIN approver on requirements.approver_id = approver.id JOIN detail on approver.detail_id = detail.id') as $row) {


if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {
        $requirementapproversall = array();
        foreach ($db->query('SELECT * from  `approvals`
        JOIN requirements on approvals.Requirements_id = requirements.id  
        JOIN status on requirements.status_id = status.id  
        JOIN doingby on  requirements.doingby_id = doingby.id 
        JOIN tobe on requirements.tobe_id = tobe.id 
        JOIN asis on requirements.asis_id = asis.id 
        JOIN budget on requirements.budget_id = budget.id 
       	LEFT JOIN approver on requirements.approver_id = approver.id
        LEFT JOIN admin on requirements.admin_id = admin.id 
        LEFT JOIN user on requirements.user_id = user.id
        JOIN  detail on admin.detail_id = detail.id OR approver.detail_id = detail.id OR user.detail_id = detail.id') as $row) {
            array_push(
                $requirementapproversall,
                array(
                    'idapproval' => $row[0],
                    'id' => $row[1],
                    'processname' => $row[4],
                    'startdate' => $row[5],
                    'enddate' => $row[6],
                    'painpoint' => $row[7],
                    'description' => $row[8],
                    'results_benefit' => $row[9],
                    'exclusion_constraints' => $row[10],
                    'work_flow' => $row[11],
                    'extract_file' => $row[12],
                    'riskmanagement' => $row[13],
                    'scopeofwork' => $row[14],
                    'bussinessflow' => $row[15],
                    
                    // 'approver_id' => $row['firstname'],
                    // 'user_id' => $row['firstname'],
                    'status' => $row[27],
                    'doingby' => $row[29],             
                    'tobe' => $row[31],
                    'asis' => $row[33],
                    'budget' => $row[35],
                    'firstname' => $row[47],
                    'lastname' => $row[48],
                  
                )
            );
        }
        echo json_encode($requirementapproversall);
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'PATCH') {

    switch ($_SERVER['REQUEST_URI']) {
        case '/projectbacklog/backend/approvals/approval_db.php/approve':
            try {
          
                $stmt = $db->prepare("UPDATE requirements SET statusforprocess=?,status_id=? WHERE id=?");
                $stmt->bindParam(1, $data->statusforprocess);
                $stmt->bindParam(2, $data->status_id);
                $stmt->bindParam(3, $data->Requirements_id);
                $stmt2 = $db->prepare("INSERT INTO excute(Approvals_id) VALUES (?)");
                $stmt2->bindParam(1, $data->approvals_id);
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
          break;
        case '/projectbacklog/backend/approvals/approval_db.php/reject':
            try {
                $stmt = $db->prepare("UPDATE requirements SET status_id=? WHERE id=?");
                $stmt->bindParam(1, $data->status_id);
                $stmt->bindParam(2, $data->Requirements_id);
                if ($stmt->execute()) {
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




//
?>
<?php

?>