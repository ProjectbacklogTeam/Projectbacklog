function showsuccessAlert() {
  Swal.fire({
    title: 'Success',
    text: 'send email success!',
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


function showsendemailsuccessAlert() {
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


function loadpjmanagement() {
  getreqall();

}



var toggleeditplan = function (id) {
  console.log(id)
  const datestart = document.getElementById("datestart" + id);
  const dateend = document.getElementById("dateend" + id);

  datestart.disabled = !datestart.disabled;
  dateend.disabled = !dateend.disabled;
}


var colormonth = function (startdate, enddate, reqid) {
  var startdate = new Date(startdate);
  var enddate = new Date(enddate);
  var startmonth = startdate.getMonth() + 1;
  var endmonth = enddate.getMonth() + 1;
  var text = startdate.toDateString() + " to " + enddate.toDateString();

  for (var i = startmonth; i <= endmonth; i++) {
    switch (i) {
      case 1:
        document.getElementById("january" + reqid).style.backgroundColor = "#FF5656";
        break;
      case 2:
        document.getElementById("february" + reqid).style.backgroundColor = "#FF5656";
        break;
      case 3:
        document.getElementById("march" + reqid).style.backgroundColor = "#FF5656";
        break;
      case 4:
        document.getElementById("april" + reqid).style.backgroundColor = "#FF5656";
        break;
      case 5:
        document.getElementById("may" + reqid).style.backgroundColor = "#FF5656";
        break;
      case 6:
        document.getElementById("june" + reqid).style.backgroundColor = "#FF5656";
        break;
      case 7:
        document.getElementById("july" + reqid).style.backgroundColor = "#FF5656";
        break;
      case 8:
        document.getElementById("august" + reqid).style.backgroundColor = "#FF5656";
        break;
      case 9:
        document.getElementById("september" + reqid).style.backgroundColor = "#FF5656";
        break;
      case 10:
        document.getElementById("october" + reqid).style.backgroundColor = "#FF5656";
        break;
      case 11:
        document.getElementById("november" + reqid).style.backgroundColor = "#FF5656";
        break;
      case 12:
        document.getElementById("december" + reqid).style.backgroundColor = "#FF5656";
        break;
    }
  }
}

var getpjmanagment = function (year) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  var reqall_tabel = document.getElementById('table_plan');
  fetch("http://localhost/projectbacklog/backend/projectmanagement/projectmanagement_db.php?year="+year, requestOptions)
    .then(response => response.text())
    .then(result => {
      reqall_tabel.innerHTML = '';
      var jsonObj = JSON.parse(result);
      console.log(jsonObj)
      for (let req of jsonObj) {
        
        if (req.firstname == null) {
          var firstname = ""
        } else {
          var firstname = req.firstname
        }   
        
        if (req.lastname == null) {
          var lastname = ""
        } else {
          var lastname = req.lastname
        }   
        
        if (req.topic == null) {
          var topic = ""
        } else {
          var topic = req.topic
        }   
        
        if (req.email == null) {
          var email = ""
        } else {
          var email = req.email
        }

        if (req.detail == null) {
          var detail = ""
        } else {
          var detail = req.detail
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




        $(document).ready(function() {
          $("#startdate"+req.idplan).datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            todayHighlight: true
          });
          $("#enddate"+req.idplan).datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            todayHighlight: true
          });
        });

        $("#approver"+req.idplan).ready(function(){
          getoptionapprover(req.idplan);
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
        
        if(req.startdate==null){
          let todaystrat = new Date();
          let daystrat= todaystrat.getDate();
          let monthstrat = todaystrat.getMonth() + 1;
          let yearstart = todaystrat.getFullYear();
          var formattedstartDate_v2 = `${daystrat}/${monthstrat}/${yearstart}`
        }else{
          var datestartStringv2 = String(req.startdate) 
          var datestartPartsv2 = datestartStringv2.split("-");
          var datestartObjv2 = new Date(datestartPartsv2[0], datestartPartsv2[1] - 1, datestartPartsv2[2]);
          var formattedstartDate_v2 = datestartObjv2.getDate() + "/" + (datestartObjv2.getMonth() + 1) + "/" + datestartObjv2.getFullYear();
  
        }


        if(req.enddate==null){
          let todayend = new Date();
          let dayend = todayend.getDate();
          let monthend = todayend.getMonth() + 1;
          let yearend = todayend.getFullYear();
          var formatteddateend_v2 = `${dayend}/${monthend}/${yearend}`
        }else{
          var dateendStringv2 = String(req.enddate)
          var dateendPartsv2 = dateendStringv2.split("-");
          var dateendObjv2 = new Date(dateendPartsv2[0], dateendPartsv2[1] - 1, dateendPartsv2[2]);
          var formatteddateend_v2 = dateendObjv2.getDate() + "/" + (dateendObjv2.getMonth() + 1) + "/" + dateendObjv2.getFullYear();
        }

        console.log(req.enddate)
        console.log(formatteddateend_v2)
        

        var row = `
                  <tr >
                        <th scope="row">`+ req.id + `</th>
                        <td>`+ req.processname + `</td>
                        <td style="color: ` + (req.statusname == 'Approve' ? 'green' : (req.statusname == 'Reject' ? 'red' : (req.statusname == 'Waiting Send Approve' ? 'blue' : 'orange'))) + `;">` + req.statusname + `</td>        
                        <td>               
                        <button type="button" class="btn btn-light" data-bs-toggle="collapse" data-bs-target="#detailplan`+ req.id + `">
                          Detail
                        </button>
                        </td>
               
                       
                        <td>`+formattedstartDate + " to " + formattedendDate + `</td>
                        
                        <th id="january`+ req.id + `"></th>
                        <th id="february`+ req.id + `"></th>
                        <th id="march`+ req.id + `"></th>
                        <th id="april`+ req.id + `"></th>
                        <th id="may`+ req.id + `"></th>
                        <th id="june`+ req.id + `"></th>
                        <th id="july`+ req.id + `"></th>
                        <th id="august`+ req.id + `"></th>
                        <th id="september`+ req.id + `"></th>
                        <th id="october`+ req.id + `"></th>
                        <th id="november`+ req.id + `"></th>
                        <th id="december`+ req.id + `"></th>
                        <td>  
                        <button type="button" class="btn" data-bs-toggle="modal" style="color:red" data-bs-target="#deletealert`+req.id+`">
                          <i class="fa-sharp fa-solid fa-trash"></i>                     
                        </button>
                      </td>  
                    </tr> 

                    <tr  class="collapse" id="detailplan`+ req.id + `">
                    <td colspan="18">
                    <div class="card card-body" style="width:100%">    
                                <div class="row">
                                <div class="col-4">
                                <div style="text-align:start;font-size:15px;font-weight: bold;">
                                <span  class="mt-5">Start Date</span>
                                </div>
                                <div class="input-group date mt-2">
                                  <input value="`+formattedstartDate_v2+`" type="text" class="form-control" id="startdate`+req.idplan+`" placeholder="dd/mm/yyyy" disabled>
                                </div>
                                <div class="mt-5" style="text-align:start;font-size:15px;font-weight: bold;">
                                <span >End Date</span>
                                </div>
                                <div class="input-group date mt-2">
                                  <input value="`+formatteddateend_v2+`" type="text" class="form-control" id="enddate`+req.idplan+`" placeholder="dd/mm/yyyy" disabled>
                                </div>
                                <div class="mt-3 mb-3" style="text-align: end;">
                                <button id="toggletimechange`+ req.idplan + `" style="display:` + ((req.statusreq >= 2)  ? 'inline' : 'none') + `;" class="buttonedit"  onclick="toggletimechange(` + req.idplan + `)">Edit</button>
                                <button id="savetimechange`+ req.idplan + `" type="button" class="buttonsave"  data-bs-toggle="modal" data-bs-target="#successalert" onclick="changetimeplan(`+req.idplan+`)" disabled>SAVE</button>                   
                                </div>
                                </div>
                               
    
                                  <div class="col-8 paperemail" >
                                    <div class="row mt-3">
                                      <span>ส่ง Email เพื่อยืนยันการอนุมัติ</span>
                                      <div class="col-12 mb-1 mt-4">
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="inputGroup-sizing-default">Approver</span>
                                          <input value="`+firstname+" "+lastname+`" class="form-control" id="approver`+req.idplan+`" list="approverlist`+req.idplan+`"  OnChange ="changinputemail(`+req.idplan+`)"  placeholder="search..." `+ ((req.statusreq == 3)  ? 'disabled' : 'none') + ` required>
                                          <datalist id="approverlist`+req.idplan+`">
                                          
                                          
                                          </datalist>
                                          </div>
                                      </div>
                                  

                                      <div class="col-6 mb-1 mt-4">
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="inputGroup-sizing-default">Topic</span>
                                          <input value="`+topic+`" id="topic`+req.idplan+`" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" `+ ((req.statusreq == 3)  ? 'disabled' : 'none') + `>
                                        </div>
                                      </div>
                                      <div class="col-6 mb-1 mt-4">
                                        <div class="input-group mb-3">
                                          <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                                          <input value="`+email+`" id="email`+req.idplan+`" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" `+ ((req.statusreq == 3)  ? 'disabled' : 'none') + `>
                                        </div>
                                      </div>
                                      <div class="col-12 mb-1 mt-2">
                                        <textarea  id="detail`+req.idplan+`" type="text" style="width:100%;height:100px"  `+ ((req.statusreq == 3)  ? 'disabled' : 'none') + `>`+detail+`</textarea>
                                      </div>
                                     
                                    </div>
                                   
                                    <div class="col-12 mt-3 mb-3" style="text-align: end;">
                                      <button  style="display:` + ((req.statusreq == 3) ? 'none' : 'inline') + `;margin-right: 3%;" class="buttonsend" onclick="sendemail(`+req.idplan+`,`+req.id+`)">SEND</button>
                                      <button id="togglesendemail`+ req.idplan + `" style="display:` + ((req.statusreq == 3)  ? 'inline' : 'none') + `;" class="buttonedit"  onclick="togglesendemail(` + req.idplan + `)">Edit</button>
                                      <button  id="updatesendemail`+ req.idplan + `" style="display:` + ((req.statusreq == 3) ? 'inline' : 'none') + `;" class="buttonsend"  onclick="updatesendemail(`+req.idplan+`,`+req.id+`)" data-bs-toggle="modal" data-bs-target="#successsentemailalert`+req.idplan+`" disabled>SEND</button>

                                    </div>
                          
                                  </div>
                                </div>
                        
                    <div class="aprrovaltable">
                
                    </div>
                    </div>
                    </td>
                    </tr>  



                    <div class="modal fade" id="deletealert`+req.id+`" tabindex="-1" aria-labelledby="deletealert" aria-hidden="true" data-bs-backdrop="static">
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
                                <label for="message-text" class="col-form-label" style="font-size:25px">Sure you want to reject?</label>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button"  id="submitdelete`+req.id+`" class="btn btn-danger" data-bs-dismiss="modal"><a onclick="plan_delete(`+ req.id + `)">DELETE</a></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                             
                          
                    `
        reqall_tabel.insertAdjacentHTML('beforeend', row);
        colormonth(req.startdate, req.enddate, req.id);
      }

      

    }

    )
    .catch(error => console.log('error', error));

}


var changetimeplan = function(planid){
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");


  var startdateString = document.getElementById("startdate"+planid).value
  console.log(startdateString)
  var startdateparts = startdateString.split('/');
  var startdateObject = new Date(startdateparts[2], startdateparts[1] - 1, startdateparts[0], 0, 0, 0, 0);
  var startdatetimezoneOffset = startdateObject.getTimezoneOffset() / 60;
  startdateObject.setUTCHours(17 - startdatetimezoneOffset, 0, 0, 0); // set time to 17:00:00.000 in TST
  var startdateformattedDate = startdateObject.toISOString().substr(0, 10);

  var enddateString = document.getElementById("enddate"+planid).value
  var enddateparts = enddateString.split('/');
  var enddateObject = new Date(enddateparts[2], enddateparts[1] - 1, enddateparts[0], 0, 0, 0, 0);
  var enddatetimezoneOffset = enddateObject.getTimezoneOffset() / 60;
  enddateObject.setUTCHours(17 - enddatetimezoneOffset, 0, 0, 0); // set time to 17:00:00.000 in TST
  var enddateformattedDate = enddateObject.toISOString().substr(0, 10);


  var raw = JSON.stringify({
    "planid": planid,
    "startdate": startdateformattedDate,
    "enddate": enddateformattedDate,
  })

  console.log(raw)
  var requestOptions = {
    method: 'PATCH',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };



  fetch("http://localhost/projectbacklog/backend/projectmanagement/projectmanagement_db.php/changedate", requestOptions)
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


var plan_delete = function (id) {
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

  fetch("http://localhost/projectbacklog/backend/projectmanagement/projectmanagement_db.php", requestOptions)
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


var savepjmanagement = function (id) {

  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");

 
  var startdateString = document.getElementById("startdate"+id).value
  var startdateparts = startdateString.split('/');
  var startdateObject = new Date(startdateparts[2], startdateparts[1] - 1, startdateparts[0], 0, 0, 0, 0);
  var startdatetimezoneOffset = startdateObject.getTimezoneOffset() / 60;
  startdateObject.setUTCHours(17 - startdatetimezoneOffset, 0, 0, 0); // set time to 17:00:00.000 in TST
  var startdateformattedDate = startdateObject.toISOString().substr(0, 10);


  var enddateString = document.getElementById("enddate"+id).value
  var enddateparts = enddateString.split('/');
  var enddateObject = new Date(enddateparts[2], enddateparts[1] - 1, enddateparts[0], 0, 0, 0, 0);
  var enddatetimezoneOffset = enddateObject.getTimezoneOffset() / 60;
  enddateObject.setUTCHours(17 - enddatetimezoneOffset, 0, 0, 0); // set time to 17:00:00.000 in TST
  var enddateformattedDate = enddateObject.toISOString().substr(0, 10);


  var raw = JSON.stringify({
    "datestart": startdateformattedDate,
    "dateend": enddateformattedDate,
    "requirements_id": id,
  })
  console.log(raw)
  var requestOptions = {
    method: 'POST',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };

  fetch("http://localhost/projectbacklog/backend/projectmanagement/projectmanagement_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);
      if (jsonObj.status == 'OK') {
        req_statusupdate(id)
         showsendemailsuccessAlert()
      } 

    })
    .catch(error => console.log('error', error));
}

var req_statusupdate = function (id) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "status": 2,
    "id": id,
  })
  console.log(raw)
  var requestOptions = {
    method: 'PATCH',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };
  fetch("http://localhost/projectbacklog/backend/projectmanagement/projectmanagement_db.php/statusupdate", requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);
      if (jsonObj.status == 'OK') {

      } else {
        alert('not ok');
      }

    })
    .catch(error => console.log('error', error));

}


