function showsuccessAlert() {
  Swal.fire({
    title: 'Success',
    text: 'Your data was saved !',
    icon: 'success',
    confirmButtonText: 'Ok',
    allowOutsideClick: false,
    allowEscapeKey: false,
    showCancelButton: false
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
    }
  });
}



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


      var adminloginID = localStorage.getItem("idadmin");
      var approverloginID = localStorage.getItem("idapprover");
      var userloginID = localStorage.getItem("iduser");
      var countprocess1 = 0
      var countprocess2 = 0
      var countprocess3 = 0
      var countprocess4 = 0
      var countprocess5 = 0
      var countprocess6 = 0
      var countprocess7 = 0
      var countprocess8 = 0
      var countprocess9 = 0
      var countprocess10 = 0

      var count_PEOPLEMANAGEMENT = 0
      var count_PEOPLECAPABILITYANDCULTURE = 0
      var count_LICENSETOOPERATEANDPERMIT = 0
      var count_ENVIRONMENTALSOCIALANDGOVERNANCE = 0
      var count_ECOSYSTEMANDFACILITYMANAGEMENT = 0






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


      console.log(jsonObj)
      for (let req of jsonObj) {

        
      if(req.department_id == "18"){
        count_PEOPLEMANAGEMENT = count_PEOPLEMANAGEMENT+1
      }
      if(req.department_id == "16"){
        count_PEOPLECAPABILITYANDCULTURE = count_PEOPLECAPABILITYANDCULTURE+1
      }
      if(req.department_id == "10"){
        count_LICENSETOOPERATEANDPERMIT = count_LICENSETOOPERATEANDPERMIT+1
      }
      if(req.department_id == "9"){
        count_ENVIRONMENTALSOCIALANDGOVERNANCE = count_ENVIRONMENTALSOCIALANDGOVERNANCE+1
      }
      if(req.department_id == "8"){
        count_ECOSYSTEMANDFACILITYMANAGEMENT = count_ECOSYSTEMANDFACILITYMANAGEMENT+1
      }


        if (req.statusforprocess == 1) {
          countprocess1 = countprocess1 + 1
        }

        if (req.statusforprocess == 2) {
          countprocess2 = countprocess2 + 1
        }

        if (req.statusforprocess == 3) {
          countprocess3 = countprocess3 + 1
        }

        if (req.statusforprocess == 4) {
          countprocess4 = countprocess4 + 1
        }

        if (req.statusforprocess == 5) {
          countprocess5 = countprocess5 + 1
        }

        if (req.statusforprocess == 6) {
          countprocess6 = countprocess6 + 1
        }

        if (req.statusforprocess == 7) {
          countprocess7 = countprocess7 + 1
        }

        if (req.statusforprocess == 8) {
          countprocess8 = countprocess8 + 1
        }

        if (req.statusforprocess == 9) {
          countprocess9 = countprocess9 + 1
        }

        if (req.statusforprocess == 10) {
          countprocess10 = countprocess10 + 1
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
          var processname = ""
        } else {
          var processname = req.processname
        }
        if (req.doingby == "null") {
          var doingby = ""
        } else {
          var doingby = req.doingby
        }
        if (req.asis == null) {
          var asis = ""
        } else {
          var asis = req.asis
        }
        if (req.tobe == null) {
          var tobe = ""
        } else {
          var tobe = req.tobe
        }
        if (req.budget == null) {
          var budget = ""
        } else {
          var budget = req.budget
        }

        if (req.painpoint == null) {
          var painpoint = ""
        } else {
          var painpoint = req.painpoint
        }

        if (req.results == null) {
          var results = ""
        } else {
          var results = req.results
        }

        if (req.description == null) {
          var description = ""
        } else {
          var description = req.description
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

        if (req.workflowname == "" || req.workflowname == null) {
          var workflowname = "";
        } else {
          var workflowname = req.workflowname;
        }

        if (req.bussinessflowname == "" || req.bussinessflowname == null) {
          var bussinessflowname = "";
        } else {
          var bussinessflowname = req.bussinessflowname;
        }

        if (req.extractfilename == "" || req.extractfilename == null) {
          var extractfilename = "";
        } else {
          var extractfilename = req.extractfilename;
        }

        if (req.scopeofworkname == "" || req.scopeofworkname == null) {
          var scopeofworkname = "";
        } else {
          var scopeofworkname = req.scopeofworkname;
        }

        if (req.riskmanagementname == "" || req.riskmanagementname == null) {
          var riskmanagementname = "";
        } else {
          var riskmanagementname = req.riskmanagementname;
        }






        console.log(workflowname)


        $(document).ready(function () {
          $("#startdate" + req.id).datepicker({
            format: "dd/mm/yy",
            autoclose: true,
            todayHighlight: true,
          });
          $("#enddate" + req.id).datepicker({
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
                    <button type="button" onclick="requriment_one(`+ req.id + `)"  class="btn btn-warning" id="buttonupdate` + req.id + `" name="btn_update" style="color:white;display:` + (((adminlogin == admin_id && adminlogin != 0) || (adminlogin != approverlogin && adminlogin != userlogin)) ? 'inline' : (approverlogin == approver_id && approverlogin != 0) ? 'inline' : (userlogin == user_id && userlogin != 0) ? 'inline' : 'none') + `"  data-bs-toggle="modal" data-bs-target="#updatereqone` + req.id + `">
                        UPDATE
                    </button>
                    </td>
                    <td>
                    <button type="button"  class="btn btn-danger" style="color:white;display:` + (((adminlogin == admin_id && adminlogin != 0) || (adminlogin != approverlogin && adminlogin != userlogin)) ? 'inline' : (approverlogin == approver_id && approverlogin != 0) ? 'inline' : (userlogin == user_id && userlogin != 0) ? 'inline' : 'none') + `" data-bs-toggle="modal" data-bs-target="#deletealert` + req.id + `">
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
                            <textarea id="painpoint`+ req.id + `" class="mt-3" type="text" style="height:90px;width:100%" disabled>` + painpoint + `</textarea>
                          </div>
                          <div class="col-6 mb-1 mt-2">
                            <span>Results & Benefit</span><br>
                            <textarea id="benefit`+ req.id + `" class="mt-3" type="text" style="height:90px;width:100%" disabled>` + results + `</textarea>
                          </div>
                          <div class="col-6 mb-1 mt-2">
                            <span>Description</span><br>
                            <textarea id="description`+ req.id + `" class="mt-3" type="text" style="height:90px;width:100%" disabled>` + description + `</textarea>
                          </div>
                       
                        
                        <form id="fileallinupdate" enctype="multipart/form-data">
                        <div class="col-6 mb-1 mt-2">
                            <span>Scope of Work </span><br>
                            <input id="scopeofwork`+ req.id + `" class="mt-3" type="file" disabled><br/>
                            <a style="display:`+ (scopeofworkname == "" ? "none" : "inline") + `" href = "../../backend/home/fileupload/scopeofwork/` + scopeofworkname + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-2x"></i></a>
                          </div>
                          <div class="col-6 mb-1 mt-2">
                            <span>Risk Management </span><br>
                            <input id="riskmanagement`+ req.id + `" class="mt-3" type="file" disabled><br/>
                            <a style="display:`+ (riskmanagementname == "" ? "none" : "inline") + `" href = "../../backend/home/fileupload/riskmanagement/` + riskmanagementname + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-2x"></i></a>
                          </div>
                          <div class="col-6 mb-1 mt-2">
                          <span>Bussiness Flow </span><br>
                            <input id="bussinessflow`+ req.id + `" class="mt-3" type="file" disabled><br/>
                            <a style="display:`+ (bussinessflowname == "" ? "none" : "inline") + `" href = "../../backend/home/fileupload/bussinessflow/` + bussinessflowname + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-2x"></i></a>
                          </div>
                          <div class="col-6 mb-1 mt-2">
                            <span>Work Flow ( swim lane )  </span><br>
                            <input  style="color:red;" id="workflow`+ req.id + `" class="mt-3" type="file" disabled><br/>
                             <a style="display:`+ (workflowname == "" ? "none" : "inline") + `" href = "../../backend/home/fileupload/workflow/` + workflowname + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-2x"></i></a>
                            </div>
                          <div class="col-6 mb-1 mt-2">
                            <span>Extract File (แนบไฟล์เดิมของระบบ)</span><br>
                            <input id="extractfile`+ req.id + `" class="mt-3" type="file" disabled><br/>
                            <a style="display:`+ (extractfilename == "" ? "none" : "inline") + `" href = "../../backend/home/fileupload/extractfile/` + extractfilename + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-2x"></i></a>
                          </div>
                        </form>
                          
                          <div class="col-11 mt-2" style="text-align:end ;">
                          <button class="buttonedit" onclick="togglebtnedit(`+ req.id + `)" >เเก้ไข</button>
                          </div>
                          <div class="col-1 mt-2" style="text-align:end ;">
                            <button class="buttonsave" id="save-button`+ req.id + `"  onclick="patchupdate(` + req.id + `)" disabled>บันทึก</button>
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
                `

        reqall_tabel.insertAdjacentHTML('beforeend', row);

      }
      
      var tobedashboard = document.getElementById("tobedashboard");
      tobedashboard.innerHTML = countprocess10

      var tobedashboard_people = document.getElementById("peoplemanagement");
      tobedashboard_people.innerHTML = count_PEOPLEMANAGEMENT

      var tobedashboard_peoplecapacity = document.getElementById("peoplecapacity");
      tobedashboard_peoplecapacity.innerHTML = count_PEOPLECAPABILITYANDCULTURE

      var tobedashboard_license = document.getElementById("license");
      tobedashboard_license.innerHTML = count_LICENSETOOPERATEANDPERMIT

      var tobedashboard_environmental = document.getElementById("environmental");
      tobedashboard_environmental.innerHTML = count_ENVIRONMENTALSOCIALANDGOVERNANCE

      var tobedashboard_ecosystem = document.getElementById("ecosystem");
      tobedashboard_ecosystem.innerHTML = count_ECOSYSTEMANDFACILITYMANAGEMENT


      var ctx3 = document.getElementById('chart_bar_department').getContext('2d');
      var myChart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
          labels: ['HRM', 'HRD', 'LICENSE', 'ENV', 'ECO'],
          datasets: [{
            label: 'Number of project',
            data: [count_PEOPLEMANAGEMENT, count_PEOPLECAPABILITYANDCULTURE, count_LICENSETOOPERATEANDPERMIT, count_ENVIRONMENTALSOCIALANDGOVERNANCE, count_ECOSYSTEMANDFACILITYMANAGEMENT],
            backgroundColor:
              [
                "#FF6464",
                "#FF8585",
                "#FFC24F",
                "#FFD688",  
                "#FFF854",    
              ],
            borderWidth: 1,

          }]
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false // hide the legend
            },
            title: {
              display: true,
              text: 'PROJECT BY DEPARTMENT ',
              color: 'black',
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                stepSize: 1
              },
            },
            y: {
              grid: {
                display: false
              },
              ticks: {
                stepSize: 1
              }
            }
          }
        }
      });

      

      var ctx1 = document.getElementById('chart_pie_allreq').getContext('2d');
      var myChart1 = new Chart(ctx1, {
        type: 'pie',
        data: {
          labels: ['Requirements', 'Emphathize', 'Approve', 'Prototype', 'Confirm Prototype', 'PrepareData', 'Coding', 'Testing', 'Delivered', 'Implement'],

          // labels: ['Requirements', 'Emphathize', 'Approve', 'Prototype', 'Confirm Prototype', 'PrepareData', 'Coding', 'Testing', 'Delivered', 'Implement'],
          datasets: [{
            label: 'Number of process',
            data: [countprocess1, countprocess2, countprocess3, countprocess4, countprocess5, countprocess6, countprocess7, countprocess8, countprocess9, countprocess10],
            backgroundColor:
              [
                "#FF0000",
                "#FF4141",
                "#FF6464",
                "#FF8585",
                "#FFA600",
                "#FFC24F",
                "#FFD688",
                "#FFE6B7",
                "#FFF400",
                "#FFF854",
              ],
        
            borderWidth: 1,

          }]
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutoutPercentage: 70,
          plugins: {
            datalabels: {
              color: '#fff',
              anchor: 'end',
              align: 'center',
              offset: 15,
              padding: {
                top: 5,
                bottom: 0,
                left: 15,
                right: 10
              },
              borderColor: '#fff',
              borderRadius: 25,
              backgroundColor: (context) => {
                const value = context.dataset.data[context.dataIndex];
                return value !== 0 ? context.dataset.backgroundColor : 'transparent';
              },
            
              font: {
                weight: 'bold',
                size: '14'
              },
              formatter: function(value, context) {
                if(value != 0){
                  return context.chart.data.labels[context.dataIndex] + ': ' + value;
                }else{
                  return "";
                }
              }
            },
            legend: {
              display: false // hide the legend
            },
            title: {
              display: true,
              text: 'PROJECT BY PROCESS STATUS ',
              color: 'black',
            },
            tooltips: {
              enabled: false
            },                       
          },                           
        },
        plugins:[ChartDataLabels]
      

      });





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


function patchupdate(reqid) {
  uploadfile(reqid)
  updatereq(reqid)
}

var uploadfile = function (reqid) {
  var file1 = document.getElementById('workflow' + reqid).files;
  var file2 = document.getElementById('scopeofwork' + reqid).files;
  var file3 = document.getElementById('riskmanagement' + reqid).files;
  var file4 = document.getElementById('bussinessflow' + reqid).files;
  var file5 = document.getElementById('extractfile' + reqid).files;
  if (file1.length > 0 || file2.length > 0 || file3.length > 0 || file4.length > 0 || file5.length > 0) {

    var formData = new FormData();
    formData.append("workflow", file1[0]);
    formData.append("scopeofwork", file2[0]);
    formData.append("riskmanagement", file3[0]);
    formData.append("bussinessflow", file4[0]);
    formData.append("extractfile", file5[0]);
    formData.append("idreq", reqid);


    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost/projectbacklog/backend/home/uploadfile.php", true);
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
      }
    };

    // Send request with data
    xhttp.send(formData);

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
    "tobe_id": document.getElementById("tobe" + reqid).value,
    "asis_id": document.getElementById("asis" + reqid).value,
    "doingby_id": document.getElementById("doingby" + reqid).value,
    "budget_id": document.getElementById("budget" + reqid).value,
    "status": 1,
    "statusforprocess": 2,
    "id": reqid,
  })

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
        const requestid = document.getElementById("requestid" + reqid);
        const requestemp = document.getElementById("requestemp" + reqid);
        const requestname = document.getElementById("requestname" + reqid);
        const requestdivition = document.getElementById("requestdivition" + reqid);
        const requestdepartment = document.getElementById("requestdepartment" + reqid);
        const requestsection = document.getElementById("requestsection" + reqid);
        const processname = document.getElementById("processname" + reqid);
        const startdate = document.getElementById("startdate" + reqid);
        const enddate = document.getElementById("enddate" + reqid);
        const asis = document.getElementById("asis" + reqid);
        const tobe = document.getElementById("tobe" + reqid);
        const doingby = document.getElementById("doingby" + reqid);
        const painpoint = document.getElementById("painpoint" + reqid);
        const budget = document.getElementById("budget" + reqid);
        const benefit = document.getElementById("benefit" + reqid);
        const description = document.getElementById("description" + reqid);
        const scopeofwork = document.getElementById("scopeofwork" + reqid);
        const riskmanagement = document.getElementById("riskmanagement" + reqid);
      
        const bussinessflow = document.getElementById("bussinessflow" + reqid);
        const workflow = document.getElementById("workflow" + reqid);
        const extractfile = document.getElementById("extractfile" + reqid);

        
        requestid.disabled = true;
        requestemp.disabled = true;
        requestname.disabled = true;
        requestdivition.disabled = true;
        requestdepartment.disabled = true;
        requestsection.disabled = true;
        processname.disabled =true;
        startdate.disabled = true;
        enddate.disabled = true;
        asis.disabled = true;
        tobe.disabled = true;
        doingby.disabled = true;
        painpoint.disabled = true;
        budget.disabled = true;
        benefit.disabled = true;
        description.disabled = true;
        scopeofwork.disabled = true;
        riskmanagement.disabled = true;
        bussinessflow.disabled = true;
        workflow.disabled = true;
        extractfile.disabled = true;
        requestid.disabled = true;
        requestid.disabled = true;
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
      document.getElementById('requestemp' + id).value = jsonObj1.empid
      document.getElementById('requestname' + id).value = jsonObj1.firstname + " " + jsonObj1.lastname
      document.getElementById('requestdivition' + id).value = jsonObj1.division
      document.getElementById('requestdepartment' + id).value = jsonObj1.department
      document.getElementById('requestsection' + id).value = jsonObj1.section

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
                <option style="display:`+ ((jsonObj1.asisid == asis.id) ? "none" : "inline") + `" value=` + asis.id + `>` + asis.name + `</option>
              `
            optionasis.insertAdjacentHTML('beforeend', row);


          }



          for (let tobe of jsonObj[1]) {
            var row =
              `
              <option style="display:`+ (jsonObj1.tobeid == tobe.id ? "none" : "inline") + `" value=` + tobe.id + `>` + tobe.name + `</option>
              `
            opriontobe.insertAdjacentHTML('beforeend', row);
          }



          for (let doingby of jsonObj[2]) {
            var row =
              `
              <option style="display:`+ (jsonObj1.doingbyid == doingby.id ? "none" : "inline") + `" value=` + doingby.id + `>` + doingby.name + `</option>
              `
            optiondoingby.insertAdjacentHTML('beforeend', row);
          }




          for (let budget of jsonObj[3]) {
            var row =
              `
              <option style="display:`+ (jsonObj1.budgetid == budget.id ? "none" : "inline") + `" value=` + budget.id + `>` + budget.name + `</option>
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
  const riskmanagement = document.getElementById("riskmanagement" + id);

  const bussinessflow = document.getElementById("bussinessflow" + id);
  const workflow = document.getElementById("workflow" + id);
  const extractfile = document.getElementById("extractfile" + id);
  const savebutton = document.getElementById("save-button" + id);

  savebutton.disabled = !savebutton.disabled;

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
  riskmanagement.disabled = !riskmanagement.disabled;
  bussinessflow.disabled = !bussinessflow.disabled;
  workflow.disabled = !workflow.disabled;
  extractfile.disabled = !extractfile.disabled;
  requestid.disabled = !requestid.disabled;
  requestid.disabled = !requestid.disabled;



}


var totalprocesseempathize = function () {
  var em = document.getElementById("emphatizedashboard")
  em.innerHTML = countem;
}





var getchartpriority = function (year) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch("http://localhost/projectbacklog/backend/projectmanagement/projectmanagement_db.php?year=" + year, requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);
      console.log(jsonObj)
      var m1 = 0;
      var m2 = 0;
      var m3 = 0;
      var m4 = 0;
      var m5 = 0;
      var m6 = 0;
      var m7 = 0;
      var m8 = 0;
      var m9 = 0;
      var m10 = 0;
      var m11 = 0;
      var m12 = 0;
      var currentYear = new Date().getFullYear();

      for (let req of jsonObj) {

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


        var startdate = new Date(startdate);
        var enddate = new Date(enddate);
        var startmonth = startdate.getMonth() + 1;
        var endmonth = enddate.getMonth() + 1;
        for (var i = startmonth; i <= endmonth; i++) {
          switch (i) {
            case 1:
              m1 = m1 + 1;
              break;
            case 2:
              m2 = m2 + 1;
              break;
            case 3:
              m3 = m3 + 1;
              break;
            case 4:
              m4 = m4 + 1;
              break;
            case 5:
              m5 = m5 + 1;
              break;
            case 6:
              m6 = m6 + 1;
              break;
            case 7:
              m7 = m7 + 1;
              break;
            case 8:
              m8 = m8 + 1;
              break;
            case 9:
              m9 = m9 + 1;
              break;
            case 10:
              m10 = m10 + 1;
              break;
            case 11:
              m11 = m11 + 1;
              break;
            case 12:
              m12 = m12 + 1;
              break;
          }
        }
      }

      var ctx2 = document.getElementById('chart_bar_allreq').getContext('2d');
      var myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Number of project',
            data: [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12],
            backgroundColor:
              ["#FF0000",
                "#FF4141",
                "#FF6464",
                "#FF8585",
                "#FFA600",
                "#FFC24F",
                "#FFD688",
                "#FFE6B7",
                "#FFF400",
                "#FFF854",
                "#FFFB93",
                "#FFFDC2",
              ],
            borderWidth: 1,

          }]
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false // hide the legend
            },
            title: {
              display: true,
              text: 'PROJECT PRIORITY YEAR ' + currentYear,
              color: 'black',
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                stepSize: 1
              },
            },
            y: {
              grid: {
                display: false
              },
              ticks: {
                stepSize: 1
              }
            }
          }
        }
      });


    }

    )
    .catch(error => console.log('error', error));

}
