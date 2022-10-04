import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [cars, setCars] = useState([])
  const [error, setError] = useState(null)
  const [loader, setLoader] = useState(true)

  const myData = async () => {
    fetch(url)
      .then((res) => {
        res.json()
        console.log("res :>> ", res)
      })
      .then((data) => {
        console.log("data", data)
        setCars(data.allCars)
      })
      .catch((err) => {
        setLoader(false)
        setError(err)
      })
  }

  useEffect(() => {
    myData()
  }, [url])
}

export default useFetch
