document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    window.location.reload();
  }
});


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


function showerrorfileAlert() {
  Swal.fire({
    title: 'error',
    html: 'Your data not saved ! <br> Please use pdf, doc, docx, jpg, png, jpeg',
    icon: 'error',
    confirmButtonText: 'Ok',
    allowOutsideClick: false,
    allowEscapeKey: false,
    showCancelButton: false
  })
  // .then((result) => {
  //   if (result.isConfirmed) {
  //     window.location.reload();
  //   }
  // });
}


function showUpdatesuccessAlert() {
  Swal.fire({
    title: 'Success',
    text: 'Update data was saved !',
    icon: 'success',
    confirmButtonText: 'Ok',
    allowOutsideClick: false,
    allowEscapeKey: false,
    showCancelButton: false
  })
}


function showerrorAlert() {
  Swal.fire({
    title: 'error',
    text: 'กรุณาเขียนชื่อย่อ',
    icon: 'error',
    confirmButtonText: 'Ok',
    allowOutsideClick: false,
    allowEscapeKey: false,
    showCancelButton: false
  })
}

function showerrortimeAlert() {
  Swal.fire({
    title: 'error',
    text: 'เวลาเริ่มต้นควรมากกว่าเวลาสิ้นสุด',
    icon: 'error',
    confirmButtonText: 'Ok',
    allowOutsideClick: false,
    allowEscapeKey: false,
    showCancelButton: false
  })
  // .then((result) => {
  //   if (result.isConfirmed) {
  //     window.location.reload();
  //   }
  // });
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
      var count_notfive_department = 0


      var count_PEOPLEMANAGEMENT_success = 0
      var count_PEOPLECAPABILITYANDCULTURE_success = 0
      var count_LICENSETOOPERATEANDPERMIT_success = 0
      var count_ENVIRONMENTALSOCIALANDGOVERNANCE_success = 0
      var count_ECOSYSTEMANDFACILITYMANAGEMENT_success = 0
      var count_notfive_department_success = 0


      

      var summandays = 0
      var sumpeople = 0
      var summoney = 0




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

      var datalabel_in_year_current = []
      var data_in_year_current = []

      for (let req of jsonObj) {




        if (req.benefitpeoples_value_number == null) {
          var benefitpeoples_value_number = 0;
        } else {
          var benefitpeoples_value_number = Number(req.benefitpeoples_value_number)
        }
        if (req.benefitpeoplemandayss_value_number == null) {
          var benefitpeoplemandayss_value_number = 0;
        } else {
          var benefitpeoplemandayss_value_number = Number(req.benefitpeoplemandayss_value_number)
        }
        if (req.benefitmoneys_value_number == null) {
          var benefitmoneys_value_number = 0;
        } else {
          var benefitmoneys_value_number = Number(req.benefitmoneys_value_number)
        }





        summandays = summandays + benefitpeoplemandayss_value_number
        summoney = summoney + benefitmoneys_value_number
        sumpeople = sumpeople + benefitpeoples_value_number



        if (req.department_id == "18") {
          count_PEOPLEMANAGEMENT = count_PEOPLEMANAGEMENT + 1
          if (req.statusforprocess == "10") {
            count_PEOPLEMANAGEMENT_success = count_PEOPLEMANAGEMENT_success + 1
          }
        }
        if (req.department_id == "16") {
          count_PEOPLECAPABILITYANDCULTURE = count_PEOPLECAPABILITYANDCULTURE + 1
          if (req.statusforprocess == "10") {
            count_PEOPLECAPABILITYANDCULTURE_success = count_PEOPLECAPABILITYANDCULTURE_success + 1
          }
        }
        if (req.department_id == "10") {
          count_LICENSETOOPERATEANDPERMIT = count_LICENSETOOPERATEANDPERMIT + 1
          if (req.statusforprocess == "10") {
            count_LICENSETOOPERATEANDPERMIT_success = count_LICENSETOOPERATEANDPERMIT_success + 1
          }
        }
        if (req.department_id == "9") {
          count_ENVIRONMENTALSOCIALANDGOVERNANCE = count_ENVIRONMENTALSOCIALANDGOVERNANCE + 1
          if (req.statusforprocess == "10") {
            count_ENVIRONMENTALSOCIALANDGOVERNANCE_success = count_ENVIRONMENTALSOCIALANDGOVERNANCE_success + 1
          }
        }
        if (req.department_id == "8") {
          count_ECOSYSTEMANDFACILITYMANAGEMENT = count_ECOSYSTEMANDFACILITYMANAGEMENT + 1
          if (req.statusforprocess == "10") {
            count_ECOSYSTEMANDFACILITYMANAGEMENT_success = count_ECOSYSTEMANDFACILITYMANAGEMENT_success + 1
          }
        }

        if (req.department_id != "18" && req.department_id != "16" && req.department_id != "10" && req.department_id != "9" && req.department_id != "8") {
          count_notfive_department = count_notfive_department + 1
          if (req.statusforprocess == "10") {
            count_notfive_department_success = count_notfive_department_success + 1
          }
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

        if (req.processnameshortname == null) {
          var processnameshortname = ""
        } else {
          var processnameshortname = req.processnameshortname
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
        if (req.relative == null) {
          var relative = ""
        } else {
          var relative = req.relative
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
            format: "dd/mm/yyyy",
            autoclose: true,
            todayHighlight: true,
          });
          $("#enddate" + req.id).datepicker({
            format: "dd/mm/yyyy",
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

        var formattedstartDate_v2 = `${startdateday}/${startdatemonth}/${startdateyear}`





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


        var formatteddateend_v2 = `${enddateday}/${enddatemonth}/${enddateyear}`


        var currentYear = new Date().getFullYear();
        if (startdateyear == currentYear) {
          datalabel_in_year_current.push({ name: processnameshortname, status: req.statusforprocess })
          // data_in_year_current.push(req.statusforprocess)
        }

        $("#requestemp" + req.id).ready(function () {
          getoptiondetailforadmin(req.id);
        });




        var row = `
                <tr">
                    <td scope="row" id="req">`+ req.id + `</td>
                    <td>`+ formattedstartDate + `</td>
                    <td>`+ formattedendDate + `</td>
                    <td>`+ processname + `</td>
                    <td>`+ doingby + `</td>
                    <td>
                    <div class="item2">
                      <div class="content2">
                        <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 1) && (req.statusforprocess <= 10)) ? '#48773C' : '#c80000') + `;" disabled>
                          <i class="fa-solid fa-book fa-1x"></i>
                        </button>
                      </div>
                    </div>
                    </td>
                    <td>
                    <div class="item2">
                    <div class="content2">
                      <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 2) && (req.statusforprocess <= 10)) ? '#48773C' : '#c80000') + `;" disabled>
                        <i class="fa-solid fa-user-pen fa-1x"></i>
                      </button>        
                      </div>
                    </div>
                    </td>
                    <td>
                    <div class="item2">
                      <div class="content2">  
                        <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 3) && (req.statusforprocess <= 10)) ? '#48773C' : '#c80000') + `;" disabled>
                          <i class="fa-solid fa-person-circle-check fa-1x"></i>
                        </button>                   
                      </div>
                    </div>
                    </td>
                    <td>
                    <div class="item2">
                        <div class="content2">
                          <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 4) && (req.statusforprocess <= 10)) ? '#48773C' : '#c80000') + `;" disabled>
                            <i class="fa-solid fa-swatchbook fa-1x"></i>
                          </button>
                        </div>
                      </div>

                    </td>
                    <td>
                    <div class="item2">
                    <div class="content2">     
                      <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 5) && (req.statusforprocess <= 10)) ? '#48773C' : '#c80000') + `;" disabled>
                        <i class="fa-solid fa-circle-check fa-1x"></i>
                      </button>             
                    </div>
                  </div>
                    </td>
                    <td>
                    <div class="item2">
                    <div class="content2">
                      <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? '#48773C' : '#c80000') + `;" disabled>
                        <i class="fa-solid fa-diagram-project fa-1x"></i> </button>              
                    </div>
                  </div>
                    </td>
                    <td>
                    <div class="item2">
                      <div class="content2">

                        <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 7) && (req.statusforprocess <= 10)) ? '#48773C' : '#c80000') + `;" disabled>
                          <i class="fa-solid fa-computer fa-1x"></i>
                        </button>         
                      </div>
                   </div>
                    </td>
                    <td>
                    <div class="item2">
                      <div class="content2">
                        <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 8) && (req.statusforprocess <= 10)) ? '#48773C' : '#c80000') + `;" disabled>
                          <i class="fa-solid fa-clipboard-check fa-1x"></i>
                        </button>       
                      </div>
                    </div>
                    </td>
                    <td>                  
                    <div class="item2">
                      <div class="content2">
                        <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 9) && (req.statusforprocess <= 10)) ? '#48773C' : '#c80000') + `;" disabled>
                          <i class="fa-solid fa-box-open fa-1x"></i>
                        </button>            
                      </div>
                    </div>
                    </td>
                    <td>                
                    <div class="item2">
                      <div class="content2">
                        <button class="buttonprocess2" style="background:`+ (((req.statusforprocess >= 10) && (req.statusforprocess <= 10)) ? '#48773C' : '#c80000') + `;" disabled>
                          <i class="fa-solid fa-heart fa-1x"></i>
                        </button>            
                      </div>
                    </div>
                    </td>
                    <td>
                      <a id="iconlinkfeedback" href="`+ req.link_feedback + `" target="_blank" style="display:` + (((req.statusforprocess == 10) && ((adminlogin == admin_id && adminlogin != 0) || (adminlogin != approverlogin && adminlogin != userlogin))) ? 'inline' : ((req.statusforprocess >= 10) && (req.statusforprocess <= 10) && approverlogin == approver_id && approverlogin != 0) ? 'inline' : ((req.statusforprocess >= 10) && (req.statusforprocess <= 10) && userlogin == user_id && userlogin != 0) ? 'inline' : 'none') + `"><i class="fa-solid fa-book fa-3x"></i></a>
                    </td>
                    <td>
                    <a id="iconlinktoweb" href="#" target="_blank" style="display:` + (((req.statusforprocess == 10)) ? 'inline' : 'none') + `"><i class="fa-solid fa-globe fa-3x"></i></i></a>
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
                <div class="modal-content paperemperthize" >
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Emphathize</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="window.location.reload()"></button>
                  </div>
                  <div class="modal-body" style="height: 1000px;width: 1000px;">
                    <div class="row">
                      <div class="col-12" style="margin-left: 3rem;">
                        <div class="row">
                          <div class="col-4 mt-3 ">
                            <span>Request id</span><br>
                            <input class="mt-3" type="text" id="requestid`+ req.id + `" style="width:90%" disabled>
                          </div>
                          <div class="col-4 mt-3">
                          <span>Request Emp id</span><br>
                          <input class="mt-3" type="text"  id="requestemp`+ req.id + `" list="empid` + req.id + `"  style="width:90%" OnChange="changinputempid(`+req.id+`)" disabled>
                          <datalist id="empid`+ req.id + `">
                          
                          
                          </datalist>
                  
                            
                          </div>
                          <div class="col-4  mt-3">
                            <span>Request Name</span><br>
                            <input class="mt-3" type="text"  id="requestname`+ req.id + `" style="width:90%" disabled>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4 mt-3">
                            <span>Request Division</span><br>
                            <input class="mt-3" type="text" id="requestdivition`+ req.id + `" style="width:90%" disabled>
                          </div>
                          <div class="col-4 mt-3">
                            <span>Request Department</span><br>
                            <input class="mt-3" type="text" id="requestdepartment`+ req.id + `" style="width:90%" disabled>
                          </div>
                          <div class="col-4  mt-3">
                            <span>Request Section</span><br>
                            <input class="mt-3" type="text" id="requestsection`+ req.id + `" style="width:90%" disabled>
                          </div>
                        </div>
                        <div class="row " style="margin-top: 1%">
        
                          <div class="col-6 mt-1 mb-1">
                            <div class="input-group mb-3">
                              <span class="input-group-text" id="inputGroup-sizing-default">ชื่อเรื่อง</span>
                              <input type="text"   class="form-control" id="processname`+ req.id + `" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" disabled>
                            </div>
                          </div>
                          <div class="col-6 mt-1 mb-1">
                          <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">ชื่อย่อ</span>
                            <input type="text"   class="form-control" placeholder="กรุณาเขียนชื่อย่อสูงสุด 4 ตัวอักษร" maxlength="4" id="processnameshortname`+ req.id + `" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" disabled>
                          </div>
                        </div>
                          <div class="col-6 mt-1 mb-1">
                            <div class="input-group date mb-3" style="width:100%">
                              <span class="input-group-text" id="inputGroup-sizing-default">วันที่ขอ</span>
                              <input  type="text" value="`+ formattedstartDate_v2 + `" id="startdate` + req.id + `" class="form-control" placeholder="dd/mm/yyyy" disabled>
                            </div>
                          </div>
                          <div class="col-6 mt-1 mb-1">
                            <div class="input-group date mb-3" style="width:100%">
                              <span class="input-group-text" id="inputGroup-sizing-default">วันที่ต้องใช้ระบบ</span>
                              <input type="text" value="`+ formatteddateend_v2 + `" id="enddate` + req.id + `" class="form-control" placeholder="dd/mm/yyyy" disabled>
                            </div>
                           
                          
                          </div>
                          <div class="col-6 mt-1 mb-1">
                            <div class="input-group">
                              <label class="input-group-text" for="inputGroupSelect01">ASIS</label>
                              <select class="form-select" id="asis`+ req.id + `" disabled>

                              </select>
                            </div>
                          </div>
                          <div class="col-6 mt-1 mb-1">
                            <div class="input-group">
                              <label class="input-group-text" for="inputGroupSelect01">TOBE</label>
                              <select class="form-select"  id="tobe`+ req.id + `" disabled>

                              </select>
                            </div>
                          </div>
                          <div class="col-6 mt-3 mb-2">
                            <div class="input-group">
                              <label class="input-group-text" for="inputGroupSelect01">Doing By</label>
                              <select class="form-select"  id="doingby`+ req.id + `" disabled>

                              </select>
                            </div>
                          </div>
                          <div class="col-6 mt-3 mb-2">
                            <div class="input-group">
                              <label class="input-group-text" for="inputGroupSelect01">BUDJET</label>
                              <select class="form-select" id="budget`+ req.id + `" disabled>

                              </select>
                            </div>
                          </div>
                          <div class="col-6 mt-2 mb-2">
                            <span>Pain Point</span><br>
                            <textarea id="painpoint`+ req.id + `" class="mt-3" type="text" style="height:90px;width:100%" disabled>` + painpoint + `</textarea>
                          </div>
                          <div class="col-6 mt-2 mb-2">
                            <span>Results & Benefit</span><br>
                            <textarea id="benefit`+ req.id + `" class="mt-3" type="text" style="height:90px;width:100%" disabled>` + results + `</textarea>
                          </div>
                          <div class="col-6 mt-1 mb-1">
                            <span>Description</span><br>
                            <textarea id="description`+ req.id + `" class="mt-3" type="text" style="height:90px;width:100%" disabled>` + description + `</textarea>
                          </div>
                          <div class="col-6 mt-1 mb-1">
                          <span>Relative</span><br>
                          <textarea id="relative`+ req.id + `" class="mt-3" type="text" style="height:90px;width:100%" disabled>` + relative + `</textarea>
                         </div>
                     
                       
                        
                        <form id="fileallinupdate" enctype="multipart/form-data">
                        <div class="col-6 mt-1 mb-1">
                            <span>Scope of Work </span><br>
                            <input id="scopeofwork`+ req.id + `" class="mt-3" type="file" disabled><br/>
                            <a style="display:`+ (scopeofworkname == "" ? "none" : "inline") + `" href = "../../backend/home/fileupload/scopeofwork/` + scopeofworkname + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-2x"></i></a>
                          </div>
                          <div class="col-6 mt-1 mb-1">
                            <span>Risk Management </span><br>
                            <input id="riskmanagement`+ req.id + `" class="mt-3" type="file" disabled><br/>
                            <a style="display:`+ (riskmanagementname == "" ? "none" : "inline") + `" href = "../../backend/home/fileupload/riskmanagement/` + riskmanagementname + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-2x"></i></a>
                          </div>
                          <div class="col-6 mt-1 mb-1">
                          <span>Bussiness Flow </span><br>
                            <input id="bussinessflow`+ req.id + `" class="mt-3" type="file" disabled><br/>
                            <a style="display:`+ (bussinessflowname == "" ? "none" : "inline") + `" href = "../../backend/home/fileupload/bussinessflow/` + bussinessflowname + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-2x"></i></a>
                          </div>
                          <div class="col-6 mt-1 mb-1">
                            <span>Work Flow ( swim lane )  </span><br>
                            <input  id="workflow`+ req.id + `" class="mt-3" type="file" disabled><br/>
                             <a style="display:`+ (workflowname == "" ? "none" : "inline") + `" href = "../../backend/home/fileupload/workflow/` + workflowname + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-2x"></i></a>
                            </div>
                          <div class="col-6 mt-1 mb-1">
                            <span>Extract File (แนบไฟล์เดิมของระบบ)</span><br>
                            <input id="extractfile`+ req.id + `" class="mt-3" type="file" disabled><br/>
                            <a style="display:`+ (extractfilename == "" ? "none" : "inline") + `" href = "../../backend/home/fileupload/extractfile/` + extractfilename + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-2x"></i></a>
                          </div>
                        </form>
                          <div class="row mb-5">
                       
                          <div class="col-11 mt-1 mb-1" style="text-align:end ;">
                          <button class="buttonedit" onclick="togglebtnedit(`+ req.id + `)" >เเก้ไข</button>
                          </div>
                          <div class="col-1 mt-1 mb-1" style="text-align:end ;">
                            <button class="buttonsave" id="save-button`+ req.id + `"  onclick="patchupdate(` + req.id + `,` + req.statusforprocess + `,` + req.status_req + `)" disabled>บันทึก</button>
                          </div>  
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
                          <textarea id="message_reason_delete`+ req.id + `" oninput="checkinput(` + req.id + `)"  class="form-control"  placeholder="กรุณาเขียนเหตุผลในการลบอย่างน้อย 20 ตัวอักษร" style="height:150px !important"></textarea>
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
        var colfeedback = document.getElementById("colfeedback")
        if (adminlogin != 0) {
          colfeedback.style.display = 'inline'
        } else {
          colfeedback.style.display = 'none'
        }



        reqall_tabel.insertAdjacentHTML('beforeend', row);



      }
      console.log(summandays)
      var mandays_summary = document.getElementById("mandays_summary")
      mandays_summary.innerHTML = summandays

      var people_summary = document.getElementById("people_summary")
      people_summary.innerHTML = sumpeople

      var money_summary = document.getElementById("money_summary")
      console.log(summoney);
      if(summoney>0 && summoney<1000){
        money_summary.innerHTML = summoney+ " B"
      }
      if(summoney>=1000 && summoney<=999999){
        money_summary.innerHTML = (summoney/1000).toFixed(3) + " KB"
      }else if (summoney >=1000000 && summoney < 1000000000) {
        money_summary.innerHTML = (Number(summoney)/1000000).toFixed(3) + " MB"
      }else if ( summoney >= 1000000000){
        money_summary.innerHTML = (Number(summoney)/1000000).toFixed(0) + " MB"
      }else if ( summoney == 0){
        money_summary.innerHTML =  "0 B"

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
          labels: ['HRM', 'HRD', 'LICENSE', 'ENV', 'ECO','CHC'],
          datasets: [{
            label: 'PROJECT ASIS',
            data: [count_PEOPLEMANAGEMENT - count_PEOPLEMANAGEMENT_success, count_PEOPLECAPABILITYANDCULTURE - count_PEOPLECAPABILITYANDCULTURE_success, count_LICENSETOOPERATEANDPERMIT - count_LICENSETOOPERATEANDPERMIT_success, count_ENVIRONMENTALSOCIALANDGOVERNANCE - count_ENVIRONMENTALSOCIALANDGOVERNANCE_success, count_ECOSYSTEMANDFACILITYMANAGEMENT - count_ECOSYSTEMANDFACILITYMANAGEMENT_success,count_notfive_department-count_notfive_department_success],
            backgroundColor:
              [
                "#968597",
              ],
            borderWidth: 1,

          },
          {
            label: 'PROJECT SUCCESS',
            data: [count_PEOPLEMANAGEMENT_success, count_PEOPLECAPABILITYANDCULTURE_success, count_LICENSETOOPERATEANDPERMIT_success, count_ENVIRONMENTALSOCIALANDGOVERNANCE_success, count_ECOSYSTEMANDFACILITYMANAGEMENT_success,count_notfive_department_success],
            backgroundColor:
              [
                "#48773C",
    
              ],
            borderWidth: 1,

          }

          ]
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            datalabels: {
              color: '#000000',
              anchor: 'end',
              align: 'center',
              offset: 40,
              padding: {
                top: 10,
                bottom: 10,
                left: 15,
                right: 15,
              },
              borderColor: '#000000',
              borderRadius: 25,
              backgroundColor: (context) => {
                const value = context.dataset.data[context.dataIndex];
                return value !== 0 ? 'white' : 'transparent';
              },

              font: {
                weight: 'bold',
                size: '13'
              },
              formatter: function (value, context) {
                if (value != 0) {
                  return value;
                } else {
                  return "";
                }
              }
            },
            legend: {
              display: false // hide the legend
            },
            title: {
              display: true,
              text: 'PROJECT BY DEPARTMENT ( UNIT:ITEM )',
              color: 'black',
              padding: {
                bottom: 40 // adjust the bottom padding as needed
              }
            },


          },

          scales: {
            x: {
              stacked: true,
              grid: {
                display: false
              },
              ticks: {
                stepSize: 1
              },
            },
            y: {
              display: false,
              stacked: true,
              grid: {
                display: false
              },
              ticks: {
                stepSize: 1
              }
            }
          }

        },
        plugins: [ChartDataLabels]
      });



      var ctx1 = document.getElementById('chart_pie_allreq').getContext('2d');
      var myChart1 = new Chart(ctx1, {
        type: 'pie',
        data: {
          labels: ['Requirements', 'Emphathize', 'Approve', 'Prototype', 'Confirm Prototype', 'PrepareData', 'Coding', 'Testing', 'Deploy', 'Implement'],

          // labels: ['Requirements', 'Emphathize', 'Approve', 'Prototype', 'Confirm Prototype', 'PrepareData', 'Coding', 'Testing', 'Delivered', 'Implement'],
          datasets: [{
            label: 'Number of process',
            data: [countprocess1, countprocess2, countprocess3, countprocess4, countprocess5, countprocess6, countprocess7, countprocess8, countprocess9, countprocess10],
            backgroundColor:
              [
                "#8F1838",
                "#F36E24",
                "#968597",
                "#968597",
                "#968597",
                "#968597",
                "#968597",
                "#968597",        
                "#CD8B2A",
                "#48773C",



            

              ],
            borderColor: 'white',
            borderJoinStyle: 'round',        
            shadowBlur: 3,
          }]
        },
        options: {
          layout: {
            padding: {

              bottom: 55,
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          // cutoutPercentage: 70,
          plugins: {
            datalabels: {
              color: '#fff',
              anchor: 'end',
              align: 'end',
              offset: 25,
              padding: {
                top: 5,
                bottom: 5,
                left: 9,
                right: 9,
              },
              borderRadius: 25,
              backgroundColor: (context) => {
                const value = context.dataset.data[context.dataIndex];
                return value !== 0 ? context.dataset.backgroundColor : 'transparent';
              },

              font: {
                weight: 'bold',
                size: '13'
              },
              formatter: function (value, context) {
                if (value != 0) {
                  return context.chart.data.labels[context.dataIndex] + ': ' + value;
                } else {
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
              padding: {
                bottom: 50, // adjust the bottom padding as needed
                top: 20,
              },
            },
            labels: {
              visible: true,
              position: "above",

            },
            tooltip: {
              enabled: true
            }




          },

        },
        plugins: [ChartDataLabels]


      });

      const barWidth = 0.1;
      const spacing = 0.8;

      var sortdata = datalabel_in_year_current.sort((a, b) => a.status - b.status)
      console.log(sortdata);
      sortdata.reverse()


      var datasortpercent = []
      var datasortname = []
      sortdata.forEach(person => {
        datasortname.push(person.name)
        datasortpercent.push(person.status)
      })



      var ctx2 = document.getElementById('chart_bar_reqpercentinyear').getContext('2d');
      var myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: datasortname,
          datasets: [{
            label: 'Number of project',
            data: datasortpercent,
            backgroundColor: (context) => {
              const value = context.dataset.data[context.dataIndex];
              return value == 0 ? 'white' : value == 1 ? '#8F1838' : value == 2 ? '#F36E24' : value == 3 ? '#968597' : value == 3 ? '#968597' : value == 4 ? '#968597' : value == 5 ? '#968597' : value == 6 ? '#968597' : value == 7 ? '#968597' : value == 8 ? '#968597' : value == 9 ? '#CD8B2A' : '#48773C';
            },
            // [
            //   "#5e121b",
            //   "#7a1a27",
            //   "#c80000",
            //   "#cc2a3d",
            //   "#e83146",
            //   "#3f1c39",
            //   "#53244a",
            //   "#692d5d",
            //   "#953e83",
            //   "#b74ba1",
            // ],
            // ["#FF0000",
            //   "#FF4141",
            //   "#FF6464",
            //   "#FF8585",
            //   "#FFA600",
            //   "#FFC24F",
            //   "#FFD688",
            //   "#FFE6B7",
            //   "#FFF400",
            //   "#FFF854",
            //   "#FFFB93",
            //   "#FFFDC2",
            // ],
            borderWidth: 1,

          }]
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            datalabels: {
              color: 'black',
              anchor: 'end',
              align: 'center',
              offset: 15,
              padding: {
                top: 10,
                bottom: 10,
                left: 4,
                right: 4,
              },
              borderColor: '#fff',
              backgroundColor: 'white',
              borderRadius: 25,
              font: {
                weight: 'bold',
                size: '10'
              },
              formatter: function (value, context) {
                if (value != 0) {
                  return Math.round(value * 100) / 10 + '%';
                } else {
                  return "";
                }
              }
            },
            legend: {
              display: false // hide the legend
            },
            title: {
              display: true,
              text: 'PROJECT PERCENT YEAR ' + currentYear,
              color: 'black',
              padding: {
                bottom: 25 // adjust the bottom padding as needed
              }
            }
          },
          scales: {
            x: {
              barPercentage: barWidth,
              categoryPercentage: 1 - spacing,
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
        },
        plugins: [ChartDataLabels]

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


function  successsave(state){
  if(state>0){
    showsuccessAlert();
  }
}

function patchupdate(reqid, statusforprocess, statusformanage) {
  uploadfile(reqid)
  updatereq(reqid, statusforprocess, statusformanage)
}



var uploadfile = function (reqid) {
  var file1 = document.getElementById('workflow' + reqid).files;
  var file2 = document.getElementById('scopeofwork' + reqid).files;
  var file3 = document.getElementById('riskmanagement' + reqid).files;
  var file4 = document.getElementById('bussinessflow' + reqid).files;
  var file5 = document.getElementById('extractfile' + reqid).files;
  var processnameshortname = document.getElementById('processnameshortname' + reqid).value;

  if (file1.length > 0 || file2.length > 0 || file3.length > 0 || file4.length > 0 || file5.length > 0) {

    console.log(processnameshortname);
    var formData = new FormData();
    formData.append("workflow", file1[0]);
    formData.append("scopeofwork", file2[0]);
    formData.append("riskmanagement", file3[0]);
    formData.append("bussinessflow", file4[0]);
    formData.append("extractfile", file5[0]);
    formData.append("idreq", reqid);
    formData.append("processnameshortname", processnameshortname);


    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost/projectbacklog/backend/home/uploadfile.php", true);
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // showUpdatesuccessAlert()
        successsave(1);
      } else if(this.status == "INPUTTEXT") {
        showerrorAlert()
      }else{
        showerrorfileAlert()
      }
    };

    // Send request with data
    xhttp.send(formData);

  }
}



var updatereq = function (reqid, statusforprocess, statusformanage) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");

  var statusmanage = 0
  if (Number(statusformanage) == 3) {
    statusmanage = statusformanage
  } else {
    statusmanage = 1
  }


  var statusprocess = 0
  console.log(statusforprocess);
  if (Number(statusforprocess) > 2) {
    statusprocess = statusforprocess
  } else {
    statusprocess = 2
  }


  var startdateString = document.getElementById("startdate" + reqid).value
  var startdateparts = startdateString.split('/');
  var startdateObject = new Date(startdateparts[2], startdateparts[1] - 1, startdateparts[0], 0, 0, 0, 0);
  var startdatetimezoneOffset = startdateObject.getTimezoneOffset() / 60;
  startdateObject.setUTCHours(17 - startdatetimezoneOffset, 0, 0, 0); // set time to 17:00:00.000 in TST
  var startdateformattedDate = startdateObject.toISOString().substr(0, 10);


  var enddateString = document.getElementById("enddate" + reqid).value
  var enddateparts = enddateString.split('/');
  var enddateObject = new Date(enddateparts[2], enddateparts[1] - 1, enddateparts[0], 0, 0, 0, 0);
  var enddatetimezoneOffset = enddateObject.getTimezoneOffset() / 60;
  enddateObject.setUTCHours(17 - enddatetimezoneOffset, 0, 0, 0); // set time to 17:00:00.000 in TST
  var enddateformattedDate = enddateObject.toISOString().substr(0, 10);

  console.log(document.getElementById("tobe" + reqid).value);



  const empInput = document.getElementById("requestemp" + reqid);
  const adminid = empInput.getAttribute("data-value-admin")
  const approverid = empInput.getAttribute("data-value-approver")
  const userid = empInput.getAttribute("data-value-user")


  var raw = JSON.stringify({
    "processname": document.getElementById("processname" + reqid).value,
    "processnameshortname": document.getElementById("processnameshortname" + reqid).value,
    "startdate": startdateformattedDate,
    "enddate": enddateformattedDate,
    "painpoint": document.getElementById("painpoint" + reqid).value,
    "description": document.getElementById("description" + reqid).value,
    "results_benefit": document.getElementById("benefit" + reqid).value,
    "tobe_id": document.getElementById("tobe" + reqid).value,
    "asis_id": document.getElementById("asis" + reqid).value,
    "doingby_id": document.getElementById("doingby" + reqid).value,
    "budget_id": document.getElementById("budget" + reqid).value,
    "relative": document.getElementById("relative" + reqid).value,
    "status": statusmanage,
    "statusforprocess": statusprocess,
    "id": reqid,
    "adminid": Number(adminid),
    "approverid": Number(approverid),
    "userid": Number(userid),
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
        const requestid = document.getElementById("requestid" + reqid);
        const requestemp = document.getElementById("requestemp" + reqid);
        const requestname = document.getElementById("requestname" + reqid);
        const requestdivition = document.getElementById("requestdivition" + reqid);
        const requestdepartment = document.getElementById("requestdepartment" + reqid);
        const requestsection = document.getElementById("requestsection" + reqid);
        const processname = document.getElementById("processname" + reqid);
        const processnameshortname = document.getElementById("processnameshortname" + reqid);
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
        const relative = document.getElementById("relative" + reqid);

        const bussinessflow = document.getElementById("bussinessflow" + reqid);
        const workflow = document.getElementById("workflow" + reqid);
        const extractfile = document.getElementById("extractfile" + reqid);


        requestid.disabled = true;
        requestemp.disabled = true;
        requestname.disabled = true;
        requestdivition.disabled = true;
        requestdepartment.disabled = true;
        requestsection.disabled = true;
        processname.disabled = true;
        processnameshortname.disabled = true;
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
        relative.disabled = true;
        savebutton.disabled = true;
        successsave(1);
        // showUpdatesuccessAlert()
      } else if (jsonObj.status == 'INPUTTEXT') {
        showerrorAlert()
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
      document.getElementById('processnameshortname' + id).value = jsonObj1.processnameshortname
      document.getElementById('requestemp' + id).value = jsonObj1.empid
      document.getElementById('requestname' + id).value = jsonObj1.firstname + " " + jsonObj1.lastname
      document.getElementById('requestdivition' + id).value = jsonObj1.division
      document.getElementById('requestdepartment' + id).value = jsonObj1.department
      document.getElementById('requestsection' + id).value = jsonObj1.section


      const empInput = document.getElementById("requestemp" + id);
      empInput.setAttribute("data-value-admin", jsonObj1.admin_id);
      empInput.setAttribute("data-value-user",  jsonObj1.user_id);
      empInput.setAttribute("data-value-approver",  jsonObj1.approver_id);




      var optionasis = document.getElementById('asis' + id)
      var opriontobe = document.getElementById('tobe' + id)
      var optiondoingby = document.getElementById('doingby' + id)
      var optionbudget = document.getElementById('budget' + id)

      var optionasisvalue = ` <option value=`+ jsonObj1.asisid+ `>` + jsonObj1.asis + `</option>`
      optionasis.insertAdjacentHTML('beforeend', optionasisvalue);

      var optiontobevalue = ` <option value=`+ jsonObj1.tobeid + `>` + jsonObj1.tobe + `</option>`
      opriontobe.insertAdjacentHTML('beforeend', optiontobevalue);

      var optiondoingbyvalue = ` <option value=`+ jsonObj1.doingbyid + `>` + jsonObj1.doingby + `</option>`
      optiondoingby.insertAdjacentHTML('beforeend', optiondoingbyvalue);

      var optionbudgetvalue = ` <option value=`+ jsonObj1.budgetid + `>` + jsonObj1.budget + `</option>`
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

  // const requestid = document.getElementById("requestid" + id);
  const requestemp = document.getElementById("requestemp" + id);
  // const requestname = document.getElementById("requestname" + id);
  // const requestdivition = document.getElementById("requestdivition" + id);
  // const requestdepartment = document.getElementById("requestdepartment" + id);
  // const requestsection = document.getElementById("requestsection" + id);
  const processname = document.getElementById("processname" + id);
  const processnameshortname = document.getElementById("processnameshortname" + id);
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
  const relative = document.getElementById("relative" + id);
  const savebutton = document.getElementById("save-button" + id);

  savebutton.disabled = !savebutton.disabled;
  relative.disabled = !relative.disabled;


let admin_id = localStorage.getItem("idadmin");
if(Number(admin_id) != 0 && admin_id != "null"){
  requestemp.disabled = !requestemp.disabled;
}else{
  requestemp.disabled = true
}



  processname.disabled = !processname.disabled;
  processnameshortname.disabled = !processnameshortname.disabled;
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
  // requestid.disabled = !requestid.disabled;
  // requestid.disabled = !requestid.disabled;



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
              [
                "#968597"
                //"#5e121b",
                // "#7a1a27",
                // "#c80000",
                // "#cc2a3d",
                // "#e83146",
                // "#ff374e",
                // "#3f1c39",
                //"#53244a",
               // "#692d5d",
                // "#953e83",
                // "#b74ba1",
                // "#ee61d2",
                // [
                // "#93BFCF"
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
            datalabels: {
              color: 'black',
              anchor: 'end',
              align: 'center',
              offset: 15,
              padding: {
                top: 1,
                bottom: 1,
                left: 7,
                right: 7,
              },
              borderColor: '#fff',
              backgroundColor: (context) => {
                const value = context.dataset.data[context.dataIndex];
                return value !== 0 ? 'white' : 'transparent';
              },
              borderRadius: 30,
              font: {
                weight: 'bold',
                size: '12'
              },
              formatter: function (value, context) {
                if (value != 0) {
                  return value;
                } else {
                  return "";
                }
              }
            },
            title: {
              display: true,
              text: 'PROJECT PRIORITY YEAR ' + currentYear + ' ( UNIT:ITEM )',
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
        },
        plugins: [ChartDataLabels]

      });


    }

    )
    .catch(error => console.log('error', error));

}



