<?php
  session_start();
?> 

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
  <!-- Bootstrap 5 CSS -->
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css"> -->

  <!-- Bootstrap 5 JavaScript -->
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.min.js"></script> -->
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
  <!-- jQuery -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>

  
  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sriracha">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">

</head>

<body onload="getreqapproveallTovaluerelease()">
<?php if ((isset($_SESSION['admin_login'])))  {?>
  <div class="container-fluid">
    <div class="row flex-nowrap">
    <?php include('../navbar.php'); ?>  
      <div class="row" style="height: 20%;width: 1500px;">
        <span style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
        PROJECT SUMMARY
        </span><br>
        <div class="flexbox center" style="margin-left: 1rem;">

          <div class="item">
            <div class="content">
              <button class="buttonprocesssuccess" disabled>
                <i class="fa-solid fa-book fa-2x"></i>
              </button>
              <span>
                Requirements
              </span>
            </div>
          </div>

          <div class="item">
            <div class="content">

              <button class="buttonprocesssuccess" disabled>
                <i class="fa-solid fa-user-pen fa-2x"></i>
              </button>
              <span>
                Emphathize
              </span>
            </div>
          </div>
          <div class="item">
            <div class="content">

              <button class="buttonprocesssuccess" disabled>
                <i class="fa-solid fa-person-circle-check fa-2x"></i>
              </button>
              <span>
                Approve
              </span>
            </div>
          </div>
          <div class="item">
            <div class="content">

              <button class="buttonprocesssuccess" disabled>
                <i class="fa-solid fa-swatchbook fa-2x"></i>
              </button>
              <span>
                Prototype
              </span>
            </div>
          </div>

          <div class="item">
            <div class="content">

              <button class="buttonprocesssuccess" disabled>
                <i class="fa-solid fa-circle-check fa-2x"></i>
              </button>
              <span>
                Confirm <br>Prototype
              </span>
            </div>
          </div>

          <div class="item">
            <div class="content">

              <button class="buttonprocesssuccess" disabled>
                <i class="fa-solid fa-diagram-project fa-2x"></i> </button>
              <span>
                Prepare<br>Data
              </span>
            </div>
          </div>

          <div class="item">
            <div class="content">

              <button class="buttonprocesssuccess" disabled>
                <i class="fa-solid fa-computer fa-2x"></i>
              </button>
              <span>
                Coding
              </span>
            </div>
          </div>

          <div class="item">
            <div class="content">

              <button class="buttonprocesssuccess" disabled>
                <i class="fa-solid fa-clipboard-check fa-2x"></i>
              </button>
              <span>
                Testing
              </span>
            </div>
          </div>

          <div class="item">
            <div class="content">

              <button class="buttonprocesssuccess" disabled>
                <i class="fa-solid fa-box-open fa-2x"></i>
              </button>
              <span>
                Control for Deploy
              </span>
            </div>
          </div>

          <div class="item">
            <div class="content">
              <button class="buttonprocesssuccess" disabled>
                <i class="fa-solid fa-heart fa-2x"></i>
              </button>
              <span>
                Implement
              </span>
            </div>
          </div>
        </div>
        <div class="papervaluerelease">
          <table class="table">
            <thead>
              <th scope="col">Request id</th>
              <th scope="col">Request Date</th>
              <th scope="col">Request Enddate</th>
              <th scope="col">Process Name</th>
              <th scope="col">Doing By</th>
              <th scope="col">Process Status</th>
              <th scope="col"></th>
            </thead>

            <tbody id="valuereleasetable">
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <?php } ?>





  <script src="../navbar.js"></script>
  <script src="valuerelease.js"></script>
</body>

</html>