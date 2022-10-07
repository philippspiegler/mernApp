import { useState } from "react"

function ImgUpload() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [newUser, setNewUser] = useState({})

  const handleChangeHandler = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const attachFileHandler = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const submitForm = async (e) => {
    e.preventDefault() // so app doesn't refresh on submit and loose information

    const formData = new FormData()
    formData.append("image", selectedFile)
    console.log("formData", formData)
    // compose the object with the options to be sent with our request, including the type of method, and use the body of the request to attach data
    const requestOptions = {
      method: "Post",
      body: formData,
    }
  }

  return (
    <>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={newUser.userName ? newUser.userName : ""}
          name="userName"
          onChange={handleChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={newUser.email ? newUser.email : ""}
          onChange={handleChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={newUser.password ? newUser.password : ""}
          onChange={handleChangeHandler}
        />
      </div>
      <form>
        <h3>user registration and file upload</h3>
        <input type="file" />
        <button onClick={submitForm}>upload image</button>
        {newUser.avatarPicture && (
          <img src={newUser.avatarPicture} alt="userPic" />
        )}
      </form>
    </>
  )
}

export default ImgUpload
