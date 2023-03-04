document.addEventListener("keydown", function(event) {
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
  })
  // .then((result) => {
  //   if (result.isConfirmed) {
  //     window.location.reload();
  //   }
  // });
}



function showLoadingSpinner() {
  Swal.fire({
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    customClass: {
      popup: 'loading-spinner'
    },
    onOpen: function() {
      swal.showLoading();
    }
  });
}

function hideLoadingSpinner() {
  // Hide the SweetAlert dialog box
  swal.close();
}


function loadexcute() {
  getreqapproveallToExcute()
}

var toggleValuesystemflowchart = 0

function checkboxsystemflowchart(idexcute) {
  var btnsystemflow = document.getElementById("systemflowchart" + idexcute)
  toggleValuesystemflowchart = toggleValuesystemflowchart === 0 ? 1 : 0;
  if (toggleValuesystemflowchart == 1) {
    btnsystemflow.style.backgroundColor = 'green'
    localStorage.setItem("systemflow_status", toggleValuesystemflowchart)
  } else {
    btnsystemflow.style.backgroundColor = 'red'
    localStorage.setItem("systemflow_status", toggleValuesystemflowchart)
  }
  console.log(toggleValuesystemflowchart)
}

var toggleValdataflowdiagram = 0
function checkboxdataflowdiagram(idexcute) {
  var btndataflowdiagram = document.getElementById("dataflowdiagram" + idexcute)
  toggleValdataflowdiagram = toggleValdataflowdiagram === 0 ? 1 : 0;
  if (toggleValdataflowdiagram == 1) {
    btndataflowdiagram.style.backgroundColor = 'green'
    localStorage.setItem("dataflowdiagram_status", toggleValdataflowdiagram)
  } else {
    btndataflowdiagram.style.backgroundColor = 'red'
    localStorage.setItem("dataflowdiagram_status", toggleValdataflowdiagram)

  }
  console.log(toggleValdataflowdiagram)
}

var toggleValueerdiagram = 0
function checkboxerdiagram(idexcute) {
  var btnerdiagram = document.getElementById("erdiagram" + idexcute)
  toggleValueerdiagram = toggleValueerdiagram === 0 ? 1 : 0;
  if (toggleValueerdiagram == 1) {
    btnerdiagram.style.backgroundColor = 'green'
    localStorage.setItem("erdiagram_status", toggleValueerdiagram)
  } else {
    btnerdiagram.style.backgroundColor = 'red'
    localStorage.setItem("erdiagram_status", toggleValueerdiagram)
  }
  console.log(toggleValueerdiagram)
}

var toggleValuedatadictionary = 0
function checkboxdatadictionary(idexcute) {
  var btndatadictionary = document.getElementById("datadictionary" + idexcute)
  toggleValuedatadictionary = toggleValuedatadictionary === 0 ? 1 : 0;
  if (toggleValuedatadictionary == 1) {
    btndatadictionary.style.backgroundColor = 'green'
    localStorage.setItem("datadictionary_status", toggleValuedatadictionary)

  } else {
    btndatadictionary.style.backgroundColor = 'red'
    localStorage.setItem("datadictionary_status", toggleValuedatadictionary)

  }
  console.log(toggleValuedatadictionary)
}


var toggleValueusecasediagram = 0
function checkboxusecasediagram(idexcute) {
  var btnusecasediagram = document.getElementById("usecasediagram" + idexcute)
  toggleValueusecasediagram = toggleValueusecasediagram === 0 ? 1 : 0;
  if (toggleValueusecasediagram == 1) {
    btnusecasediagram.style.backgroundColor = 'green'
    localStorage.setItem("usecasediagram_status", toggleValueusecasediagram)

  } else {
    btnusecasediagram.style.backgroundColor = 'red'
    localStorage.setItem("usecasediagram_status", toggleValueusecasediagram)

  }
  console.log(toggleValueusecasediagram)
}


function toggleeditprototype(excuteid) {
  var inputtext = document.getElementById("prototypelink" + excuteid);
  var btnsave = document.getElementById("updateprototype" + excuteid)
  var file = document.getElementById("prototypefile" + excuteid)
  btnsave.disabled = !btnsave.disabled
  inputtext.disabled = !inputtext.disabled
  file.disabled = !file.disabled
}


function toggleeditpreparedata(excuteid) {
  console.log(excuteid)
  var inputtextlinkprepare = document.getElementById("preparedatalink" + excuteid);
  var btnsaveprepare = document.getElementById("updatepreparedata" + excuteid);
  var systemflowchart = document.getElementById("systemflowchart" + excuteid);
  var dataflowdiagram = document.getElementById("dataflowdiagram" + excuteid);
  var erdiagram = document.getElementById("erdiagram" + excuteid);
  var datadictionary = document.getElementById("datadictionary" + excuteid);
  var usecasediagram = document.getElementById("usecasediagram" + excuteid);
  var sitemap = document.getElementById("sitemap" + excuteid);

  inputtextlinkprepare.disabled = !inputtextlinkprepare.disabled;
  sitemap.disabled = !sitemap.disabled;
  btnsaveprepare.disabled = !btnsaveprepare.disabled;
  systemflowchart.disabled = !systemflowchart.disabled;
  dataflowdiagram.disabled = !dataflowdiagram.disabled;
  erdiagram.disabled = !erdiagram.disabled;
  datadictionary.disabled = !datadictionary.disabled;
  usecasediagram.disabled = !usecasediagram.disabled;

  systemflowchart.style.backgroundColor = 'red';
  dataflowdiagram.style.backgroundColor = 'red';
  erdiagram.style.backgroundColor = 'red';
  datadictionary.style.backgroundColor = 'red';
  usecasediagram.style.backgroundColor = 'red';

  localStorage.setItem("systemflow_status", 0)
  localStorage.setItem("dataflowdiagram_status", 0)
  localStorage.setItem("erdiagram_status", 0)
  localStorage.setItem("datadictionary_status", 0)
  localStorage.setItem("usecasediagram_status", 0)





}

function toggleeditplancoding(idexcute) {
  var startcoding = document.getElementById("startcoding" + idexcute)
  var endcoding = document.getElementById("endcoding" + idexcute)
  var formatcoding = document.getElementById("formatcoding" + idexcute)
  var nameuniversitycoding = document.getElementById("nameuniversitycoding" + idexcute)
  var databasecoding = document.getElementById("databasecoding" + idexcute)
  var languagescoding = document.getElementById("languagescoding" + idexcute)
  var btnsaveprepare = document.getElementById("updateplancodeing" + idexcute);
  var fileplancoding = document.getElementById("fileplancoding" + idexcute);


  fileplancoding.disabled = !fileplancoding.disabled;

  startcoding.disabled = !startcoding.disabled;
  endcoding.disabled = !endcoding.disabled;
  formatcoding.disabled = !formatcoding.disabled;
  nameuniversitycoding.disabled = !nameuniversitycoding.disabled;
  databasecoding.disabled = !databasecoding.disabled;
  languagescoding.disabled = !languagescoding.disabled;
  btnsaveprepare.disabled = !btnsaveprepare.disabled;



}


function toggleeditcoding(idexcute) {
  var codinglink = document.getElementById("codinglink" + idexcute)
  var btnupdatesavecoding = document.getElementById("updatecoding" + idexcute);
  codinglink.disabled = !codinglink.disabled;
  btnupdatesavecoding.disabled = !btnupdatesavecoding.disabled;
}

function toggleedittesting(idexcute) {
  var testinglink = document.getElementById("testinglink" + idexcute)
  var btnupdatetesting = document.getElementById("updatetesting" + idexcute);
  testinglink.disabled = !testinglink.disabled;
  btnupdatetesting.disabled = !btnupdatetesting.disabled;
}


function toggleeditdeploy(idexcute) {
  var btndeploytoprepare = document.getElementById("btndeploytoprepare" + idexcute);
  var updatedeploytocoding = document.getElementById("updatedeploytocoding" + idexcute);

  btndeploytoprepare.disabled = !btndeploytoprepare.disabled;
  updatedeploytocoding.disabled = !updatedeploytocoding.disabled;

}


var togglecount = 0
var lastOpenTarget = null;
function toggleCollapse(collapseId, excuteid) {
  togglecount = togglecount === 0 ? 1 : 0;
  console.log(togglecount)
  const target = document.getElementById(collapseId + excuteid);
  const isTargetOpen = target.classList.contains('show');


  if (isTargetOpen) {
    target.classList.remove('show');
  } else {
    // Hide the last open content if there is one
    if (lastOpenTarget) {
      lastOpenTarget.classList.remove('show');
    }

    // Show the target content
    target.classList.add('show');
    lastOpenTarget = target;
  }
  console.log(isTargetOpen)
}


