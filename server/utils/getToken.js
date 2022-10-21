const getToken = () => {
  const token = localStorage.getItem("token")
  if (token) {
    return token
  }
  if (!token) {
    return false
  }
}
export default getToken
