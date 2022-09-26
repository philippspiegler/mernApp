import React, { useState, useEffect } from "react"
import Landing from "./views/Landing"

function Home() {
  const [cars, setCars] = useState([])
  const myFetch = async () => {
    const myResponse = await fetch("http://localhost:5000/api/cars/all")
    // const myHistory = await fetch("http://localhost:5000/api/history")
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
    <div>
      <Landing cars={cars} />
    </div>
  )
}

export default Home
