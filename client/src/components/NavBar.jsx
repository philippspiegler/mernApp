import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import "../styles.css"

function NavBar() {
  const redirect = useNavigate()
  const isUserLoggedIn = () => {
    const token = localStorage.getItem("token")
    if (token) {
      return true
    } else {
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    redirect("/")
  }

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">Cool Cars</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="">
                {" "}
                {isUserLoggedIn() && (
                  <Link className="nav-link" to="/main">
                    Cars
                  </Link>
                )}
              </Nav.Link>
              <Nav.Link>
                {isUserLoggedIn() && (
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                )}
              </Nav.Link>
              <Form>
                <Form.Control
                  style={{
                    boxShadow: "none",
                    backgroundColor: "lightgray",
                    borderStyle: "none",
                  }}
                  size="md"
                  type="text"
                  placeholder="Search for cars"
                />
              </Form>
              <Nav.Link href="">
                {" "}
                {isUserLoggedIn() && (
                  <Button className="button" onClick={logout}>
                    logout
                  </Button>
                )}
              </Nav.Link>
              {!isUserLoggedIn() && (
                <Link to="login" style={{ textDecoration: "none" }}>
                  <Button className="button">login</Button>
                </Link>
              )}
              {!isUserLoggedIn() && (
                <Link to="signup" style={{ textDecoration: "none" }}>
                  <Button className="button">sign up</Button>
                </Link>
              )}
              <NavDropdown.Divider />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
