import React from "react"
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import "./views.css"

function Landing() {
  return (
    <>
      <NavBar />
      <div className="landing-main">
        <h1 className="landing">
          <i>
            <b className="title-landing">Cool Cars</b>
          </i>
        </h1>
        <h4 className="landing-slogan">
          A website to <span>check out</span> and <span>add your own</span> cool
          and quirky cars!
        </h4>
      </div>
      <Link to="login" style={{ textDecoration: "none" }}>
        <Button className="login-button">login</Button>
      </Link>
      <Link to="signup" style={{ textDecoration: "none" }}>
        <Button className="login-button">sign up</Button>
      </Link>
    </>
  )
}

export default Landing
