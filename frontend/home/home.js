var getreqall = function () {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  var reqall_tabel = document.getElementById('reqall_tabel');
  fetch("http://localhost/projectbacklog/backend/home/home_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {

      reqall_tabel.innerHTML = '';
      var jsonObj = JSON.parse(result);
      
      for (let req of jsonObj) {
        if (req.startdate == null) {
          var startdate = "ยังไม่ระบุ"
        } else {
          var startdate = req.startdate
        }
        if (req.enddate == null) {
          var enddate = "ยังไม่ระบุ"
        } else {
          var enddate = req.enddate
        }
        if (req.processname == null) {
          var processname = "ยังไม่ระบุ"
        } else {
          var processname = req.processname
        }
        if (req.doingby_id == null) {
          var doingby_id = "ยังไม่ระบุ"
        } else {
          var doingby_id = req.doingby_id
        }
        // localStorage.setItem("idreq",req.id)
        // localStorage.setItem("processname",processname)
        var row = `
                <tr">
                    <th scope="row" id="req">`+ req.id + `</th>
                    <td>`+ startdate + `</td>
                    <td>`+ enddate + `</td>
                    <td>`+ processname + `</td>
                    <td>`+ doingby_id + `</td>
                    <td>
                    <button type="button" name="btn_update" onclick="requriment_one(`+ req.id + `)" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#updatereqone` + req.id + `">
                        update
                    </button>
                    </td>
                    <td>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deletealert">
                      DELETE
                    </button>
                    </td>
              </tr>
              <div class="modal fade" id="updatereqone`+ req.id + `" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
              <div class="modal-dialog modal-sm" style="margin-left: 60px;">
                <div class="modal-content" style="width: 1100px; margin-left: 130px;">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Requirements Update</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="window.location.reload()"></button>
                  </div>
                  <div class="modal-body" style="height: 1000px;width: 1000px;">
                    <div class="row">
                      <div class="col-12" style="margin-left: 3rem;">
                        <div class="row">
                          <div class="col-4 mt-3">
                            <span>Request id</span><br>
                            <input class="mt-3" type="text" id="requestid`+ req.id + `" disabled>
                          </div>
                          <div class="col-4 mt-3">
                            <span>Request Emp id</span><br>
                            <input class="mt-3" type="text" id="requestemp`+ req.id + `" disabled>
                          </div>
                          <div class="col-4  mt-3">
                            <span>Request Name</span><br>
                            <input class="mt-3" type="text"  id="requestname`+ req.id + `" disabled>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4 mt-3">
                            <span>Request Division</span><br>
                            <input class="mt-3" type="text" id="requestdivition`+ req.id + `" disabled>
                          </div>
                          <div class="col-4 mt-3">
                            <span>Request Department</span><br>
                            <input class="mt-3" type="text" id="requestdepartment`+ req.id + `" disabled>
                          </div>
                          <div class="col-4  mt-3">
                            <span>Request Section</span><br>
                            <input class="mt-3" type="text" id="requestsection`+ req.id + `" disabled>
                          </div>
                        </div>
                        <div class="row" style="margin-top: 1%">
        
                          <div class="col-12 mt-1">
                            <div class="input-group mb-3">
                              <span class="input-group-text" id="inputGroup-sizing-default">ชื่อเรื่อง</span>
                              <input type="text"   class="form-control" id="processname`+ req.id + `" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" disabled>
                            </div>
                          </div>
                          <div class="col-6 mb-1">
                            <div class="input-group mb-3">
                              <span class="input-group-text" id="inputGroup-sizing-default">วันที่ขอ</span>
                              <input type="date" value="`+startdate+ `"  id="startdate` + req.id + `" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" disabled>
                            </div>
                          </div>
                          <div class="col-6 mb-1">
                            <div class="input-group mb-3">
                              <span class="input-group-text" id="inputGroup-sizing-default">วันที่ต้องการใช้ระบบ</span>
                              <input type="date" value="`+ enddate + `" id="enddate` + req.id + `" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" disabled>
                            </div>
                          </div>
                          <div class="col-6 mb-1">
                            <div class="input-group">
                              <label class="input-group-text" for="inputGroupSelect01">ASIS</label>
                              <select class="form-select" id="asis`+ req.id + `" disabled>
                              </select>
                            </div>
                          </div>
                          <div class="col-6 mb-1">
                            <div class="input-group">
                              <label class="input-group-text" for="inputGroupSelect01">TOBE</label>
                              <select class="form-select" id="tobe`+ req.id + `" disabled>
                             
                              </select>
                            </div>
                          </div>
                          <div class="col-6 mb-1">
                            <div class="input-group">
                              <label class="input-group-text" for="inputGroupSelect01">Doing By</label>
                              <select class="form-select"  id="doingby`+ req.id + `" disabled>

                              </select>
                            </div>
                          </div>
                          <div class="col-6 mb-1">
                            <div class="input-group">
                              <label class="input-group-text" for="inputGroupSelect01">BUDJET</label>
                              <select class="form-select" id="budget`+ req.id + `" disabled>
                             
                              </select>
                            </div>
                          </div>
                          <div class="col-6 mb-1 mt-2">
                            <span>Pain Point</span><br>
                            <textarea id="painpoint`+ req.id + `" class="mt-3" type="text" style="height:90px;width:100%" disabled></textarea>
                          </div>
                          <div class="col-6 mb-1 mt-2">
                            <span>Results & Benefit</span><br>
                            <textarea id="benefit`+ req.id + `" class="mt-3" type="text" style="height:90px;width:100%" disabled></textarea>
                          </div>
                          <div class="col-6 mb-1 mt-2">
                            <span>Description</span><br>
                            <textarea id="description`+ req.id + `" class="mt-3" type="text" style="height:90px;width:100%" disabled></textarea>
                          </div>
                          <div class="col-6 mb-1 mt-2">
                            <span>Scope of Work </span><br>
                            <input id="scopeofwork`+ req.id + `" class="mt-3" type="file" disabled>
                          </div>
                          <div class="col-6 mb-1 mt-2">
                          <span>Bussiness Flow </span><br>
                            <input id="bussinessflow`+ req.id + `" class="mt-3" type="file" disabled>
                          </div>
                          <div class="col-6 mb-1 mt-2">
                            <span>Work Flow (Flowเดิมของระบบ) </span><br>
                            <input id="workflow`+ req.id + `" class="mt-3" type="file" disabled>
                          </div>
                          <div class="col-6 mb-1 mt-2">
                            <span>Extract File (แนบไฟล์เดิมของระบบ)</span><br>
                            <input id="extractfile`+ req.id + `" class="mt-3" type="file" disabled>
                          </div>
                          <div class="col-6 mb-1 mt-2">
                            <span>Approvals</span><br>
                            <input id="approvals`+ req.id + `" class="mt-3" type="text" disabled>
                          </div>
        
                          
                          <div class="col-11 mt-2" style="text-align:end ;">
                          <button class="buttonedit" onclick="togglebtnedit(`+ req.id + `)">เเก้ไข</button>
                          </div>
                          <div class="col-1 mt-2" style="text-align:end ;">
                            <button class="buttonsave">บันทึก</button>
                          </div>
        
        
                        </div>
        
        
                      </div>
        
                    </div>
        
                  </div>
                </div>
        
        
        
              </div>
        
            </div>
              <div class="modal fade" id="deletealert" tabindex="-1" aria-labelledby="deletealert" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered">
                  <div class="modal-content" style=" border-radius: 5%;">
                    <div class="modal-header">
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <div class="centeralert" style="text-align:center;">
                            <i class="fa-solid fa-triangle-exclamation fa-5x" style="color:red"></i>
                            <label for="message-text" class="col-form-label">Sure you want to reject?</label>
                          </div>
                          <textarea id="message_reason_delete" oninput="checkinput()"  class="form-control"  placeholder="กรุณาเขียนเหตุผลในการลบอย่างน้อย 20 ตัวอักษร" style="height:150px"></textarea>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button"  id="submitdelete" class="btn btn-danger" data-bs-dismiss="modal" disabled><a onclick="savereqtohistory(`+ req.id + `)">DELETE</a></button>
                    </div>
                  </div>
                </div>
              </div>          
                `
        reqall_tabel.insertAdjacentHTML('beforeend', row);


      }

    }

    )
    .catch(error => console.log('error', error));
}

