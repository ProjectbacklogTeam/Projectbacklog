

function loadpjmanagement(){
    getreqall();
    getpjmanagment();
}


var getpjmanagment = function(){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        var reqall_tabel = document.getElementById('table_plan');
        fetch("http://localhost/projectbacklog/backend/projectmanagement/projectmanagement_db.php", requestOptions)
          .then(response => response.text())
          .then(result => {
            console.log(result)
            reqall_tabel.innerHTML = '';
            var jsonObj = JSON.parse(result);
            console.log(jsonObj)
            for (let req of jsonObj) {
              var row = `
                      <tr style="text-align:center">
                          <th scope="row">`+ req.id + `</th>
                          <td>`+ req.processname + `</td>
                          <td></td>
                          <td>`+ req.startdate + `</td>
                          <td>`+ req.enddate + `</td>
                          <td>`+"waiting for approve"+`</td>
                          <td>
                          <button type="button" name="btn_update" onclick="requriment_one(`+ req.id + `)" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#updatereqone` + req.id + `">
                              edit
                          </button>
                          </td>
                          <td>
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#datadetail">
                            send
                          </button>
                          </td>
                    </tr>
                    <div class="modal fade" id="datadetail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                  </div>
                                </div>
                                <div class="col-12 mb-1 mt-2">
                                  <div class="input-group mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
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

                      `
              reqall_tabel.insertAdjacentHTML('beforeend', row);
              
            }
      
          }
      
          )
          .catch(error => console.log('error', error));
      
}


