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
<?php if ((isset($_SESSION['admin_login'])))  {?>
    <div class="container-fluid">
        <div class="row flex-nowrap">
        <?php include('../navbar.php'); ?>  
            <div class="row" style="height: 20%;">
                <span
                    style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
                   PROJECT MANAGEMENT
                </span><br>

                <div class="paperprojectmanagement">

                    <table class="table">
                        <thead>

                        </thead>
                        <tbody>

                        </tbody>
                    </table>

                </div>
                <div class="paperprojectplan">
                    <th scope="col">
                  <!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#datadetail">
                    update
                  </button>

                  <!-- Modal -->
                  <div class="modal fade" id="datadetail" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg" style="font-weight: normal;">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Project detail</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12 center" style="border: 1px solid black;height: 850px; width: 460px;">
                                    <div class="row mt-3">
                                      <span>ส่ง Email เพื่อยืนยันการอนุมัติ</span>
                                      <div class="col-12 mb-1 mt-4">
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="inputGroup-sizing-default">Topic</span>
                                          <input type="text" class="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-default">
                                        </div>
                                      </div>
                                      <div class="col-12 mb-1 mt-2">
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                                          <input type="text" class="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-default">
                                        </div>
                                      </div>
                                      <div class="col-12 mb-1 mt-2">
                                        <textarea type="text" style="height: 400px;width: 100%;"></textarea>
                                      </div>
                                      <div class="col-5 mb-1 mt-2">
                                        <span>Work Flow </span>
                                        <input class="mt-3 w-100" type="text" disabled>
                                      </div>
                                      <div class="col-5 mb-1 mt-2 ">
                                        <span>Extract File
                                        </span>
                                        <input class="mt-3 w-100" type="text" disabled>
                                      </div>
                                    </div>
                                    <div class="col-12 mt-3 mb-3" style="text-align: end;">
                                      <button type="button" class="buttonsend">SAVE AND SEND</button>
              
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