var getoptionreq = function () {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  var asis_option = document.getElementById('asis_id');
  var tobe_option = document.getElementById('tobe_id');
  var doingby_option = document.getElementById('doingby_id');
  var budget_option = document.getElementById('budget_id');
  fetch("http://localhost/projectbacklog/backend/requriment_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);
      console.log(jsonObj);
      var rowasis = `<option selected>Open this select menu</option>`
      for (let asis of jsonObj[0]) {
        rowasis =
          `
          <option value=`+ asis.id + `>` + asis.name + `</option>
          `
          asis_option.insertAdjacentHTML('beforeend', rowasis);
      }
      for (let tobe of jsonObj[1]) {
        var row =
          `
          <option value=`+ tobe.id + `>` + tobe.name + `</option>
          `
          tobe_option.insertAdjacentHTML('beforeend', row);
      }
      for (let doingby of jsonObj[2]) {
        var row =
          `
          <option value=`+ doingby.id + `>` + doingby.name + `</option>
          `
          doingby_option.insertAdjacentHTML('beforeend', row);
      }
      for (let budget of jsonObj[3]) {
        var row =
          `
          <option value=`+ budget.id + `>` + budget.name + `</option>
          `
          budget_option.insertAdjacentHTML('beforeend', row);
      }
    }
    )
}

