import React from "react"
import { useState } from "react"
import { Button, Form } from "react-bootstrap"

function ImgUpload() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [newUser, setNewUser] = useState({})

  const attachFileHandler = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const submitForm = async (e) => {
    e.preventDefault()
    // fetch image from cloudinary/backend (check code snippet in postman)
    const formData = new FormData()
    formData.append("image", selectedFile)
    //below code from postman
    var requestOptions = {
      method: "POST",
      body: formData,
    }
    try {
      const response = await fetch(
        "http://localhost:5000/users/imageUpload",
        requestOptions
      )
      const result = await response.json()
      console.log("result", result)
      setNewUser({ ...newUser, avatarPicture: result.imageUrl })
    } catch (error) {}
  }

  return (
    <>
      {newUser.avatarPicture && (
        <img
          className="avatar-img"
          style={{
            width: "250px",
            height: "170px",
            borderRadius: "10px",
          }}
          src={newUser.avatarPicture}
          alt="avatar"
        />
      )}
      <Form className="avatar-form">
        <input type="file" onChange={attachFileHandler} />
        <Button className="avatar-button" onClick={submitForm}>
          upload picture
        </Button>
      </Form>
    </>
  )
}

export default ImgUpload
