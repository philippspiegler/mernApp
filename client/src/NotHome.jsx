import React, { useState, useEffect } from "react"
import Landing from "./views/Landing"

function NotHome() {
  const [cars, setCars] = useState([])

  const myFetch = async () => {
    const myResponse = await fetch("http://localhost:5000/api/cars/all")
    const myData = await myResponse.json()
    console.log("myData", myData)
    setCars(myData.allCars)
    console.log("cars :>> ", cars)
  }

  useEffect(() => {
    myFetch()
    console.log("useEffect called")
  }, [])

  return (
    <>
      <div>
        <Landing cars={cars} />
      </div>
    </>
  )
}

export default NotHome
