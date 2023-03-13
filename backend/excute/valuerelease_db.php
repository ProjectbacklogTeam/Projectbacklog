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
        JOIN status on requirements.status_id = status.id
        LEFT JOIN admin on requirements.admin_id = admin.id
        LEFT JOIN approver on requirements.approver_id = approver.id
        LEFT JOIN user on requirements.user_id = user.id
        JOIN detail on admin.detail_admin_id = detail.id OR approver.detail_approver_id = detail.id OR user.detail_user_id = detail.id
        LEFT JOIN valuerelease on valuerelease.excute_id = excute.id
        
            ') as $row) {
            array_push(
                $requirementsall,
                array(
                    'idexcute'=> $row[0],
                    'idreq' => $row[3],
                    'processname' => $row['processname_req'],
                    'startdate' => $row['startdate_req'],
                    'enddate' => $row['enddate_req'],        
                    'doing_by' => $row['name_doingby'],
                    'status' => $row['name_status'],
                    'codeuser' => $row['codeuser_detail'],
                    'firstname' => $row['firstname_detail'],
                    'lastname' => $row['lastname_detail'],
                    'mandays' => $row["mandays_value"],
                    'startdatevaluerelease' => $row["startdates_value"],
                    'enddatevaluerelease' => $row["enddates_value"],
                    'wage' => $row["wages_value"],
                    'estimate' => $row["estimates_value"],
                    'valuerelease' => $row["valuereleases_value"],
                    'benefitpeople' => $row["benefitpeoples_value"],
                    'benefitmoney' => $row["benefitmoneys_value"],
                    'benefitpeoplemandays' => $row["benefitpeoplemandayss_value"],
                    'filebefore' => $row["filebefores_value"],
                    'fileafter' => $row["fileafter_value"],
                    'statusvaluerelease' => $row["statusvaluereleases"],
                    'estimates_value_number' => $row["estimates_value_number"],
                    'valuereleases_value_number' => $row["valuereleases_value_number"],
                    'benefitpeoples_value_number' => $row["benefitpeoples_value_number"],
                    'benefitmoneys_value_number' => $row["benefitmoneys_value_number"],
                    'benefitpeoplemandayss_value_number' => $row["benefitpeoplemandayss_value_number"],
                                                      
                )
            );
        }
        echo json_encode($requirementsall);
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    try {
        $stmt1 = $db->prepare("INSERT INTO valuerelease (mandays_value,startdates_value,enddates_value,wages_value,estimates_value,estimates_value_number,valuereleases_value,valuereleases_value_number,benefitpeoples_value,benefitpeoples_value_number,benefitmoneys_value,benefitmoneys_value_number,benefitpeoplemandayss_value,benefitpeoplemandayss_value_number,filebefores_value,fileafter_value,excute_id,statusvaluereleases) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
        $stmt1->bindParam(1, $data->mandays);
        $stmt1->bindParam(2, $data->startdate);
        $stmt1->bindParam(3, $data->enddate);
        $stmt1->bindParam(4, $data->wage);
        $stmt1->bindParam(5, $data->estimate);
        $stmt1->bindParam(6, $data->estimatenumber);
        $stmt1->bindParam(7, $data->valuerelease);
        $stmt1->bindParam(8, $data->valuereleasenumber);
        $stmt1->bindParam(9, $data->benefitpeople);
        $stmt1->bindParam(10, $data->benefitpeoplenumber);
        $stmt1->bindParam(11, $data->benefitmoney);
        $stmt1->bindParam(12, $data->benefitmoneynumber);
        $stmt1->bindParam(13, $data->benefitpeoplemandays);
        $stmt1->bindParam(14, $data->benefitpeoplemandaysnumber);
        $stmt1->bindParam(15, $data->filebefore);
        $stmt1->bindParam(16, $data->fileafter);
        $stmt1->bindParam(17, $data->excute_id);
        $stmt1->bindParam(18, $data->statusvaluereleases);
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

if ($_SERVER['REQUEST_METHOD'] == 'PATCH') {
    try {
        $stmt1 = $db->prepare("UPDATE valuerelease SET mandays_value=?,startdates_value=?,enddates_value=?,wages_value=?,estimates_value=?,estimates_value_number=?,valuereleases_value=?,valuereleases_value_number=?,benefitpeoples_value=?,benefitpeoples_value_number=?,benefitmoneys_value=?,benefitmoneys_value_number=?,benefitpeoplemandayss_value=?,benefitpeoplemandayss_value_number=?,filebefores_value=?,fileafter_value=? WHERE excute_id = ?");
        $stmt1->bindParam(1, $data->mandays);
        $stmt1->bindParam(2, $data->startdate);
        $stmt1->bindParam(3, $data->enddate);
        $stmt1->bindParam(4, $data->wage);
        $stmt1->bindParam(5, $data->estimate);
        $stmt1->bindParam(6, $data->estimatenumber);
        $stmt1->bindParam(7, $data->valuerelease);
        $stmt1->bindParam(8, $data->valuereleasenumber);
        $stmt1->bindParam(9, $data->benefitpeople);
        $stmt1->bindParam(10, $data->benefitpeoplenumber);
        $stmt1->bindParam(11, $data->benefitmoney);
        $stmt1->bindParam(12, $data->benefitmoneynumber);
        $stmt1->bindParam(13, $data->benefitpeoplemandays);
        $stmt1->bindParam(14, $data->benefitpeoplemandaysnumber);
        $stmt1->bindParam(15, $data->filebefore);
        $stmt1->bindParam(16, $data->fileafter);
        $stmt1->bindParam(17, $data->excute_id);

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




//
?>
<?php

?>