var savepjmanagement = function(id){

    tablepjmanager =  document.getElementById("rowpjmanage"+id)
    console.log(tablepjmanager)
    var myheaders = new Headers()
    myheaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "datestart": document.getElementById("datestart").value,
      "dateend": document.getElementById("dateend").value,
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
          window.location.reload()
      
        } else {
          alert('not ok');
        }

      })
      .catch(error => console.log('error', error));
  }

  var req_statusupdate = function(id){
    var myheaders = new Headers()
    myheaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "status": 1,
      "id":id,
    })
    console.log(raw)
    var requestOptions = {
      method: 'PATCH',
      headers: myheaders,
      body: raw,
      redirect: 'follow',
    };
    fetch("http://localhost/projectbacklog/backend/projectmanagement/projectmanagement_db.php", requestOptions)
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
        localStorage.setItem("result",result)
        console.log(result)
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
          var row = `
                <tr id="rowpjmanage`+req.id+`" style="text-align:center" >
                      <th scope="row">`+ req.id + `</th>
                      <td>`+ processname + `</td>
                      <td>
                      <button type="button" name="btn_update" onclick="requriment_one(`+ req.id + `)" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#updatereqone` + req.id + `">
                          Detail
                      </button>
                      </td>
                      <td>
                      <input type="date" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="datestart">

                      </td>
                      <td>
                      <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="dateend">
                      </td>
                      <td>
                      <button type="button" name="btn_save" class="buttonsave" onclick="savepjmanagement(`+req.id+`)">
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
                              <input class="mt-3" type="text"  id="requestname`+ req.id+`" disabled>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4 mt-3">
                              <span>Request Division</span><br>
                              <input class="mt-3" type="text" id="requestdivition`+ req.id+`" disabled>
                            </div>
                            <div class="col-4 mt-3">
                              <span>Request Department</span><br>
                              <input class="mt-3" type="text" id="requestdepartment`+ req.id+`" disabled>
                            </div>
                            <div class="col-4  mt-3">
                              <span>Request Section</span><br>
                              <input class="mt-3" type="text" id="requestsection`+ req.id+`" disabled>
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
                                <input type="date" value="`+startdate+`"  id="startdate`+ req.id + `" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" disabled>
                                
                                </div>
                            </div>
                            <div class="col-6 mb-1">
                              <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">วันที่ต้องการใช้ระบบ</span>
                                <input type="date" value="`+enddate+`" id="enddate`+ req.id + `" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" disabled>
                              </div>
                            </div>
                            <div class="col-6 mb-1">
                              <div class="input-group">
                                <label class="input-group-text" for="inputGroupSelect01">ASIS</label>
                                <select class="form-select" id="asis`+req.id+`" disabled>
                                </select>
                              </div>
                            </div>
                            <div class="col-6 mb-1">
                              <div class="input-group">
                                <label class="input-group-text" for="inputGroupSelect01">TOBE</label>
                                <select class="form-select" id="tobe`+req.id+`" disabled>
                               
                                </select>
                              </div>
                            </div>
                            <div class="col-6 mb-1">
                              <div class="input-group">
                                <label class="input-group-text" for="inputGroupSelect01">Doing By</label>
                                <select class="form-select" id="doingby`+req.id+`" disabled>
  
                                </select>
                              </div>
                            </div>
                            <div class="col-6 mb-1">
                              <div class="input-group">
                                <label class="input-group-text" for="inputGroupSelect01">BUDJET</label>
                                <select class="form-select" id="budget`+req.id+`" disabled>
                               
                                </select>
                              </div>
                            </div>
                            <div class="col-6 mb-1 mt-2">
                              <span>Pain Point</span><br>
                              <textarea id="painpoint`+req.id+`" class="mt-3" type="text" style="height:90px;width:100%" disabled></textarea>
                            </div>
                            <div class="col-6 mb-1 mt-2">
                              <span>Results & Benefit</span><br>
                              <textarea id="benefit`+req.id+`" class="mt-3" type="text" style="height:90px;width:100%" disabled></textarea>
                            </div>
                            <div class="col-6 mb-1 mt-2">
                              <span>Description</span><br>
                              <textarea id="description`+req.id+`" class="mt-3" type="text" style="height:90px;width:100%" disabled></textarea>
                            </div>
                            <div class="col-6 mb-1 mt-2">
                              <span>Scope of Work </span><br>
                              <input id="scopeofwork`+req.id+`" class="mt-3" type="file" disabled>
                            </div>
                            <div class="col-6 mb-1 mt-2">
                            <span>Bussiness Flow </span><br>
                              <input id="bussinessflow`+req.id+`" class="mt-3" type="file" disabled>
                            </div>
                            <div class="col-6 mb-1 mt-2">
                              <span>Work Flow (Flowเดิมของระบบ) </span><br>
                              <input id="workflow`+req.id+`" class="mt-3" type="file" disabled>
                            </div>
                            <div class="col-6 mb-1 mt-2">
                              <span>Extract File (แนบไฟล์เดิมของระบบ)</span><br>
                              <input id="extractfile`+req.id+`" class="mt-3" type="file" disabled>
                            </div>
                            <div class="col-6 mb-1 mt-2">
                              <span>Approvals</span><br>
                              <input id="approvals`+req.id+`" class="mt-3" type="text" disabled>
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


// function addtabletopjmanager() {
//   var result = JSON.parse(localStorage.getItem("result"));
//   console.log(result)
//   for (var i = 0; i < result.length; i++) {
//     var tableatpjmanager = document.getElementById("tabel_pjmanager")   
//     if (tableatpjmanager == null) {
//       console.error("One or both tables could not be found in the HTML document.");
//       return;
//     }else{
//       var row = tableatpjmanager.insertRow();
//       var cel1 = row.insertCell(0);
//       var cel2 = row.insertCell(1);
//       var cel3 = row.insertCell(2);
//       var cel4 = row.insertCell(3);
//       var cel5 = row.insertCell(4);
//       var cel6 = row.insertCell(5);
//       cel1.innerHTML = result[i].id;
//       cel2.innerHTML = result[i].processname;
//       cel3.innerHTML = `
//             <button type="button" name="btn_update" onclick="requriment_one(`+ result[i].id + `)" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#updatereqone` +result[i].id+ `">
//             Detail
//           </button>
//       `
//       cel4.innerHTML = `<input type="date" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="datestart"> `
//       cel5.innerHTML = `<input type="date" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="dateend"> `
//       cel6.innerHTML = `<button type="button" name="btn_save" class="buttonsave" onclick="savepjmanagement(`+result[i].id+`)">SAVE</button>`
//     }
  
   
//     console.log()

//   }




     

//     };
//     addtabletopjmanager();


