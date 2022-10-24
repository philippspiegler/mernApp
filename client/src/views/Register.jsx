import { useState } from "react"
import { Form, FormLabel, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import "./views.css"

function Register() {
  const [newUser, setNewUser] = useState({})
  const redirect = useNavigate()
  // const [usernameError, setUserNameError ] = useState(null)
  const handleChangeHandler = (e) => {
    e.preventDefault()
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const signUp = async () => {
    let urlencoded = new URLSearchParams()
    urlencoded.append("userName", newUser.userName)
    urlencoded.append("email", newUser.email)
    urlencoded.append("password", newUser.password)

    const requestOptions = {
      method: "POST",
      body: urlencoded,
    }

    try {
      const response = await fetch(
        "http://localhost:5000/users/signUp",
        requestOptions
      )
      const results = response.json()
      console.log("results :>> ", results)
      if (results.message === "user registered successfully") {
        redirect("/signup")
      }
      if (results.message === "user already exists") {
        alert("this user already exists")
      }
    } catch (error) {
      console.log("error in signup fetch", error)
    }
  }

  const isUserLoggedIn = () => {
    const token = localStorage.getItem("token")
    if (token) {
      return true
    } else {
      return false
    }
  }

  // useEffect

  return (
    <>
      <NavBar />
      <div className="signup-form">
        <h2 className="title-landing">Sign Up</h2>
        <Form.Group>
          <Form.Label>username</Form.Label>
          <Form.Control
            className="form-control"
            id="username"
            name="userName"
            type="text"
            value={newUser.userName ? newUser.userName : ""}
            onChange={handleChangeHandler}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>email</Form.Label>
          <Form.Control
            className="form-control"
            id="email"
            name="email"
            type="email"
            value={newUser.email ? newUser.email : ""}
            onChange={handleChangeHandler}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>password</Form.Label>
          <Form.Control
            className="form-control"
            id="password"
            name="password"
            type="password"
            value={newUser.password ? newUser.password : ""}
            onChange={handleChangeHandler}
          />
        </Form.Group>

        <Button className="log-button" onClick={signUp}>
          sign up
        </Button>
      </div>
    </>
  )
}

export default Register
