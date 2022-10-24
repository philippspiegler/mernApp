import React from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
// import "./components.css"

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
    <>
      <Navbar style={{ backgroundColor: "#a6ffb9" }} variant="light">
        <Container>
          <Navbar.Brand className="nav-title" href="/">
            Cool Cars
          </Navbar.Brand>
          {isUserLoggedIn() && (
            <Link className="nav-link" to="/main">
              Cars
            </Link>
          )}
          {isUserLoggedIn() && (
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          )}
          {isUserLoggedIn() && (
            <Button className="log-button" onClick={logout}>
              logout
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
