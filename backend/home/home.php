<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    include '../login/connection.php';

    $data = json_decode(file_get_contents("php://input"));

    if($_SERVER['REQUEST_METHOD'] !== 'POST'){
        echo json_encode(array("status" => "ERROR"));
        die;
    }


    try{
  
        $stmt = $db->prepare("INSERT INTO requirements (processname,asis_id,budget_id,doingby_id,tobe_id,admin_id,user_id,approver_id) VALUES (?,?,?,?,?,?,?,?)");
        $stmt ->bindParam(1,$data->processname);
        // $stmt ->bindParam(2,$data->startdate);
        // $stmt ->bindParam(3,$data->enddate);
        $stmt ->bindParam(2,$data->asis_id);
        $stmt ->bindParam(3,$data->budget_id);
        $stmt ->bindParam(4,$data->doingby_id); 
        $stmt ->bindParam(5,$data->tobe_id);
        $stmt ->bindParam(6,$data->admin_id);
        $stmt ->bindParam(7,$data->user_id);
        $stmt ->bindParam(8,$data->approver_id);

        if ($stmt->execute()){
            echo json_encode(array("status" => "OK"));
        }else{
            echo json_encode(array("status" => "ERROR"));
        }

        $db = null;

    }catch(PDOException $e){
        print "Error!: ".$e->getMessage()."<br/>";
    }
    
?>