var getreqall = function () {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
 
  var reqall_tabel = document.getElementById('tabel_pjmanager');
  fetch("http://localhost/projectbacklog/backend/projectmanagement/pjreqget.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      localStorage.setItem("result", result)
      reqall_tabel.innerHTML = '';
      var jsonObj = JSON.parse(result);
      console.log(jsonObj)
      for (let req of jsonObj) {
        console.log(req);
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
        $(document).ready(function() {
          $("#startdate"+req.id).datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            todayHighlight: true
          });
          $("#enddate"+req.id).datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            todayHighlight: true
          });
        });
      
       
        var row = `
              <tr id="rowpjmanage`+ req.id + `" style="text-align:center" >
                    <th scope="row">`+ req.id + `</th>
                    <td>`+ processname + `</td>
                    <td>
                    <button type="button" name="btn_update" onclick="requriment_one(`+ req.id + `)" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#updatereqone` + req.id + `">
                        Detail
                    </button>
                    </td>
                    <td>
                    <div class="input-group date" style="width: 90%;height:20px;margin-bottom: 1rem;">
                    <span class="input-group-text" id="inputGroup-sizing-default">วันที่เริ่มแผน</span>
                    <input type="text" class="form-control" id="startdate`+req.id+`" placeholder="dd/mm/yyyy" >
                  </div>

                    </td>
                    <td>
                    <div class="input-group date" style="width: 90%;height:20px;margin-bottom: 1rem;">
                      <span class="input-group-text" id="inputGroup-sizing-default">วันที่สิ้นสุดแผน</span>
                      <input type="text" class="form-control" id="enddate`+req.id+`" placeholder="dd/mm/yyyy" >
                        <i class="bi bi-calendar"></i>
                      </button>
                    </div>
                    </td>
                    <td>
                    <button type="button" name="btn_save" class="buttonsave" onclick="savepjmanagement(`+ req.id + `)">
                        SAVE
                    </button>
                    </td>
              </tr>
              <div class="modal fade" id="updatereqone`+ req.id + `" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              <input type="date" value="`+ startdate + `"  id="startdate` + req.id + `" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" disabled>
                              
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
                              <select class="form-select" id="doingby`+ req.id + `" disabled>

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
                        </div>
        
        
                      </div>
        
                    </div>
        
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


var requriment_one = function (id) {
  console.log(id)
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

function sendemail(pjid,idreq) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");
  
  const approverInput = document.getElementById("approver"+pjid);
  const selectedOption = Array.from(approverInput.list.options).find(option => option.value === approverInput.value);
  const idselectapprover = selectedOption.getAttribute("data-value")
  
  
  
  var raw = JSON.stringify({
      "topic": document.getElementById("topic"+pjid).value,
      "email":document.getElementById("email"+pjid).value,
      "detail": document.getElementById("detail"+pjid).value,
      "projectmanagementid": pjid,
      "idapprover": idselectapprover,
      "idreq": idreq,
      "idstatus": 3,
  })
  console.log(raw)
  var requestOptions = {
    method: 'POST',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };

  fetch("http://localhost/projectbacklog/backend/projectmanagement/sendemailap_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);
      if (jsonObj.status == 'OK') {
        showsendemailsuccessAlert()
      } else {
        alert('not ok');
      }

    })
    .catch(error => console.log('error', error));
}




function updatesendemail(pjid,idreq) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");
  
  const approverInput = document.getElementById("approver"+pjid);
  const selectedOption = Array.from(approverInput.list.options).find(option => option.value === approverInput.value);
  const idselectapprover = selectedOption.getAttribute("data-value")
  
  var raw = JSON.stringify({
      "topic": document.getElementById("topic"+pjid).value,
      "email":document.getElementById("email"+pjid).value,
      "detail": document.getElementById("detail"+pjid).value,
      "projectmanagementid": pjid,
      "idreq": idreq,
      "idapprover": idselectapprover,
  })
  console.log(raw)
  var requestOptions = {
    method: 'PATCH',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };

  fetch("http://localhost/projectbacklog/backend/projectmanagement/sendemailap_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);
      if (jsonObj.status == 'OK') {
        showsendemailsuccessAlert()
        console.log('updateeeeeeeeeeeeee')
      } else {
        alert('not ok');
      }
    })
    .catch(error => console.log('error', error));
}



var getoptionapprover= function (idplan) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  var approver_option = document.getElementById('approverlist'+idplan);
  console.log(approver_option)
  fetch("http://localhost/projectbacklog/backend/projectmanagement/sendemailap_db.php/datalistapprover", requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);
      console.log(jsonObj);
      for (let approvar of jsonObj) {
        rowapprovar =
          `
              <option data-value ="`+ approvar.id +`"  value="`+approvar.firstname+" "+approvar.lastname+`"> </opion>                 
         
          `
          approver_option.insertAdjacentHTML('beforeend', rowapprovar);
      }
     
    }
    )
}



var changinputemail = function(idplan){
  const approverInput = document.getElementById("approver"+idplan);

  // Find the selected option based on the input value
  const selectedOption = Array.from(approverInput.list.options).find(option => option.value === approverInput.value);
  const idselect = selectedOption.getAttribute("data-value")
  console.log(idselect)
  const emailbox = document.getElementById("email"+idplan)
  console.log(emailbox)
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch("http://localhost/projectbacklog/backend/projectmanagement/sendemailap_db.php/datalistapprover", requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);
      console.log(jsonObj);
      for (let approvar of jsonObj) {
        console.log(approvar.id)
        if(idselect==approvar.id){
          emailbox.value = approvar.email
          console.log("hi")
        }
      }
     
    }
    )
}

function togglesendemail(idplan) {
  var approver = document.getElementById("approver" + idplan)
  var topic = document.getElementById("topic" + idplan);
  var email = document.getElementById("email" + idplan);
  var detail = document.getElementById("detail" + idplan);
  var updatesendemail = document.getElementById("updatesendemail" + idplan);
 

  approver.disabled = !approver.disabled;
  topic.disabled = !topic.disabled;
  email.disabled = !email.disabled;
  detail.disabled = !detail.disabled;
  updatesendemail.disabled = !updatesendemail.disabled;
}


function toggletimechange(idplan){
  var timestart = document.getElementById("startdate"+idplan)
  var timeend = document.getElementById("enddate"+idplan)
  var btnsavetimechange = document.getElementById("savetimechange"+idplan)

  timestart.disabled = !timestart.disabled
  timeend.disabled = !timeend.disabled
  btnsavetimechange.disabled = !btnsavetimechange.disabled


}