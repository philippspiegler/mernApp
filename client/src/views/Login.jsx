import { useState, useEffect } from "react"
import getToken from "../utils/getToken"
import "./views.css"
import { Link } from "react-router-dom"

function Login() {
  const [userLogin, setUserLogin] = useState({})

  const handleChangeHandler = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
    console.log("userLogin", userLogin)
  }

  const login = async () => {
    const urlencoded = new URLSearchParams()
    urlencoded.append("userName", "test")
    urlencoded.append("password", "123456")
    urlencoded.append("email", "phil@test.com")

    var requestOptions = {
      method: "POST",
      body: urlencoded,
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/login")
      const result = await response.json()
      const token = await result.token

      console.log("result :>> ", result)
    } catch (error) {
      console.log("login error", error)
    }
  }

  const [user, setUser] = useState(null)

  const isUserLoggedIn = () => {
    const token = getToken()

    if (token) {
      console.log("user is logged in")
      setUser(true)
    }
    if (!token) {
      console.log("user not logged in")
      setUser(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    const token = getToken()
    console.log("token exists for logout", token)
  }

  useEffect(() => {
    isUserLoggedIn()
  }, [user])

  return (
    <div className="login-container">
      <div className="login-fields">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userLogin.userName ? userLogin.userName : ""}
          name="userName"
          onChange={handleChangeHandler}
        />
      </div>
      <div className="login-fields">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={userLogin.email ? userLogin.email : ""}
          onChange={handleChangeHandler}
        />
      </div>
      <div className="login-fields">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={userLogin.password ? userLogin.password : ""}
          onChange={handleChangeHandler}
        />
      </div>
      <button onChange={login}>login</button>
    </div>
  )
}

export default Login
