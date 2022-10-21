import React from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import { Button } from "react-bootstrap"

// import "./components.css"

function NavBar() {
  const logout = () => {
    localStorage.removeItem("token")
  }

  return (
    <>
      <Navbar style={{ backgroundColor: "#a6ffb9" }} variant="light">
        <Container>
          <Navbar.Brand href="/">Cool Cars</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="profile">Profile</Nav.Link>
            <Nav.Link href="cars">Kars</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
