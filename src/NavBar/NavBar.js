// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas} from '@fortawesome/free-solid-svg-icons';

const NavBar = (props) => {
  const handleLinkClick = (linkName) => {
    // console.log(linkName);
    props.setActiveTab(linkName);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className="nav-item active"
              onClick={(e) => {
                handleLinkClick("Home");
              }}
            >
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                handleLinkClick("Mountains");
              }}
            >
              <a className="nav-link" href="#">
                Mountains
              </a>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                handleLinkClick("National Parks");
              }}
            >
              <a className="nav-link" href="#">
                National Parks
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
