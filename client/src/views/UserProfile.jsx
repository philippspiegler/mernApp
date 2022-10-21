import { useState, useEffect } from "react"
import { Form, FormLabel, Button } from "react-bootstrap"
import NavBar from "../components/NavBar"
import ImgUpload from "../components/ImgUpload"
import "./views.css"

function UserProfile() {
  const [userProfile, setUserProfile] = useState({})

  const profile = async () => {
    let urlencoded = new URLSearchParams()
    urlencoded.append("email", userProfile.email)
    urlencoded.append("name", userProfile.name)

    const requestOptions = {
      method: "GET",
      body: urlencoded,
    }

    try {
      const response = await fetch(
        "http://localhost:5000/users/profile",
        requestOptions
      )
      const result = response.json()
      setUserProfile(result)
    } catch (error) {
      console.log("error getting profile", error)
    }
  }
  // const logout = () => {
  //   localStorage.removeItem("token")
  // }

  useEffect(() => {
    profile()
  }, [])

  return (
    <>
      <NavBar />
      <h2>my profile</h2>
      <div></div>
      <ImgUpload />
      {/* <Button className="login-button" onClick={profile}>
        view profile
      </Button> */}
    </>
  )
}

export default UserProfile
