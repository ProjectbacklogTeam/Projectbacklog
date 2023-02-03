// //<-------------- Name Navbar ------------------->
// boxname = document.getElementById('boxname');


// // boxs.innerHTML = 'Loding..'
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("http://localhost/projectbacklog/backend/login/login_db.php", requestOptions)
//     .then(response => response.text())
//     .then(result =>{
//         var jsonObj = JSON.parse(result);
//         for(let attraction of jsonObj){
//             const box = `
//             <div  id="boxname" class="center">
//             <span style= "margin-left:-10px">
//               <i class="fa-regular fa-user fa-4x" style="color: white;"></i><br><br>
//               `+attraction.firstname+" "+attraction.lastname+`
//             </span>
//           </div>
//             `
//             boxname.insertAdjacentHTML('afterend',box)
//         }
//     }
//     )
//     .catch(error => console.log('error', error));

// //<-------------- requriment Navbar ------------------->
// tablereq = document.getElementById('requrimenttable');
// tablereq.innerHTML = 'Loding....'
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("http://localhost/projectbacklog/backend/req/req.php", requestOptions)
//     .then(response => response.text())
//     .then(result =>{
//         tablereq.innerHTML = ""
//         var jsonObj = JSON.parse(result);
//         for(let attraction of jsonObj){
//             const datatable = `      
//             <tbody>
//               <tr>
//                 <th scope="col">`+attraction.id+`</th>
//                 <th scope="col"> </th>
//                 <th scope="col"></th>
//                 <th scope="col">`+attraction.processname+`</th>
//                 <th scope="col"></th>
//                 <th scope="col">
//                     <!-- Button trigger modal -->
//                     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//                         update
//                     </button>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </th>
//         </tr>
//         </tbody>
//             `
//             tablereq.insertAdjacentHTML('beforeend',datatable)
//         }
//     }
   
//     )
//     .catch(error => console.log('error', error));
