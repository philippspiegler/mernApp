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
  }

  const onImageUploadSuccess = (data) => {
    console.log("data :>> ", data)
  }
  useEffect(() => {
    profile()
  }, [])

  return (
    <>
      <NavBar />
      <div className="profile-div">
        <h2>my profile</h2>

        <tr>
          <td>username</td>
          <td className="profile-td">
            <b>{userProfile.userName}</b>
          </td>
        </tr>
        <tr>
          <td>email</td>
          <td className="profile-td">
            <b>{userProfile.email}</b>
          </td>
        </tr>

        <p>avatar</p>
        {userProfile.avatarPicture && (
          <img
            className="avatar-img"
            style={{
              width: "250px",
              height: "170px",
              borderRadius: "10px",
              margin: "2em",
              objectFit: "cover",
            }}
            src={userProfile.avatarPicture}
            alt="avatar"
          />
        )}
        <ImgUpload
          onImageUploadSuccess={onImageUploadSuccess}
          postRoute={"/users/imageUpload"}
        />
        {isUserLoggedIn() && (
          <Button className="logout-button" onClick={logout}>
            logout
          </Button>
        )}
      </div>
    </>
  )
}

export default UserProfile
