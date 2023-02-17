<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    try {
        $stmt = $db->prepare("INSERT INTO requirements (processname,startdate,enddate,asis_id,budget_id,doingby_id,tobe_id,admin_id,user_id,approver_id,status,status_id,statusforprocess) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");
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
            ') as $row) {             
                array_push($requirementsall, array(
                    'id' => $row[0],
                    'processname' => $row[1],
                    'startdate' => $row[2],
                    'enddate' => $row[3],           
                    'doingby' => $row[24], 
                    'asis' => $row[26], 
                    'tobe' => $row[28], 
                    'budget' => $row[30], 
                    'statusforprocess'=> $row['statusforprocess'],
                    'admin_id'=>$row['admin_id'],
                    'approver_id'=>$row['approver_id'],
                    'user_id'=>$row['user_id'],
                    'role_id' => $row[37]
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
        $stmt = $db->prepare("UPDATE requirements SET processname = ?,startdate = ?,enddate = ?,painpoint = ?,description = ?,exclusion_constraints =?,work_flow = ?,extract_file = ?,riskmanagement = ?,scopeofwork = ?,bussinessflow=?,tobe_id = ?,asis_id =?,doingby_id =?,budget_id = ?,status=?,statusforprocess=? WHERE id=?");
        $stmt->bindParam(1, $data->processname);
        $stmt->bindParam(2, $data->startdate);
        $stmt->bindParam(3, $data->enddate);
        $stmt->bindParam(4, $data->painpoint);
        $stmt->bindParam(5, $data->description);
        $stmt->bindParam(6, $data->results_benefit);
        $stmt->bindParam(7, $data->work_flow);
        $stmt->bindParam(8, $data->extract_file);
        $stmt->bindParam(9, $data->riskmanagement);
        $stmt->bindParam(10, $data->scopeofwork);
        $stmt->bindParam(11, $data->bussinessflow);
        $stmt->bindParam(12, $data->tobe_id);
        $stmt->bindParam(13, $data->asis_id);
        $stmt->bindParam(14, $data->doingby_id);
        $stmt->bindParam(15, $data->budget_id);
        $stmt->bindParam(16, $data->status);
        $stmt->bindParam(17, $data->statusforprocess);
        $stmt->bindParam(18, $data->id);
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




//
?>
<?php

?>