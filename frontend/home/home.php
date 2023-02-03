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

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sriracha">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
</head>

<body>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <?php include('../navbar.php'); ?>  
      <?php if ((isset($_SESSION['admin_login'])) || (isset($_SESSION['user_login'])) || (isset($_SESSION['approver_login'])))  {?>
      <div class="row" style="height: 20%;">
        <span style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
          Digital Transformation Dashboard
        </span><br>
        <div class="flexbox center" style="margin-left: 1rem;">

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
                <input type="text" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default" id="processname">
              </div>
            </div>
            <div class="col-6 mb-5">
              <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">วันที่ขอ</span>
                <input type="datetime-local" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default" id="startdate">
              </div>
            </div>
            <div class="col-6 mb-5">
              <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">วันที่ต้องการใช้ระบบ</span>
                <input type="datetime-local" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default" id="enddate">
              </div>
            </div>
            <div class="col-6 mb-5">
              <div class="input-group">
                <label class="input-group-text" for="inputGroupSelect01">ASIS</label>
                <select class="form-select" id="asis_id">
                  <option selected>Choose...</option>
                  <option value=1>Manual Process : ยังไม่มีระบบ</option>
                  <option value=2>Digitization : ยกระดับระบบ</option>
                </select>
              </div>
            </div>
            <div class="col-6 mb-5">
              <div class="input-group">
                <label class="input-group-text" for="inputGroupSelect01">TOBE</label>
                <select class="form-select" id="tobe_id">
                  <option selected>Choose...</option>
                  <option value=1>Digitalization : เปลี่ยนกระบวนการทำงาน</option>
                </select>
              </div>
            </div>
            <div class="col-6 mb-5">
              <div class="input-group">
                <label class="input-group-text" for="inputGroupSelect01">Doing By</label>
                <select class="form-select" id="doingby_id">
                  <option selected>Choose...</option>
                  <option value=1>Manual Process : ยังไม่มีระบบ</option>
                  <option value=2>Digitization : ยกระดับระบบ</option>
                </select>
              </div>
            </div>
            <div class="col-6 mb-5">
              <div class="input-group">
                <label class="input-group-text" for="inputGroupSelect01">BUDJET</label>
                <select class="form-select" id="budget_id">
                  <option value="">Digitalization : เปลี่ยนกระบวนการทำงาน</option>
                </select>
              </div>
            </div>
            <div class="col-12" style="text-align:end ;">
              <button class="buttonsave" onclick="requriment_create()">บันทึก</button>
            </div>


          </div>

        </div>
        <div class="papertablereq center" style="margin-top: 10%;">
          <div class="row mt-3">
            <div class="col-6">

            </div>
            <div class="col-6">
              <div class="input-group">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                  aria-describedby="search-addon" />
                <button type="button" class="btn btn-primary">search</button>
              </div>
            </div>
          </div>
          <table class="table mt-5">
            <thead>
              <th scope="col">Request id</th>
              <th scope="col">Request Date</th>
              <th scope="col">Request Enddate</th>
              <th scope="col">Process Name</th>
              <th scope="col">Doing By</th>
              <th scope="col">Process Status</th>
              <th scope="col"></th>
            </thead>

            <tbody  id="requrimenttable">
              <tr>
                <th scope="col">


                </th>
                <th scope="col">


                </th>
                <th scope="col">


                </th>
                <th scope="col">


                </th>
                <th scope="col">


                </th>
                <th scope="col">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    update
                  </button>




                  </div>
                </div>
              </div>
            </div>
            </th>
            </tr>
            </tbody>
          </table>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-sm" style="margin-left: 60px;">
              <div class="modal-content" style="width: 1100px; margin-left: 130px;">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Requirements Update</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="height: 1000px;width: 1000px;">
                  <div class="row">
                    <div class="col-12" style="margin-left: 3rem;">
                      <div class="row">
                        <div class="col-4 mt-3">
                          <span>Request id</span>
                          <input class="mt-3" type="text">
                        </div>
                        <div class="col-4 mt-3">
                          <span>Request Emp id</span>
                          <input class="mt-3" type="text">
                        </div>
                        <div class="col-4  mt-3">
                          <span>Request Name</span>
                          <input class="mt-3" type="text">
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-4 mt-3">
                          <span>Request Division</span>
                          <input class="mt-3" type="text">
                        </div>
                        <div class="col-4 mt-3">
                          <span>Request Department</span>
                          <input class="mt-3" type="text">
                        </div>
                        <div class="col-4  mt-3">
                          <span>Request Section</span>
                          <input class="mt-3" type="text">
                        </div>
                      </div>
                      <div class="row" style="margin-top: 1%">

                        <div class="col-12 mt-1">
                          <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">ชื่อเรื่อง</span>
                            <input type="text" class="form-control" aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-default">
                          </div>
                        </div>
                        <div class="col-6 mb-1">
                          <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">วันที่ขอ</span>
                            <input type="datetime-local" class="form-control" aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-default">
                          </div>
                        </div>
                        <div class="col-6 mb-1">
                          <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">วันที่ต้องการใช้ระบบ</span>
                            <input type="datetime-local" class="form-control" aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-default">
                          </div>
                        </div>
                        <div class="col-6 mb-1">
                          <div class="input-group">
                            <label class="input-group-text" for="inputGroupSelect01">ASIS</label>
                            <select class="form-select" id="inputGroupSelect01">
                              <option selected>Choose...</option>
                              <option value="">Manual Process : ยังไม่มีระบบ</option>
                              <option value="">Digitization : ยกระดับระบบ</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-6 mb-1">
                          <div class="input-group">
                            <label class="input-group-text" for="inputGroupSelect01">TOBE</label>
                            <select class="form-select" id="inputGroupSelect01">
                              <option selected>Choose...</option>
                              <option value="">Digitalization : เปลี่ยนกระบวนการทำงาน</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-6 mb-1">
                          <div class="input-group">
                            <label class="input-group-text" for="inputGroupSelect01">Doing By</label>
                            <select class="form-select" id="inputGroupSelect01">
                              <option selected>Choose...</option>
                              <option value="">Manual Process : ยังไม่มีระบบ</option>
                              <option value="">Digitization : ยกระดับระบบ</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-6 mb-1">
                          <div class="input-group">
                            <label class="input-group-text" for="inputGroupSelect01">BUDJET</label>
                            <select class="form-select" id="inputGroupSelect01">
                              <option value="">Digitalization : เปลี่ยนกระบวนการทำงาน</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-6 mb-1 mt-2">
                          <span>Pain Point</span><br>
                          <input class="mt-3" type="text">
                        </div>
                        <div class="col-6 mb-1 mt-2">
                          <span>Support Businessteam</span>
                          <input class="mt-3" type="text">
                        </div>
                        <div class="col-6 mb-1 mt-2">
                          <span>Description</span><br>
                          <input class="mt-3" type="text">
                        </div>
                        <div class="col-6 mb-1 mt-2">
                          <span>Results & Benefit</span><br>
                          <input class="mt-3" type="text">
                        </div>
                        <div class="col-6 mb-1 mt-2">
                          <span>Exclusions & Constraints</span><br>
                          <input class="mt-3" type="text">
                        </div>
                        <div class="col-6 mb-1 mt-2">

                        </div>
                        <div class="col-6 mb-1 mt-2">
                          <span>Work Flow (Flowเดิมของระบบ) </span><br>
                          <input class="mt-3" type="file">
                        </div>
                        <div class="col-6 mb-1 mt-2">
                          <span>Extract File (แนบไฟล์เดิมของระบบ)</span><br>
                          <input class="mt-3" type="file">
                        </div>

                        <div class="col-12 mt-2" style="text-align:end ;">
                          <button class="buttonsave">บันทึก</button>
                        </div>


                      </div>


                    </div>
                  
                  </div>

                </div>
              </div>



            </div>

          </div>


        </div>


      </div>
      <?php } ?>

      <script src="../navbar.js"></script>
      <script src="home.js"></script>
</body>

</html>