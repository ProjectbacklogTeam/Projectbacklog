<?php

require_once 'connection.php';
session_start();


$errors = array();

if (isset($_POST['btn_login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    if (empty($username)) {
        $_SESSION['error'] = "username required";
    } else if (empty($password)) {
        $_SESSION['error'] = "password required";
    } else if ($username and $password and (count($errors) == 0)) {
        try {
            $select_stmt = $db->prepare("SELECT * FROM login WHERE username=:uusername AND password=:upassword");
            $select_stmt->bindParam(":uusername", $username);
            $select_stmt->bindParam(":upassword", $password);
            $select_stmt->execute();
            while ($row = $select_stmt->fetch(PDO::FETCH_ASSOC)) {
                $db_id = $row['id'];
                $db_username = $row['username'];
                $db_password = $row['password'];
                $dbrole = $row['role_id'];
            }
            if ($username != null and $password != null) {
                if ($select_stmt->rowCount() > 0) {
                    if ($username == $db_username and $password == $db_password) {
                        switch ($dbrole) {
                            case 1:                            
                                $_SESSION['success'] = "Admin successfully";
                                $admin = $db->prepare("SELECT * FROM admin JOIN detail  on detail.id = admin.detail_id WHERE login_id = $db_id");
                                $admin->execute();
                                while ($row = $admin->fetch(PDO::FETCH_ASSOC)) {
                                    $_SESSION['admin_login'] = $row['id'];
                                    $_SESSION['codeuser'] = $row['codeuser'];
                                    $_SESSION['firstname'] = $row['firstname'];
                                    $_SESSION['lastname'] = $row['lastname'];
                                    $_SESSION['nickname'] = $row['nickname'];
                                    $_SESSION['email'] = $row['email'];
                                }
                                header("location: ../../frontend/home/home.php");
                                break;
                            case 2:
                               
                                $_SESSION['success'] = "approver successfully";
                                $approver = $db->prepare("SELECT * FROM approver JOIN detail  on detail.id = approver.detail_id WHERE login_id = $db_id");
                                $approver->execute();
                                while ($row = $approver->fetch(PDO::FETCH_ASSOC)) {
                                    $_SESSION['approver_login'] = $row['id'];
                                    $_SESSION['codeuser'] = $row['codeuser'];
                                    $_SESSION['firstname'] = $row['firstname'];
                                    $_SESSION['lastname'] = $row['lastname'];
                                    $_SESSION['nickname'] = $row['nickname'];
                                    $_SESSION['email'] = $row['email'];
                                }
                                header("location: ../../frontend/home/home.php");
                                break;
                            case 3:
                               
                                $_SESSION['success'] = "User successfully";
                                $user = $db->prepare("SELECT * FROM user JOIN detail  on detail.id = user.detail_id WHERE login_id = $db_id");
                                $user->execute();
                                while ($row = $user->fetch(PDO::FETCH_ASSOC)) {
                                    $_SESSION['user_login'] = $row['id'];
                                    $_SESSION['codeuser'] = $row['codeuser'];
                                    $_SESSION['firstname'] = $row['firstname'];
                                    $_SESSION['lastname'] = $row['lastname'];
                                    $_SESSION['nickname'] = $row['nickname'];
                                    $_SESSION['email'] = $row['email'];
                                }
                                header("location: ../../frontend/home/home.php");
                                break;
                            default:
                                $_SESSION['error'] = "Wrong username or password ";
                                header("location: ../../frontend/login/login.php");
                        }
                    }
                } else {
                    $_SESSION['error'] = "Wrong username or password";
                    header("location: ../../frontend/login/login.php");
                }
            }
        } catch (PDOException $e) {
            $e->getMessage();
        }
    }
}
