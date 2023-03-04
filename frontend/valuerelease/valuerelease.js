var getreqapproveallTovaluerelease = function () {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  var reqallapproval_tabel = document.getElementById('valuereleasetable');
  fetch("http://localhost/projectbacklog/backend/excute/valuerelease_db.php", requestOptions)
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

        if(req.mandays==null ){
          var mandays="";
        }else{
          var mandays=req.mandays
        }
        if(req.wage==null ){
          var wage="";
        }else{
          var wage=req.wage
        }

        if(req.benefitpeople==null ){
          var benefitpeople="";
        }else{
          var benefitpeople=req.benefitpeople
        }

        if(req.benefitmoney==null ){
          var benefitmoney="";
        }else{
          var benefitmoney=req.benefitmoney
        }

        if(req.benefitpeoplemandays==null ){
          var benefitpeoplemandays="";
        }else{
          var benefitpeoplemandays=req.benefitpeoplemandays
        }

        if(req.valuerelease==null ){
          var valuerelease="";
        }else{
          var valuerelease=req.valuerelease
        }

        if(req.estimate==null ){
          var estimate="";
        }else{
          var estimate=req.estimate
        }


        
        if(req.estimates_value_number==null ){
          var estimates_value_number="";
        }else{
          var estimates_value_number=req.estimates_value_number
        }
        if(req.valuereleases_value_number==null ){
          var valuereleases_value_number="";
        }else{
          var valuereleases_value_number=req.valuereleases_value_number
        }
        if(req.benefitpeoples_value_number==null ){
          var benefitpeoples_value_number="";
        }else{
          var benefitpeoples_value_number=req.benefitpeoples_value_number
        }       
        if(req.benefitpeoplemandayss_value_number==null ){
          var benefitpeoplemandayss_value_number="";
        }else{
          var benefitpeoplemandayss_value_number=req.benefitpeoplemandayss_value_number
        }
        if(req.benefitmoneys_value_number==null ){
          var benefitmoneys_value_number="";
        }else{
          var benefitmoneys_value_number=req.benefitmoneys_value_number
        }

        if(req.filebefore==null ){
          var filebefore="";
        }else{
          var filebefore=req.filebefore
        }

        if(req.fileafter==null ){
          var fileafter="";
        }else{
          var fileafter=req.fileafter
        }

        


        $(document).ready(function () {
          $("#startdatevaluerelease" + req.idexcute).datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            todayHighlight: true,
          });
          $("#enddatevaluerelease" + req.idexcute).datepicker({
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

        if(req.startdatevaluerelease==null){
          let todaystrat = new Date();
          let daystrat= todaystrat.getDate();
          let monthstrat = todaystrat.getMonth() + 1;
          let yearstart = todaystrat.getFullYear();
          var formattedstartDate_v2 = `${daystrat}/${monthstrat}/${yearstart}`
        }else{
          var datestartStringv2 = String(req.startdatevaluerelease) 
          var datestartPartsv2 = datestartStringv2.split("-");
          var datestartObjv2 = new Date(datestartPartsv2[0], datestartPartsv2[1] - 1, datestartPartsv2[2]);
          var formattedstartDate_v2 = datestartObjv2.getDate() + "/" + (datestartObjv2.getMonth() + 1) + "/" + datestartObjv2.getFullYear();
  
        }
     

        if(req.enddatevaluerelease==null){
          let todayend = new Date();
          let dayend = todayend.getDate();
          let monthend = todayend.getMonth() + 1;
          let yearend = todayend.getFullYear();
          var formatteddateend_v2 = `${dayend}/${monthend}/${yearend}`
        }else{
          var dateendStringv2 = String(req.enddatevaluerelease)
          var dateendPartsv2 = dateendStringv2.split("-");
          var dateendObjv2 = new Date(dateendPartsv2[0], dateendPartsv2[1] - 1, dateendPartsv2[2]);
          var formatteddateend_v2 = dateendObjv2.getDate() + "/" + (dateendObjv2.getMonth() + 1) + "/" + dateendObjv2.getFullYear();
        }
      


        var row = `
                    <tr>
                          <td scope="row" id="req">`+ req.idreq + `</td>
                          <td>`+ formattedstartDate + `</td>
                          <td>`+ formattedendDate + `</td>
                          <td>`+ processname + `</td>
                          <td>`+ doingby_id + `</td>
                          <td id="statuscolor" style="color: ` + (req.status == 'Approve' ? 'green' : (req.status == 'Reject' ? 'red' : 'orange')) + `;">` + req.status + `</td>
                          <td>              
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#valuerelease`+ req.idexcute + `">
                                Value release
                            </button>
                          </td>
                    </tr>
                    <div class="modal fade" id="valuerelease`+ req.idexcute + `" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                      <div class="modal-content"  style="background:white;">
                        <div class="modal-header">                     
                      <span
                        style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
                        VALUE RELEASE
                      </span><br>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="window.location.reload()"></button>
                        </div>
                        <div class="modal-body">
                        <div class="row mt-2">
                          <div class="col-4">
                          <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">No.</span>
                            <input value="`+req.idreq+`" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  disabled   > 
                          </div>
                          </div>
                          <div class="col-4">
                          <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">Process name</span>
                            <input  value="`+processname+`"type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  disabled > 
                          </div>
                          </div>
                          <div class="col-4">
                          <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">Request name</span>
                            <input value="`+req.firstname+``+" "+``+req.lastname+`" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  disabled   > 
                          </div>
                          </div>
                        </div>
                        

                      <div class="row mt-2" >
                        <div class="col-4" >
                          <span>Mandays</span><br>
                          <input value="`+mandays+`" id="mandays`+ req.idexcute + `" type="text" class="mt-3" style="width:100%;height:40px" `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>
                        </div>
                        <div class="col-4" >
                          <span>วันที่เริ่มต้นปฏิบัติงาน</span><br>
                          <div class="input-group date mt-3" style="width:100%">
                              <input value="`+formattedstartDate_v2+`" type="text" id="startdatevaluerelease` + req.idexcute + `" class="form-control" placeholder="dd/mm/yyyy"  `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>
                          </div>
                        </div>
                        <div class="col-4" >
                          <span>วันที่สิ้นสุด</span><br>
                          <div class="input-group date mt-3" style="width:100%">
                          <input  value="`+formatteddateend_v2+`" type="text" id="enddatevaluerelease` + req.idexcute + `" class="form-control" placeholder="dd/mm/yyyy"  `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>
                      </div>
                        </div>
                       

                      </div>
                      <div class="row mt-2" >
                            <div class="col-4" >
                            <span>ค่าแรง</span><br>
                            <input value="`+wage+`" id="wage`+ req.idexcute + `" type="text" class="mt-3" style="width:100%;height:40px"  `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>
                            </div>
                            <div class="col-4" >
                            <span>Estimate ภายนอก</span><br>
                            <div class="mt-3">
                            <input value="`+estimates_value_number+`" type="number" id="estimatenumber`+ req.idexcute + `"  `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>
                            </div>
                            
                            <textarea  id="estimate`+ req.idexcute + `" type="text" class="mt-3" style="height:80px;width:100%"  `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>`+estimate+`</textarea>
                            </div>
                            <div class="col-4" >
                            <span>Value Release</span><br>
                            <div class="mt-3">
                            <input value="`+valuereleases_value_number+`" type="number" id="valuerelease_excutenumber`+ req.idexcute + `"  `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>
                            </div>
                            <textarea  id="valuerelease_excute`+ req.idexcute + `" type="text" class="mt-3" style="height:80px;width:100%"  `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>`+valuerelease+`</textarea>
                            </div>
                      </div>
                      <div class="div mt-3" style="text-align: center;">
                        <span style="font-size: large;font-weight: bold;">
                          Benefit
                        </span>
                      </div>
                      <div class="row mt-2" >
                        <div class="col-4" >
                          <span>Benefit people</span><br>
                          <div class="mt-3">
                          <input value="`+benefitpeoples_value_number+`" type="number" id="benefitpeoplenumber`+ req.idexcute + `"  `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>
                          </div>
                          <textarea id="benefitpeople`+ req.idexcute + `" type="text" class="mt-3" style="height:80px;width:100%"  `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>`+benefitpeople+`</textarea>
                        </div>
                        <div class="col-4" >
                          <span>Benefit money</span><br>
                          <div class="mt-3">
                          <input value="`+benefitmoneys_value_number+`" type="number" id="benefitmoneynumber`+ req.idexcute + `"  `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>
                          </div>
                          <textarea id="benefitmoney`+ req.idexcute + `" type="text" class="mt-3" style="height:80px;width:100%"  `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>`+benefitmoney+`</textarea>
                        </div>
                        <div class="col-4" >
                          <span> Banefit mandays</span><br>
                          <div class="mt-3">
                          <input value="`+benefitpeoplemandayss_value_number+`" type="number" id="benefitpeoplemandaysnumber`+ req.idexcute + `"  `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>
                          </div>
                          <textarea  id="benefitpeoplemandays`+ req.idexcute + `" type="text" class="mt-3" style="height:80px;width:100%"  `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>`+benefitpeoplemandays+`</textarea>
                        </div>
                      </div>
                      <div class="row mt-3" >
                        <div class="col-4" >
                          <span>Before</span><br>
                          <div class="input-group" >
                            <span class="input-group-text mt-3" id="inputGroup-sizing-default">ATTECTH
                              LINK</span>
                            <input value="`+filebefore+`" id="filebefore`+ req.idexcute + `" type="text" class="form-control mt-3"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-default"  `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>
                          </div>
                        </div>
                        <div class="col-4 " >
                          <span>After</span><br>
                          <div class="input-group" >
                            <span class="input-group-text mt-3" id="inputGroup-sizing-default">ATTECTH
                              LINK</span>
                            <input value="`+fileafter+`" id="fileafter`+ req.idexcute + `" type="text" class="form-control mt-3"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-default"  `+ ((req.statusvaluerelease == 1) ? 'disabled' : 'none') +`>
                          </div>
                        </div>
                      
                      </div>
                      <div class="d-flex justify-content-sm-end mt-5" >
                      <button id="savevaluerelease`+ req.idexcute + `" style="display:` + ((req.statusvaluerelease == 1) ? 'none' : 'inline') + `;" class="buttonsave" onclick="savevaluerelease(` + req.idexcute + `)" data-bs-toggle="modal" data-bs-target="#successalert`+req.idexcute+`">SAVE</button>
                      <button  id="updatevaluerelease`+ req.idexcute + `" style="display:` + ((req.statusvaluerelease == 1) ? 'inline' : 'none') + `;" class="buttonsave"  onclick="updatevaluerelease(` + req.idexcute + `)" data-bs-toggle="modal" data-bs-target="#successalert`+req.idexcute+`" disabled>SAVE</button>
                      <button id="editvaluerelease`+ req.idexcute + `" style="display:` + ((req.statusvaluerelease == 1) ? 'inline' : 'none') + `;" class="buttonedit"  onclick="toggleeditvaluerelease(` + req.idexcute + `)">Edit</button>
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal fade" id="successalert`+req.idexcute+`" tabindex="-1"  data-bs-backdrop="static" role="dialog" aria-hidden="true" style="  background: hsla(0, 0%, 100%, 0.55);backdrop-filter: blur(5px);">
                <div class="modal-dialog modal-dialog-centered" role="document" id="successalert`+req.idexcute+`" tabindex="-1" role="dialog" aria-hidden="true">
                  <div class="modal-content" style="border-radius:5%;background:white">
                    
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


        reqallapproval_tabel.insertAdjacentHTML('beforeend', row);

      }

    }

    )
    .catch(error => console.log('error', error));
}