var getdataexcute_one = async function (idexcute) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  var reqallapproval_tabel = document.getElementById('tablexcuteall');

  await fetch("http://localhost/projectbacklog/backend/excute/excute_one_db.php?idexcute=" + idexcute, requestOptions)
    .then(response => response.text())
    .then(result => {
      reqallapproval_tabel.innerHTML = '';
      var jsonObj = JSON.parse(result);
      const req = jsonObj[0]
      console.log(req)
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
      if (req.doingby_id == null) {
        var doingby_id = ""
      } else {
        var doingby_id = req.doingby_id
      }
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
      if (req.painpoint == null) {
        var painpoint = ""
      } else {
        var painpoint = req.painpoint
      }
      if (req.results_benefit == null) {
        var results_benefit = ""
      } else {
        var results_benefit = req.results_benefit
      }
      if (req.description == null) {
        var description = ""
      } else {
        var description = req.description
      }










      if (req.linkprototype == null) {
        var linkprototype = ""
      } else {
        var linkprototype = req.linkprototype
      }
      if (req.fileprototype == null) {
        var fileprototype = ""
      } else {
        var fileprototype = req.fileprototype
      }
      if (req.sitemap == null || req.sitemap == "") {
        var sitemap_preparedata = ""
      } else {
        var sitemap_preparedata = req.sitemap
      }



      if (req.emailconfirmprototype == null) {
        var emailconfirmprototype = ""
      } else {
        var emailconfirmprototype = req.emailconfirmprototype
      }
      if (req.topicconfirmprototype == null) {
        var topicconfirmprototype = ""
      } else {
        var topicconfirmprototype = req.topicconfirmprototype
      }
      if (req.detailconfirmprototype == null) {
        var detailconfirmprototype = ""
      } else {
        var detailconfirmprototype = req.detailconfirmprototype
      }

      if (req.linkprepare == null) {
        var linkprepare = ""
      } else {
        var linkprepare = req.linkprepare
      }

      if (req.linkcoding == null) {
        var linkcoding = ""
      } else {
        var linkcoding = req.linkcoding
      }

      if (req.linktesting == null) {
        var linktesting = ""
      } else {
        var linktesting = req.linktesting
      }

      if (req.format_coding == null) {
        var format_coding = ""
      } else {
        var format_coding = req.format_coding
      }

      if (req.name_university_coding == null) {
        var name_university_coding = ""
      } else {
        var name_university_coding = req.name_university_coding
      }

      if (req.database_coding == null) {
        var database_coding = ""
      } else {
        var database_coding = req.database_coding
      }

      if (req.languages_coding == null) {
        var languages_coding = ""
      } else {
        var languages_coding = req.languages_coding
      }


      if (req.emailimplement == null) {
        var emailimplement = ""
      } else {
        var emailimplement = req.emailimplement
      }


      if (req.topicimplement == null) {
        var topicimplement = ""
      } else {
        var topicimplement = req.topicimplement
      }


      if (req.detailimplement == null) {
        var detailimplement = ""
      } else {
        var detailimplement = req.detailimplement
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

      if (req.fileplancoding == "" || req.fileplancoding == null) {
        var fileplancoding = "";
      } else {
        var fileplancoding = req.fileplancoding;
      }


      if (req.start_coding == null) {
        var startcoding = "0000-00-00"
      } else {
        var startcoding = req.start_coding
      }
      if (req.end_coding == null) {
        var endcoding = "0000-00-00"
      } else {
        var endcoding = req.end_coding
      }

      $(document).ready(function () {
        $("#startcoding" + req.idexcute).datepicker({
          format: "dd/mm/yy",
          autoclose: true,
          todayHighlight: true,
        });
        $("#endcoding" + req.idexcute).datepicker({
          format: "dd/mm/yy",
          autoclose: true,
          todayHighlight: true,
        });
      });

      var startcodingdateparts = startcoding.split('-');
      var startcodingdateyear = parseInt(startcodingdateparts[0]);
      var startcodingdatemonth = parseInt(startcodingdateparts[1]);
      var startcodingdateday = parseInt(startcodingdateparts[2]);
      var startcodingdateObject = new Date(startcodingdateyear, startcodingdatemonth - 1, startcodingdateday);
      var options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      };
      var formattedstartcodingDate = startcodingdateObject.toLocaleDateString('en-GB', options);
      formattedstartcodingDate = formattedstartcodingDate.replace('.', '');



      var enddatecodingparts = endcoding.split('-');
      var enddatecodingyear = parseInt(enddatecodingparts[0]);
      var enddatecodingmonth = parseInt(enddatecodingparts[1]);
      var enddatecodingday = parseInt(enddatecodingparts[2]);
      var enddatecodingObject = new Date(enddatecodingyear, enddatecodingmonth - 1, enddatecodingday);
      var options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      };
      var formattedendcodingDate = enddatecodingObject.toLocaleDateString('en-GB', options);
      formattedendcodingDate = formattedendcodingDate.replace('.', '');


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
                 <div class="modal fade" id="datadetail`+ idexcute + `" tabindex="-1" aria-labelledby="datadetail` + idexcute + `"
                 aria-hidden="true">
                 <div class="modal-dialog modal-fullscreen" style="font-weight: normal;overflow-y: scroll;">
                   <div class="modal-content" style="background:white;widht:100%">
                     <div class="modal-header">
                       <h5 class="modal-title" id="exampleModalLabel">Project detail</h5>
                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="clearlocalstoragestatus()"></button>
                     </div>
                     <div class="modal-body">
                     <div class="row"  style="width: 1000px;">
                       <div class="row" style="margin-left: 50px;">
                         <div class="flexbox" style="line-height: 20px;">
                           <div class="item">
                             <div class="content">
                               <button class="buttonprocesssuccess"  disabled>
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

                               <button class="buttonprocess" data-bs-toggle="collapse" data-bs-target="#Prototype`+ req.idexcute + `"
                                 aria-expanded="false" aria-controls="confirmprototype prototype" id="btnprototype`+ req.idexcute + `" onclick="toggleCollapse('prototype',` + req.idexcute + `)" style="background:` + (((req.statusforprocess >= 4) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;">
                                 <i class="fa-solid fa-swatchbook fa-2x"></i>
                               </button>
                               <span>
                                 Prototype
                               </span>
                               <div class="collapse collapse-horizontal" id="prototype`+ req.idexcute + `">
                                 <div class="card card-body"
                                   style="margin-top: 30%;width: 1000px;height: 450px;margin-left: -250px;">
                                   <span
                                     style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
                                     Prototype  
                                   </span><br>
                                   <div class="paperprototype" style="text-align: left;">
                                     <div style="margin: 15px 0px 20px 5px;">
                                     <span
                                     style="font-size: large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  5%;">
                                     UX/UI (Prototype)
                                    </span><br>
                                     </div>
                                     <div class="row">
                                      <div class="col-10">
                                          <div class="input-group" style="margin: 0rem 5rem 0rem 5rem;width: 80%;height:20px;">
                                        <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                          FILE</span>
                                        <input value="`+ fileprototype + `" id="prototypefile` + req.idexcute + `" type="file" class="form-control" aria-label="Sizing example input"
                                          aria-describedby="inputGroup-sizing-default" `+ (((req.statusforprocess >= 4) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `>
                                        </div>
                                      </div>
                                      <div class="col-2">
                                      <a style="display:`+ (fileprototype == "" ? "none" : "inline") + `" href = "../../backend/excute/prototype_file/` + fileprototype + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-2x"></i></a>                                     </div>

                                      </div>



                                      <div class="input-group mb-3 mt-5" style="margin: 0rem 5rem 0rem 5rem;width: 80%;height:20px;">
                                        
                                      <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                          LINK</span>
                                         <input value="`+ linkprototype + `" id="prototypelink` + req.idexcute + `" type="text" class="form-control" aria-label="Sizing example input"
                                          aria-describedby="inputGroup-sizing-default"`+ (((req.statusforprocess >= 4) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `> 
                                         <div class="d-flex justify-content-center mt-5" style="width: 100%;">
                                           <button class="buttonsave" style="display:`+ (((req.statusforprocess >= 4) && (req.statusforprocess <= 10)) ? 'none' : 'inline') + `" id="saveprototype` + req.idexcute + `" onclick="uploadfileprototype(` + req.idexcute + `,` + req.id + `)" >SAVE</button>
                                           <button class="buttonsave"  style="display:`+ (((req.statusforprocess >= 4) && (req.statusforprocess <= 10)) ? 'inline' : 'none') + `" id="updateprototype` + req.idexcute + `" onclick="patchfileprototype(` + req.idexcute + `)"  disabled>SAVE</button>
                                           <button class="buttonedit" style="display:`+ (((req.statusforprocess >= 4) && (req.statusforprocess <= 10)) ? 'inline' : 'none') + `" id="editprototype` + req.idexcute + `" onclick="toggleeditprototype(` + req.idexcute + `)">Edit</button>
                                         </div>
 
                                     </div>


                                    </div>
                                     
                                    
                                
                                 </div>
                               </div>
                             </div>
                           </div>

                           <div class="item">
                             <div class="content">
                               <button class="buttonprocess" data-bs-toggle="collapse" data-bs-target="#Confirmprototype`+ req.idexcute + `"
                                 aria-expanded="false" aria-controls="confirmprototype" id="btnconfirmprototype`+ req.idexcute + `" onclick="toggleCollapse('confirmprototype',` + req.idexcute + `)" style="background:` + (((req.statusforprocess >= 5) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;">
                                 <i class="fa-solid fa-circle-check fa-2x"></i>
                               </button>
                               <span>
                                 Confirm <br>Prototype
                               </span>
                               <div class="collapse collapse-horizontal " id="confirmprototype`+ req.idexcute + `">
                               <div class="card card-body"
                                 style="margin-top: 30%;width: 700px;height: 550px;margin-left: -190px;">
                                 <span
                                   style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
                                   Confirm Prototype
                                 </span><br>
                                
                                 <div style="margin: 15px 0px 20px 5px;">
                                
                                 </div>
                                 <div class="row">
                                    <div class="col-6 mb-1 mt-4">
                                    <div class="input-group mb-3">
                                      <span class="input-group-text" id="inputGroup-sizing-default">Topic</span>
                                      <input  value="`+ topicconfirmprototype + `" id="topic_confirmprototype` + req.idexcute + `" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" ` + (((req.statusforprocess >= 5) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `>
                                    </div>
                                  </div>
                                  <div class="col-6 mb-1 mt-4">
                                    <div class="input-group mb-3">
                                      <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                                      <input value="`+ emailconfirmprototype + `"  id="email_confirmprototype` + req.idexcute + `" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" ` + (((req.statusforprocess >= 5) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `>
                                    </div>
                                  </div>
                                  <div class="col-12 mb-1 mt-2">
                                    <textarea  id="detail_confirmprototype`+ req.idexcute + `" type="text" style="width:100%;height:100px"  ` + (((req.statusforprocess >= 5) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `>` + detailconfirmprototype + `</textarea>
                                  </div>
                                 </div>                                                                                    
                                   <div class="d-flex justify-content-sm-end mt-3" style="width: 100%;">
                                   <button class="buttonedit" style="display:`+ (((req.statusforprocess >= 5) && (req.statusforprocess <= 10)) ? 'inline' : 'none') + `" id="toggleeconfirmprototype` + req.idexcute + `" onclick="togglesendemailconfirmprototype(` + req.idexcute + `)">Edit</button>                               
                                   <button id="sendemailconfirmprototype`+ req.idexcute + `" class="buttonsend" onclick="sendemailconfirmprototype(` + req.idexcute + `,` + req.id + `,` + req.prototypeid + `)"   ` + (((req.statusforprocess >= 5) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `>SEND</button>
                                   </div>
                               </div>
                             </div>
                             </div>
                           </div>

                           <div class="item">
                             <div class="content">
                               <button class="buttonprocess" data-bs-toggle="collapse" data-bs-target="#Preparedata`+ req.idexcute + `"
                                 aria-expanded="false" aria-controls="preparedata" onclick="toggleCollapse('preparedata',`+ req.idexcute + `)" style="background:` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;">
                                 <i class="fa-solid fa-diagram-project fa-2x" id="preparedata" id="btnpreparedata`+ req.idexcute + `"></i>
                               </button>
                               <span>
                                 Prepare<br>Data
                               </span>
                               <div class="collapse" id="preparedata`+ req.idexcute + `">
                                 <div class="card card-body paperpreparedata" style="margin-top: 30%;margin-left: -500px;">
                                   <span
                                     style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
                                     Prepare Data
                                   </span><br>
                                   <div class="row">
                                     <div class="col-6" style="text-align: start;">
                                       <div style="border:1px solid red;padding-left: 3rem;">
                                       <label class="containercheckbox">
                                        <button style="background-color:`+ (req.status_id == 1 ? 'green' : 'red') + `" class="btncheckbox"></button>           
                                          <span>Project propose</span>
                                        </label><br>
                                        <label class="containercheckbox">
                                          <button style="background-color:`+ (bussinessflowname.length > 0 ? 'green' : 'red') + `" class="btncheckbox"></button>           
                                          <span>Business Flow</span>
                                          </label><br>
                                        <label class="containercheckbox">
                                         <button style="background-color:`+ (scopeofworkname.length > 0 ? 'green' : 'red') + `" class="btncheckbox"></button>           
                                          <span>Scope Of Work</span>
                                        </label><br>
                                        <label class="containercheckbox">
                                          <button  style="background-color:`+ (workflowname.length > 0 ? 'green' : 'red') + `"  class="btncheckbox"></button>           
                                          <span>Swim Lane Diargram</span>
                                        </label><br>
                                            
                                    
                                       </div>
                                       <div class="mt-5" style="border:1px solid red;padding:0rem 3rem 3rem 3rem;">
                                       <label class="containercheckbox" style="width: 100%;">
                                          <button  style="background-color:`+ (linkprototype.length > 0 || fileprototype.length > 0 ? 'green' : 'red') + `" class="btncheckbox"></button>           

                                          <span>UX/UI  (Prototype)</span><br>
                                          <div class="input-group  mt-2 mb-2" style="width: 100%;height:20px;">
                                              <span class="input-group-text" id="inputGroup-sizing-default" style="font-size:10px">ATTECH
                                                LINK</span>
                                              <input value="`+ linkprototype + `" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  style="font-size:10px;" disabled>
                                              <a style="display:`+ (fileprototype == "" ? "none" : "inline") + `;margin-left:1rem;" href = "../../backend/excute/prototype_file/` + req.fileprototype + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-1x"></i></a>                                 

                                          </div> 

                                      </label><br>
                                      <label class="containercheckbox mt-2" style="width: 100%;">
                                          <button style="background-color:`+ (sitemap_preparedata.length > 0 ? 'green' : 'red') + `"  class="btncheckbox"></button>           

                                          <span>Site Map</span><br>
                                          <div class="input-group  mt-2" style="width: 100%;height:20px;">
                                              <span class="input-group-text" id="inputGroup-sizing-default" style="font-size:10px">ATTECH
                                                    FILE</span>
                                              <input value="`+ sitemap_preparedata + `"  id="sitemap` + req.idexcute + `" type="file" class="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default"  style="font-size:10px" `+ (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `>
                                                <a style="display:`+ (sitemap_preparedata == "" ? "none" : "inline") + `;margin-left:1rem;" href = "../../backend/excute/preparedata_file/` + sitemap_preparedata + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-1x"></i></a>                                 

                                              </div>    
                                      </label><br>  
                                      </div>
                                       <div class="mt-3">
                                       </div>
                                     </div>
                                     <div class="col-6" style="text-align: start;border:1px solid red;">
                                        <button  style="background-color:`+ (req.system_status == 1 ? 'green' : 'red') + `" class="btncheckbox"  id="systemflowchart` + req.idexcute + `" onclick="checkboxsystemflowchart(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           
                                        <span>System FlowChart</span>
                                    </label><br>
                                   <label class="containercheckbox">
                                      <button style="background-color:`+ (req.dataflow_status == 1 ? 'green' : 'red') + `" class="btncheckbox" id="dataflowdiagram` + req.idexcute + `"  onclick="checkboxdataflowdiagram(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           

                                      <span>Data Flow Diagram</span>
                                    </label><br>
                                    <label class="containercheckbox"> 
                                      <button style="background-color:`+ (req.erdiagram_status == 1 ? 'green' : 'red') + `"  class="btncheckbox" id="erdiagram` + req.idexcute + `" onclick="checkboxerdiagram(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           

                                      <span>Er Diargram</span>
                                    </label><br>
                                    <label class="containercheckbox">
                                      <button style="background-color:`+ (req.datadic_status == 1 ? 'green' : 'red') + `"  class="btncheckbox" id="datadictionary` + req.idexcute + `" onclick="checkboxdatadictionary(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           

                                      <span>Data Dictionary</span>
                                    </label><br>
                                    <label class="containercheckbox">
                                      <button style="background-color:`+ (req.usecase_status == 1 ? 'green' : 'red') + `"  class="btncheckbox" id="usecasediagram` + req.idexcute + `" onclick="checkboxusecasediagram(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           

                                      <span>Use case Diagram</span>
                                    </label><br>
                                  
                                      
                                      <div class="input-group  mt-2" style="width: 100%;height:20px;">
                                          <span class="input-group-text" id="inputGroup-sizing-default" style="font-size:10px">ATTECH
                                                Link</span>
                                          <input value="`+ linkprepare + `" type="text" id="preparedatalink` + req.idexcute + `" class="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-default"  style="font-size:10px" `+ (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `>
                                      </div>         
                                     </div>
                                   </div>
                                   <div class="d-flex justify-content-sm-end mt-2" style="width: 100%;height:40px;">
                                     <button id="savepreparedata`+ req.idexcute + `" style="display:` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'none' : 'inline') + `;margin-right: 3%;padding:0rem 2rem 0rem 2rem" class="buttonsave" onclick="savepreparedata(` + req.idexcute + `,` + req.id + `)" >SAVE</button>
                                     <button  id="updatepreparedata`+ req.idexcute + `" style="display:` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'inline' : 'none') + `;margin-right: 3%;padding:0rem 2rem 0rem 2rem" class="buttonsave"  onclick="updatepreparedata(` + req.idexcute + `)"  disabled>SAVE</button>
                                     <button id="editpreparedata`+ req.idexcute + `" style="display:` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'inline' : 'none') + `;margin-right: 3%;padding:0rem 2rem 0rem 2rem" class="buttonedit"  onclick="toggleeditpreparedata(` + req.idexcute + `)">Edit</button>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div class="item">
                             <div class="content">
                               <button class="buttonprocess" data-bs-toggle="collapse" data-bs-target="#Coding`+ req.idexcute + `"
                                 aria-expanded="false" aria-controls="coding" id="btncoding`+ req.idexcute + `" onclick="toggleCollapse('coding',` + req.idexcute + `)" style="background:` + (((req.statusforprocess >= 7) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;">
                                 <i class="fa-solid fa-computer fa-2x"></i>
                               </button>
                               <span>
                                 Coding
                               </span>
                               <div class="collapse" id="coding`+ req.idexcute + `">
                                 <div class="card card-body papercoding"
                                   style="margin-top: 30%;margin-left: -570px;text-align: start;">
                                   <span
                                     style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
                                     Coding & Testing
                                   </span><br>
                                 
                                     <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                                        <div class="row">
                                            <div class="col-7">
                                            <div class="codingplan">
                                              <span style="font-size:larger;font-weight: bold">
                                                วางแผนกำหนดการ Coding
                                              </span><br>
                                              <div class="row mt-3">
                                              <div class="col-6 mb-5">
                                              <div class="input-group date">
                                                <span class="input-group-text" id="inputGroup-sizing-default">วันที่เริ่ม</span>
                                                <input value="`+ formattedstartcodingDate + `"  id="startcoding` + req.idexcute + `"  type="text" class="form-control" id="enddate" placeholder="dd/mm/yyyy" ` + (req.statusplan == 1 ? 'disabled' : 'none') + `>
                                                <i class="bi bi-calendar"></i>
                                              </div>
                              
                                            </div>
                                            <div class="col-6 mb-5">
                                            <div class="input-group date">
                                              <span class="input-group-text" id="inputGroup-sizing-default">วันที่สิ้นสุด</span>
                                              <input value="`+ formattedendcodingDate + `"  id="endcoding` + req.idexcute + `"  type="text" class="form-control" id="enddate" placeholder="dd/mm/yyyy" ` + (req.statusplan == 1 ? 'disabled' : 'none') + `>
                                              <i class="bi bi-calendar"></i>
                                            </div>
                            
                                          </div>
                                        
                                              </div>
                                              <div class="row mt-3">
                                                <div class="col-6">
                                                  <span>Format</span><br>
                                                  <textarea  class="pjdetailinput mt-3" type="text" style="width:100%;height: 100px;" id="formatcoding` + req.idexcute + `" ` + (req.statusplan == 1 ? 'disabled' : 'none') + `>` + format_coding + `</textarea>
                                                </div>
                                                <div class="col-6">
                                                  <span>Name/University</span><br>
                                                  <textarea  class="pjdetailinput mt-3" type="text" style="width:100%;height: 100px;" id="nameuniversitycoding` + req.idexcute + `" ` + (req.statusplan == 1 ? 'disabled' : 'none') + `>` + name_university_coding + `</textarea>
                                                </div>
                                              </div>
                                              <div class="row mt-3">
                                                <div class="col-6">
                                                  <span>Database</span><br>
                                                  <textarea  class="pjdetailinput mt-3" type="text" style="width:100%;height: 100px;" id="databasecoding` + req.idexcute + `" ` + (req.statusplan == 1 ? 'disabled' : 'none') + `>` + database_coding + `</textarea>
                                                </div>
                                                <div class="col-6">
                                                  <span>Languages</span><br>
                                                  <textarea  class="pjdetailinput mt-3" type="text" style="width:100%;height: 100px;" id="languagescoding` + req.idexcute + `" ` + (req.statusplan == 1 ? 'disabled' : 'none') + `>` + languages_coding + `</textarea>
                                                </div>
                                              </div>
                                              <div>
                                              <div class="col-12 mt-2">
                                              <div class="input-group  mt-2" style="width: 100%;height:20px;">
                                              <span class="input-group-text" id="inputGroup-sizing-default" style="font-size:10px">ATTECH
                                                    FILE</span>
                                              <input   id="fileplancoding`+ req.idexcute + `" type="file" class="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default"  style="font-size:10px" `+ ((req.statusplan == 1) ? 'disabled' : 'none') + `>
                                                <a style="display:`+ (fileplancoding == "" ? "none" : "inline") + `;margin-left:1rem;" href = "../../backend/excute/plancoding_file/` + fileplancoding + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-1x"></i></a>                                 

                                              </div> 
                                                  </div>
                                              </div>
                                              <div class="d-flex justify-content-end mt-4" style="width: 100%;">
                                              <button class="buttonsave"  style="display:`+ ((req.statusplan == 1) ? 'none' : 'inline') + `" id="saveplancodeing` + req.idexcute + `" onclick="saveplancodeing(` + req.idexcute + `)" >SAVE</button>
                                              <button class="buttonsave"  style="display:`+ ((req.statusplan == 1) ? 'inline' : 'none') + `" id="updateplancodeing` + req.idexcute + `" onclick="updateplancodeing(` + req.idexcute + `)"  disabled>SAVE</button>
                                              <button class="buttonedit" style="display:`+ ((req.statusplan == 1) ? 'inline' : 'none') + `" id="toggleeditplancoding` + req.idexcute + `" onclick="toggleeditplancoding(` + req.idexcute + `)">Edit</button>
                                            </div>
                                            </div>
                                               </div>
                                                <div class="col-5">
                                                
                                                <div class="row mt-3 mb-5">
                                                    <div class="mt-3 mb-3">
                                                      <span>Coding<br>
                                                    </div>
                                                    <div class="input-group" style="width: 100%;height:20px;">
                                                    <span class="input-group-text" id="inputGroup-sizing-default" style="font-size: 11px;">ATTECH LINK</span>
                                                    <input value="`+ linkcoding + `" type="text" id="codinglink` + req.idexcute + `" class="form-control" aria-label="Sizing example input"
                                                        aria-describedby="inputGroup-sizing-default"  `+ (((req.statusforprocess >= 7) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `>
                                                    </div>
                                                    <div class="d-flex justify-content-sm-end mt-5" style="width: 100%;height:40px;">
                                                      <button id="savecoding`+ req.idexcute + `" style="display:` + (((req.statusforprocess >= 7) && (req.statusforprocess <= 10)) ? 'none' : 'inline') + `;margin-right: 3%;padding:0rem 2rem 0rem 2rem" class="buttonsave" onclick="savecoding(` + req.idexcute + `,` + req.id + `)" >SAVE</button>
                                                      <button  id="updatecoding`+ req.idexcute + `" style="display:` + (((req.statusforprocess >= 7) && (req.statusforprocess <= 10)) ? 'inline' : 'none') + `;margin-right: 3%;padding:0rem 2rem 0rem 2rem" class="buttonsave"  onclick="updatecoding(` + req.idexcute + `)"  disabled>SAVE</button>
                                                      <button id="editsavecoding`+ req.idexcute + `" style="display:` + (((req.statusforprocess >= 7) && (req.statusforprocess <= 10)) ? 'inline' : 'none') + `;margin-right: 3%;padding:0rem 2rem 0rem 2rem" class="buttonedit"  onclick="toggleeditcoding(` + req.idexcute + `)">Edit</button>
                                                    </div>
                                                </div>
                                                <div class="row mt-3">
                                                    <div class="mt-6 mb-3">
                                                        <span>Testing</span><br>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="input-group " style="width: 100%;height:20px;">
                                                        <span class="input-group-text" id="inputGroup-sizing-default" style="font-size: 11px;">ATTECH LINK</span>
                                                        <input value="`+ linktesting + `" type="text" id="testinglink` + req.idexcute + `" class="form-control" aria-label="Sizing example input"
                                                            aria-describedby="inputGroup-sizing-default"  `+ (((req.statusforprocess >= 8) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-sm-end mt-5" style="width: 100%;height:40px;">
                                                      <button id="savetesting`+ req.idexcute + `" style="display:` + (((req.statusforprocess >= 8) && (req.statusforprocess <= 10)) ? 'none' : 'inline') + `;margin-right: 3%;padding:0rem 2rem 0rem 2rem" class="buttonsave" onclick="savetesting(` + req.idexcute + `,` + req.id + `)" >SAVE</button>
                                                      <button  id="updatetesting`+ req.idexcute + `" style="display:` + (((req.statusforprocess >= 8) && (req.statusforprocess <= 10)) ? 'inline' : 'none') + `;margin-right: 3%;padding:0rem 2rem 0rem 2rem" class="buttonsave"  onclick="updatetesting(` + req.idexcute + `)"  disabled>SAVE</button>
                                                      <button id="toggleedittesting`+ req.idexcute + `" style="display:` + (((req.statusforprocess >= 8) && (req.statusforprocess <= 10)) ? 'inline' : 'none') + `;margin-right: 3%;padding:0rem 2rem 0rem 2rem" class="buttonedit"  onclick="toggleedittesting(` + req.idexcute + `)">Edit</button>
                                                    </div>
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
                               <button class="buttonprocess"
                                 aria-expanded="false" disabled aria-controls="coding" id="btntesting`+ req.idexcute + `" style="background:` + (((req.statusforprocess >= 8) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;"> 
                                 <i class="fa-solid fa-clipboard-check fa-2x"></i>
                               </button>
                               <span>
                                 Testing
                               </span>                      
                             </div>
                           </div>

                           

                           <div class="item">
                             <div class="content">

                               <button class="buttonprocess" data-bs-toggle="collapse" data-bs-target="#Deliver`+ req.idexcute + `"
                                 aria-expanded="false" aria-controls="deliver" id="btndeliver`+ req.idexcute + `"  onclick="toggleCollapse('deliver',` + req.idexcute + `)" style="background:` + (((req.statusforprocess >= 9) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;">
                                 <i class="fa-solid fa-box-open fa-2x"></i>
                               </button>
                               <span>
                                Control for Deploy
                               </span>
                               <div class="collapse" id="deliver`+ req.idexcute + `">
                                 <div class="card card-body paperdiliver"
                                   style="margin-top: 30%;margin-left: -850px;">
                                   <span
                                     style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
                                     Monitor & Control for Deploy
                                   </span><br>
                                   <div class="row">
                                    <div class="col-6" style="text-align:start;border:1px solid black;padding:1% 5% 5% 5%">
                                    <div style="text-align:center">
                                      <span>PREPARE DATA</span>
                                    </div>
                                    <button  style="background-color:`+ (linkprototype.length > 0 || fileprototype.length > 0 ? 'green' : 'red') + `" class="btncheckbox"  id="systemflowchart` + req.idexcute + `" onclick="checkboxsystemflowchart(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           
                                    <span>Prototype ( UX/UI )  </span>
                                    </label><br>
                                    <button  style="background-color:`+ (sitemap_preparedata.length > 0 ? 'green' : 'red') + `" class="btncheckbox"  id="systemflowchart` + req.idexcute + `" onclick="checkboxsystemflowchart(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           
                                    <span>Site Map</span>
                                    </label><br>
                                    <button  style="background-color:`+ (bussinessflowname.length > 0  ? 'green' : 'red') + `" class="btncheckbox"  id="systemflowchart` + req.idexcute + `" onclick="checkboxsystemflowchart(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           
                                    <span>Business Diargram</span>
                                    </label><br>
                                    <button  style="background-color:`+ (workflowname.length > 0 ? 'green' : 'red') + `" class="btncheckbox"  id="systemflowchart` + req.idexcute + `" onclick="checkboxsystemflowchart(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           
                                    <span>Swim Lane Diargram</span>
                                    </label><br>
                                    <button  style="background-color:`+ (req.system_status == 1 ? 'green' : 'red') + `" class="btncheckbox"  id="systemflowchart` + req.idexcute + `" onclick="checkboxsystemflowchart(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           
                                    <span>System FlowChart</span>
                                    </label><br>
                                    <button  style="background-color:`+ (req.dataflow_status == 1 ? 'green' : 'red') + `" class="btncheckbox"  id="systemflowchart` + req.idexcute + `" onclick="checkboxsystemflowchart(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           
                                    <span>Data Flow Diagram</span>
                                    </label><br>
                                    <button  style="background-color:`+ (req.erdiagram_status == 1 ? 'green' : 'red') + `" class="btncheckbox"  id="systemflowchart` + req.idexcute + `" onclick="checkboxsystemflowchart(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           
                                    <span>Er Diargram</span>
                                    </label><br>
                                    <button  style="background-color:`+ (req.datadic_status == 1 ? 'green' : 'red') + `" class="btncheckbox"  id="systemflowchart` + req.idexcute + `" onclick="checkboxsystemflowchart(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           
                                    <span>Data Dictionary</span>
                                    </label><br>
                                    <button  style="background-color:`+ (req.usecase_status == 1 ? 'green' : 'red') + `" class="btncheckbox"  id="systemflowchart` + req.idexcute + `" onclick="checkboxsystemflowchart(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           
                                    <span>Use case Diagram</span>
                                    </label><br>
                              
                                                         
                                      <div class="input-group  mt-2" style="width: 100%;height:20px;">
                                          <span class="input-group-text" id="inputGroup-sizing-default" style="font-size:10px">ATTECH
                                                Link</span>
                                          <input value="`+ linkprepare + `" type="text" id="preparedatalink` + req.idexcute + `" class="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-default"  style="font-size:10px" disabled>
                                      </div><br>
                                      <div class="d-flex justify-content-sm-end mt-1" style="width: 100%;height:40px;">
                                      <button class="buttonupdate" data-bs-toggle="collapse" data-bs-target="#Preparedata`+ req.idexcute + `"
                                      aria-expanded="false" aria-controls="preparedata" onclick="toggleCollapse('preparedata',`+ req.idexcute + `)"  id="btndeploytoprepare` + req.idexcute + `" disabled>
                                      UPDATE
                                      </button>
                                      </div>
                                     

                                    
                                    </div>
                                    <div class="col-6" style="text-align:start;border:1px solid black;padding:1% 5% 5% 5%;height:70%">
                                    <div style="text-align:center">
                                      <span>POSTPARE DATA</span>
                                    </div>
                                    <div class="row">
                                    <div>
                                    <button  style="background-color:`+ (req.linkcoding == null ? 'red' : 'green') + `" class="btncheckbox"  id="systemflowchart` + req.idexcute + `" onclick="checkboxsystemflowchart(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           
                                    <span>Code</span>
                                    </label><br>
                                    <div class="input-group " style="width: 100%;height:20px;">
                                        <span class="input-group-text" id="inputGroup-sizing-default" style="font-size: 11px;">ATTECH LINK</span>
                                        <input value="`+ linkcoding + `" type="text"  class="form-control" aria-label="Sizing example input"
                                          aria-describedby="inputGroup-sizing-default" disabled >
                                    </div>
                                    </div>
                                   
                                    <div class="mt-5 mb-5">
                                    <button  style="background-color:`+ (req.linktesting == null ? 'red' : 'green') + `" class="btncheckbox"  id="systemflowchart` + req.idexcute + `" onclick="checkboxsystemflowchart(` + req.idexcute + `)" ` + (((req.statusforprocess >= 6) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `></button>           
                                    <span>Tese case</span>
                                    </label><br>
                                    <div class="input-group " style="width: 100%;height:20px;">
                                      <span class="input-group-text" id="inputGroup-sizing-default" style="font-size: 11px;">ATTECH LINK</span>
                                      <input value="`+ linktesting + `" type="text" class="form-control" aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default" disabled>
                                    </div>
                                    </div>
                                    <div class="d-flex justify-content-sm-end mt-1" style="width: 100%;height:40px;">
                                     <button class="buttonupdate" data-bs-toggle="collapse" data-bs-target="#Coding`+ req.idexcute + `"
                                      aria-expanded="false" aria-controls="coding" id="updatedeploytocoding`+ req.idexcute + `" onclick="toggleCollapse('coding',` + req.idexcute + `)" disabled>
                                      UPDATE
                                    </button>
                                    </div>
                                    </div>
                                    <div class="row mt-5">
                                    <div class="d-flex justify-content-sm-end mt-5" style="width: 100%;height:40px;text-align:center">
                                      <button id="savedeploy`+ req.idexcute + `"   class="buttonsave" style="padding:0px 15px"  onclick="confirmdeploy(` + req.id + `)">CONFIRM</button>
                                      <button id="toggleeditdeploy`+ req.idexcute + `" class="buttonedit"   style="padding:0px 15px" onclick="toggleeditdeploy(` + req.idexcute + `)">Edit</button>
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
                               <button class="buttonprocess" data-bs-toggle="collapse" data-bs-target="#Implement`+ req.idexcute + `"
                                 aria-expanded="false" aria-controls="value" id="updatetocoding`+ req.idexcute + `" onclick="toggleCollapse('implement',` + req.idexcute + `)" style="background:` + (((req.statusforprocess >= 10) && (req.statusforprocess <= 10)) ? 'linear-gradient(45deg, #22ca16 5%, #5fbf1f 50%, #5fbf1f 50%)' : 'linear-gradient(45deg, #fb466a 5%, #DF1B3F 50%, #DF1B3F 50%);') + `;">
                                 <i class="fa-solid fa-heart fa-2x"></i>
                               </button>
                               <span>
                                 Implement
                               </span>
                               <div class="collapse" id="implement`+ req.idexcute + `">
                                 <div class="card card-body papervalue" style="text-align: start;margin-top: 30%;margin-left: -800px;">
                                 <span
                                 style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;text-align:center">
                                 Implement
                               </span><br>
                                 <div class="row">
                                 <div class="col-6 mb-1 mt-4">
                                 <div class="input-group mb-3">
                                   <span class="input-group-text" id="inputGroup-sizing-default">Topic</span>
                                   <input  value="`+ topicimplement + `" id="topic_implement` + req.idexcute + `" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" ` + (((req.statusforprocess >= 10) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `>
                                 </div>
                               </div>
                               <div class="col-6 mb-1 mt-4">
                                 <div class="input-group mb-3">
                                   <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                                   <input value="`+ emailimplement + `"  id="email_implement` + req.idexcute + `" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" ` + (((req.statusforprocess >= 10) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `>
                                 </div>
                               </div>
                               <div class="col-12 mb-1 mt-2">
                                 <textarea  id="detail_implement`+ req.idexcute + `" type="text" style="width:100%;height:100px"  ` + (((req.statusforprocess >= 10) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `>` + detailimplement + `</textarea>
                               </div>
                              </div>                                                                                    
                                <div class="d-flex justify-content-sm-end mt-3" style="width: 100%;">
                                <button class="buttonedit" style="display:`+ (((req.statusforprocess >= 10) && (req.statusforprocess <= 10)) ? 'inline' : 'none') + `" id="toggleeimplement` + req.idexcute + `" onclick="togglesendemailimplement(` + req.idexcute + `)">Edit</button>                               
                                <button id="sendemailimplement`+ req.idexcute + `" class="buttonsend" onclick="sendemailimplement(` + req.idexcute + `,` + req.id + `)"  ` + (((req.statusforprocess >= 10) && (req.statusforprocess <= 10)) ? 'disabled' : 'none') + `>SEND</button>
                                </div>
                                  
                                 
                                  
                                
                                
                                  

                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div class="row projectdetailone">
                         <div class="col-12" style="height: 100%;">
                           <div class="row mt-3">
                             <div class="col-3">
                               <span>Request id</span><br>
                               <input class="pjdetailinput mt-3" value="`+ req.id + `" type="text"  style="width: 100%;" disabled>
                             </div>
                             <div class="col-3">
                               <span>Process Name</span><br>
                               <input class="pjdetailinput mt-3" value="`+ req.processname + `" style="width: 100%;"  type="text" disabled>
                             </div>
                             <div class="col-3">
                               <span>Request Emp id</span><br>
                               <input class="pjdetailinput mt-3" value="`+ req.empid + `"  type="text"  style="width: 100%;" disabled>
                             </div>
                             <div class="col-3">
                               <span>Request Name</span><br>
                               <input class="pjdetailinput mt-3" value="`+ req.firstname + " " + req.lastname + `" type="text"  style="width: 100%;" disabled>
                             </div>
                           </div>
                           <!-- --------------- -->
                           <div class="row mt-3">
                                <div class="col-3">
                                    <span>Request Division</span><br>
                                    <input  class="pjdetailinput mt-3" value="`+ req.division + `" type="text"  style="width: 100%;" disabled>
                                </div>
                                <div class="col-3" >
                                    <span >Request Department</span><br>
                                    <input class="pjdetailinput mt-3" value="`+ req.department + `"  type="text"  style="width: 100%;" disabled>
                                </div>
                                <div class="col-3">
                                    <span>Request Section</span><br>
                                    <input class="pjdetailinput mt-3" value="`+ req.section + `" type="text"    style="width: 100%;" disabled>
                                </div>
                                <div class="col-3">
                                    <span>Doing By</span><br>
                                    <input class="pjdetailinput mt-3" value="`+ req.doing_by + `" type="text"  style="width: 100%;" disabled>
                                </div>
                            </div>
                             <!-- --------------- -->
                             <div class="row mt-3">
                                <div class="col-3">
                                    <span>Request Date</span><br>
                                    <input class="pjdetailinput mt-3" value="`+ formattedstartDate + `" type="text"  style="width: 100%;" disabled>
                                </div>
                                <div class="col-3">
                                    <span>Request Enddate</span><br>
                                    <input class="pjdetailinput mt-3" value="`+ formattedendDate + `" type="text"  style="width: 100%;" disabled> 
                                </div>
                                <div class="col-3">
                                    <span>AS IS</span><br>
                                    <input class="pjdetailinput mt-3" value="`+ req.asis + `" type="text"  style="width: 100%;" disabled>
                                </div>
                                <div class="col-3">
                                    <span>TO BE</span><br>
                                    <input class="pjdetailinput mt-3" value="`+ req.tobe + `" type="text"  style="width: 100%;" disabled>
                                </div>
                            </div>

                            <div class="row mt-3">
                             <div class="col-2">
                               <span>BUDGET</span><br>
                               <input class="pjdetailinput mt-3" value="`+ req.budget + `" type="text"  style="width: 100%;" disabled>
                             </div>                        
                            </div>
                           <div class="row mt-3">
                             <div class="col-6">
                               <span>Painpoint</span><br>
                               <textarea class="pjdetailinput mt-3" type="text" style="width: 100%;height: 60px;"  disabled>`+ painpoint + `</textarea>
                             </div>
                             <div class="col-6">
                               <span>Results & Benefit </span><br>
                               <textarea class="pjdetailinput mt-3" type="text"  style="width: 100%;height: 60px;"  disabled>`+ results_benefit + `</textarea>
                             </div>
                            </div>
                         <!-- --------------- -->
                           <div class="row mt-3">
                             <div class="col-6">
                               <span>Description</span><br>
                               <textarea class="pjdetailinput mt-3" type="text"   style="width: 100%;height: 60px;" disabled>`+ description + `</textarea>
                             </div>
                             <div class="col-6">
                               <span>Approvals</span><br>
                               <input class="pjdetailinput mt-3" type="text"  style="width: 100%" disabled>
                             </div>
                           </div>

                           <!-- --------------- -->
                           <div class="row mt-3">
                             <div class="col-6">
                               <span>Scope of Work</span><br>
                               <input class="pjdetailinput mt-3" type="file" style="width: 100%;height: 20px;" disabled>
                               <a style="display:`+ (scopeofworkname == "" ? "none" : "inline") + `" href = "../../backend/home/fileupload/scopeofwork/` + scopeofworkname + `" target="_blank"><i class="fa-solid fa-file fa-2x"></i></a>
                             </div>
                             <div class="col-6">
                               <span>Risk Management</span><br>
                               <input class="pjdetailinput mt-3" type="file"  style="width: 100%;height: 20px" disabled> 
                               <a style="display:`+ (riskmanagementname == "" ? "none" : "inline") + `" href = "../../backend/home/fileupload/riskmanagement/` + riskmanagementname + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-2x"></i></a>
                            </div>
                           </div>
                           <!-- --------------- -->
                           <div class="row mt-3">
                             <div class="col-6">
                               <span>Bussiness Flow</span><br>
                               <input class="pjdetailinput mt-3" type="file" style="width: 100%;height: 20px;" disabled> 
                               <a style="display:`+ (bussinessflowname == "" ? "none" : "inline") + `" href = "../../backend/home/fileupload/bussinessflow/` + bussinessflowname + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-2x"></i></a>
                               </div>
                             <div class="col-6">
                               <span>Work Flow ( swim lane ) </span><br>
                               <input class="pjdetailinput mt-3" type="file"  style="width: 100%;height: 20px" disabled>
                               <a style="display:`+ (workflowname == "" ? "none" : "inline") + `" href = "../../backend/home/fileupload/workflow/` + workflowname + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-2x"></i></a>
                               </div>
                           </div>
                           <!-- --------------- -->
                           <div class="row mt-3">
                             <div class="col-6">
                               <span>Extract File (แนบไฟล์เดิมของระบบ)</span><br>
                               <input class="pjdetailinput mt-3" type="file"  style="width: 100%;height: 20px" disabled>
                               <a style="display:`+ (extractfilename == "" ? "none" : "inline") + `" href = "../../backend/home/fileupload/extractfile/` + extractfilename + `" target="_blank"><i class="mt-2 fa-solid fa-file fa-2x"></i></a>
                               </div>

                           </div>

                           <!-- --------------- -->



                         </div>
                        

                       </div>

                     </div>

                   </div>
                   </div>
                 </div>
               </div>                   
                  `


      reqallapproval_tabel.insertAdjacentHTML('beforeend', row);

      $('#datadetail' + req.idexcute).modal('show');



    })
}


var getreqapproveallToExcute = async function () {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  var reqallapproval_tabel = document.getElementById('tablexcuteall');
  await fetch("http://localhost/projectbacklog/backend/excute/excute_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
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
          var processname = ""
        } else {
          var processname = req.processname
        }
        if (req.doingbyname == null) {
          var doingbyname = ""
        } else {
          var doingbyname = req.doingbyname
        }
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
        if (req.linkprototype == null) {
          var linkprototype = ""
        } else {
          var linkprototype = req.linkprototype
        }
        if (req.emailconfirmprototype == null) {
          var emailconfirmprototype = ""
        } else {
          var emailconfirmprototype = req.emailconfirmprototype
        }

        if (req.topicconfirmprototype == null) {
          var topicconfirmprototype = ""
        } else {
          var topicconfirmprototype = req.topicconfirmprototype
        }

        if (req.detailconfirmprototype == null) {
          var detailconfirmprototype = ""
        } else {
          var detailconfirmprototype = req.detailconfirmprototype
        }

        if (req.linkprepare == null) {
          var linkprepare = ""
        } else {
          var linkprepare = req.linkprepare
        }

        if (req.linkcoding == null) {
          var linkcoding = ""
        } else {
          var linkcoding = req.linkcoding
        }

        if (req.linktesting == null) {
          var linktesting = ""
        } else {
          var linktesting = req.linktesting
        }

        if (req.format_coding == null) {
          var format_coding = ""
        } else {
          var format_coding = req.format_coding
        }

        if (req.name_university_coding == null) {
          var name_university_coding = ""
        } else {
          var name_university_coding = req.name_university_coding
        }

        if (req.database_coding == null) {
          var database_coding = ""
        } else {
          var database_coding = req.database_coding
        }

        if (req.languages_coding == null) {
          var languages_coding = ""
        } else {
          var languages_coding = req.languages_coding
        }


        if (req.emailimplement == null) {
          var emailimplement = ""
        } else {
          var emailimplement = req.emailimplement
        }


        if (req.topicimplement == null) {
          var topicimplement = ""
        } else {
          var topicimplement = req.topicimplement
        }


        if (req.detailimplement == null) {
          var detailimplement = ""
        } else {
          var detailimplement = req.detailimplement
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
                        <td scope="row" id="req">`+ req.id + `</td>
                        <td>`+ formattedstartDate + `</td>
                        <td>`+ formattedendDate + `</td>
                        <td>`+ processname + `</td>
                        <td>`+ doingbyname + `</td>
                        <td id="statuscolor" style="color: ` + (req.status == 'Approve' ? 'green' : (req.status == 'Reject' ? 'red' : 'orange')) + `;">` + req.status + `</td>
                        <td>              
                          <button  type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#datadetail`+ req.idexcute + `" onclick="getdataexcute_one(` + req.idexcute + `)">
                              ดูรายละเอียดเพิ่มเติม
                          </button>
                        </td>
                  </tr>
               
                  `

        reqallapproval_tabel.insertAdjacentHTML('beforeend', row);


      }

    }

    )
    .catch(error => console.log('error', error));
}



