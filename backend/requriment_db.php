<?php
    header("Access-Control-Allow-Origin: *");
//    header("Content-Type: application/json; charset=utf-8");
    include 'connection.php';


    if ($_SERVER['REQUEST_METHOD'] == 'GET'){  
            try{
                $reqasis = array();
                $reqbudget = array();
                $reqdoingby = array();
                $reqtobe = array();
                foreach($db->query("SELECT * FROM asis") as $row){
                    array_push($reqasis,array(
                        'id' => $row['id'],
                        'name' => $row['name']
                    ));
                }
                foreach($db->query("SELECT * FROM budget") as $row){
                    array_push($reqbudget,array(
                        'id' => $row['id'],
                        'name'=> $row['name']
                    ));
                }   
                foreach($db->query("SELECT * FROM doingby") as $row){
                    array_push($reqdoingby,array(
                        'id' => $row['id'],
                        'name'=> $row['name']
                    ));
                }          
                foreach($db->query("SELECT * FROM tobe") as $row){
                    array_push($reqtobe,array(
                        'id' => $row['id'],
                        'name'=> $row['name']
                    ));
                }
                $optionselectreq = array( $reqasis,$reqtobe,$reqdoingby,$reqbudget);
                echo json_encode($optionselectreq);
            }catch(PDOException $e) {
                print "Error!: " . $e->getMessage() . "<br/>";
                die();
            }

        }
          

    
        // try{
        //     $reqbudget = array();
        //     foreach($db->query("SELECT * FROM budget") as $row){
        //         array_push($reqbudget,array(
        //             'id' => $row['id'],
        //             'name'=> $row['name']
        //         ));
        //     }
        //     echo json_encode($reqbudget);
        // }catch(PDOException $e) {
        //     print "Error!: " . $e->getMessage() . "<br/>";
        //     die();
        // }
    
   
    // try{
        // $reqtobe = array();
        // foreach($db->query("SELECT * FROM tobe") as $row){
        //     array_push($reqtobe,array(
        //         'id' => $row['id'],
        //         'name'=> $row['name']
        //     ));
        // }
    //     echo json_encode($reqtobe);
    // }catch(PDOException $e) {
    //     print "Error!: " . $e->getMessage() . "<br/>";
    //     die();
    // }

    // try{
        // $reqdoingby = array();
        // foreach($db->query("SELECT * FROM doingby") as $row){
        //     array_push($reqdoingby,array(
        //         'id' => $row['id'],
        //         'name'=> $row['name']
        //     ));
        // }
    //     echo json_encode($reqdoingby);
    // }catch(PDOException $e) {
    //     print "Error!: " . $e->getMessage() . "<br/>";
    //     die();
    // }








    // $reqasis = $db->prepare("SELECT * FROM asis");
    // $reqasis->execute();

    // $reqbudjet = $db->prepare("SELECT * FROM budget");
    // $reqbudjet->execute();

    // $reqtobe = $db->prepare("SELECT * FROM tobe");
    // $reqtobe->execute();

    // $reqdoingby = $db->prepare("SELECT * FROM doingby");
    // $reqdoingby->execute();
