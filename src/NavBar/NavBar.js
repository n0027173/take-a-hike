import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { useState } from 'react';

const NavBar = (props) => {
  const handleLinkClick = (linkName) => {
    // console.log(linkName);
    props.setActiveTab(linkName);
  };

  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <div>
          <Navbar color="faded" light>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <NavbarBrand href="/" className="mr-auto">Take a Hike</NavbarBrand>
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink onClick={(e) => {
                    handleLinkClick("Home");
                  }}>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={(e) => {
                    handleLinkClick("Mountains");
                  }}>Mountains</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={(e) => {
                    handleLinkClick("National Parks");
                  }}>National Parks</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        {/* <div className="collapse navbar-collapse" id="navbarExample01">
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
        </div>*/}
      </div> 
    </nav>
  );
};

export default NavBar;
