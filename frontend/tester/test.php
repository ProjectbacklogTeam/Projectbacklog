<?php if (isset($_SESSION['error'])) : ?> //fdgfxdfsadses
  <div class="error">
    <h3>
      <?php
      echo $_SESSION['error'];
      unset($_SESSION['error']);
      ?>
    </h3>
  </div>
<?php endif ?>
//test22222222222222222


<?php include '../../backend/home/requriment.php'  ?>
<?php while ($row = $req->fetch(PDO::FETCH_ASSOC)) { ?>
  <option value="<?php echo $row['asisname']; ?>"><?php echo $row['asisname']; ?></option>
<?php } ?>


<?php while ($row = $reqasis->fetch(PDO::FETCH_ASSOC)) { ?>
  <option value="<?php echo $row['id']; ?>"><?php echo $row['name']; ?></option>
<?php } ?>

    <!-- 
    <div class="modal fade" id="updatereqone" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <span>Request id</span><br>
                    <input class="mt-3" type="text">
                  </div>
                  <div class="col-4 mt-3">
                    <span>Request Emp id</span><br>
                    <input class="mt-3" type="text">
                  </div>
                  <div class="col-4  mt-3">
                    <span>Request Name</span><br>
                    <input class="mt-3" type="text">
                  </div>
                </div>
                <div class="row">
                  <div class="col-4 mt-3">
                    <span>Request Division</span><br>
                    <input class="mt-3" type="text">
                  </div>
                  <div class="col-4 mt-3">
                    <span>Request Department</span><br>
                    <input class="mt-3" type="text">
                  </div>
                  <div class="col-4  mt-3">
                    <span>Request Section</span><br>
                    <input class="mt-3" type="text">
                  </div>
                </div>
                <div class="row" style="margin-top: 1%">

                  <div class="col-12 mt-1">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-default">ชื่อเรื่อง</span>
                      <input type="text"   class="form-control" id="processname" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                    </div>
                  </div>
                  <div class="col-6 mb-1">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-default">วันที่ขอ</span>
                      <input type="datetime-local" id="startdate" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                    </div>
                  </div>
                  <div class="col-6 mb-1">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-default">วันที่ต้องการใช้ระบบ</span>
                      <input type="datetime-local" id="enddate" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                    </div>
                  </div>
                  <div class="col-6 mb-1">
                    <div class="input-group">
                      <label class="input-group-text" for="inputGroupSelect01">ASIS</label>
                      <select class="form-select" id="doingby">
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
                    <span>Results & Benefit</span><br>
                    <input class="mt-3" type="text">
                  </div>
                  <div class="col-6 mb-1 mt-2">
                    <span>Description</span><br>
                    <input class="mt-3" type="text">
                  </div>
                  <div class="col-6 mb-1 mt-2">
                    <span>Scope of Work </span><br>
                    <input class="mt-3" type="text">
                  </div>
                  <div class="col-6 mb-1 mt-2">
                  <span>Bussiness Flow </span><br>
                    <input class="mt-3" type="file">
                  </div>
                  <div class="col-6 mb-1 mt-2">
                    <span>Work Flow (Flowเดิมของระบบ) </span><br>
                    <input class="mt-3" type="file">
                  </div>
                  <div class="col-6 mb-1 mt-2">
                    <span>Extract File (แนบไฟล์เดิมของระบบ)</span><br>
                    <input class="mt-3" type="file">
                  </div>
                  <div class="col-6 mb-1 mt-2">
                    <span>Approvals</span><br>
                    <input class="mt-3" type="text">
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

    </div> -->

<!-- sql approve -->
<!-- SELECT * from  approvals JOIN requirements on approvals.Requirements_id = requirements.id  
JOIN `status` on approvals.status_id = status.id 
JOIN `approver` on approvals.approver_id = approver.id
JOIN `doingby` on  requirements.doingby_id = doingby.id
JOIN `tobe` on requirements.tobe_id = tobe.id
JOIN `asis` on requirements.asis_id = asis.id
JOIN `budget` on requirements.budget_id = budget.id
JOIN `admin` on requirements.admin_id = admin.id
JOIN `detail`on admin.detail_id =detail.id
JOIN `user` on requirements.user_id = user.id
JOIN `detail`on user.detail_id =detail.id
JOIN `approver` on requirements.approver_id = approver.id
JOIN `detail`on approver.detail_id =detail.id -->

