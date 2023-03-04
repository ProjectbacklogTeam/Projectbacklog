<?php
session_start();
// require_once '../../backend/home/requriment.php';
// include '../../backend/requriment.php';

if (isset($_SESSION['admin_login'])) {
  $idadmin = $_SESSION['admin_login_id'];
  $iduser = null;
  $idapprover = null;
} else if (isset($_SESSION['approver_login'])) {
  $idapprover = $_SESSION['approver_login_id'];
  $idadmin = null;
  $iduser = null;
} else if (isset($_SESSION['user_login'])) {
  $iduser = $_SESSION['user_login_id'];
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
  <!-- <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.0"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.2.0/chartjs-plugin-datalabels.min.js" integrity="sha512-JPcRR8yFa8mmCsfrw4TNte1ZvF1e3+1SdGMslZvmrzDYxS69J7J49vkFL8u6u8PlPJK+H3voElBtUCzaXj+6ig==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css">

  <!-- Bootstrap 5 JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.min.js"></script>

  <!-- jQuery -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>

  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sriracha">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js" integrity="sha512-CryKbMe7sjSCDPl18jtJI5DR5jtkUWxPXWaLCst6QjH8wxDexfRJic2WRmRXmstr2Y8SxDDWuBO6CQC6IE4KTA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body onload="onloadfunction()" class="bodyhome">
  <div class="container-fluid">
    <div class="contenthome row flex-nowrap" style="overflow: auto;">
      <?php include('../navbar.php'); ?>
      <?php if ((isset($_SESSION['admin_login'])) || (isset($_SESSION['user_login'])) || (isset($_SESSION['approver_login']))) { ?>
        <div class="row rowhome ">

          <div class="headertopichome">
            <span>
              DIGITAL TRANFORMATION DASHBOARD
            </span><br>
          </div>
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
          <div class="paperdashboard">
            <div class="row flex-nowrap ">
              <div class="col-2 mt-3 ">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1" style="text-align:center">
                          ASIS PROCESS</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800" id="reqalldashboard">

                        </div>
                      </div>
                      <div class="col-auto">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 mt-3 ">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1" style="text-align:center">
                          TOBE PROCESS</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800" id="tobedashboard">

                        </div>
                      </div>
                      <div class="col-auto">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" style="height: 10rem;">
                <div class="col-8  ">
                  <div class="row mt-3 ">
                    <div class="col-12">

                    </div>
                    <div class="col-4 ">
                      <div class="card">
                        <div class="card-body" style="padding-bottom: 3rem">
                          <div class="text-xs font-weight-bold text-primary text-uppercase mb-1" style="text-align: center;">
                            MANDAYS
                          </div><br>
                          <div class="card-text">
                            <div id="mandays_summary">

                            </div>

                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-4 ">
                      <div class="card">
                        <div class="card-body" style="padding-bottom: 3rem">
                          <div class=" text-xs font-weight-bold text-primary text-uppercase mb-1" style="text-align: center;">
                            MONEY
                          </div><br>
                          <div class="card-text ">
                            <div id="money_summary">

                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 ">
                      <div class="card">
                        <div class="card-body" style="padding-bottom: 3rem">
                          <div class="text-xs font-weight-bold text-primary text-uppercase mb-1" style="text-align: center;">
                            PEOPLE
                          </div><br>
                          <div class="card-text">
                            <div id="people_summary">

                            </div>

                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="col-md-2">
                <div class="card border-left-warning shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col-12">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          PEOPLE MANAGEMENT
                        </div><br>
                      </div>
                      <div class="col-6">
                        <div class="h5 mb-0 font-weight-bold text-gray-800" id="peoplemanagement">

                        </div>

                      </div>
                      <div class="col-6 manageicon">
                        <i class="fa-solid fa-list-check fa-4x"></i>

                      </div>


                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="card border-left-warning shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col-12">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          PEOPLE CAPABILITY AND CULTURE
                        </div><br>
                      </div>
                      <div class="col-6">
                        <div class="h5 mb-0 font-weight-bold text-gray-800" id="peoplecapacity">
                        </div>
                      </div>
                      <div class="col-6 manageicon">
                        <i class="fa-solid fa-people-group fa-4x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-2">
                <div class="card border-left-warning shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col-12">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          LICENSE TO OPERATE AND PERMIT
                        </div><br>
                      </div>
                      <div class="col-6">

                        <div class="h5 mb-0 font-weight-bold text-gray-800" id="license">
                        </div>
                      </div>
                      <div class="col-6 manageicon">
                        <i class="fa-solid fa-id-card fa-4x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-2">
                <div class="card border-left-warning shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col-12">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          ENVIRONMENTAL SOCIAL AND GOVERNANCE
                        </div><br>
                      </div>
                      <div class="col-6 mr-2">
                        <div class="h5 mb-0 font-weight-bold text-gray-800" id="environmental">
                        </div>
                      </div>
                      <div class="col-6 manageicon">
                        <i class="fa-solid fa-handshake fa-4x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-2">
                <div class="card border-left-warning shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col-12">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          ECOSYSTEM AND FACILITY MANAGEMENT
                        </div><br>
                      </div>
                      <div class="col-6">

                        <div class="h5 mb-0 font-weight-bold text-gray-800" id="ecosystem">
                        </div>
                      </div>
                      <div class="col-6 manageicon">
                        <i class="fa-solid fa-seedling fa-4x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>







            </div>


            <div class="row justify-content-center mt-4">
              <div class="col-6">
                <canvas id="chart_bar_department" style="background-color: white; box-shadow: 0 0 2px 1px #cccccc;"></canvas>


              </div>
              <div class="col-6">
                <canvas id="chart_pie_allreq" style="background-color: white; box-shadow: 0 0 2px 1px #cccccc;"></canvas>


              </div>





            </div>
            <div class="row" style="background-color: white;padding:2rem;margin-top: 2rem!important; box-shadow: 0 0 2px 1px #cccccc;">
              <div class="col-6">
                <canvas id="chart_bar_allreq"></canvas>


              </div>
              <div class="col-6">
                <canvas id="chart_bar_reqpercentinyear"></canvas>


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
                  <input type="text" class="form-control" id="startdate" placeholder="dd/mm/yyyy" disabled>
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


                  </select>
                </div>
              </div>
              <div class="col-6 mb-5">
                <div class="input-group">
                  <label class="input-group-text" for="inputGroupSelect01">TOBE</label>
                  <select class="form-select" id="tobe_id" disabled>

                  </select>
                </div>
              </div>
              <div class="col-6 mb-5">
                <div class="input-group">
                  <label class="input-group-text" for="inputGroupSelect01">Doing By</label>

                  <select class="form-select" id="doingby_id" disabled>

                  </select>
                </div>
              </div>
              <div class="col-6 mb-5">
                <div class="input-group">
                  <label class="input-group-text" for="inputGroupSelect01">BUDJET</label>
                  <select class="form-select" id="budget_id" disabled>

                  </select>
                </div>
              </div>
              <div class="col-12" style="text-align:end ;">
                <button class="buttonsave" id="savereq" onclick="requriment_create()" disabled>SAVE</button>
              </div>


            </div>
            <script>
              $(document).ready(function() {
                var currentYear = new Date().getFullYear();
                getchartpriority(currentYear);
              });

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
              let daystrat = todaystrat.getDate();
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
                      showsuccessAlert()
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
                <input id="searchinput" type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-primary" onclick="searchTable()"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
              </div>
            </div>
            <div class="col-5" id="colfeedback">
              <div class="input-group" >
              <span class="input-group-text" id="inputGrouplink_feedback" >Link Feedback</span>
                <input type="text" class="form-control" id="link_feedback" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-warning" type="button" id="button-addon2" onclick="savefeedback()">SAVE</button>
              </div>
            </div>
          </div>


          <div class="papertablereq">
            <table class="table mt-1" id="tablereqall">
              <thead style="text-align:center;font-size: 10px;">
                <th scope="col" onclick="sortBy(0)">Request id</th>
                <th scope="col" onclick="sortBy(1)">Request Date</th>
                <th scope="col" onclick="sortBy(2)">Request Enddate</th>
                <th scope="col" onclick="sortBy(3)">Process Name</th>
                <th scope="col" onclick="sortBy(4)">Doing By</th>
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
  <!-- <script src="../projectmanagement/projectmanagement.html"></script> -->
  <script language="JavaScript" src="home.js"></script>
  <!-- <script src="../projectmanagement/projectmanagement.js"></script> -->

<?php } ?>

</body>

</html>