function savefeedback() {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "link_feedback": document.getElementById("link_feedback").value,
    "idfeedback": 1,
  })
  console.log(raw)
  var requestOptions = {
    method: 'PATCH',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };

  fetch("http://localhost/projectbacklog/backend/home/feedback_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      var jsonObj = JSON.parse(result);
      if (jsonObj.status == 'OK') {
        showsuccessAlert()
      } else {
        alert('not ok');
      }

    })
    .catch(error => console.log('error', error));
}


// cPrev = -1;
// function sortBy(c) {
//   rows = document.getElementById("tablereqall").rows.length; // num of rows
//   columns = document.getElementById("tablereqall").rows[0].cells.length; // num of columns

//   console.log(rows);
//   console.log(columns);

//   arrTable = [...Array(rows)].map(e => Array(columns)); // create an empty 2d array


//   for (ro = 0; ro < rows; ro++) { // cycle through rows
//     for (co = 0; co < columns; co++) { // cycle through columns
//       arrTable[ro][co] = document.getElementById("tablereqall").rows[ro].cells[co].innerHTML;
//     }
//   }
//   th = arrTable.shift(); // remove the header row from the array, and save it


//   if (c !== cPrev) { // different column is clicked, so sort by the new column
//     arrTable.sort(
//       function (a, b) {
//         if (a[c] === b[c]) {
//           return 0;
//         } else {
//           return (a[c] < b[c]) ? -1 : 1;
//         }
//       }
//     );
//   } else { // if the same column is clicked then reverse the array
//     arrTable.reverse();
//   }
//   cPrev = c;
//   arrTable.unshift(th);
//   for (ro = 0; ro < rows; ro++) {
//     for (co = 0; co < columns; co++) {
//       document.getElementById("tablereqall").rows[ro].cells[co].innerHTML = arrTable[ro][co];
//     }
//   }
// }