function saveprototype(idexcute, idreq) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");
  console.log(idexcute)

  var raw = JSON.stringify({
    "file": document.getElementById("prototypefile" + idexcute).value,
    "link": document.getElementById("prototypelink" + idexcute).value,
    "excuteid": idexcute,
    "statusforprocess": 4,
    "Requirements_id": idreq,
  })
  console.log(raw)
  var requestOptions = {
    method: 'POST',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };

  fetch("http://localhost/projectbacklog/backend/excute/prototype_db.php", requestOptions)
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


function patchprototype(idexcute) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");
  console.log(idexcute)

  var raw = JSON.stringify({
    "file": document.getElementById("prototypefile" + idexcute).value,
    "link": document.getElementById("prototypelink" + idexcute).value,
    "excuteid": idexcute,
  })
  console.log(raw)
  var requestOptions = {
    method: 'PATCH',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };
  var inputtext = document.getElementById("prototypelink" + idexcute);
  var btnsave = document.getElementById("updateprototype" + idexcute)
  var file = document.getElementById("prototypefile" + idexcute)

  fetch("http://localhost/projectbacklog/backend/excute/prototype_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      var jsonObj = JSON.parse(result);
      if (jsonObj.status == 'OK') {
        showsuccessAlert()
        btnsave.disabled = !btnsave.disabled
        inputtext.disabled = !inputtext.disabled
        file.disabled = !file.disabled
      } else {
        alert('not ok');
      }

    })
    .catch(error => console.log('error', error));
}


