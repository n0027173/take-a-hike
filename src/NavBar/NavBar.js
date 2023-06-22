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
                {/* <NavItem>
                  <NavLink onClick={(e) => {
                    handleLinkClick("Home");
                  }}>Home</NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink onClick={(e) => {
                    handleLinkClick("Mountains");
                  }}>Mountains</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/MountainPage">Components</NavLink>
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
      </div> 
    </nav>
  );
};

export default NavBar;
