import React from "react"
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

function Landing() {
  //this goes in AuthContext
  const isUserLoggedIn = () => {
    const token = localStorage.getItem("token")
    if (token) {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <NavBar />
      <div></div>
    </>
  )
}

export default Landing