function togglebuttonedit(excuteid, statusforprocess) {
  const btnsaveprototype = document.getElementById("savepreparedata" + excuteid);
  if (statusforprocess == 4) {
    btnsaveprepare.style.display = 'none';
  }
  else {
    btnsaveprototype.style.display = 'inline'
  }
}


function clearlocalstoragestatus() {
  localStorage.removeItem("datadictionary_status")
  localStorage.removeItem("systemflow_status")
  localStorage.removeItem("dataflowdiagram_status")
  localStorage.removeItem("erdiagram_status")
  localStorage.removeItem("usecasediagram_status")
  window.location.reload();

}



var uploadfilepreparedata = function (excuteid) {
  var file1 = document.getElementById('sitemap' + excuteid).files;
  if (file1.length > 0) {

    var formData = new FormData();
    formData.append("sitemapfile", file1[0]);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost/projectbacklog/backend/excute/preparedata_db.php/uploadfilesitemap", true);
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        showsuccessAlert()
      }
    };

    // Send request with data
    xhttp.send(formData);

  }
}


function savepreparedata(idexcute, reqid) {
  var file1 = document.getElementById('sitemap' + idexcute).files;
  console.log('test')
  var formData = new FormData();
  formData.append("reqid", reqid);
  formData.append("statusforprocess", 6);
  formData.append("excuteid", idexcute);
  formData.append("systemflowchart_status", localStorage.getItem("systemflow_status"));
  formData.append("dataflowdiagram_status", localStorage.getItem("dataflowdiagram_status"));
  formData.append("erdiargram_status", localStorage.getItem("erdiagram_status"));
  formData.append("datadic_status", localStorage.getItem("datadictionary_status"));
  formData.append("usecasediagram_status", localStorage.getItem("usecasediagram_status"));
  formData.append("linkprepare", document.getElementById("preparedatalink" + idexcute).value);
  formData.append("sitemapfile", file1[0]);



  var inputtextlinkprepare = document.getElementById("preparedatalink" + idexcute);
  var btnsaveprepare = document.getElementById("updatepreparedata" + idexcute);
  var systemflowchart = document.getElementById("systemflowchart" + idexcute);
  var dataflowdiagram = document.getElementById("dataflowdiagram" + idexcute);
  var erdiagram = document.getElementById("erdiagram" + idexcute);
  var datadictionary = document.getElementById("datadictionary" + idexcute);
  var usecasediagram = document.getElementById("usecasediagram" + idexcute);
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost/projectbacklog/backend/excute/preparedata_db.php/savepreparedata", true);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      inputtextlinkprepare.disabled = !inputtextlinkprepare.disabled;
      btnsaveprepare.disabled = !btnsaveprepare.disabled;
      systemflowchart.disabled = !systemflowchart.disabled;
      dataflowdiagram.disabled = !dataflowdiagram.disabled;
      erdiagram.disabled = !erdiagram.disabled;
      datadictionary.disabled = !datadictionary.disabled;
      usecasediagram.disabled = !usecasediagram.disabled;
      showsuccessAlert()
    }
  };

  xhttp.send(formData);

}


