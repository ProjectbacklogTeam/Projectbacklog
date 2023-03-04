<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" item="IE=edge">
  <meta name="viewport" item="width=device-width, initial-scale=1.0">
  <title>Home</title>
  <!-- Bootstrap 5 CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

  <!-- Bootstrap 5 JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.min.js"></script>

  <!-- jQuery -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

  <!-- Datepicker CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">

  <!-- Datepicker JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>

  <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> -->
  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sriracha">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">

</head>

<body onload="loadpjmanagement()">
  <?php if ((isset($_SESSION['admin_login']))) { ?>

    <div class="container-fluid">
      <div class="row flex-nowrap">
        <?php include('../navbar.php'); ?>
        <div class="row" style="height: 20%;">
          <span style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
            PLAN
          </span><br>
          <div class="paperprojectmanagement">

            <table class="table">
              <thead style="text-align:center">
                <th scope="col">Request id</th>
                <th scope="col">Process Name</th>
                <th scope="col">Detail</th>
                <th scope="col">Plan StartDate</th>
                <th scope="col">Plan EndDate</th>
                <th scope="col"></th>
              </thead>
              <tbody id="tabel_pjmanager">

              </tbody>

            </table>

          </div>
          <div class="row mt-5 mb-2" style="margin-left: 3rem;">
            <div class="col-3 input-group mb-3">
              <div class="input-group date">
                <span class="input-group-text" id="inputGroup-sizing-default">ปี</span>
                <input type="text" class="form-control" id="selectyear" placeholder="yyyy" style="width: 100px;text-align:end">
              </div>
            </div>
            <div class="col-9">

            </div>
          </div>


          <div class="paperprojectplan">
            <table class="table" id="tableplanproject">
              <thead style="text-align:center">
                <th scope="col">Request Id</th>
                <th scope="col" >Process Name</th>
                <th scope="col" >status</th>
                <th scope="col"></th>
                <th scope="col" >date</th>
                <th scope="col">Jan.</th>
                <th scope="col">Feb.</th>
                <th scope="col">Mar.</th>
                <th scope="col">Apr.</th>
                <th scope="col">May.</th>
                <th scope="col">Jun.</th>
                <th scope="col">Jul.</th>
                <th scope="col">Aug.</th>
                <th scope="col">Sep.</th>
                <th scope="col">Oct.</th>
                <th scope="col">Nov.</th>
                <th scope="col">Dec.</th>
                <th scope="col"></th>
              </thead>
              <tbody id="table_plan">

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
    <script>
      $(document).ready(function() {
        var currentYear = new Date().getFullYear();
        $("#selectyear").val(currentYear);
        getpjmanagment(currentYear);
      });
     
      $("#selectyear").datepicker({
        format: "yyyy",
        autoclose: true,
        todayHighlight: true,
        minViewMode: "years"
      });
      // Add event listener to datepicker input
      $("#selectyear").on("changeDate", function(e) {
        var selectedYear = e.date.getFullYear();
        getpjmanagment(selectedYear)
        console.log(selectedYear)
      });

      // });
    </script>


  <?php } ?>
  <script src="../navbar.js"></script>
  <script src="projectmanagement.js"></script>
</body>

</html>