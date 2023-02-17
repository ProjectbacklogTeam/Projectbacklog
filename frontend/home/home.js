
var countdataintablereq = 0
const countem=0


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
      //console.log(jsonObj)


      var adminloginID = localStorage.getItem("idadmin");
      var approverloginID = localStorage.getItem("idapprover");
      var userloginID = localStorage.getItem("iduser");
      // console.log(approverloginID)



      if (adminloginID == "null" || adminloginID == null) {
        var adminlogin = 0
      } else {
        adminlogin = Number(adminloginID)
      }

      if (approverloginID == "null" || approverloginID == null) {
        var approverlogin = 0
      } else {
        approverlogin = Number(approverloginID)
      }

      if (userloginID == "null" || userloginID == null) {
        var userlogin = 0
      } else {
        userlogin = Number(userloginID)
      }

      var admin_id = 0
      var approver_id = 0
      var user_id = 0
      countdataintablereq = jsonObj.length
      var reqalldashboard = document.getElementById("reqalldashboard");
      reqalldashboard.innerHTML = countdataintablereq
      
      for (let req of jsonObj) {

        if(req.statusforprocess == "2"){
          countem+=1
        }
        


        if (req.startdate == null) {
          var startdate = "0000-00-00"
        } else {
          var startdate = req.startdate
        }
        if (req.enddate == null) {
          var enddate = "0000-00-00"
        } else {
          var enddate = req.enddate
        }
        if (req.processname == null) {
          var processname = "ยังไม่ระบุ"
        } else {
          var processname = req.processname
        }
        if (req.doingby == "null") {
          var doingby = "ยังไม่ระบุ"
        } else {
          var doingby = req.doingby
        }
        if (req.asis == null) {
          var asis = "ยังไม่ระบุ"
        } else {
          var asis = req.asis
        }
        if (req.tobe == null) {
          var tobe = "ยังไม่ระบุ"
        } else {
          var tobe = req.tobe
        }
        if (req.budget == null) {
          var budget = "ยังไม่ระบุ"
        } else {
          var budget = req.budget
        }


        if (req.admin_id == null) {
          admin_id = 0
        } else {
          admin_id = Number(req.admin_id)
        }
        if (req.approver_id == null) {
          approver_id = 0
        } else {
          approver_id = Number(req.approver_id)
        }
        if (req.user_id == null) {
          user_id = 0
        } else {
          user_id = Number(req.user_id)
        }

        $(document).ready(function() {
          $("#startdate"+req.id).datepicker({
            format: "dd/mm/yy",
            autoclose: true,
            todayHighlight: true,
          });
          $("#enddate"+req.id).datepicker({
            format: "dd/mm/yy",
            autoclose: true,
            todayHighlight: true,
          });
        });
 
        var startdateparts = startdate.split('-');
        var startdateyear = parseInt(startdateparts[0]);
        var startdatemonth = parseInt(startdateparts[1]);
        var startdateday = parseInt(startdateparts[2]);
        var startdateObject = new Date(startdateyear, startdatemonth - 1, startdateday);
        var options = {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        };
        var formattedstartDate = startdateObject.toLocaleDateString('en-GB', options);
        formattedstartDate = formattedstartDate.replace('.', '');
        //var formattedstartDate = startdateObject.toLocaleDateString('th-TH', options);



        var enddateparts = enddate.split('-');
        var enddateyear = parseInt(enddateparts[0]);
        var enddatemonth = parseInt(enddateparts[1]);
        var enddateday = parseInt(enddateparts[2]);
        var enddateObject = new Date(enddateyear, enddatemonth - 1, enddateday);
        var options = {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        };
        var formattedendDate = enddateObject.toLocaleDateString('en-GB', options);
        formattedendDate = formattedendDate.replace('.', '');



        

        var row = `
                <tr">
                    <th scope="row" id="req">`+ req.id + `</th>
                    <td>`+ formattedstartDate + `</td>
                    <td>`+ formattedendDate + `</td>
                    <td>`+ processname + `</td>
                    <td>`+ doingby + `</td>
                    <td>
                    <div class="item2">
                      <div class="content2">
                        <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 1) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;" disabled>
                          <i class="fa-solid fa-book fa-1x"></i>
                        </button>
                      </div>
                    </div>
                    </td>
                    <td>
                    <div class="item2">
                    <div class="content2">
                      <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 2) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;" disabled>
                        <i class="fa-solid fa-user-pen fa-1x"></i>
                      </button>        
                      </div>
                    </div>
                    </td>
                    <td>
                    <div class="item2">
                      <div class="content2">  
                        <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 3) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;" disabled>
                          <i class="fa-solid fa-person-circle-check fa-1x"></i>
                        </button>                   
                      </div>
                    </div>
                    </td>
                    <td>
                    <div class="item2">
                        <div class="content2">
                          <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 4) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;" disabled>
                            <i class="fa-solid fa-swatchbook fa-1x"></i>
                          </button>
                        </div>
                      </div>

                    </td>
                    <td>
                    <div class="item2">
                    <div class="content2">     
                      <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 5) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;" disabled>
                        <i class="fa-solid fa-circle-check fa-1x"></i>
                      </button>             
                    </div>
                  </div>
                    </td>
                    <td>
                    <div class="item2">
                    <div class="content2">
                      <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;" disabled>
                        <i class="fa-solid fa-diagram-project fa-1x"></i> </button>              
                    </div>
                  </div>
                    </td>
                    <td>
                    <div class="item2">
                      <div class="content2">

                        <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 7) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;" disabled>
                          <i class="fa-solid fa-computer fa-1x"></i>
                        </button>         
                      </div>
                   </div>
                    </td>
                    <td>
                    <div class="item2">
                      <div class="content2">
                        <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 8) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;" disabled>
                          <i class="fa-solid fa-clipboard-check fa-1x"></i>
                        </button>       
                      </div>
                    </div>
                    </td>
                    <td>                  
                    <div class="item2">
                      <div class="content2">
                        <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 9) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;" disabled>
                          <i class="fa-solid fa-box-open fa-1x"></i>
                        </button>            
                      </div>
                    </div>
                    </td>
                    <td>                
                    <div class="item2">
                      <div class="content2">
                        <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 10) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;" disabled>
                          <i class="fa-solid fa-heart fa-1x"></i>
                        </button>            
                      </div>
                    </div>
                    </td>
                    <td>
                    <button type="button" onclick="requriment_one(`+req.id+`)"  class="btn btn-warning" id="buttonupdate`+ req.id + `" name="btn_update" style="color:white;display:` + ((adminlogin == admin_id && adminlogin != 0) ? 'inline' : (approverlogin == approver_id && approverlogin != 0) ? 'inline' : (userlogin == user_id && userlogin != 0) ? 'inline' : 'none') + `"  data-bs-toggle="modal" data-bs-target="#updatereqone` + req.id + `">
                        UPDATE
                    </button>
                    </td>
                    <td>
                    <button type="button"  class="btn btn-danger" style="color:white;display:` + ((adminlogin == admin_id && adminlogin != 0) ? 'inline' : (approverlogin == approver_id && approverlogin != 0) ? 'inline' : (userlogin == user_id && userlogin != 0) ? 'inline' : 'none') + `" data-bs-toggle="modal" data-bs-target="#deletealert`+ req.id + `">
                      DELETE
                    </button>
                    </td>
              </tr>
              <div class="modal fade" id="updatereqone`+ req.id + `" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
              <div class="modal-dialog modal-lg" style="margin-left: 60px;">
                <div class="modal-content" style="width: 1100px; margin-left: 130px;">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Emphathize</h5>
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
                            <div class="input-group date mb-3" style="width:100%">
                              <span class="input-group-text" id="inputGroup-sizing-default">วันที่ขอ</span>
                              <input  type="text" value="`+ formattedstartDate + `" id="startdate` + req.id + `" class="form-control" placeholder="dd/mm/yyyy" disabled>
                            </div>
                          </div>
                          <div class="col-6 mb-1">
                            <div class="input-group date mb-3" style="width:100%">
                              <span class="input-group-text" id="inputGroup-sizing-default">วันที่ขอ</span>
                              <input type="text" value="`+ formattedendDate + `" id="enddate` + req.id + `" class="form-control" placeholder="dd/mm/yyyy" disabled>
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
                              <select class="form-select"  id="tobe`+ req.id + `" disabled>

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
                          <span>Approvals</span><br>
                          <input id="approvals`+ req.id + `" class="mt-3" type="text" disabled>
                        </div>
                          <div class="col-6 mb-1 mt-2">
                            <span>Scope of Work </span><br>
                            <input id="scopeofwork`+ req.id + `" class="mt-3" type="file" disabled>
                          </div>
                          <div class="col-6 mb-1 mt-2">
                            <span>Risk Management </span><br>
                            <input id="riskmanagement`+ req.id + `" class="mt-3" type="file" disabled>
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
                       
                          
                          <div class="col-11 mt-2" style="text-align:end ;">
                          <button class="buttonedit" onclick="togglebtnedit(`+ req.id + `)" >เเก้ไข</button>
                          </div>
                          <div class="col-1 mt-2" style="text-align:end ;">
                            <button class="buttonsave" id="save-button`+ req.id + `"  data-bs-toggle="modal" data-bs-target="#successalert" onclick="updatereq(` + req.id + `)" disabled>บันทึก</button>
                          </div>    
                        </div>      
                      </div>     
                    </div>       
                  </div>
                </div>
        
        
        
              </div>
        
            </div>
          
              <div class="modal fade" id="deletealert`+ req.id + `" tabindex="-1" aria-labelledby="deletealert" aria-hidden="true" data-bs-backdrop="static">
                <div class="modal-dialog  modal-dialog-centered">
                  <div class="modal-content" style=" border-radius: 5%;">
                    <div class="modal-header">
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <div class="centeralert" style="text-align:center;">
                            <i class="fa-solid fa-triangle-exclamation fa-5x" style="color:red"></i><br>
                            <label for="message-text" class="col-form-label">Sure you want to reject?</label>
                          </div>
                          <textarea id="message_reason_delete`+ req.id + `" oninput="checkinput(` + req.id + `)"  class="form-control"  placeholder="กรุณาเขียนเหตุผลในการลบอย่างน้อย 20 ตัวอักษร" style="height:150px"></textarea>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button"  id="submitdelete`+ req.id + `" class="btn btn-danger" data-bs-dismiss="modal" disabled><a onclick="savereqtohistory(` + req.id + `)">DELETE</a></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal fade" id="successalert" tabindex="-1"  data-bs-backdrop="static" role="dialog" aria-hidden="true">
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
              
           
                          
             
                `
        reqall_tabel.insertAdjacentHTML('beforeend', row);


      }

    }

    )
    .catch(error => console.log('error', error));
}


