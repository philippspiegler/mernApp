import { createContext, useState, useEffect, useNavigate } from "react"
import getToken from "../utils/getToken"
export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null)
  const redirect = useNavigate()

  const isUserLoggedIn = () => {
    const token = getToken
    if (token) {
      setUser(true)
    } else {
      setUser(false)
      console.log("error logging user in")
    }
  }

  const logoutUser = () => {
    try {
      localStorage.removeItem("token")
      redirect("/")
    } catch (error) {
      console.log("error logout AuthContext :>> ", error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        logoutUser,
        user,
        setUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
