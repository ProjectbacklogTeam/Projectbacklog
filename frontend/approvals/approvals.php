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
<?php if ((isset($_SESSION['admin_login'])) || (isset($_SESSION['approver_login'])))  {?>
  <div class="container-fluid">
    <div class="row flex-nowrap">
    <?php include('../navbar.php'); ?>  
      <div class="row" style="height: 20%;">
        <span style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
          Approvals
        </span><br>
        <div class="paperapprovals">
          <table class="table">
            <thead>
              <th scope="col">Request id</th>
              <th scope="col">Request Date</th>
              <th scope="col">Request Enddate</th>
              <th scope="col">Process Name</th>
              <th scope="col">Doing By</th>
              <th scope="col">Process Status</th>
              <th scope="col">Status</th>
              <th scope="col">Status</th>
            </thead>
            <tbody>

            </tbody>
          </table>

          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample">
            ดูรายละเอียดเพิ่มเติม
          </button>
          <div class="collapse" id="collapseExample">
            <div class="card card-body" style="margin-top: 1%;">
              <div class="aprrovaltable">
              <div class="row">
                <div class="col-8" style="padding-left: 2rem;">
                  <div class="row ">
                    <div class="col-3 mt-3">
                      <span>Request id</span><br>
                      <input class="inputapprovals mt-3" type="text">
                    </div>
                    <div class="col-3 mt-3">
                      <span>Request Emp id</span><br>
                      <input class="inputapprovals mt-3" type="text">
                    </div>
                    <div class="col-3 mt-3">
                      <span>Request Name</span><br>
                      <input class="inputapprovals mt-3" type="text">
                    </div>
                    <div class="col-3 mt-3">
                      <span>Request Division</span><br>
                      <input class="inputapprovals mt-3" type="text">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3 mt-3">
                      <span>Request Department</span><br>
                      <input class="inputapprovals mt-3" type="text">
                    </div>
                    <div class="col-3  mt-3">
                      <span>Request Section</span><br>
                      <input class="inputapprovals mt-3" type="text">
                    </div>
                    <div class="col-3  mt-3">
                      <span>TO BE</span><br>
                      <input class="inputapprovals mt-3" type="text">
                    </div>
                    <div class="col-3  mt-3">
                      <span>BUDGET</span><br>
                      <input class="inputapprovals mt-3" type="text">
                    </div>
                  </div>
                  <div class="col-12 mt-3">
                    <span>Pain Point</span><br>
                    <input class="inputapprovals mt-3" type="text" style="width: 100%;height: 50px;">
                  </div>
                  <div class="col-12 mt-3">
                    <span>Description</span><br>
                    <input class="inputapprovals mt-3" type="text" style="width: 100%;height: 50px;">
                  </div>
                  <div class="col-12 mt-3">
                    <span>Results & Benefit</span><br>
                    <input class="inputapprovals mt-3" type="text" style="width: 100%;height: 50px;">
                  </div>

                </div> 
                <div class="col-4" style="padding-left: 1rem;">
                  <div class="row">
                    <div class="col-12 mt-3">
                      
                        <span>Exclusions & Constraints</span><br>
                        <input class="inputapprovals mt-3" type="text">
                      
                    </div>
                    
                    <div class="col-12 mt-3">
                      
                        <span>Support Businassteam</span><br>
                        <input class="inputapprovals mt-3" type="text">
                    </div>
                    <div class="col-6 mt-3">
                
                        <span>Work Flow</span><br>
                        <input class="inputapprovals mt-3" type="file">
                   
                    </div>
                    <div class="col-6 mt-3" >                     
                        <span>Extract File</span><br>
                        <input class="inputapprovals mt-3" type="file">               
                    </div>
                    <div class="col-12 mt-3">
                        <span>Approvals</span><br>
                        <input class="inputapprovals mt-3" type="file">                    
                    </div>
                    <div class="col-12 mt-5 mb-3" style="text-align: end;">
                      <button type="button" class="buttonapprove">APPROVE</button>
                      <button type="button" class="buttonreject">REJECT</button>
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






  </div>
  <?php } ?>



  <script src="../navbar.js"></script>
</body>

</html>