var hidebutton = function (reqid, localadmin, localapprover, localuser, adminid, approverid, userid) {

  var btnupdate = document.getElementById("buttonupdate" + reqid)
  if (adminid == localadmin) {
    btnupdate.style.display = "inline"
  } else {
    btnupdate.style.display = "none"
  }

  if (approverid == localapprover) {
    btnupdate.style.display = "inline"
  } else {
    btnupdate.style.display = "none"
  }

  if (userid == localuser) {
    btnupdate.style.display = "inline"
  } else {
    btnupdate.style.display = "none"
  }

}




var updatereq = function (reqid) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "processname": document.getElementById("processname" + reqid).value,
    "startdate": document.getElementById("startdate" + reqid).value,
    "enddate": document.getElementById("enddate" + reqid).value,
    "painpoint": document.getElementById("painpoint" + reqid).value,
    "description": document.getElementById("description" + reqid).value,
    "results_benefit": document.getElementById("benefit" + reqid).value,
    "work_flow": document.getElementById("workflow" + reqid).value,
    "extract_file": document.getElementById("extractfile" + reqid).value,
    "riskmanagement": document.getElementById("riskmanagement" + reqid).value,
    "scopeofwork": document.getElementById("scopeofwork" + reqid).value,
    "bussinessflow": document.getElementById("bussinessflow" + reqid).value,
    "tobe_id": document.getElementById("tobe" + reqid).value,
    "asis_id": document.getElementById("asis" + reqid).value,
    "doingby_id": document.getElementById("doingby" + reqid).value,
    "budget_id": document.getElementById("budget" + reqid).value,
    "status": 1,
    "statusforprocess": 2,
    "id": reqid,
  })
  console.log(raw)
  var requestOptions = {
    method: 'PATCH',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };
  fetch("http://localhost/projectbacklog/backend/home/home_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);
      if (jsonObj.status == 'OK') {
        const savebutton = document.getElementById("save-button" + reqid);
        savebutton.disabled = true;
      } else {
        alert('not ok');
      }

    })
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
    "reason": document.getElementById("message_reason_delete" + id).value,
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

