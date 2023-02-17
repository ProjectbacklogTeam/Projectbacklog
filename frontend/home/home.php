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
  <!-- Bootstrap 5 CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css">

  <!-- Bootstrap 5 JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.min.js"></script>

  <!-- jQuery -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
  <!-- <link href='https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/ui-lightness/jquery-ui.css'rel='stylesheet'>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" ></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" ></script> -->


  <!-- 
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> -->
  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sriracha">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js" integrity="sha512-CryKbMe7sjSCDPl18jtJI5DR5jtkUWxPXWaLCst6QjH8wxDexfRJic2WRmRXmstr2Y8SxDDWuBO6CQC6IE4KTA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body onload="onloadfunction()">
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <?php include('../navbar.php'); ?>
      <?php if ((isset($_SESSION['admin_login'])) || (isset($_SESSION['user_login'])) || (isset($_SESSION['approver_login']))) { ?>
        <div class="row" style="height: 20%;width: 1500px;">
          <span style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
            DIGITAL TRANFORMATION DASHBOARD
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

                <button class="buttonprocess" onclick="totalprocesseempathize()">
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
          <div class="paperdashboard">
            <div class="row">
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Request requriment</div>
                        <div  class="h5 mb-0 font-weight-bold text-gray-800" id="reqalldashboard">

                        </div>
                      </div>
                      <div class="col-auto">
                      <i class="fa-solid fa-book fa-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Request requriment</div>
                        <div  class="h5 mb-0 font-weight-bold text-gray-800" id="emphatizedashboard">

                        </div>
                      </div>
                      <div class="col-auto">
                      <i class="fa-solid fa-book fa-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
              

              </div>
              
            </div>




          </div>

          <div class="paperreq center">
            <div class="row" style="margin-top: 5%;">
              <h1>Requirements</h1>

              <div class="col-12 mt-3 mb-5">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">ชื่อเรื่อง</span>
                  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="processname" placeholder="กรุณาใส่ชื่อเรื่องอย่างน้อย 5 ตัวอักษร" oninput="checkinputname()" required>
                </div>
              </div>
              <div class="col-6 mb-5">
                <div class="input-group date mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">วันที่ขอ</span>
                  <input  type="text" class="form-control" id="startdate" placeholder="dd/mm/yyyy" disabled>
                </div>
              </div>
              <div class="col-6 mb-5">
                <div class="input-group date">
                  <span class="input-group-text" id="inputGroup-sizing-default">วันที่ต้องการใช้ระบบ</span>
                  <input type="text" class="form-control" id="enddate" placeholder="dd/mm/yyyy" disabled>
                  <i class="bi bi-calendar"></i>
                  </button>
                </div>

              </div>
              <div class="col-6 mb-5">
                <div class="input-group">
                  <label class="input-group-text" for="inputGroupSelect01">ASIS</label>
                  <select class="form-select" id="asis_id" disabled>
                    <option value="0" selected>Select...</option>


                  </select>
                </div>
              </div>
              <div class="col-6 mb-5">
                <div class="input-group">
                  <label class="input-group-text" for="inputGroupSelect01">TOBE</label>
                  <select class="form-select" id="tobe_id" disabled>
                    <option value="0" selected>Select...</option>

                  </select>
                </div>
              </div>
              <div class="col-6 mb-5">
                <div class="input-group">
                  <label class="input-group-text" for="inputGroupSelect01">Doing By</label>

                  <select class="form-select" id="doingby_id" disabled>
                    <option  value="0" selected>Select...</option>

                  </select>
                </div>
              </div>
              <div class="col-6 mb-5">
                <div class="input-group">
                  <label class="input-group-text" for="inputGroupSelect01">BUDJET</label>
                  <select class="form-select" id="budget_id" disabled>
                    <option value="0" selected>Select...</option>

                  </select>
                </div>
              </div>
              <div class="col-12" style="text-align:end ;">
                <button class="buttonsave" id="savereq" onclick="requriment_create()" data-bs-toggle="modal" data-bs-target="#successalert" disabled>บันทึก</button>
              </div>
              <div class="modal fade" id="successalert" tabindex="-1" data-bs-backdrop="static" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document" id="successalert" tabindex="-1" role="dialog" aria-hidden="true">
                  <div class="modal-content" style="border-radius: 5%;">

                    <div class="modal-body" style="text-align: center;font-size:20px;font-weight: bold;">
                      <i class="fa-regular fa-circle-check fa-6x mb-5 mt-3" style="color:#29C821;"></i><br>
                      <p>Success</p><br>
                      <p>Your data was saved !</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-success" data-bs-dismiss="modal"><a onclick="window.location.reload()">OK</a></button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <script>
              $("#startdate").datepicker({
                format: "dd/mm/yyyy",
                autoclose: true,
                todayHighlight: true
              });
              $("#enddate").datepicker({
                format: "dd/mm/yyyy",
                autoclose: true,
                todayHighlight: true
              });

              let todaystrat = new Date();
              let daystrat= todaystrat.getDate();
              let monthstrat = todaystrat.getMonth() + 1;
              let yearstart = todaystrat.getFullYear();
              var formattedstartDate_v2 = `${daystrat}/${monthstrat}/${yearstart}`
              document.getElementById("startdate").value = formattedstartDate_v2

              let todayend = new Date();
              let dayend = todayend.getDate();
              let monthend = todayend.getMonth() + 1;
              let yearend = todayend.getFullYear();
              var formatteddateend_v2 = `${dayend}/${monthend}/${yearend}`
              document.getElementById("enddate").value = formatteddateend_v2


          




              function onloadfunction() {
                getreqall();
                getoptionreq();
                setlocalstrorage();
              }


              var setlocalstrorage = function() {
                localStorage.setItem("idadmin", <?php echo json_encode($idadmin) ?>);
                localStorage.setItem("iduser", <?php echo json_encode($iduser) ?>);
                localStorage.setItem("idapprover", <?php echo json_encode($idapprover) ?>);
              }

              var checkinputname = function() {
                var inputname = document.getElementById('processname').value
                var submitreq = document.getElementById('savereq');
                var startdate = document.getElementById("startdate")
                var enddate = document.getElementById("enddate")
                var asis = document.getElementById("asis_id")
                var doingby = document.getElementById("doingby_id")
                var budget = document.getElementById("budget_id")
                var tobe = document.getElementById("tobe_id")
                if (inputname.length < 5) {
                  submitreq.disabled = true;
                  startdate.disabled = true;
                  enddate.disabled = true;
                  asis.disabled = true;
                  doingby.disabled = true;
                  budget.disabled = true;
                  tobe.disabled = true;
                } else {
                  submitreq.disabled = false;
                  startdate.disabled = false;
                  enddate.disabled = false;
                  asis.disabled = false;
                  doingby.disabled = false;
                  budget.disabled = false;
                  tobe.disabled = false;

                }
              }


              // Hide success message after 5 seconds
              // setTimeout(function() {
              //   successMessage.style.display = "none";
              //   window.location.reload()
              // }, 5000);

              //<-------------- save requriment ------------------->     
              function requriment_create() {
                var myheaders = new Headers()
                myheaders.append("Content-Type", "application/json");

                var startdateString = document.getElementById("startdate").value
                var startdateparts = startdateString.split('/');
                var startdateObject = new Date(startdateparts[2], startdateparts[1] - 1, startdateparts[0], 0, 0, 0, 0);
                var startdatetimezoneOffset = startdateObject.getTimezoneOffset() / 60;
                startdateObject.setUTCHours(17 - startdatetimezoneOffset, 0, 0, 0); // set time to 17:00:00.000 in TST
                var startdateformattedDate = startdateObject.toISOString().substr(0, 10);


                var enddateString = document.getElementById("enddate").value
                var enddateparts = enddateString.split('/');
                var enddateObject = new Date(enddateparts[2], enddateparts[1] - 1, enddateparts[0], 0, 0, 0, 0);
                var enddatetimezoneOffset = enddateObject.getTimezoneOffset() / 60;
                enddateObject.setUTCHours(17 - enddatetimezoneOffset, 0, 0, 0); // set time to 17:00:00.000 in TST
                var enddateformattedDate = enddateObject.toISOString().substr(0, 10);


                var raw = JSON.stringify({
                  "processname": document.getElementById("processname").value,
                  "startdate": startdateformattedDate,
                  "enddate": enddateformattedDate,
                  "asis_id": document.getElementById("asis_id").value,
                  "budget_id": document.getElementById("budget_id").value,
                  "doingby_id": document.getElementById("doingby_id").value,
                  "tobe_id": document.getElementById("tobe_id").value,
                  "admin_id": <?php echo json_encode($idadmin) ?>,
                  "user_id": <?php echo json_encode($iduser) ?>,
                  "approver_id": <?php echo json_encode($idapprover) ?>,
                  "status": 0,
                  "status_id": 4,
                  "statusforprocess": 1,
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

                    } else {
                      alert('not ok');
                    }

                  })
                  .catch(error => console.log('error', error));
              }


            </script>

          </div>

          <div class="row" style="margin-top:150px">
            <div class="col-6" style="margin-left: 4%;">
              <div class="input-group">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-primary"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
              </div>
            </div>
            <div class="col-6">

            </div>
          </div>


          <div class="papertablereq">
            <table class="table mt-1">
              <thead style="text-align:center;font-size: 10px;">
                <th scope="col">Request id</th>
                <th scope="col">Request Date</th>
                <th scope="col">Request Enddate</th>
                <th scope="col">Process Name</th>
                <th scope="col">Doing By</th>
                <th scope="col" colspan="10">process</th>

                <th scope="col"></th>
                <th scope="col"></th>
              </thead>

              <tbody id="reqall_tabel">

              </tbody>

            </table>
          </div>
        </div>
    </div>

  </div>





  </div>
  <script src="../projectmanagement/projectmanagement.html"></script>
  <script language="JavaScript" src="home.js"></script>
<?php } ?>

</body>

</html>