var savevaluerelease = function (idexcute) {

  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");


  var startdateString = document.getElementById("startdatevaluerelease" + idexcute).value
  var startdateparts = startdateString.split('/');
  var startdateObject = new Date(startdateparts[2], startdateparts[1] - 1, startdateparts[0], 0, 0, 0, 0);
  var startdatetimezoneOffset = startdateObject.getTimezoneOffset() / 60;
  startdateObject.setUTCHours(17 - startdatetimezoneOffset, 0, 0, 0); // set time to 17:00:00.000 in TST
  var startdateformattedDate = startdateObject.toISOString().substr(0, 10);


  var enddateString = document.getElementById("enddatevaluerelease" + idexcute).value
  var enddateparts = enddateString.split('/');
  var enddateObject = new Date(enddateparts[2], enddateparts[1] - 1, enddateparts[0], 0, 0, 0, 0);
  var enddatetimezoneOffset = enddateObject.getTimezoneOffset() / 60;
  enddateObject.setUTCHours(17 - enddatetimezoneOffset, 0, 0, 0); // set time to 17:00:00.000 in TST
  var enddateformattedDate = enddateObject.toISOString().substr(0, 10);
  console.log(idexcute)

  var raw = JSON.stringify({
    "mandays": document.getElementById("mandays" + idexcute).value,
    "startdate": startdateformattedDate,
    "enddate": enddateformattedDate,
    "wage": document.getElementById("wage" + idexcute).value,
    "estimate": document.getElementById("estimate" + idexcute).value,
    "valuerelease": document.getElementById("valuerelease_excute" + idexcute).value,
    "benefitpeople": document.getElementById("benefitpeople" + idexcute).value,
    "benefitmoney": document.getElementById("benefitmoney" + idexcute).value,
    "benefitpeoplemandays": document.getElementById("benefitpeoplemandays" + idexcute).value,
    "estimatenumber": document.getElementById("estimatenumber" + idexcute).value,
    "valuereleasenumber": document.getElementById("valuerelease_excutenumber" + idexcute).value,
    "benefitpeoplemandaysnumber": document.getElementById("benefitpeoplemandaysnumber" + idexcute).value,
    "benefitpeoplenumber": document.getElementById("benefitpeoplenumber" + idexcute).value,
    "benefitmoneynumber": document.getElementById("benefitmoneynumber" + idexcute).value,
    "filebefore": document.getElementById("filebefore" + idexcute).value,
    "fileafter": document.getElementById("fileafter" + idexcute).value,
    "excute_id": idexcute,
    "statusvaluereleases": 1,
  })
  console.log(raw)
  var requestOptions = {
    method: 'POST',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };

  fetch("http://localhost/projectbacklog/backend/excute/valuerelease_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);
      if (jsonObj.status == 'OK') {
        window.location.reload()

      } else {
        alert('not ok');
      }

    })
    .catch(error => console.log('error', error));
}


