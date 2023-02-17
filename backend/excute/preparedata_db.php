<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    try {
        $stmt1 = $db->prepare("INSERT INTO preparedata(excute_id,projectpurpose,businessflow,scopeofwork,swimlanediargram,uxuiprototype,sitemap,systemflowchart_status,dataflowdiagram_status,erdiargram_status,datadic_status,usecasediagram_status,linkprepare) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");
        $stmt1->bindParam(1, $data->excuteid);
        $stmt1->bindParam(2, $data->projectpurpose);
        $stmt1->bindParam(3, $data->businessflow);
        $stmt1->bindParam(4, $data->scopeofwork);
        $stmt1->bindParam(5, $data->swimlanediargram);
        $stmt1->bindParam(6, $data->uxuiprototype);
        $stmt1->bindParam(7, $data->sitemap);
        $stmt1->bindParam(8, $data->systemflowchart_status);
        $stmt1->bindParam(9, $data->dataflowdiagram_status);
        $stmt1->bindParam(10, $data->erdiargram_status);
        $stmt1->bindParam(11, $data->datadic_status);
        $stmt1->bindParam(12, $data->usecasediagram_status);
        $stmt1->bindParam(13, $data->linkprepare);
        $stmt2 = $db->prepare("UPDATE requirements SET statusforprocess=? WHERE id=?");
        $stmt2->bindParam(1, $data->statusforprocess);
        $stmt2->bindParam(2, $data->reqid);
        $stmt2->execute();
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
        $stmt1 = $db->prepare("UPDATE preparedata SET projectpurpose=?,businessflow=?,scopeofwork=?,swimlanediargram=?,uxuiprototype=?,sitemap=?,systemflowchart_status=?,dataflowdiagram_status=?,erdiargram_status=?,datadic_status=?,usecasediagram_status=?,linkprepare=? WHERE excute_id =?");
        $stmt1->bindParam(1, $data->projectpurpose);
        $stmt1->bindParam(2, $data->businessflow);
        $stmt1->bindParam(3, $data->scopeofwork);
        $stmt1->bindParam(4, $data->swimlanediargram);
        $stmt1->bindParam(5, $data->uxuiprototype);
        $stmt1->bindParam(6, $data->sitemap);
        $stmt1->bindParam(7, $data->systemflowchart_status);
        $stmt1->bindParam(8, $data->dataflowdiagram_status);
        $stmt1->bindParam(9, $data->erdiargram_status);
        $stmt1->bindParam(10, $data->datadic_status);
        $stmt1->bindParam(11, $data->usecasediagram_status);
        $stmt1->bindParam(12, $data->linkprepare);
        $stmt1->bindParam(13, $data->excuteid);

        
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


?>
<?php

?>