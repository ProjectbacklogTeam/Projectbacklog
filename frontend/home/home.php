<?php
session_start();
// require_once '../../backend/home/requriment.php';
// include '../../backend/requriment.php';

if (isset($_SESSION['admin_login'])) {
  $idadmin = $_SESSION['admin_login'];
  $iduser = null;
  $idapprover = null;
} else if (isset($_SESSION['approver_login'])) {
  $idapprover = $_SESSION['approver_login'];
  $idadmin = null;
  $iduser = null;
} else if (isset($_SESSION['user_login'])) {
  $iduser = $_SESSION['user_login'];
  $idapprover = null;
  $idadmin = null;
}
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

<body onload="onloadfunction()">
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <?php include('../navbar.php'); ?>
      <?php if ((isset($_SESSION['admin_login'])) || (isset($_SESSION['user_login'])) || (isset($_SESSION['approver_login']))) { ?>
        <div class="row" style="height: 20%;width: 1200px;">
          <span style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
            Digital Transformation Dashboard
          </span><br>
          <div class="flexbox center" style="margin-left: .5rem;">

            <div class="item">
              <div class="content">
                <button class="buttonprocess " disabled>
                  <i class="fa-solid fa-book fa-2x"></i>
                </button>
                <span>
                  Requirements
                </span>
              </div>
            </div>

            <div class="item">
              <div class="content">

                <button class="buttonprocess" disabled>
                  <i class="fa-solid fa-user-pen fa-2x"></i>
                </button>
                <span>
                  Emphathize
                </span>
              </div>
            </div>
            <div class="item">
              <div class="content">

                <button class="buttonprocess" disabled>
                  <i class="fa-solid fa-person-circle-check fa-2x"></i>
                </button>
                <span>
                  Approve
                </span>
              </div>
            </div>
            <div class="item">
              <div class="content">

                <button class="buttonprocess" disabled>
                  <i class="fa-solid fa-swatchbook fa-2x"></i>
                </button>
                <span>
                  Prototype
                </span>
              </div>
            </div>

            <div class="item">
              <div class="content">

                <button class="buttonprocess" disabled>
                  <i class="fa-solid fa-circle-check fa-2x"></i>
                </button>
                <span>
                  Confirm <br>Prototype
                </span>
              </div>
            </div>

            <div class="item">
              <div class="content">

                <button class="buttonprocess" disabled>
                  <i class="fa-solid fa-diagram-project fa-2x"></i> </button>
                <span>
                  Prepare<br>Data
                </span>
              </div>
            </div>

            <div class="item">
              <div class="content">

                <button class="buttonprocess" disabled>
                  <i class="fa-solid fa-computer fa-2x"></i>
                </button>
                <span>
                  Coding
                </span>
              </div>
            </div>

            <div class="item">
              <div class="content">

                <button class="buttonprocess" disabled>
                  <i class="fa-solid fa-clipboard-check fa-2x"></i>
                </button>
                <span>
                  Testing
                </span>
              </div>
            </div>

            <div class="item">
              <div class="content">

                <button class="buttonprocess" disabled>
                  <i class="fa-solid fa-box-open fa-2x"></i>
                </button>
                <span>
                  Delivered
                </span>
              </div>
            </div>

            <div class="item">
              <div class="content">
                <button class="buttonprocess" disabled>
                  <i class="fa-solid fa-heart fa-2x"></i>
                </button>
                <span>
                  Implement
                </span>
              </div>
            </div>
          </div>
          <div class="paper">

          </div>

          <div class="paperreq center">
            <div class="row" style="margin-top: 5%;margin-left: 2%;">
              <h1>Requirements</h1>
              <div class="col-12 mt-3 mb-5">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">ชื่อเรื่อง</span>
                  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="processname">
                </div>
              </div>
              <div class="col-6 mb-5">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">วันที่ขอ</span>
                  <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="startdate">
                </div>
              </div>
              <div class="col-6 mb-5">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">วันที่ต้องการใช้ระบบ</span>
                  <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="enddate">
                </div>
              </div>
              <div class="col-6 mb-5">
                <div class="input-group">
                  <label class="input-group-text" for="inputGroupSelect01">ASIS</label>
                  <select class="form-select" id="asis_id">


                  </select>
                </div>
              </div>
              <div class="col-6 mb-5">
                <div class="input-group">
                  <label class="input-group-text" for="inputGroupSelect01">TOBE</label>
                  <select class="form-select" id="tobe_id">

                  </select>
                </div>
              </div>
              <div class="col-6 mb-5">
                <div class="input-group">
                  <label class="input-group-text" for="inputGroupSelect01">Doing By</label>

                  <select class="form-select" id="doingby_id">

                  </select>
                </div>
              </div>
              <div class="col-6 mb-5">
                <div class="input-group">
                  <label class="input-group-text" for="inputGroupSelect01">BUDJET</label>
                  <select class="form-select" id="budget_id">

                  </select>
                </div>
              </div>
              <div class="col-12" style="text-align:end ;">
                <button class="buttonsave" onclick="requriment_create()">บันทึก</button>
              </div>

            </div>

            <script>
              //<-------------- save requriment ------------------->     
              function requriment_create() {
                var myheaders = new Headers()
                myheaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                  "processname": document.getElementById("processname").value,
                  "startdate": document.getElementById("startdate").value,
                  "enddate": document.getElementById("enddate").value,
                  "asis_id": document.getElementById("asis_id").value,
                  "budget_id": document.getElementById("budget_id").value,
                  "doingby_id": document.getElementById("doingby_id").value,
                  "tobe_id": document.getElementById("tobe_id").value,
                  "admin_id": <?php echo json_encode($idadmin) ?>,
                  "user_id": <?php echo json_encode($iduser) ?>,
                  "approver_id": <?php echo json_encode($idapprover) ?>,
                  "status": 0,
                })
                console.log(raw)
                var requestOptions = {
                  method: 'POST',
                  headers: myheaders,
                  body: raw,
                  redirect: 'follow',
                };

                fetch("http://localhost/projectbacklog/backend/home/home_db.php", requestOptions)
                  .then(response => response.text())
                  .then(result => {
                    var jsonObj = JSON.parse(result);
                    if (jsonObj.status == 'OK') {
                      window.location.reload()
                    } else {
                      alert('not ok');
                    }

                  })
                  .catch(error => console.log('error', error));
              }
            </script>

          </div>
         
            <div class="row" style="margin-top:150px">
              <div class="col-6">
              </div>
              <div class="col-6">
                <div class="input-group">
                  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                  <button type="button" class="btn btn-primary">search</button>
                </div>
              </div>
            </div>


            <div class="papertablereq">
              <table class="table mt-1">
                <thead style="text-align:center">
                  <th scope="col">Request id</th>
                  <th scope="col">Request Date</th>
                  <th scope="col">Request Enddate</th>
                  <th scope="col">Process Name</th>
                  <th scope="col">Doing By</th>
                  <th scope="col">Process Status</th>
                  <th scope="col"></th>
                </thead>

                <tbody id="reqall_tabel">

                </tbody>

              </table>
              </div>
            </div>
        </div>

    </div>
    <!-- <div class="paperprojectmanagement">

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

</div> -->





  </div>
  <script src="../projectmanagement/projectmanagement.html"></script>
  <script language="JavaScript" src="home.js"></script>
<?php } ?>

</body>

</html>