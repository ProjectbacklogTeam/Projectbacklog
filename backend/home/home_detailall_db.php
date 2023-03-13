<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
include '../connection.php';

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {
        $requirementsall = array();
        foreach ($db->query('SELECT * from `detail`
        LEFT JOIN admin on admin.detail_admin_id = detail.id
        LEFT JOIN user on  user.detail_user_id = detail.id
        LEFT JOIN approver on approver.detail_approver_id = detail.id
        JOIN department on detail.department_id = department.id
        JOIN section on detail.section_id = section.id
        JOIN position on detail.position_id = position.id
        JOIN division on detail.division_id = division.id
        ') as $row) {
            array_push(
                $requirementsall,
                array(
                    'iddetail' => $row[0],
                    'codeuser' => $row['codeuser_detail'],
                    'firstname' => $row['firstname_detail'],
                    'lastname' => $row['lastname_detail'],
                    'name_department' => $row['name_department'],
                    'name_section' => $row['name_section'],
                    'name_position' => $row['name_position'],
                    'name_division' => $row['name_division'],
                    'detail_admin_id' => $row[11],
                    'detail_user_id' => $row[14],
                    'detail_approver_id' => $row[17],


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