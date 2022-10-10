// import Home from "./views/Home"
import Landing from "./views/Landing"
import ImgUpload from "./views/ImgUpload"
import Home from "./views/Home"
import Login from "./views/Login"
import Profile from "./views/Profile"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          {/* <Fetch /> */}
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          {/* <Profile />
      <ImgUpload /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
