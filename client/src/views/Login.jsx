import { useState } from "react"
import { Form, FormLabel, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import Main from "./Main"
import "./views.css"

function Login() {
  const [userLogin, setuserLogin] = useState({})
  const redirect = useNavigate()
  const handleChangeHandler = (e) => {
    e.preventDefault()
    setuserLogin({ ...userLogin, [e.target.name]: e.target.value })
  }

  const login = async () => {
    let urlencoded = new URLSearchParams()
    urlencoded.append("email", userLogin.email)
    urlencoded.append("password", userLogin.password)

    const requestOptions = {
      method: "POST",
      body: urlencoded,
    }
    try {
      const response = await fetch(
        "http://localhost:5000/users/login",
        requestOptions
      )
      const result = await response.json()
      console.log("results in login try", result)
      if (result.message === "user not found") {
        alert("no account with this username")
      }
      if (result.message === "wrong password") {
        alert("wrong password")
      }
      const token = result.user.token
      console.log("token in login :>> ", token)

      if (token) {
        localStorage.setItem("token", token)
        redirect("/main")
      }
    } catch (error) {
      console.log("error in login fetch")
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    console.log("logout :>> ", logout)
  }

  return (
    <>
      <NavBar />
      <div className="login-form">
        <h2 className="title-landing">Login</h2>
        <Form.Group>
          <Form.Label>email</Form.Label>
          <Form.Control
            id="email"
            type="email"
            name="email"
            value={userLogin.email ? userLogin.email : ""}
            onChange={handleChangeHandler}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            name="password"
            value={userLogin.password ? userLogin.password : ""}
            onChange={handleChangeHandler}
          />
        </Form.Group>

        <Button className="login-button" onClick={login}>
          login
        </Button>
        <Button onClick={logout}>logout</Button>
      </div>
    </>
  )
}

export default Login
