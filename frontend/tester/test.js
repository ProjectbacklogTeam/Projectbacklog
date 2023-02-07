window.onload = function () {
    const router = new Smart.Router('mainView', './');

    router.setRoutes([
        { path: '/', template: 'homeTemplate', title: 'Home' },
        { path: '/about', template: 'aboutTemplate', title: 'About' },
        { path: '/contacts', template: 'contactsTemplate', title: 'Contacts' }
    ]);

    router.route('/');
};



//<-------------- save requriment ------------------->
// var requriment_create = function () {
//     var myheaders = new Headers()
//     myheaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//         "processname": document.getElementById("processname").value,
//         // "startdate": document.getElementById("startdate").value,
//         // "enddate": document.getElementById("enddate").value,
//         "asis_id": document.getElementById("asis_id").value,
//         "budget_id": document.getElementById("budget_id").value,
//         "doingby_id": document.getElementById("doingby_id").value,
//         "tobe_id": document.getElementById("tobe_id").value,

//         "admin_id": document.getElementById("admin_id").value,
//         "user_id": document.getElementById("user_id").value,
//         "approver_id": document.getElementById("approver_id").value,
//     })

//     console.log(raw)
//     var requestOptions = {
//         method: 'POST',
//         headers: myheaders,
//         body: raw,
//         redirect: 'follow',
//     };

//     fetch("http://localhost/projectbacklog/backend/home/home.php", requestOptions)
//         .then(response => response.text())
//         .then(result => {
//             var jsonObj = JSON.parse(result);
//             if (jsonObj.status == 'OK') {
//                 alert('ok');
//             } else {
//                 alert('not ok');
//             }

//         }
//         )
//         .catch(error => console.log('error', error));
// }



//<-------------- save requriment ------------------->
// var requriment_update = function () {
//     var myheaders = new Headers()
//     myheaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//         "id": document.getElementById(" "),
//         "processname": document.getElementById("processname"),
//         "startdate": document.getElementById("startdate"),
//         "enddate": document.getElementById("enddate"),
//         "painpoint": document.getElementById("painpoint"),
//         "description": document.getElementById("description"),
//         "results_benefit": document.getElementById("results_benefit"),
//         "exclusion_constraints": document.getElementById("exclusion_constraints"),
//         "work_flow": document.getElementById("work_flow"),
//         "extract_file": document.getElementById("extract_file"),
//         "asis_id": document.getElementById("asis_id"),
//         "doingby_id": document.getElementById("doingby_id"),
//         "tobe_id": document.getElementById("tobe_id"),
//         "budget_id": document.getElementById("budget_id"),
//         "member_id": document.getElementById("member_id"),
//         "admin_id": document.getElementById("admin_id"),
//         "user_id": document.getElementById("user_id"),
//         "approver_id": document.getElementById("approver_id"),
//     })

//     var requestOptions = {
//         method: 'POST',
//         headers: myheaders,
//         body: raw,
//         redirect: 'follow',
//     };

//     fetch("http://localhost/projectbacklog/backend/home/home.php", requestOptions)
//         .then(response => response.text())
//         .then(result => {
//             var jsonObj = JSON.parse(result);
//             if (jsonObj.status == 'ok') {
//                 alert('ok');
//             } else {
//                 alert('not ok');
//             }

//         }
//         )
//         .catch(error => console.log('error', error));
// }




//  <div class="modal fade" id="datadetail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
// <div class="modal-dialog modal-lg" style="font-weight: normal;">
//   <div class="modal-content">
//     <div class="modal-header">
//       <h5 class="modal-title" id="exampleModalLabel">Project detail</h5>
//       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//     </div>
//     <div class="modal-body">
//       <div class="row">
//         <div class="col-12 center" style="border: 1px solid black;height: 850px; width: 460px;">
//           <div class="row mt-3">
//             <span>ส่ง Email เพื่อยืนยันการอนุมัติ</span>
//             <div class="col-12 mb-1 mt-4">
//               <div class="input-group mb-3">
//                 <span class="input-group-text" id="inputGroup-sizing-default">Topic</span>
//                 <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
//               </div>
//             </div>
//             <div class="col-12 mb-1 mt-2">
//               <div class="input-group mb-3">
//                 <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
//                 <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
//               </div>
//             </div>
//             <div class="col-12 mb-1 mt-2">
//               <textarea type="text" style="height: 400px;width: 100%;"></textarea>
//             </div>
//             <div class="col-5 mb-1 mt-2">
//               <span>Work Flow </span>
//               <input class="mt-3 w-100" type="text" disabled>
//             </div>
//             <div class="col-5 mb-1 mt-2 ">
//               <span>Extract File
//               </span>
//               <input class="mt-3 w-100" type="text" disabled>
//             </div>
//           </div>
//           <div class="col-12 mt-3 mb-3" style="text-align: end;">
//             <button type="button" class="buttonsend">SAVE AND SEND</button>

//           </div>

//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>