<!-- approval collaps -->
<!-- 
<div class="collapse" id="collapseExample">
                <div class="card card-body" style="margin-top: 1%;width:1000px">
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
              </div>   -->



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
                  <!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#datadetail">
                    update
                  </button>

                  <!-- Modal -->
                  <div class="modal fade" id="datadetail" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen" style="font-weight: normal;overflow-y: scroll;">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Project detail</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <div class="flexbox center" style="margin-left: 8rem;line-height: 20px;">

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

                                  <button class="buttonprocess" data-bs-toggle="collapse" data-bs-target="#prototype"
                                    aria-expanded="false" aria-controls="prototype">
                                    <i class="fa-solid fa-swatchbook fa-2x"></i>
                                  </button>
                                  <span>
                                    Prototype
                                  </span>
                                  <div class="collapse" id="prototype">
                                    <div class="card card-body"
                                      style="margin-top: 30%;width: 1000px;height: 1000px;margin-left: -250px;">
                                      <span
                                        style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
                                        Prototype & Confirm
                                      </span><br>
                                      <div class="paperprototype" style="text-align: left;">
                                        <div style="margin: 5px 0px 20px 5px;">
                                          <span>
                                            Prototype
                                          </span><br>
                                        </div>
                                        <span
                                          style="font-size: large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  5%;">
                                          UX/UI (Prototype)
                                        </span><br>
                                        <div class="input-group mb-3 mt-5" style="margin: 0rem 5rem 0rem 5rem;">
                                          <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                            FILE</span>
                                          <input type="file" class="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-default">
                                        </div>
                                        <div class="input-group mb-3 mt-5" style="margin: 0rem 5rem 0rem 5rem;">
                                          <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                            LINK</span>
                                          <input type="text" class="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-default">
                                        </div>
                                        <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                          <button class="buttonsave">บันทึก</button>
                                          <button class="buttonedit">เเก้ไข</button>
                                        </div>

                                      </div>
                                      <div class="confirmprototype" style="text-align: left;">
                                        <div style="margin: 5px 0px 20px 5px;">
                                          <span>
                                            Confirm Prototype
                                          </span><br>
                                        </div>
                                        <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                          <div class="p-2 bd-highlight" style="width: 100%;">
                                            <div class="input-group " style="width: 100%;">
                                              <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                                              <input type="text" class="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default">
                                            </div>
                                          </div>
                                          <div class="p-2 bd-highlight" style="width: 100%;">
                                            <div class="input-group " style="width: 100%;">
                                              <span class="input-group-text" id="inputGroup-sizing-default">Topic</span>
                                              <input type="text" class="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default">
                                            </div>
                                          </div>
                                        </div>
                                        <div class="d-flex justify-content-center" style="width: 100%;">
                                          <div class="p-2 bd-highlight" style="width: 100%;">
                                            <textarea class="form-control" id="exampleFormControlTextarea1"
                                              rows="5"></textarea>
                                            <!-- <input type="text" style="width: 100%;height: 200px;"> -->
                                          </div>
                                        </div>
                                        <div class="d-flex justify-content-center" style="width: 100%;">
                                          <div class="p-2 bd-highlight" style="width: 100%;">
                                            <div class="input-group" style="width: 100%;">
                                              <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                FILE</span>
                                              <input type="file" class="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default">
                                            </div>
                                          </div>
                                          <div class="p-2 bd-highlight" style="width: 100%;">
                                            <div class="input-group" style="width: 100%;">
                                              <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                LINK</span>
                                              <input type="text" class="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default">
                                            </div>
                                          </div>

                                        </div>
                                        <div class="d-flex justify-content-sm-end mt-1" style="width: 100%;">
                                          <button class="buttonsend" style="margin-right: 3%;">SEND</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="item">
                                <div class="content">
                                  <button class="buttonprocess" data-bs-toggle="collapse" data-bs-target="#prototype"
                                    aria-expanded="false" aria-controls="prototype">
                                    <i class="fa-solid fa-circle-check fa-2x"></i>
                                  </button>
                                  <span>
                                    Confirm <br>Prototype
                                  </span>
                                </div>
                              </div>

                              <div class="item">
                                <div class="content">
                                  <button class="buttonprocess" data-bs-toggle="collapse" data-bs-target="#preparedata"
                                    aria-expanded="false" aria-controls="preparedata">
                                    <i class="fa-solid fa-diagram-project fa-2x"></i>
                                  </button>
                                  <span>
                                    Prepare<br>Data
                                  </span>
                                  <div class="collapse" id="preparedata">
                                    <div class="card card-body paperpreparedata"
                                      style="margin-top: 30%;margin-left: -500px;">
                                      <span
                                        style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
                                        Prepare Data
                                      </span><br>
                                      <div class="row">
                                        <div class="col-4" style="text-align: start;">
                                          <div>
                                            <span>Project propose</span><br>

                                          </div>
                                          <div class="mt-3">
                                            <span>UX/UI (Prototype)</span><br>

                                          </div>
                                        </div>
                                        <div class="col-8" style="text-align: start;">
                                          <span>Business Diagram</span><br>
                                          <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  LINK</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  FILE</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                          </div>
                                          <span>Use case Diagram</span><br>
                                          <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  LINK</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  FILE</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                          </div>
                                          <span>Er Diargram</span><br>
                                          <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  LINK</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  FILE</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                          </div>
                                          <span>Data Dictionary</span><br>
                                          <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  LINK</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  FILE</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                          </div>
                                          <span>Work Flow (Flow Chart)</span><br>
                                          <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  LINK</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  FILE</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                          </div>
                                          <span>Sequence Diagram</span><br>
                                          <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  LINK</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  FILE</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="d-flex justify-content-sm-end mt-1" style="width: 100%;">
                                        <button class="buttonsave" style="margin-right: 3%;">SEND</button>
                                        <button class="buttonedit" style="margin-right: 3%;">SEND</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="item">
                                <div class="content">
                                  <button class="buttonprocess" data-bs-toggle="collapse" data-bs-target="#coding"
                                    aria-expanded="false" aria-controls="coding">
                                    <i class="fa-solid fa-computer fa-2x"></i>
                                  </button>
                                  <span>
                                    Coding
                                  </span>
                                  <div class="collapse" id="coding">
                                    <div class="card card-body papercoding"
                                      style="margin-top: 30%;margin-left: -400px;text-align: start;">
                                      <span
                                        style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
                                        Coding & Testing
                                      </span><br>
                                      <span>Coding<br>
                                        <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                          <div class="p-2 bd-highlight" style="width: 100%;">
                                            <div class="input-group " style="width: 100%;">
                                              <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                LINK</span>
                                              <input type="text" class="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default">
                                            </div>
                                          </div>
                                        </div>
                                        <span>Testing</span><br>
                                        <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                          <div class="p-2 bd-highlight" style="width: 100%;">
                                            <div class="input-group " style="width: 100%;">
                                              <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                Link</span>
                                              <input type="text" class="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default">
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                  </div>



                                </div>
                              </div>

                              <div class="item">
                                <div class="content">
                                  <button class="buttonprocess" data-bs-toggle="collapse" data-bs-target="#coding"
                                    aria-expanded="false" aria-controls="coding">
                                    <i class="fa-solid fa-clipboard-check fa-2x"></i>
                                  </button>
                                  <span>
                                    Testing
                                  </span>

                                </div>
                              </div>

                              <div class="item">
                                <div class="content">

                                  <button class="buttonprocess" data-bs-toggle="collapse" data-bs-target="#deliver"
                                    aria-expanded="false" aria-controls="deliver">
                                    <i class="fa-solid fa-box-open fa-2x"></i>
                                  </button>
                                  <span>
                                    Delivered
                                  </span>
                                  <div class="collapse" id="deliver">
                                    <div class="card card-body paperdiliver"
                                      style="margin-top: 30%;margin-left: -950px;">
                                      <span
                                        style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
                                        Prepare Data
                                      </span><br>
                                      <div class="row">

                                        <div class="col-6" style="text-align: start;">
                                          <span>Prototype</span><br>
                                          <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  LINK</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  FILE</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                          </div>
                                          <span>Business Diagram</span><br>
                                          <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  LINK</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  FILE</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                          </div>
                                          <span>Use case Diagram</span><br>
                                          <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  LINK</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  FILE</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                          </div>
                                          <span>Er Diargram</span><br>
                                          <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  LINK</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  FILE</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                          </div>
                                          <span>Data Dictionary</span><br>
                                          <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  LINK</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  FILE</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                          </div>
                                          <span>Work Flow (Flow Chart)</span><br>
                                          <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  LINK</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  FILE</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                          </div>
                                          <span>Sequence Diagram</span><br>
                                          <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  LINK</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                            <div class="p-2 bd-highlight" style="width: 100%;">
                                              <div class="input-group " style="width: 100%;">
                                                <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                  FILE</span>
                                                <input type="text" class="form-control"
                                                  aria-label="Sizing example input"
                                                  aria-describedby="inputGroup-sizing-default">
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-6" style="text-align: start;">
                                          <span>FILE & LINK</span><br>
                                          <div class="p-2 bd-highlight" style="width: 100%;">
                                            <div class="input-group " style="width: 100%;">
                                              <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                FILE</span>
                                              <input type="text" class="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default">
                                            </div><br>
                                            <div class="input-group " style="width: 100%;">
                                              <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                LINK</span>
                                              <input type="text" class="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default">
                                            </div>
                                          </div>
                                          <span>TEST CASE</span><br>
                                          <div class="p-2 bd-highlight" style="width: 100%;">
                                            <div class="input-group " style="width: 100%;">
                                              <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                FILE</span>
                                              <input type="text" class="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default">
                                            </div><br>
                                            <div class="input-group " style="width: 100%;">
                                              <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                                LINK</span>
                                              <input type="text" class="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default">
                                            </div>
                                          </div>
                                          <div class="d-flex justify-content-sm-end mt-1" style="width: 100%;">
                                            <button class="buttonsave" style="margin-right: 3%;">SAVE</button>
                                            <button class="buttonedit" style="margin-right: 3%;">EDIT</button>
                                          </div>

                                          <div class="row mt-5">
                                            <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                              <div class="p-2 bd-highlight" style="width: 100%;">
                                                <div class="input-group " style="width: 100%;">
                                                  <span class="input-group-text"
                                                    id="inputGroup-sizing-default">Email</span>
                                                  <input type="text" class="form-control"
                                                    aria-label="Sizing example input"
                                                    aria-describedby="inputGroup-sizing-default">
                                                </div>
                                              </div>
                                            </div>
                                            <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                              <div class="p-2 bd-highlight" style="width: 100%;">
                                                <div class="input-group " style="width: 100%;">
                                                  <span class="input-group-text"
                                                    id="inputGroup-sizing-default">Topic</span>
                                                  <input type="text" class="form-control"
                                                    aria-label="Sizing example input"
                                                    aria-describedby="inputGroup-sizing-default">
                                                </div>
                                              </div>
                                            </div>
                                            <div class="d-flex justify-content-center" style="width: 100%;">
                                              <div class="p-2 bd-highlight" style="width: 100%;">
                                                <textarea class="form-control" id="exampleFormControlTextarea1"
                                                  rows="5"></textarea>
                                                <!-- <input type="text" style="width: 100%;height: 200px;"> -->
                                              </div>
                                            </div>
                                            <div class="d-flex justify-content-sm-end mt-1" style="width: 100%;">
                                              <button class="buttonsend" style="margin-right: 3%;">SEND</button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="item">
                                <div class="content">
                                  <button class="buttonprocess" data-bs-toggle="collapse" data-bs-target="#value"
                                    aria-expanded="false" aria-controls="value">
                                    <i class="fa-solid fa-heart fa-2x"></i>
                                  </button>
                                  <span>
                                    Implement
                                  </span>
                                  <div class="collapse" id="value">
                                    <div class="card card-body papervalue"
                                      style="text-align: start;margin-top: 30%;margin-left: -900px;">
                                      <span
                                        style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
                                        Implement
                                      </span><br>
                                      <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                        <div class="p-2 bd-highlight" style="width: 100%;">
                                          <span>Mandays</span><br>
                                          <input type="text" class="mt-3">
                                        </div>
                                        <div class="p-2 bd-highlight" style="width: 100%;">
                                          <span>วันที่เริ่มต้นปฏิบัติงาน</span><br>
                                          <input type="datetime-local" class="mt-3">
                                        </div>
                                        <div class="p-2 bd-highlight" style="width: 100%;">
                                          <span>วันที่สิ้นสุด</span><br>
                                          <input type="datetime-local" class="mt-3">
                                        </div>
                                      </div>
                                      <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                        <div class="p-2 bd-highlight" style="width: 100%;">
                                          <span>ค่าแรง</span><br>
                                          <input type="text" class="mt-3">
                                        </div>
                                        <div class="p-2 bd-highlight" style="width: 100%;">
                                          <span>Estimate ภายนอก</span><br>
                                          <input type="text" class="mt-3">
                                        </div>
                                        <div class="p-2 bd-highlight" style="width: 100%;">
                                          <span>Value Release</span><br>
                                          <input type="text" class="mt-3">
                                        </div>
                                      </div>
                                      <div class="div mt-3 " style="text-align: center;">
                                        <span style="font-size: large;font-weight: bold;">
                                          Benefit
                                        </span>
                                      </div>
                                      <div class="d-flex justify-content-center mt-3 mb-3" style="width: 100%;">
                                        <div class="p-2 bd-highlight" style="width: 100%;">
                                          <span>Benefit people</span><br>
                                          <input type="text" class="mt-3">
                                        </div>
                                        <div class="p-2 bd-highlight" style="width: 100%;">
                                          <span>Benefit money</span><br>
                                          <input type="text" class="mt-3">
                                        </div>
                                        <div class="p-2 bd-highlight" style="width: 100%;">
                                          <span> Banefit mandays</span><br>
                                          <input type="text" class="mt-3">
                                        </div>
                                      </div>
                                      <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                        <div class="p-2 bd-highlight" style="width: 100%;">
                                          <span>Before</span><br>
                                          <div class="input-group" style="width: 100%;">
                                            <span class="input-group-text mt-3" id="inputGroup-sizing-default">ATTECTH
                                              LINK</span>
                                            <input type="text" class="form-control mt-3"
                                              aria-label="Sizing example input"
                                              aria-describedby="inputGroup-sizing-default">
                                          </div>
                                        </div>
                                        <div class="p-2 bd-highlight " style="width: 100%;">
                                          <span>After</span><br>
                                          <div class="input-group" style="width: 100%;">
                                            <span class="input-group-text mt-3" id="inputGroup-sizing-default">ATTECTH
                                              LINK</span>
                                            <input type="text" class="form-control mt-3"
                                              aria-label="Sizing example input"
                                              aria-describedby="inputGroup-sizing-default">
                                          </div>
                                        </div>

                                      </div>
                                      <div class="d-flex justify-content-sm-end mt-5" style="width: 100%;">
                                        <button class="buttonedit" style="margin-right: 3%;">EDIT</button>
                                        <button class="buttonsave" style="margin-right: 3%;">SAVE</button>
                                      </div>


                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row projectdetailone">
                            <div class="col-8" style="height: 100%;">
                              <div class="d-flex justify-content-evenly mt-3">
                                <div class="p-2 bd-highlight">
                                  <span>Request id</span><br>
                                  <input class="pjdetailinput mt-3" type="text">
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span>Process Name</span><br>
                                  <input class="pjdetailinput mt-3" type="text">
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span>Request Emp id</span><br>
                                  <input class="pjdetailinput mt-3" type="text">
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span>Request Name</span><br>
                                  <input class="pjdetailinput mt-3" type="text">
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span>Request Division</span><br>
                                  <input class="pjdetailinput mt-3" type="text">
                                </div>
                              </div>
                              <!-- --------------- -->
                              <div class="d-flex justify-content-evenly mt-3">
                                <div class="p-2 bd-highlight">
                                  <span>Request Department</span><br>
                                  <input class="pjdetailinput mt-3" type="text">
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span>Request Section</span><br>
                                  <input class="pjdetailinput mt-3" type="text">
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span>Request Date</span><br>
                                  <input class="pjdetailinput mt-3" type="text">
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span>Request Enddate</span><br>
                                  <input class="pjdetailinput mt-3" type="text">
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span>AS IS</span><br>
                                  <input class="pjdetailinput mt-3" type="text">
                                </div>
                              </div>

                              <!-- --------------- -->
                              <div class="d-flex justify-content-start mt-3" style="margin-left: 2rem;">
                                <div class="p-2 bd-highlight">
                                  <span>TO BE</span><br>
                                  <input class="pjdetailinput mt-3" type="text">
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span>BUDGET</span><br>
                                  <input class="pjdetailinput mt-3" type="text">
                                </div>
                              </div>

                              <!-- --------------- -->
                              <div class="d-flex justify-content-start mt-3" style="margin-left: 2rem;">
                                <div class="p-2 bd-highlight" style="width: 400px;">
                                  <span>Painpoint</span><br>
                                  <input class="pjdetailinput mt-3" type="text" style="width: 300px;height: 50px;">
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span>Doing By</span><br>
                                  <input class="pjdetailinput mt-3" type="text">
                                </div>
                              </div>
                              <!-- --------------- -->
                              <div class="d-flex justify-content-start mt-3" style="margin-left: 2rem;">
                                <div class="p-2 bd-highlight" style="width: 400px;">
                                  <span>Description</span><br>
                                  <input class="pjdetailinput mt-3" type="text" style="width: 300px;height: 50px;">
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span>Work Flow</span><br>
                                  <input class="pjdetailinput mt-3" type="file">
                                </div>
                              </div>

                              <!-- --------------- -->
                              <div class="d-flex justify-content-start mt-3" style="margin-left: 2rem;">
                                <div class="p-2 bd-highlight" style="width: 400px;">
                                  <span>Results & Benefit</span><br>
                                  <input class="pjdetailinput mt-3" type="text" style="width: 300px;height: 50px;">
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span>Extract File</span><br>
                                  <input class="pjdetailinput mt-3" type="file">
                                </div>
                              </div>
                              <!-- --------------- -->
                              <div class="d-flex justify-content-start mt-3" style="margin-left: 2rem;">
                                <div class="p-2 bd-highlight" style="width: 400px;">
                                  <span>Exclusions & Constraints</span><br>
                                  <input class="pjdetailinput mt-3" type="text" style="width: 300px;height: 50px;">
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span>Approvals</span><br>
                                  <input class="pjdetailinput mt-3" type="text">
                                </div>
                              </div>
                              <!-- --------------- -->
                              <div class="d-flex justify-content-start mt-3" style="margin-left: 2rem;">
                                <div class="p-2 bd-highlight" style="width: 400px;">
                                  <span>Support Businassteam</span><br>
                                  <input class="pjdetailinput mt-3" type="text">
                                </div>

                              </div>

                              <!-- --------------- -->



                            </div>
                            <div class="col-4">
                              <div class="codingplan">
                                <span style="font-size:larger;font-weight: bold">
                                  วางแผนกำหนดการ Coding
                                </span><br>
                                <div class="d-flex justify-content-start mt-3">
                                  <div class="p-2 bd-highlight">
                                    <span>วันที่เริ่ม Coding</span><br>
                                    <input class="pjdetailinput mt-3" type="datetime-local">
                                  </div>
                                  <div class="p-2 bd-highlight">
                                    <span>วันที่เริ่ม Coding</span><br>
                                    <input class="pjdetailinput mt-3" type="datetime-local">
                                  </div>
                                </div>
                                <div class="d-flex justify-content-start mt-3">
                                  <div class="p-2 bd-highlight">
                                    <span>Format</span><br>
                                    <input class="pjdetailinput mt-3" type="text">
                                  </div>
                                  <div class="p-2 bd-highlight">
                                    <span>Name/University</span><br>
                                    <input class="pjdetailinput mt-3" type="text" style="width: 200px;height: 70px;">
                                  </div>
                                </div>
                                <div class="d-flex justify-content-start mt-3">
                                  <div class="p-2 bd-highlight">
                                    <span>Database</span><br>
                                    <input class="pjdetailinput mt-3" type="text">
                                  </div>
                                  <div class="p-2 bd-highlight">
                                    <span>Languages</span><br>
                                    <input class="pjdetailinput mt-3" type="text">
                                  </div>
                                </div>
                              </div>


                            </div>


                          </div>

                        </div>

                      </div>
                    </div>
                  </div>

                </th>



              </tr>