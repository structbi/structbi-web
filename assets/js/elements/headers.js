
class Headers
{
    constructor(){}
    Header_()
    {
        $(".main_header").append
        (`
            <div class="container-fluid d-flex justify-content-between">
                <a class="navbar-brand d-flex align-items-center" href="../start/">
                    <div class="container">
                        <img width="40px;" src="../assets/images/logo-150x150.png" alt="Logo">
                    </div>
                    <strong class="container ml-2 d-none d-md-block">StructBI</strong>
                </a>
                <button class="navbar-toggler d-md-none collapsed btn text-end" type="button" data-bs-toggle="collapse" data-bs-target=".sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="sidebar collapse navbar-collapse">
                    <div class="d-flex flex-row-reverse ms-auto">
                        <ul class="navbar-nav ms-md-0 me-3 me-lg-4">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="../start/#settings">Configuraci&oacute;n</a></li>
                                    <li><a class="dropdown-item" href="#!">Cerrar sesi&oacute;n</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `);    
    }
    HeaderForm_ ()
    {
        $(".main_header").append
        (`
            <div class="container-fluid d-flex justify-content-between">
                <a class="navbar-brand d-flex align-items-center" href="../start/">
                    <div class="container">
                        <img width="40px;" src="../assets/images/logo-150x150.png" alt="Logo">
                    </div>
                    <strong class="container ml-2 d-none d-md-block">StructBI</strong>
                </a>
                <button class="navbar-toggler d-md-none collapsed btn text-end" type="button" data-bs-toggle="collapse" data-bs-target=".sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="sidebar d-md-flex justify-content-between collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link btn btn-ligth" aria-current="page" href="../start/">
                                <i class="fas fa-chevron-left me-2"></i>
                                Inicio
                            </a>
                        </li>
                        <li class="nav-item dropdown ms-md-2 mt-2 mt-md-0">
                            <a class="nav-link dropdown-toggle btn btn-ligth" href="#" id="form_selection" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Form 1
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="form_selection">
                                <li><a class="dropdown-item" href="#">Form 1</a></li>
                                <li><a class="dropdown-item" href="#">Form 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="sidebar collapse navbar-collapse">
                    <div class="d-flex flex-row-reverse ms-auto">
                        <ul class="navbar-nav ms-md-0 me-3 me-lg-4">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="../start/#settings">Configuraci&oacute;n</a></li>
                                    <li><a class="dropdown-item" href="#!">Cerrar sesi&oacute;n</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `);
    }
}