var updatevaluerelease = function (idexcute) {

  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");


  var startdateString = document.getElementById("startdatevaluerelease" + idexcute).value
  var startdateparts = startdateString.split('/');
  var startdateObject = new Date(startdateparts[2], startdateparts[1] - 1, startdateparts[0], 0, 0, 0, 0);
  var startdatetimezoneOffset = startdateObject.getTimezoneOffset() / 60;
  startdateObject.setUTCHours(17 - startdatetimezoneOffset, 0, 0, 0); // set time to 17:00:00.000 in TST
  var startdateformattedDate = startdateObject.toISOString().substr(0, 10);


  var enddateString = document.getElementById("enddatevaluerelease" + idexcute).value
  var enddateparts = enddateString.split('/');
  var enddateObject = new Date(enddateparts[2], enddateparts[1] - 1, enddateparts[0], 0, 0, 0, 0);
  var enddatetimezoneOffset = enddateObject.getTimezoneOffset() / 60;
  enddateObject.setUTCHours(17 - enddatetimezoneOffset, 0, 0, 0); // set time to 17:00:00.000 in TST
  var enddateformattedDate = enddateObject.toISOString().substr(0, 10);





  console.log(idexcute)
  var raw = JSON.stringify({
    "mandays": document.getElementById("mandays" + idexcute).value,
    "startdate": startdateformattedDate,
    "enddate": enddateformattedDate,
    "wage": document.getElementById("wage" + idexcute).value,
    "estimate": document.getElementById("estimate" + idexcute).value,
    "valuerelease": document.getElementById("valuerelease_excute" + idexcute).value,
    "benefitpeople": document.getElementById("benefitpeople" + idexcute).value,
    "benefitmoney": document.getElementById("benefitmoney" + idexcute).value,
    "benefitpeoplemandays": document.getElementById("benefitpeoplemandays" + idexcute).value,
    "estimatenumber": document.getElementById("estimatenumber" + idexcute).value,
    "valuereleasenumber": document.getElementById("valuerelease_excutenumber" + idexcute).value,
    "benefitpeoplemandaysnumber": document.getElementById("benefitpeoplemandaysnumber" + idexcute).value,
    "benefitpeoplenumber": document.getElementById("benefitpeoplenumber" + idexcute).value,
    "benefitmoneynumber": document.getElementById("benefitmoneynumber" + idexcute).value,
    "filebefore": document.getElementById("filebefore" + idexcute).value,
    "fileafter": document.getElementById("fileafter" + idexcute).value,
    "excute_id": idexcute,
  })
  console.log(raw)
  var requestOptions = {
    method: 'PATCH',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };

  fetch("http://localhost/projectbacklog/backend/excute/valuerelease_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);
      if (jsonObj.status == 'OK') {
        window.location.reload()

      } else {
        alert('not ok');
      }

    })
    .catch(error => console.log('error', error));
}

