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