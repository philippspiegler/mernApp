import React from "react"
import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import "./components.css"

function ImgUpload() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [newUser, setNewUser] = useState({})

  const handleChangeHandler = (e) => {
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
      redirect: "follow",
    }
  }
  return (
    <>
      <Form className="avatar-form">
        <input type="file"></input>
        <Button className="avatar-button" onClick={submitForm}>
          upload avatar
        </Button>
      </Form>
    </>
  )
}

export default ImgUpload