function updatepreparedata(idexcute) {
  var file1 = document.getElementById('sitemap' + idexcute).files;
  console.log('test')
  var formData = new FormData();
  formData.append("excuteid", idexcute);
  formData.append("systemflowchart_status", localStorage.getItem("systemflow_status"));
  formData.append("dataflowdiagram_status", localStorage.getItem("dataflowdiagram_status"));
  formData.append("erdiargram_status", localStorage.getItem("erdiagram_status"));
  formData.append("datadic_status", localStorage.getItem("datadictionary_status"));
  formData.append("usecasediagram_status", localStorage.getItem("usecasediagram_status"));
  formData.append("linkprepare", document.getElementById("preparedatalink" + idexcute).value);
  formData.append("sitemapfile", file1[0]);


  var inputtextlinkprepare = document.getElementById("preparedatalink" + idexcute);
  var btnsaveprepare = document.getElementById("updatepreparedata" + idexcute);
  var systemflowchart = document.getElementById("systemflowchart" + idexcute);
  var dataflowdiagram = document.getElementById("dataflowdiagram" + idexcute);
  var erdiagram = document.getElementById("erdiagram" + idexcute);
  var datadictionary = document.getElementById("datadictionary" + idexcute);
  var usecasediagram = document.getElementById("usecasediagram" + idexcute);
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost/projectbacklog/backend/excute/preparedata_db.php/updatepreparedata", true);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      inputtextlinkprepare.disabled = !inputtextlinkprepare.disabled;
      btnsaveprepare.disabled = !btnsaveprepare.disabled;
      systemflowchart.disabled = !systemflowchart.disabled;
      dataflowdiagram.disabled = !dataflowdiagram.disabled;
      erdiagram.disabled = !erdiagram.disabled;
      datadictionary.disabled = !datadictionary.disabled;
      usecasediagram.disabled = !usecasediagram.disabled;
      showsuccessAlert()
    }
  };

  xhttp.send(formData);

}