function toggleeditvaluerelease(idexcute) {
  var mandays = document.getElementById("mandays" + idexcute)
  var startdate = document.getElementById("startdatevaluerelease" + idexcute)
  var enddate = document.getElementById("enddatevaluerelease" + idexcute)


  var wage = document.getElementById("wage" + idexcute)
  var estimate = document.getElementById("estimate" + idexcute)
  var valuerelease = document.getElementById("valuerelease_excute" + idexcute)
  var benefitpeople = document.getElementById("benefitpeople" + idexcute)
  var benefitmoney = document.getElementById("benefitmoney" + idexcute)
  var benefitpeoplemandays = document.getElementById("benefitpeoplemandays" + idexcute)
  var filebefore = document.getElementById("filebefore" + idexcute)
  var fileafter = document.getElementById("fileafter" + idexcute)
  var btnsavevaluerelease = document.getElementById("updatevaluerelease" + idexcute)
  
  var  valuereleasenumber = document.getElementById("valuerelease_excutenumber" + idexcute)
  var  benefitpeoplemandaysnumber = document.getElementById("benefitpeoplemandaysnumber" + idexcute)
  var  benefitpeoplenumber = document.getElementById("benefitpeoplenumber" + idexcute)
  var  benefitmoneynumber = document.getElementById("benefitmoneynumber" + idexcute)
  var  estimatenumber = document.getElementById("estimatenumber" + idexcute)

  valuereleasenumber.disabled = !valuereleasenumber.disabled;
  benefitpeoplemandaysnumber.disabled = !benefitpeoplemandaysnumber.disabled;
  benefitpeoplenumber.disabled = !benefitpeoplenumber.disabled;
  benefitmoneynumber.disabled = !benefitmoneynumber.disabled;
  estimatenumber.disabled = !estimatenumber.disabled;




  mandays.disabled = !mandays.disabled;
  startdate.disabled = !startdate.disabled;
  enddate.disabled = !enddate.disabled;
  wage.disabled = !wage.disabled;
  valuerelease.disabled = !valuerelease.disabled;
  benefitpeople.disabled = !benefitpeople.disabled;
  estimate.disabled = !estimate.disabled;
  benefitmoney.disabled = !benefitmoney.disabled;
  benefitpeoplemandays.disabled = !benefitpeoplemandays.disabled;
  filebefore.disabled = !filebefore.disabled;
  fileafter.disabled = !fileafter.disabled;
  btnsavevaluerelease.disabled = !btnsavevaluerelease.disabled;
}



