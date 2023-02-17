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
        JOIN detail on admin.detail_id = detail.id OR approver.detail_id = detail.id OR user.detail_id = detail.id
        LEFT JOIN valuerelease on valuerelease.excute_id = excute.id
        
            ') as $row) {
            array_push(
                $requirementsall,
                array(
                    'idexcute'=> $row[0],
                    'idreq' => $row[3],
                    'processname' => $row[6],
                    'startdate' => $row[7],
                    'enddate' => $row[8],        
                    'doing_by' => $row[29],
                    'status' => $row[31],
                    'codeuser' => $row[42],
                    'firstname' => $row[43],
                    'lastname' => $row[44],
                    'mandays' => $row[48],
                    'startdatevaluerelease' => $row[49],
                    'enddatevaluerelease' => $row[50],
                    'wage' => $row[51],
                    'estimate' => $row[52],
                    'valuerelease' => $row[53],
                    'benefitpeople' => $row[54],
                    'benefitmoney' => $row[55],
                    'benefitpeoplemandays' => $row[56],
                    'filebefore' => $row[57],
                    'fileafter' => $row[58],
                    'statusvaluerelease' => $row[60],
                                                      
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
        $stmt1 = $db->prepare("INSERT INTO valuerelease (mandays,startdate,enddate,wage,estimate,valuerelease,benefitpeople,benefitmoney,benefitpeoplemandays,filebefore,fileafter,excute_id,statusvaluerelease) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");
        $stmt1->bindParam(1, $data->mandays);
        $stmt1->bindParam(2, $data->startdate);
        $stmt1->bindParam(3, $data->enddate);
        $stmt1->bindParam(4, $data->wage);
        $stmt1->bindParam(5, $data->estimate);
        $stmt1->bindParam(6, $data->valuerelease);
        $stmt1->bindParam(7, $data->benefitpeople);
        $stmt1->bindParam(8, $data->benefitmoney);
        $stmt1->bindParam(9, $data->benefitpeoplemandays);
        $stmt1->bindParam(10, $data->filebefore);
        $stmt1->bindParam(11, $data->fileafter);
        $stmt1->bindParam(12, $data->excute_id);
        $stmt1->bindParam(13, $data->statusvaluerelease);
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
        $stmt1 = $db->prepare("UPDATE valuerelease SET mandays=?,startdate=?,enddate=?,wage=?,estimate=?,valuerelease=?,benefitpeople=?,benefitmoney=?,benefitpeoplemandays=?,filebefore=?,fileafter=? WHERE excute_id = ?");
        $stmt1->bindParam(1, $data->mandays);
        $stmt1->bindParam(2, $data->startdate);
        $stmt1->bindParam(3, $data->enddate);
        $stmt1->bindParam(4, $data->wage);
        $stmt1->bindParam(5, $data->estimate);
        $stmt1->bindParam(6, $data->valuerelease);
        $stmt1->bindParam(7, $data->benefitpeople);
        $stmt1->bindParam(8, $data->benefitmoney);
        $stmt1->bindParam(9, $data->benefitpeoplemandays);
        $stmt1->bindParam(10, $data->filebefore);
        $stmt1->bindParam(11, $data->fileafter);
        $stmt1->bindParam(12, $data->excute_id);
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