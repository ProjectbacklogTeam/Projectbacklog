<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';
//[$_GET['id']]
$data = json_decode(file_get_contents("php://input"));
try {
    $stmtone = $db->prepare("SELECT * FROM requirements JOIN doingby on requirements.doingby_id = doingby.id JOIN asis on requirements.asis_id = asis.id JOIN tobe on requirements.tobe_id = tobe.id JOIN budget on requirements.budget_id = budget.id WHERE requirements.id = ? ");
    // $stmtone->bindParam(1, $data->$_GET['id']);
    $stmtone->execute([$_GET['id']]);
    foreach ($stmtone as $row) {
        $req = array(
            'id' => $row[0],
            'processname' => $row['processname'],
            'startdate' => $row['startdate'],
            'enddate' => $row['enddate'],
            'doingby' => $row[18],
            'asis' => $row[20],
            'tobe' => $row[22],
            'budget' => $row[24],
        );
        echo json_encode($req);
        break;
    }
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
// try {
//     $stmtone = $db->prepare("SELECT * FROM requirements where id = ?");
//     $stmtone->execute([$_GET['id']]);
//     foreach ($stmtone as $row) {
//         $req = array(
//             'id' => $row['id'],
//             'processname' => $row['processname'],
//             'startdate' => $row['startdate'],
//             'enddate' => $row['enddate'],
//             'doingby_id' => $row['doingby_id'],
//         );
//         echo json_encode($req);
//         break;
//     }
// } catch (PDOException $e) {
//     print "Error!: " . $e->getMessage() . "<br/>";
//     die();
// }


//}  

?>
<?php

?>