function checkinput(id) {
  var inputtext = document.getElementById("message_reason_delete" + id).value;
  var submitdelete = document.getElementById("submitdelete" + id);


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
 

      document.getElementById('requestid' + id).value = jsonObj1.id
      document.getElementById('processname' + id).value = jsonObj1.processname

      var optionasis = document.getElementById('asis' + id)
      var opriontobe = document.getElementById('tobe' + id)
      var optiondoingby = document.getElementById('doingby' + id)
      var optionbudget = document.getElementById('budget' + id)
      
      var optionasisvalue = ` <option>` + jsonObj1.asis + `</option>`
      optionasis.insertAdjacentHTML('beforeend', optionasisvalue);

      var optiontobevalue = ` <option>` + jsonObj1.tobe + `</option>`
      opriontobe.insertAdjacentHTML('beforeend', optiontobevalue);

      var optiondoingbyvalue = ` <option>` + jsonObj1.doingby + `</option>`
      optiondoingby.insertAdjacentHTML('beforeend', optiondoingbyvalue);

      var optionbudgetvalue = ` <option>` + jsonObj1.budget + `</option>`
      optionbudget.insertAdjacentHTML('beforeend', optionbudgetvalue);


      fetch("http://localhost/projectbacklog/backend/requriment_db.php", requestOptions)
        .then(response => response.text())
        .then(result => {
          var jsonObj = JSON.parse(result);
          console.log(jsonObj);
          for (let asis of jsonObj[0]) {
            
              var row =
              `
                <option style="display:`+((jsonObj1.asisid==asis.id) ? "none":"inline") +`" value=`+ asis.id + `>`+asis.name+`</option>
              `
              optionasis.insertAdjacentHTML('beforeend', row);
            
          
          }



          for (let tobe of jsonObj[1]) {
            var row =
              `
              <option style="display:`+(jsonObj1.tobeid==tobe.id ? "none":"inline") +`" value=`+ tobe.id + `>` + tobe.name + `</option>
              `
              opriontobe.insertAdjacentHTML('beforeend', row);
          }



          for (let doingby of jsonObj[2]) {
            var row =
              `
              <option style="display:`+(jsonObj1.doingbyid==doingby.id ? "none":"inline") +`" value=`+ doingby.id + `>` + doingby.name + `</option>
              `
              optiondoingby.insertAdjacentHTML('beforeend', row);
          }




          for (let budget of jsonObj[3]) {
            var row =
              `
              <option style="display:`+(jsonObj1.budgetid==budget.id ? "none":"inline") +`" value=`+ budget.id + `>` + budget.name + `</option>
              `
              optionbudget.insertAdjacentHTML('beforeend', row);
          }
        }
        )

    
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
  const savebutton = document.getElementById("save-button" + id);


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
  savebutton.disabled = !savebutton.disabled;



}


var totalprocesseempathize = function(){

  var em = document.getElementById("emphatizedashboard")
  em.innerHTML = countem;
}

