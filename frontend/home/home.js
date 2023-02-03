
//<-------------- save requriment ------------------->
var requriment_create = function(){
    var myheaders = new Headers()
    myheaders.append("Content-Type","application/json");

var raw = JSON.stringify({
    "processname": document.getElementById("processname").value,
    // "startdate": document.getElementById("startdate").value,
    // "enddate": document.getElementById("enddate").value,
    "asis_id": document.getElementById("asis_id").value,
    "budget_id": document.getElementById("budget_id").value,
    "doingby_id": document.getElementById("doingby_id").value,
    "tobe_id": document.getElementById("tobe_id").value,
    "admin_id": document.getElementById("admin_id").value,
    "user_id": document.getElementById("user_id").value,
    "approver_id": document.getElementById("approver_id").value,
})

console.log(raw)
var requestOptions = {
    method: 'POST',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };
  
  fetch("http://localhost/projectbacklog/backend/home/home.php", requestOptions)
    .then(response => response.text())
    .then(result =>{
        var jsonObj = JSON.parse(result);
        if(jsonObj.status == 'OK'){
            alert('ok');
        }else{
            alert('not ok');
        }

    }  
    )
    .catch(error => console.log('error', error));
}



//<-------------- save requriment ------------------->
var requriment_update = function(){
    var myheaders = new Headers()
    myheaders.append("Content-Type","application/json");

var raw = JSON.stringify({
    "id": document.getElementById(" "),
    "processname": document.getElementById("processname"),
    "startdate": document.getElementById("startdate"),
    "enddate": document.getElementById("enddate"),
    "painpoint": document.getElementById("painpoint"),
    "description": document.getElementById("description"),
    "results_benefit": document.getElementById("results_benefit"),
    "exclusion_constraints": document.getElementById("exclusion_constraints"),
    "work_flow": document.getElementById("work_flow"),
    "extract_file": document.getElementById("extract_file"),
    "asis_id": document.getElementById("asis_id"),
    "doingby_id": document.getElementById("doingby_id"),
    "tobe_id": document.getElementById("tobe_id"),
    "budget_id": document.getElementById("budget_id"),
    "member_id": document.getElementById("member_id"),
    "admin_id": document.getElementById("admin_id"),
    "user_id": document.getElementById("user_id"),
    "approver_id": document.getElementById("approver_id"),
})

var requestOptions = {
    method: 'POST',
    headers: myheaders,
    body: raw,
    redirect: 'follow',
  };
  
  fetch("http://localhost/projectbacklog/backend/home/home.php", requestOptions)
    .then(response => response.text())
    .then(result =>{
        var jsonObj = JSON.parse(result);
        if(jsonObj.status == 'ok'){
            alert('ok');
        }else{
            alert('not ok');
        }

    }  
    )
    .catch(error => console.log('error', error));
}

