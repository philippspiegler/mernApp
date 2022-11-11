import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Form, FormLabel, Button } from "react-bootstrap"
import NavBar from "../components/NavBar"
import ImgUpload from "../components/ImgUpload"
import { redirect } from "react-router-dom"

function UserProfile() {
  const redirect = useNavigate()
  const [userProfile, setUserProfile] = useState({})

  const profile = async () => {
    const token = localStorage.getItem("token")
    // console.log("token :>> ", token)
    let myHeaders = new Headers()
    myHeaders.append("Authorization", `Bearer ${token}`)

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    }

    try {
      const response = await fetch(
        "http://localhost:5000/users/profile",
        requestOptions
      )
      const result = await response.json()
      console.log("result in user profile fetch>>", result)
      setUserProfile(result)
    } catch (error) {
      console.log("error getting profile>>", error)
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
  const logout = () => {
    localStorage.removeItem("token")
    redirect("/")
  }

  useEffect(() => {
    profile()
  }, [])

  return (
    <>
      <NavBar />
      <h2>my profile</h2>
      <div className="profile">
        <p>
          my username: <b>{userProfile.userName}</b>
        </p>
        <p>
          my email: <b>{userProfile.email}</b>
        </p>
        <p>{userProfile.avatarPicture}</p>
      </div>
      <ImgUpload />
      {isUserLoggedIn() && (
        <Button className="logout-button" onClick={logout}>
          logout
        </Button>
      )}
    </>
  )
}

export default UserProfile