function savecoding(idexcute, idreq) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");
  console.log(idexcute)

  var raw = JSON.stringify({
    "link": document.getElementById("codinglink" + idexcute).value,
    "excuteid": idexcute,
    "statusforprocess": 7,
    "Requirements_id": idreq,
  })
  console.log(raw)
  var requestOptions = {
    method: 'POST',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };



  fetch("http://localhost/projectbacklog/backend/excute/coding_db.php", requestOptions)
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

function updatecoding(idexcute) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");
  console.log(idexcute)

  var raw = JSON.stringify({
    "link": document.getElementById("codinglink" + idexcute).value,
    "excuteid": idexcute,
  })
  console.log(raw)
  var requestOptions = {
    method: 'PATCH',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };
  var codinglink = document.getElementById("codinglink" + idexcute)
  var btnupdatesavecoding = document.getElementById("updatecoding" + idexcute);
  fetch("http://localhost/projectbacklog/backend/excute/coding_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      var jsonObj = JSON.parse(result);
      if (jsonObj.status == 'OK') {
        showsuccessAlert()
        codinglink.disabled = !codinglink.disabled;
        btnupdatesavecoding.disabled = !btnupdatesavecoding.disabled;
      } else {
        alert('not ok');
      }

    })
    .catch(error => console.log('error', error));
}


