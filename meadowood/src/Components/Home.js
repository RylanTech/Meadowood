import { useContext, useEffect } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"
import { UserContext } from "../Contexts/UserContext"

function Home() {

  const { isAdmin } = useContext(UserContext)

  return (
    <div>
      <Navbar className="almostWhite" expand="lg" variant="light">
        <Container>
          <img className="nav-img" src="https://i.postimg.cc/YS7vzYdY/mwlogo2.png" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {isAdmin ? (
                <Link className="nav-link hover-effect nvbr" to="/admin">Admin</Link>
              ) : (
                <></>
              )}
              <Link className="nav-link hover-effect nvbr" to="/">Home</Link>
              <NavDropdown className="nvbr" title="Watch" id="basic-nav-dropdown">
                <Link to="/live" className="notUnderlined nvbr">
                  <NavDropdown.Item>
                    Live
                  </NavDropdown.Item>
                </Link>
                <Link to="clips" className="notUnderlined nvbr">
                  <NavDropdown.Item>
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
                    Youth
                  </NavDropdown.Item>
                </Link>
                <Link to="/youngadults" className="notUnderlined nvbr">
                  <NavDropdown.Item href="#action/3.3">
                    Young Adults
                  </NavDropdown.Item>
                </Link>
                <Link to="/youngadults" className="notUnderlined nvbr">
                  <NavDropdown.Item href="#action/3.4">
                    Adults
                  </NavDropdown.Item>
                </Link>
                <Link to="/seniors" className="notUnderlined nvbr">
                  <NavDropdown.Item href="#action/3.5">
                    Seniors
                  </NavDropdown.Item>
                </Link>
                <Link to="/foodpantry" className="notUnderlined nvbr">
                  <NavDropdown.Item href="#action/3.6">
                    Food Pantry
                  </NavDropdown.Item>
                </Link>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
              <Link className="nav-link hover-effect nvbr" to="/classes">Classes</Link>
              <NavDropdown className="nvbr" title="Donate" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.paypal.com/donate?token=dAPUbR6l-8mcvWRdRvxLGBSAqI6Cbs4eHsT276tLRzHpL-IdjwQrm2uXC07XZMmK97Y9SRiPCcQRuLyN" target="_top">
                  Paypal
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Venmo
                </NavDropdown.Item>
              </NavDropdown>
              <Link className="nav-link hover-effect nvbr" to="/events">Events</Link>
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