function onloadfunction() {
  getreqall()
  getoptionreq();
}


var requriment_delete = function (id) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id": id
  });
  console.log(raw)
  var requestOptions = {
    method: 'DELETE',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };

  fetch("http://localhost/projectbacklog/backend/home/home_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      var jsonObj = JSON.parse(result);
      if (jsonObj.status == 'OK') {
        window.location.reload()
      } else {
        alert('not ok');
      }

    })
    .catch(error => console.log('error', error));
}


var historyreq = function (id) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "id": id,
    "reason": document.getElementById("message_reason_delete").value,
  })
  console.log(raw)
  var requestOptions = {
    method: 'POST',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };

  fetch("http://localhost/projectbacklog/backend/history/history_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);
      if (jsonObj.status == 'OK') {
        console.log("History save")
      } else {
        alert('not ok');
      }

    })
    .catch(error => console.log('error', error));
}

function checkinput() {
  console.log('checkinput Hiii')
  var inputtext = document.getElementById("message_reason_delete").value;
  var submitdelete = document.getElementById("submitdelete");

  if (inputtext.length < 20) {
    submitdelete.disabled = true;
  } else {
    submitdelete.disabled = false;
  }

}


function savereqtohistory(id) {
  historyreq(id);
  requriment_delete(id);
}

