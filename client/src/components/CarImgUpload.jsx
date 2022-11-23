import React from "react"
import { useState } from "react"
import { Button, Form } from "react-bootstrap"

function ImgUpload({ postRoute, onImageUploadSuccess }) {
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
        `http://localhost:5000${postRoute}`,
        requestOptions
      )
      const result = await response.json()
      console.log("result", result)
      onImageUploadSuccess(result)
    } catch (error) {}
  }

  return (
    <>
      {/* {newUser.avatarPicture && (
        <img
          className="avatar-img"
          style={{
            width: "250px",
            height: "170px",
            borderRadius: "10px",
            margin: "2em",
            objectFit: "cover",
          }}
          src={newUser.avatarPicture}
          alt="avatar"
        />
      )} */}
      <Form className="avatar-form">
        <input type="file" onChange={attachFileHandler} />
        <Button className="img-upload-button" onClick={submitForm}>
          upload picture
        </Button>
      </Form>
    </>
  )
}

export default ImgUpload