function savetesting(idexcute, idreq) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");
  console.log(idexcute)

  var raw = JSON.stringify({
    "link": document.getElementById("testinglink" + idexcute).value,
    "excuteid": idexcute,
    "statusforprocess": 8,
    "Requirements_id": idreq,
  })
  console.log(raw)
  var requestOptions = {
    method: 'POST',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };

  fetch("http://localhost/projectbacklog/backend/excute/testing_db.php", requestOptions)
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


function updatetesting(idexcute) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");
  console.log(idexcute)

  var raw = JSON.stringify({
    "link": document.getElementById("testinglink" + idexcute).value,
    "excuteid": idexcute,
  })
  console.log(raw)
  var requestOptions = {
    method: 'PATCH',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };
  var testinglink = document.getElementById("testinglink" + idexcute)
  var btnupdatetesting = document.getElementById("updatetesting" + idexcute);


  fetch("http://localhost/projectbacklog/backend/excute/testing_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      var jsonObj = JSON.parse(result);
      if (jsonObj.status == 'OK') {
        showsuccessAlert()
        testinglink.disabled = !testinglink.disabled;
        btnupdatetesting.disabled = !btnupdatetesting.disabled;
      } else {
        alert('not ok');
      }

    })
    .catch(error => console.log('error', error));
}




function confirmdeploy(idreq) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "Requirements_id": idreq,
    "statusforprocess": 9,
  })
  console.log(raw)
  var requestOptions = {
    method: 'PATCH',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };



  fetch("http://localhost/projectbacklog/backend/excute/deploy_db.php", requestOptions)
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




function togglesendemailconfirmprototype(idexcute) {
  var topic = document.getElementById("topic_confirmprototype" + idexcute)
  var email = document.getElementById("email_confirmprototype" + idexcute);
  var detail = document.getElementById("detail_confirmprototype" + idexcute);
  var updatesendemail = document.getElementById("sendemailconfirmprototype" + idexcute);

  topic.disabled = !topic.disabled;
  email.disabled = !email.disabled;
  detail.disabled = !detail.disabled;
  updatesendemail.disabled = !updatesendemail.disabled;

}


