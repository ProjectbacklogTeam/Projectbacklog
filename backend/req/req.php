<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    include '../server.php';


    try{
        $attractions = array();

        foreach($dbh->query('SELECT * from requirements') as $row){
            $attraction = array(
                'id' => $row['id'],
                'processname' => $row['processname'],
                'painpoint' => $row['painpoint'],
                'admin_id' => $row['admin_id'],
            );
            array_push($attractions,$attraction);
        }
        echo json_encode($attractions);
        $dbh = null;
    }
    catch(PDOException $e){
        print "Error!: ". $e->getMessage(). "<br/>";
        die();
    }
 



?>