<body>
    <div id="navbarleft" class="navbarleft  col-auto col-md-3 col-xl-2  px-0 ">
        <div class="navtag" id="navtag">
            <ul class="navbarleft2 textcenter nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <?php if (isset($_SESSION['admin_login'])) { ?>
                    <div id="boxname" class="boxname center mt-3">
                        <span >
                            <i class="fa-regular fa-user fa-4x" style="color: white;"></i><br><br>
                            <div style="color: white;">
                                <?php echo $_SESSION['firstname'] ?><br>
                                <?php echo $_SESSION['lastname'] ?>
                            </div>

                        </span>
                    </div>
                    <li class="boxtextnav">
                        <a href="../home/home.php" class="nav-link px-0">
                            <span class="d-none d-sm-inline center boxtext">HOME</span> <i class="fa-solid fa-house fa-2xl"></i> </a>
                    </li>
                    <li class="boxtextnav">
                        <a href="../projectmanagement/projectmanagement.php" class="nav-link px-0">
                            <span class="d-none d-sm-inline center boxtext">PLAN</span><i class="fa-solid fa-calendar-days fa-2xl"></i></a>
                    </li>
                    <li class="boxtextnav">
                        <a href="../approvals/approvals.php" class="nav-link px-0">
                            <span class="d-none d-sm-inline center boxtext">APPROVALS</span><i class="fa-solid fa-file-circle-check fa-2xl"></i></a>
                    </li>
                    <li class="boxtextnav">
                        <a href="../excute/excute.php" class="nav-link px-0"> <span class="d-none d-sm-inline center boxtext">EXECUTE</span><i class="fa-sharp fa-solid fa-database fa-2xl"></i></a>
                    </li>
                    <li class="boxtextnav">
                        <a href="../valuerelease/valuerelease.php" class="nav-link px-0"> <span class="d-none d-sm-inline center boxtext">
                                PROJECT SUMMARY</span><i class="fa-solid fa-scale-unbalanced-flip fa-2xl"></i></a>
                    </li>
                <?php } else if (isset($_SESSION['approver_login'])) { ?>
                    <div id="boxname" class="boxname center" style="padding-left:-2rem;color: white;">
                        <span style="text-align: center;">
                            <i class="fa-regular fa-user fa-4x" style="color: white;"></i><br><br>
                            <div style="color: white;">
                                <?php echo $_SESSION['firstname'] ?><br>
                                <?php echo $_SESSION['lastname'] ?>
                            </div>


                        </span>
                    </div>
                    <li class="boxtextnav">
                        <a href="../home/home.php" class="nav-link px-0">
                            <span class="d-none d-sm-inline center boxtext">HOME</span> <i class="fa-solid fa-house fa-2xl"></i> </a>
                    </li>
                    <li class="boxtextnav" style="width: 100%;">
                        <a href="../approvals/approvals.php" class="nav-link px-0">
                            <span class="d-none d-sm-inline center boxtext">APPROVALS</span><i class="fa-solid fa-file-circle-check fa-2xl"></i></a>
                    </li>
                <?php } else if (isset($_SESSION['user_login'])) { ?>
                    <div id="boxname" class="boxname center">
                        <span style="margin-left:-10px">
                            <i class="fa-regular fa-user fa-4x" style="color: white;"></i><br><br>
                            <div style="color: white;">
                                <?php echo $_SESSION['firstname'] ?><br>
                                <?php echo $_SESSION['lastname'] ?>
                            </div>


                        </span>
                    </div>
                    <li class="boxtextnav">
                        <a href="../home/home.php" class="nav-link px-0">
                            <span class="d-none d-sm-inline center boxtext">HOME</span> <i class="fa-solid fa-house fa-2xl"></i> </a>
                    </li>
                <?php }  ?>


            </ul>
            <div class="footer">

                <!-- <span></span> Supansak@scg.com-->
                <span>สอบถามคุณสุพรรษา ม. </span><br>
                <span style="font-size: 10px;">Digital Transformation Architect</span><br>
                <span style="font-size: 10px;">Developby Saharat J. </span><br>
                <button class="btnlogout mt-5 mb-4" style="background: none;border: none" onclick="localStorage.clear()">
                    <a href="../login/login.php">
                        <i class="btnlogout fa-solid fa-right-from-bracket fa-3x" style="margin-top: 15%;color: white;"></i></a>
                </button>
                <!--  -->
            </div>
        </div>
    </div>

</body>