import NavLogo from "./NavLogo/NavLogo";

const NavBar = () => {
  return (
    <>
      {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
      {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
      <NavLogo /> 
      <div class="" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">
              Home
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="ntl-parks.html">
              National Parks
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="mtns-info.html">
              Mountains Information
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
