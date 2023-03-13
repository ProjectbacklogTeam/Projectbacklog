<?php

require_once '../connection.php';
session_start();


// $stmtlogin = $db->prepare("SELECT id, password FROM login");
// $stmtlogin->execute();
// foreach($stmtlogin as $row){
//     $idlogin = $row['id'];
//     $password = $row['password'];
//     $hashed_password = password_hash($password, PASSWORD_DEFAULT);
//     $stmtlogin2 = $db->prepare("UPDATE login SET password=? WHERE id=700");
//     $stmtlogin2->bindParam(1,$hashed_password);
//     // $stmtlogin2->bindParam(2,700);
//     $stmtlogin2->execute();
// }



    // $stmtlogin2 = $db->prepare("UPDATE login SET password=? WHERE id=700");
    // $stmtlogin2->bindParam(1,$hashed_password);
    // $stmtlogin2->bindParam(2,700);
    // $stmtlogin2->execute();
//}



// $usernameinput = "admin";
// $passwordinput = "123456798";


// $select_stmt = $db->prepare("SELECT * FROM login WHERE username=:uusername");
// $select_stmt->bindParam(":uusername", $usernameinput);
// $select_stmt->execute();
// $row = $select_stmt->fetch(PDO::FETCH_ASSOC);

// if($row) {
  
//     $hashed_password_database = $row['password'];
//     $t1 = $row['id'];
//     $t2 = $row['role_id'];

//     echo $hashed_password_database;
//     echo "-------------------";
//     echo $t1;
//     echo "-------------------";
//     echo $t2;
//     echo "-------------------";
 
//     if(password_verify($passwordinput, $hashed_password_database)) {
//         echo "successssssssssss password";
//     } else {
//         echo "Invalid password";
//     }
// } else {
//     echo "User not found";
// }

// $password = 'my_password';
// $hash = password_hash($password, PASSWORD_DEFAULT);
// echo 'Hashed password: ' . $hash . '<br>';

// // Verify (decode) a password
// $decoded_password = 'my_password';
// if (password_verify($decoded_password, $hash)) {
//     echo 'Password verified';
// } else {
//     echo 'Password not verified';
// }

?>