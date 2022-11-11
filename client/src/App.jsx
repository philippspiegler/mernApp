// import Home from "./views/Home"
import Landing from "./views/Landing"
import Main from "./views/Main"
import Register from "./views/Register"
import Login from "./views/Login"
import UserProfile from "./views/UserProfile"
import Details from "./views/Details"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Register />}></Route>
          <Route path="profile" element={<UserProfile />}></Route>
          <Route path="main" element={<Main />}></Route>
          <Route path="main/:details" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
