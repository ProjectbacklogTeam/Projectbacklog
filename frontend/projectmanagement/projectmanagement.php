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

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
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
            PROJECT MANAGEMENT
          </span><br>
          <div class="paperprojectmanagement">

            <table class="table">
              <thead style="text-align:center">
                <th scope="col">Request id</th>
                <th scope="col">Process Name</th>
                <th scope="col">Detail</th>
                <th scope="col">start date</th>
                <th scope="col">end date</th>
                <th scope="col"></th>
              </thead>

              <tbody id="tabel_pjmanager">

              </tbody>

            </table>

          </div>
          <div class="paperprojectplan">
            <table class="table">
              <thead style="text-align:center">
                <th scope="col">Request id</th>
                <th scope="col">Process Name</th>
                <th scope="col">Year</th>
                <th scope="col">start date</th>
                <th scope="col">end date</th>
                <th scope="col">status</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </thead>
              <tbody id="table_plan">

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>



  <?php } ?>
  <script src="../navbar.js"></script>
  <script  src="projectmanagement.js"></script>
</body>

</html>