
class Navbarleftsidev2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li>
                            <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li class="w-100">
                                    <a href="../home/home.html" class="nav-link px-0"> <span class="d-none d-sm-inline">HOME</span> 1 </a>
                                </li>
                                <li>
                                    <a href="../approvals/approvals.html" class="nav-link px-0"> <span class="d-none d-sm-inline">APPROVALS</span> 2 </a>
                                </li>
                                <li>
                                    <a href="../architect/architect.html" class="nav-link px-0"> <span class="d-none d-sm-inline">ARCHITECT</span> 2 </a>
                                </li>
                            </ul>
                        </li>                 
                    </ul>
                    <hr>
                    
                </div>
            </div>
           
        </div>
    </div>

        `
  }
}
customElements.define('navbar-leftsidev2', Navbarleftsidev2);