cPrev = -1;
function sortBy(c) {
  rows = document.getElementById("tablevalurelease").rows.length; // num of rows
  columns = document.getElementById("tablevalurelease").rows[0].cells.length; // num of columns
 
  console.log(rows);
  arrTable = [...Array(rows)].map(e => Array(columns)); // create an empty 2d array


  for (ro=0; ro<rows; ro++) { // cycle through rows
      for (co=0; co<columns; co++) { // cycle through columns
          arrTable[ro][co] = document.getElementById("tablevalurelease").rows[ro].cells[co].innerHTML;
      }
  }
  th = arrTable.shift(); // remove the header row from the array, and save it
  
  
  if (c !== cPrev) { // different column is clicked, so sort by the new column
      arrTable.sort(
          function (a, b) {
              if (a[c] === b[c]) {
                  return 0;
              } else {
                  return (a[c] < b[c]) ? -1 : 1;
              }
          }
      );
  } else { // if the same column is clicked then reverse the array
      arrTable.reverse();
  }
  cPrev = c;
  arrTable.unshift(th);
  for (ro=0; ro<rows; ro++) {
      for (co=0; co<columns; co++) {
          document.getElementById("tablevalurelease").rows[ro].cells[co].innerHTML = arrTable[ro][co];
      }
  }
}



function searchTablevaluerelease() {

  const tableBody = document.querySelector("#valuereleasetable");
  console.log(tableBody);
  const rows = Array.from(tableBody.querySelectorAll('tr'));
  console.log(rows);

  const searchTerm = document.querySelector('#searchinputvaluerelease').value.toLowerCase();
  console.log(searchTerm);

  rows.forEach(row => {
    const cells = Array.from(row.querySelectorAll('td'));
    console.log(cells);

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