function sendemailconfirmprototype(idexcute, idreq, idprototype) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");

  showLoadingSpinner()

  console.log(idprototype)
  var raw = JSON.stringify({
    "topic": document.getElementById("topic_confirmprototype" + idexcute).value,
    "email": document.getElementById("email_confirmprototype" + idexcute).value,
    "detail": document.getElementById("detail_confirmprototype" + idexcute).value,
    "prototypeid": idprototype,
    "idreq": idreq,
    "idstatusforprocess": 5,
  })
  console.log(raw)
  var requestOptions = {
    method: 'POST',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };

  fetch("http://localhost/projectbacklog/backend/excute/prototype_sendmail_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);
      if (jsonObj.status == 'OK') {
        hideLoadingSpinner()
        showsuccessAlert()
      } else {
        alert('not ok');
      }

    })
    .catch(error => console.log('error', error));
}




function togglesendemailimplement(idexcute) {
  var topic = document.getElementById("topic_implement" + idexcute)
  var email = document.getElementById("email_implement" + idexcute);
  var detail = document.getElementById("detail_implement" + idexcute);
  var updatesendemail = document.getElementById("sendemailimplement" + idexcute);

  topic.disabled = !topic.disabled;
  email.disabled = !email.disabled;
  detail.disabled = !detail.disabled;
  updatesendemail.disabled = !updatesendemail.disabled;

}


function sendemailimplement(idexcute, idreq) {
  var myheaders = new Headers()
  myheaders.append("Content-Type", "application/json");


  showLoadingSpinner()

  var raw = JSON.stringify({
    "topic": document.getElementById("topic_implement" + idexcute).value,
    "email": document.getElementById("email_implement" + idexcute).value,
    "detail": document.getElementById("detail_implement" + idexcute).value,
    "idexcute": idexcute,
    "idreq": idreq,
    "idstatusforprocess": 10,
  })
  console.log(raw)
  var requestOptions = {
    method: 'POST',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };

  fetch("http://localhost/projectbacklog/backend/excute/implement_sendmail_db.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      var jsonObj = JSON.parse(result);
      if (jsonObj.status == 'OK') {
        hideLoadingSpinner()
        showsuccessAlert()
      } else {
        alert('not ok');
      }

    })
    .catch(error => console.log('error', error));
}





var uploadfileprototype = function (idexcute, idreq) {
  var file1 = document.getElementById('prototypefile' + idexcute).files;
  var link = document.getElementById('prototypelink' + idexcute).value

  console.log(file1)
  if (file1.length > 0) {
    var formData = new FormData();
    formData.append("prototypefile", file1[0]);
    formData.append("excuteid", idexcute);
    formData.append("link", link);
    formData.append("statusforprocess", 4);
    formData.append("Requirements_id", idreq);

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost/projectbacklog/backend/excute/prototype_db.php/saveprototype", true);
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        showsuccessAlert()
      }
    };

    // Send request with data
    xhttp.send(formData);

  }
}





var patchfileprototype = function (idexcute) {
  var file1 = document.getElementById('prototypefile' + idexcute).files;
  var link = document.getElementById('prototypelink' + idexcute).value

  console.log(file1)
  if (file1.length > 0) {
    var formData = new FormData();
    formData.append("prototypefile", file1[0]);
    formData.append("excuteid", idexcute);
    formData.append("link", link);

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost/projectbacklog/backend/excute/prototype_db.php/updateprototype", true);
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        showsuccessAlert()
      }
    };

    // Send request with data
    xhttp.send(formData);

  }
}



var saveplancodeing = function (idexcute) {



  var file1 = document.getElementById('fileplancoding' + idexcute).files;
  var startcoding = document.getElementById("startcoding" + idexcute).value
  var endcoding = document.getElementById("endcoding" + idexcute).value
  var formatcoding = document.getElementById("formatcoding" + idexcute).value
  var nameuniversitycoding = document.getElementById("nameuniversitycoding" + idexcute).value
  var databasecoding = document.getElementById("databasecoding" + idexcute).value
  var languagescoding = document.getElementById("languagescoding" + idexcute).value


  var formData = new FormData();
  formData.append("fileplancoding", file1[0]);
  formData.append("statusplan", 1);
  formData.append("idexcute", idexcute);
  formData.append("startcoding", startcoding);
  formData.append("endcoding", endcoding);
  formData.append("formatcoding", formatcoding);
  formData.append("nameuniversitycoding", nameuniversitycoding);
  formData.append("databasecoding", databasecoding);
  formData.append("languagescoding", languagescoding);



  var startcoding_t = document.getElementById("startcoding" + idexcute)
  var endcoding_t = document.getElementById("endcoding" + idexcute)
  var formatcoding_t = document.getElementById("formatcoding" + idexcute)
  var nameuniversitycoding_t = document.getElementById("nameuniversitycoding" + idexcute)
  var databasecoding_t = document.getElementById("databasecoding" + idexcute)
  var languagescoding_t = document.getElementById("languagescoding" + idexcute)
  var btnsaveplancoding = document.getElementById("updateplancodeing" + idexcute)

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost/projectbacklog/backend/excute/plancoding_db.php/saveplancoding", true);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      showsuccessAlert()
      startcoding_t.disabled = !startcoding_t.disabled;
      endcoding_t.disabled = !endcoding_t.disabled;
      formatcoding_t.disabled = !formatcoding_t.disabled;
      nameuniversitycoding_t.disabled = !nameuniversitycoding_t.disabled;
      databasecoding_t.disabled = !databasecoding_t.disabled;
      languagescoding_t.disabled = !languagescoding_t.disabled;
      btnsaveplancoding.disabled = !btnsaveplancoding.disabled;

    }
  };

  // Send request with data
  xhttp.send(formData);
}
var updateplancodeing = function (idexcute) {



  var startdateString = document.getElementById("startcoding" + idexcute).value
  var startdateparts = startdateString.split('/');
  var startdateObject = new Date(startdateparts[2], startdateparts[1] - 1, startdateparts[0], 0, 0, 0, 0);
  var startdatetimezoneOffset = startdateObject.getTimezoneOffset() / 60;
  startdateObject.setUTCHours(17 - startdatetimezoneOffset, 0, 0, 0); // set time to 17:00:00.000 in TST
  var startdateformattedDate = startdateObject.toISOString().substr(0, 10);


  var enddateString = document.getElementById("endcoding" + idexcute).value
  var enddateparts = enddateString.split('/');
  var enddateObject = new Date(enddateparts[2], enddateparts[1] - 1, enddateparts[0], 0, 0, 0, 0);
  var enddatetimezoneOffset = enddateObject.getTimezoneOffset() / 60;
  enddateObject.setUTCHours(17 - enddatetimezoneOffset, 0, 0, 0); // set time to 17:00:00.000 in TST
  var enddateformattedDate = enddateObject.toISOString().substr(0, 10);




  var file1 = document.getElementById('fileplancoding' + idexcute).files;
  var formatcoding = document.getElementById("formatcoding" + idexcute).value
  var nameuniversitycoding = document.getElementById("nameuniversitycoding" + idexcute).value
  var databasecoding = document.getElementById("databasecoding" + idexcute).value
  var languagescoding = document.getElementById("languagescoding" + idexcute).value


  var formData = new FormData();
  formData.append("fileplancoding", file1[0]);
  formData.append("idexcute", idexcute);
  formData.append("startcoding", startdateformattedDate);
  formData.append("endcoding", enddateformattedDate);
  formData.append("formatcoding", formatcoding);
  formData.append("nameuniversitycoding", nameuniversitycoding);
  formData.append("databasecoding", databasecoding);
  formData.append("languagescoding", languagescoding);



  var startcoding_t = document.getElementById("startcoding" + idexcute)
  var endcoding_t = document.getElementById("endcoding" + idexcute)
  var formatcoding_t = document.getElementById("formatcoding" + idexcute)
  var nameuniversitycoding_t = document.getElementById("nameuniversitycoding" + idexcute)
  var databasecoding_t = document.getElementById("databasecoding" + idexcute)
  var languagescoding_t = document.getElementById("languagescoding" + idexcute)
  var btnsaveplancoding = document.getElementById("updateplancodeing" + idexcute)

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost/projectbacklog/backend/excute/plancoding_db.php/updateplancoding", true);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      showsuccessAlert()
      startcoding_t.disabled = !startcoding_t.disabled;
      endcoding_t.disabled = !endcoding_t.disabled;
      formatcoding_t.disabled = !formatcoding_t.disabled;
      nameuniversitycoding_t.disabled = !nameuniversitycoding_t.disabled;
      databasecoding_t.disabled = !databasecoding_t.disabled;
      languagescoding_t.disabled = !languagescoding_t.disabled;
      btnsaveplancoding.disabled = !btnsaveplancoding.disabled;

    }
  };

  // Send request with data
  xhttp.send(formData);


}


cPrev = -1;
function sortBy(c) {
  rows = document.getElementById("tableexcute").rows.length; // num of rows
  columns = document.getElementById("tableexcute").rows[0].cells.length; // num of columns
 
  console.log(rows);
  arrTable = [...Array(rows)].map(e => Array(columns)); // create an empty 2d array


  for (ro=0; ro<rows; ro++) { // cycle through rows
      for (co=0; co<columns; co++) { // cycle through columns
          arrTable[ro][co] = document.getElementById("tableexcute").rows[ro].cells[co].innerHTML;
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
          document.getElementById("tableexcute").rows[ro].cells[co].innerHTML = arrTable[ro][co];
      }
  }
}


function searchTableexcute() {

  const tableBody = document.querySelector('#tablexcuteall');
  console.log(tableBody);
  const rows = Array.from(tableBody.querySelectorAll('tr'));
  console.log(rows);

  const searchTerm = document.querySelector('#searchinputexcute').value.toLowerCase();
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