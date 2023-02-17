<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="navbarleft  col-auto col-md-3 col-xl-2  px-0 min-vh-100" style="height: 2500px">
        <div style="position: sticky;top: 40px">
            <ul class="nabarleft2 textcenter nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <?php if (isset($_SESSION['admin_login'])) { ?>
                    <div id="boxname" class="boxname center">
                        <span style="margin-left:-10px">
                            <i class="fa-regular fa-user fa-4x" style="color: white;"></i><br><br>
                            <?php echo $_SESSION['firstname'] ?><br>
                            <?php echo $_SESSION['lastname'] ?>


                        </span>
                    </div>
                    <li class="boxtextnav">
                        <a style="padding-top: 1rem;color: black; width: 100%;background-color: white;margin-left: 10px;border-top-left-radius: 1rem;border-bottom-left-radius: 1rem;height: 60px;" href="../home/home.php" class="nav-link px-0">
                            <span class="d-none d-sm-inline center boxtext">HOME</span> <i class="fa-solid fa-house fa-2xl"></i> </a>
                    </li>
                    <li class="boxtextnav" style="width: 100%;">
                        <a style="padding-top: 1rem;color: black; width: 100%;background-color: white;margin-left: 10px;border-top-left-radius: 1rem;border-bottom-left-radius: 1rem;height: 60px;" href="../projectmanagement/projectmanagement.php" class="nav-link px-0">
                            <span class="d-none d-sm-inline center boxtext">PLAN</span><i class="fa-solid fa-calendar-days fa-2xl"></i></a>
                    </li>
                    <li class="boxtextnav" style="width: 100%;">
                        <a style="padding-top: 1rem;color: black; width: 100%;background-color: white;margin-left: 10px;border-top-left-radius: 1rem;border-bottom-left-radius: 1rem;height: 60px;" href="../approvals/approvals.php" class="nav-link px-0">
                            <span class="d-none d-sm-inline center boxtext">APPROVALS</span><i class="fa-solid fa-file-circle-check fa-2xl"></i></a>
                    </li>
                    <li class="boxtextnav" style="width: 100%;">
                        <a style="padding-top: 1rem;color: black; width: 100%;background-color: white;margin-left: 10px;border-top-left-radius: 1rem;border-bottom-left-radius: 1rem;height: 60px;" href="../excute/excute.php" class="nav-link px-0"> <span class="d-none d-sm-inline center boxtext">Excute</span><i class="fa-sharp fa-solid fa-database fa-2xl"></i></a>
                    </li>
                    <li class="boxtextnav" style="width: 100%;">
                        <a style="padding-top: 1rem;color: black; width: 100%;background-color: white;margin-left: 10px;border-top-left-radius: 1rem;border-bottom-left-radius: 1rem;height: 60px;" href="../valuerelease/valuerelease.php" class="nav-link px-0"> <span class="d-none d-sm-inline center boxtext">
                        Project Summary</span><i class="fa-solid fa-scale-unbalanced-flip fa-2xl"></i></a>
                    </li>
                <?php } else if (isset($_SESSION['approver_login'])) { ?>
                    <div id="boxname" class="boxname center" style="padding-left:-2rem">
                        <span style="text-align: center;">
                            <i class="fa-regular fa-user fa-4x" style="color: white;"></i><br><br>
                            <?php echo $_SESSION['firstname'] ?><br>
                            <?php echo $_SESSION['lastname'] ?>

                        </span>
                    </div>
                    <li class="boxtextnav">
                        <a style="padding-top: 1rem;color: black; width: 100%;background-color: white;margin-left: 10px;border-top-left-radius: 1rem;border-bottom-left-radius: 1rem;height: 60px;" href="../home/home.php" class="nav-link px-0">
                            <span class="d-none d-sm-inline center boxtext">HOME</span> <i class="fa-solid fa-house fa-2xl"></i> </a>
                    </li>
                    <li class="boxtextnav" style="width: 100%;">
                        <a style="padding-top: 1rem;color: black; width: 100%;background-color: white;margin-left: 10px;border-top-left-radius: 1rem;border-bottom-left-radius: 1rem;height: 60px;" href="../approvals/approvals.php" class="nav-link px-0">
                            <span class="d-none d-sm-inline center boxtext">APPROVALS</span><i class="fa-solid fa-file-circle-check fa-2xl"></i></a>
                    </li>
                <?php } else if (isset($_SESSION['user_login'])) { ?>
                    <div id="boxname" class="boxname center">
                        <span style="margin-left:-10px">
                            <i class="fa-regular fa-user fa-4x" style="color: white;"></i><br><br>
                            <?php echo $_SESSION['firstname'] ?><br>
                            <?php echo $_SESSION['lastname'] ?>
                        </span>
                    </div>
                    <li class="boxtextnav">
                        <a style="padding-top: 1rem;color: black; width: 100%;background-color: white;margin-left: 10px;border-top-left-radius: 1rem;border-bottom-left-radius: 1rem;height: 60px;" href="../home/home.php" class="nav-link px-0">
                            <span class="d-none d-sm-inline center boxtext">HOME</span> <i class="fa-solid fa-house fa-2xl"></i> </a>
                    </li>
                <?php }  ?>


            </ul>
            <div class="footer center">

                <span>ติดต่อสอบถาม Backlog xx</span><br>
                <!-- <span>คุณสุพรรษา ม. Supansak@scg.com</span><br> -->
                <span style="font-size: 10px;">Digital Transformation Architect</span><br>
                <span style="font-size: 10px;">Digital Transformation </span><br>
                <span style="font-size: 10px;">( Data Driven - TS )</span><br>
                <button class="mt-5" style="background: none;border: none"  onclick="localStorage.clear()">
                    <a href="../login/login.php">
                        <i class="fa-solid fa-right-from-bracket fa-3x" style="margin-top: 15%;color: white;"></i></a>
                </button>
                <!--  -->
            </div>
        </div>
    </div>

</body>

</html>