var loadfunctionapproval = function () {
    getreqapproverall();
    // changecolor();
}


var getreqapproverall = function () {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    var reqallapproval_tabel = document.getElementById('approvaltable');

    fetch("http://localhost/projectbacklog/backend/approvals/approval_db.php", requestOptions)
        .then(response => response.text())
        .then(result => {
            reqallapproval_tabel.innerHTML = '';
            var jsonObj = JSON.parse(result);
            console.log(jsonObj)
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
                if (req.firstname == null) {
                    var firstname = "ยังไม่ระบุ"
                } else {
                    var firstname = req.firstname
                }
                if (req.lastname == null) {
                    var lastname = "ยังไม่ระบุ"
                } else {
                    var lastname = req.lastname
                }


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
                  <tr>
                      <th scope="row" id="req">`+ req.id + `</th>
                      <td>`+ formattedstartDate + `</td>
                      <td>`+ formattedendDate + `</td>
                      <td>`+ processname + `</td>
                      <td>`+ doingby_id + `</td>
                      <td id="statuscolor" style="color: ` + (req.status == 'Approve' ? 'green' : (req.status == 'Reject' ? 'red' : 'orange')) + `;">`+ req.status + `</td>
                      <td>              
                        <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#approvaldeail`+ req.id + `"
                        aria-expanded="false" aria-controls="collapseExample">
                            ดูรายละเอียดเพิ่มเติม
                        </button>
                      </td>
                </tr>
                <tr  class="collapse" id="approvaldeail`+ req.id + `">
                <td colspan="7">
                <div class="card card-body">
                <div class="aprrovaltable">
                <div class="row " >
                    <div class="col-8" style="padding-left: 2rem;">
                    <div class="row ">
                        <div class="col-3 mt-3">
                        <span>Request id</span><br>
                        <input value="`+ req.id + `" class="inputapprovals mt-3" type="text" style="width:100%"  disabled>
                        </div>
                        <div class="col-3 mt-3">
                        <span>Request Emp id</span><br>
                        <input value="`+ req.empid + `" class="inputapprovals mt-3" type="text" style="width:100%"  disabled>
                        </div>
                        <div class="col-3 mt-3">
                        <span>Request Name</span><br>
                        <input value="`+ firstname + " " + lastname + `"class="inputapprovals mt-3" type="text" style="width:100%" disabled>
                        </div>
                        <div class="col-3 mt-3">
                        <span>Request Division</span><br>
                        <input value="`+ req.requestdivision + `" class="inputapprovals mt-3" type="text" style="width:100%"  disabled>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3 mt-3">
                        <span>Request Department</span><br>
                        <input value="`+ req.requestdepartment + `" class="inputapprovals mt-3" type="text" style="width:100%"  disabled>
                        </div>
                        <div class="col-3  mt-3">
                        <span>Request Section</span><br>
                        <input value="`+ req.requestsection + `" class="inputapprovals mt-3" type="text" style="width:100%"  disabled>
                        </div>
                        <div class="col-3  mt-3">
                        <span>TO BE</span><br>
                        <input value="`+ req.tobe + `" class="inputapprovals mt-3" type="text" style="width:100%"  disabled>
                        </div>
                        <div class="col-3  mt-3">
                        <span>BUDGET</span><br>
                        <input value="`+ req.budget + `"class="inputapprovals mt-3" type="text"style="width:100%"  disabled>
                        </div>
                    </div>
                  
                    <div class="col-12 mt-3">
                        <span>Pain Point</span><br>
                        <textarea value="`+ req.painpoint + `" class="inputapprovals mt-3" type="text" style="width:100%;height:80px" disabled></textarea>
                    </div>
                    <div class="row">
                    <div class="col-6 mt-3">
                        <span>Results & Benefit</span><br>
                        <textarea value="`+ req.benefit + `" class="inputapprovals mt-3" type="text" style="width:100%;height:80px" disabled></textarea>
                    </div>
                  
                   
                    <div class="col-6 mt-3">
                        <span>Description</span><br>
                        <textarea value="`+ req.description + `" class="inputapprovals mt-3" type="text" style="width:100%;height:80px" disabled></textarea>
                    </div>
                    </div>

                    </div> 

                    <div class="col-4" style="padding-left: 1rem;">
                    <div class="row">
                        <div class="col-12 mt-3">
                        
                            <span>Exclusions & Constraints</span><br>
                            <input value="`+ req.exclusions + `" class="inputapprovals mt-3" type="text" style="width:100%"  disabled>
                        
                        </div>
                        
        
                        <div class="row mt-4">
                        <div class="col-6 mb-1 mt-2">
                            <span>Scope of Work </span><br>
                            <input id="scopeofwork" class="mt-3" type="file" style="width:100%"  disabled>
                        </div>
                        <div class="col-6 mb-1 mt-2">
                        <span>Bussiness Flow </span><br>
                          <input id="bussinessflow" class="mt-3" type="file" style="width:100%"  disabled>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-6 mt-3">                  
                            <span>Work Flow</span><br>
                            <input class="inputapprovals mt-3" type="file" style="width:100%"  disabled> 
                        </div>
                        <div class="col-6 mt-3" >                     
                            <span>Extract File</span><br>
                            <input class="inputapprovals mt-3" type="file" style="width:100%"  disabled>               
                        </div>
                        </div>
                        <div class="col-12 mt-3">
                            <span>Approvals</span><br>
                            <input  value="`+ req.approvals + `" class="inputapprovals mt-3" type="text" style="width:100%"  disabled>                    
                        </div>
                        <div class="col-12 mt-5 mb-3" style="text-align: end;">
                        <button type="button" style="display:`+ (req.status == 'Approve' ? 'none' : 'inline')+ `;" class="buttonapprove" onclick="approve(`+ req.id +`,`+req.idapproval+`)" >APPROVE</button>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#rejectalert`+req.id+`" class="buttonreject">REJECT</button>
                        </div>               
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </td>
                </tr>
                
                <div class="modal fade" id="rejectalert`+req.id+`" tabindex="-1" aria-labelledby="deletealert" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered">
                  <div class="modal-content" style="border-radius:5%;background:white">
                    <div class="modal-header">
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="window.location.reload()"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <div class="centeralert" style="text-align:center;font-size:20px">
                            <i class="fa-solid fa-triangle-exclamation fa-5x" style="color:red"></i><br>
                            <label for="message-text" class="col-form-label">Sure you want to reject?</label>
                          </div>
                          <textarea id="message_reason_reject`+req.id+`" oninput="checkinputreject(`+req.id+`)"  class="form-control"  placeholder="กรุณาเขียนเหตุผลในการปฏิเสธโปรเจคอย่างน้อย 20 ตัวอักษร" style="height:150px"></textarea>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="reject(`+ req.id + `)" id="submitreject`+req.id+`"  disabled>REJECT</button>
                    </div>
                  </div>
                </div>
              </div>

              
                  `


                  reqallapproval_tabel.insertAdjacentHTML('afterend', row);

            }

        }

        )
        .catch(error => console.log('error', error));
}




function checkinputreject(id) {
    var inputtext = document.getElementById("message_reason_reject"+id).value;
    var submitreject = document.getElementById("submitreject"+id);

    console.log(inputtext)

  
    if (inputtext.length < 20) {
        submitreject.disabled = true;
        console.log("<20")
    } else {
        submitreject.disabled = false;
        console.log(">20")

    }
  
  }




function approve(id,idapproval) {
    console.log(id);
    var myheaders = new Headers()

    myheaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "Requirements_id": id,
        "status_id": 1,
        "statusforprocess": 3,
        "approvals_id":idapproval,
    })
    console.log(raw)
    var requestOptions = {
        method: 'PATCH',
        headers: myheaders,
        body: raw,
        redirect: 'follow',
    };
    console.log(raw)

    fetch("http://localhost/projectbacklog/backend/approvals/approval_db.php/approve", requestOptions)
        .then(response => response.text())
        .then(result => {
            var jsonObj = JSON.parse(result);
            if (jsonObj.status == 'OK') {
                
                window.location.reload();
            } else {
                alert('not ok');
            }

        })
        .catch(error => console.log('error', error));
}


function reject(id) {
    var myheaders = new Headers()
    myheaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "Requirements_id": id,
        "status_id": 3,
    })
    console.log(raw)
    var requestOptions = {
        method: 'PATCH',
        headers: myheaders,
        body: raw,
        redirect: 'follow',
    };

    fetch("http://localhost/projectbacklog/backend/approvals/approval_db.php/reject", requestOptions)
        .then(response => response.text())
        .then(result => {
            var jsonObj = JSON.parse(result);
            if (jsonObj.status == 'OK') {
                window.location.reload();
            } else {
                alert('not ok');
            }

        })
        .catch(error => console.log('error', error));
}