var requriment_one = function (id) {

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch("http://localhost/projectbacklog/backend/home/home_readonereq_db.php?id=" + id, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      var jsonObj1 = JSON.parse(result);
      console.log(jsonObj1);
      var asisoption = document.getElementById('asis' + id);
      var tobeoption = document.getElementById('tobe' + id);
      var doingbyoption = document.getElementById('doingby' + id);
      var budgetoption = document.getElementById('budget' + id);
      fetch("http://localhost/projectbacklog/backend/requriment_db.php", requestOptions)
        .then(response => response.text())
        .then(result => {
          var jsonObj = JSON.parse(result);
          console.log(jsonObj);
          for (let asis of jsonObj[0]) {
            var row =
              `
                <option value=`+ asis.id + `>` + asis.name + `</option>
              `
            asisoption.insertAdjacentHTML('beforeend', row);
          }
          for (let tobe of jsonObj[1]) {
            var row =
              `
              <option value=`+ tobe.id + `>` + tobe.name + `</option>
              `
            tobeoption.insertAdjacentHTML('beforeend', row);
          }
          for (let doingby of jsonObj[2]) {
            var row =
              `
              <option value=`+ doingby.id + `>` + doingby.name + `</option>
              `
            doingbyoption.insertAdjacentHTML('beforeend', row);
          }
          for (let budget of jsonObj[3]) {
            var row =
              `
              <option value=`+ budget.id + `>` + budget.name + `</option>
              `
            budgetoption.insertAdjacentHTML('beforeend', row);
          }
        }
        )

      document.getElementById('requestid' + id).value = jsonObj1.id
      // document.getElementById('startdate'+id).value = jsonObj.startdate
      // document.getElementById('enddate'+id).value = jsonObj.enddate
      document.getElementById('processname' + id).value = jsonObj1.processname
      // document.getElementById('doingby'+id).value = jsonObj.doingby
      // document.getElementById('asis'+id).value = jsonObj.asis
      // document.getElementById('tobe'+id).value = jsonObj.tobe
      // document.getElementById('budget'+id).value = jsonObj.budget

      console.log(jsonObj1.processname)
    }
    )


}


var togglebtnedit = function (id) {
  // const toggleBtn = document.getElementById("btnedittoggle");

  const requestid = document.getElementById("requestid" + id);
  const requestemp = document.getElementById("requestemp" + id);
  const requestname = document.getElementById("requestname" + id);
  const requestdivition = document.getElementById("requestdivition" + id);
  const requestdepartment = document.getElementById("requestdepartment" + id);
  const requestsection = document.getElementById("requestsection" + id);
  const processname = document.getElementById("processname" + id);
  const startdate = document.getElementById("startdate" + id);
  const enddate = document.getElementById("enddate" + id);
  const asis = document.getElementById("asis" + id);
  const tobe = document.getElementById("tobe" + id);
  const doingby = document.getElementById("doingby" + id);
  const painpoint = document.getElementById("painpoint" + id);
  const budget = document.getElementById("budget" + id);
  const benefit = document.getElementById("benefit" + id);
  const description = document.getElementById("description" + id);
  const scopeofwork = document.getElementById("scopeofwork" + id);
  const bussinessflow = document.getElementById("bussinessflow" + id);
  const workflow = document.getElementById("workflow" + id);
  const extractfile = document.getElementById("extractfile" + id);
  const approvals = document.getElementById("approvals" + id);

  requestid.disabled = !requestid.disabled;
  requestemp.disabled = !requestemp.disabled;
  requestname.disabled = !requestname.disabled;
  requestdivition.disabled = !requestdivition.disabled;
  requestdepartment.disabled = !requestdepartment.disabled;
  requestsection.disabled = !requestsection.disabled;
  processname.disabled = !processname.disabled;
  startdate.disabled = !startdate.disabled;
  enddate.disabled = !enddate.disabled;
  asis.disabled = !asis.disabled;
  tobe.disabled = !tobe.disabled;
  doingby.disabled = !doingby.disabled;
  painpoint.disabled = !painpoint.disabled;
  budget.disabled = !budget.disabled;
  benefit.disabled = !benefit.disabled;
  description.disabled = !description.disabled;
  scopeofwork.disabled = !scopeofwork.disabled;
  bussinessflow.disabled = !bussinessflow.disabled;
  workflow.disabled = !workflow.disabled;
  extractfile.disabled = !extractfile.disabled;
  approvals.disabled = !approvals.disabled;
  requestid.disabled = !requestid.disabled;
  requestid.disabled = !requestid.disabled;




}


