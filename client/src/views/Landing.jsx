import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import "./views.css"

function Landing() {
  return (
    <>
      <h1 className="landing">Kool Kars</h1>
      <h4 className="landing">
        A website to <span>check out</span> and <span>add</span> kool and kwirky
        kars!
      </h4>
      <Link to="login" style={{ textDecoration: "none" }}>
        <Button className="login-button">to login</Button>
      </Link>
      <img src="./images/bmw_isetta_1958_photos_2.jpg" alt="img-not-loading" />
    </>
  )
}

export default Landing
