<?php

session_start();
include '../../backend/connection.php';
unset($_SESSION['user_login']);
unset($_SESSION['admin_login']);
unset($_SESSION['approver_login']);

?>

<!doctype html>
<html lang="en">
<!-- / -->

<head>
  <title>Login</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sriracha">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">

</head>



<body>


  <div class="container-fluid">
    <div class="row">
      <div id="backgroundlogin1"class="col-6 backgroundlogin1" >

        <div id="headertextlogin" class="headertextlogin" style="font-weight: bold;text-align:center">
          <span style="color: black;">
          Welcom to 
          </span>
          <span style="color: white;">
          Project Management
          </span><br>
          <span style="color: black;">
          Digital Transformation Architect
          </span><br>
        </div>
        <div id="footertextlogin" class="textfooterlogin center" style="text-align:center">
          <span style="color: rgb(255, 255, 255);font-size: xx-small;text-align: center;">
          DATA DRIVEN - Ts<br>Center of Excellence & Data Driven

          </span>
        </div>
      </div>
      <div class="col-6 backgroundlogin2">
        <div id="cardlogin" class="cardlogin mb-5 mb-xl-0">
          <div class="card" style="
              background: hsla(0, 0%, 100%, 0.55);
              border-radius: 5%;
              backdrop-filter: blur(30px);
              max-width: 30rem;
              ">
            <div class="card-body p-lg-5 shadow-5 text-center">
              <div id="imagelogin" class="col-lg-6 mb-5 mb-lg-0 center" style="padding-left: .15rem;width: 70%;height: 100%;">
                <img src="..\picture\scgv2.png" class="w-100  rounded-4 shadow-4" alt="" style="border-radius: 15%; " />
              </div>
              <form action="../../backend/login/login_db.php" id="formlogin" method="post">
                <?php if (isset($_SESSION['error'])) : ?>
                  <div class="error">
                    <h3>
                      <?php
                      echo $_SESSION['error'];
                      unset($_SESSION['error']);
                      ?>
                    </h3>
                  </div>
                <?php endif ?>
                <div class="row">
                  <div class="form-outline">
                    <div class="row">
                      <div class="col-3">

                        <label class="form-label" for="form3Example1"><i class="fa-solid fa-user fa-2xl"></i></label>
                      </div>
                      <div class="col-9">
                        <input type="text" name="username" class="inputlogin" placeholder="   SCG ID" required />
                      </div>
                    </div>
                    <br />
                  </div>

                  <div class="form-outline">
                    <div class="row">
                      <div class="col-3">
                        <label class="form-label" for="form3Example2"><i class="fa-solid fa-lock fa-2xl"></i></label>

                      </div>
                      <div class="col-9">
                        <input type="password" name="password" class="inputlogin" placeholder="   PASSWORD" required />

                      </div>
                    </div>

                  </div>

                </div>
                <!-- Checkbox -->
                <div class="form-check d-flex justify-content-center mb-4">
                </div>

                <!-- Submit button -->
                <button  type="submit" name="btn_login" class="buttonlogin" style="height: 50px;">
                  Sign In
                </button>


              </form>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</body>
<script language="JavaScript" src="login.js"></script>


</html>


<?php



?>