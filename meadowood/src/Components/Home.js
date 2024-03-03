import { useContext } from "react"
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"
import { UserContext } from "../Contexts/UserContext"

function Home() {

  const { isAdmin } = useContext(UserContext)

  return (
    <div>
      <Navbar
        className="almostWhite"
        expand="lg"
        variant="light">
        <Container>
          <img
            className="nav-img"
            src="https://i.postimg.cc/Nj4WN01b/Copy-of-Meadowood-removebg-preview.png" 
            alt="Meadowood - Live better, Love better, Serve better"/>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav">
            <Nav>
              {isAdmin ? (
                <Link
                  className="nav-link hover-effect nvbr"
                  to="/admin"
                >Admin</Link>
              ) : (
                <></>
              )}
              <Link
                className="nav-link hover-effect nvbr" to="/">Home</Link>
              <NavDropdown
                className="nvbr"
                title="Watch"
                id="basic-nav-dropdown">
                <Link to="/live"
                  className="notUnderlined nvbr">
                  <NavDropdown.Item
                    href="/live">
                    Live
                  </NavDropdown.Item>
                </Link>
                <Link to="clips"
                  className="notUnderlined nvbr">
                  <NavDropdown.Item
                    href="/clips">
                    Clips
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              {/* <Link className="nav-link hover-effect" to="/ministries">Ministries</Link> */}
              <NavDropdown title="Ministries" id="basic-nav-dropdown" className="nvbr">
                <Link to="/kids" className="notUnderlined">
                  <NavDropdown.Item href="#action/3.1">
                    Kids
                  </NavDropdown.Item>
                </Link>
                <Link to="/youth" className="notUnderlined nvbr">
                  <NavDropdown.Item href="#action/3.2">
                    Newflame Students
                  </NavDropdown.Item>
                </Link>
                <Link to="/youngadults" className="notUnderlined nvbr">
                  <NavDropdown.Item href="#action/3.3">
                    Christ 4 Life
                  </NavDropdown.Item>
                </Link>
                <Link to="/ultimate" className="notUnderlined nvbr">
                  <NavDropdown.Item href="#action/3.4">
                    Ultimate
                  </NavDropdown.Item>
                </Link>
                <Link to="/youngatheart" className="notUnderlined nvbr">
                  <NavDropdown.Item href="#action/3.5">
                    Young at Heart
                  </NavDropdown.Item>
                </Link>
                <Link to="/foodpantry" className="notUnderlined nvbr">
                  <Dropdown.Divider />
                  <NavDropdown.Item href="#action/3.6">
                    Food Pantry
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link className="nav-link hover-effect nvbr" to="/classes">Classes</Link>
              <NavDropdown title="Events" id="basic-nav-dropdown" className="nvbr">
                <Link to="/events" className="notUnderlined">
                  <NavDropdown.Item href="#action/3.1">
                    All Events
                  </NavDropdown.Item>
                </Link>
                <Link to="/eventssignup" className="notUnderlined nvbr">
                  <NavDropdown.Item href="#action/3.2">
                    Event Sign Up
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown className="nvbr" title="Donate" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.paypal.com/donate?token=dAPUbR6l-8mcvWRdRvxLGBSAqI6Cbs4eHsT276tLRzHpL-IdjwQrm2uXC07XZMmK97Y9SRiPCcQRuLyN" target="_top">
                  Paypal
                </NavDropdown.Item>
                <NavDropdown.Item>
                  Venmo
                </NavDropdown.Item>
              </NavDropdown>
              <Link className="nav-link hover-effect nvbr" to="/about">About us</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}
export default Home