function searchTable() {
  const tableBody = document.querySelector('#reqall_tabel');
  console.log(tableBody);
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  console.log(rows);

  const searchTerm = document.querySelector('#searchinput').value.toLowerCase();

  rows.forEach(row => {
    const cells = Array.from(row.querySelectorAll('td'));
    const match = cells.some(cell => {
      const cellContent = cell.textContent.toLowerCase();
      if (!isNaN(cellContent) && cellContent.trim() !== '') {
        // convert the cell content to a number and check for a match
        return parseFloat(cellContent) === parseFloat(searchTerm);
      } else {
        // check for a match using string comparison
        return cellContent.includes(searchTerm);
      }
    });
    row.style.display = match ? '' : 'none';
  });
}




var getoptiondetailforadmin = function (reqid) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


  var requestemp_option = document.getElementById('empid'+reqid);

  fetch("http://localhost/projectbacklog/backend/home/home_detailall_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);
      console.log(jsonObj);

      for (let empid of jsonObj) {
        rowrequestemp_option =
          `
          <option data-value = "`+ empid.iddetail + `" value="` + empid.codeuser + `"></option>
          `
          requestemp_option.insertAdjacentHTML('beforeend', rowrequestemp_option);
      }
    }
    )
}
var changinputempid = function (idreq) {
  const empInput = document.getElementById("requestemp" + idreq);

  // Find the selected option based on the input value
  const selectedOption = Array.from(empInput.list.options).find(option => option.value === empInput.value);
  const idselect = selectedOption.getAttribute("data-value")


  const requestname = document.getElementById("requestname" + idreq)
  const requestdivition = document.getElementById("requestdivition" + idreq)
  const requestdepartment = document.getElementById("requestdepartment" + idreq)
  const requestsection = document.getElementById("requestsection" + idreq)


  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch("http://localhost/projectbacklog/backend/home/home_detailall_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);


      for (let empid of jsonObj) {
     
        if (idselect == empid.iddetail) {
       

          requestname.value = empid.firstname + " " +empid.lastname
          requestdivition.value = empid.name_division
          requestdepartment.value = empid.name_department
          requestsection.value = empid.name_section
          console.log(empid);
          console.log(empid.detail_admin_id);
          console.log(empid.detail_user_id);
          console.log(empid.detail_approver_id);

          if(empid.detail_admin_id > 0){
            empInput.setAttribute("data-value-admin", empid.detail_admin_id);
            console.log(empInput);
          }else{
            empInput.setAttribute("data-value-admin", null);
          }
          
          
         if(empid.detail_user_id > 0){
            empInput.setAttribute("data-value-user",  empid.detail_user_id);
            console.log(empInput);
          }else{
            empInput.setAttribute("data-value-user", null);
          }
          
          
          if(empid.detail_approver_id > 0){
            empInput.setAttribute("data-value-approver",  empid.detail_approver_id);
            console.log(empInput);
          }else{
            empInput.setAttribute("data-value-approver", null);
          }


        }
      }

    }
    )
}