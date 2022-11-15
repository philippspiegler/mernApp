import React, { useState } from "react"
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import Main from "../components/Main"

function Landing() {
  const [searchCar, setSearchCar] = useState("")

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
      <NavBar searchCar={searchCar} setSearchCar={setSearchCar} />
      <Main searchCar={searchCar} />
    </>
  )
}

export default Landing
