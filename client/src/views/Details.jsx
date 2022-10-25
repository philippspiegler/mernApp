import React from "react"
import NavBar from "../components/NavBar"
import { Row, Col, Card, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import Comments from "../components/Comments"
import "./views.css"
import { useLocation, useParams } from "react-router-dom"

function Details() {
  const [cars, setCars] = useState([])
  const carId = useParams()
  console.log(carId)
  const carData = useLocation()
  console.log("carData>>>>>", carData.state)

  const myFetch = async () => {
    const myResponse = await fetch(
      `http://localhost:5000/cars/${carId.details}`
    )
    console.log("myResponse", myResponse)
    const myData = await myResponse.json()
    console.log("myData", myData)
    setCars(myData.car)
    console.log("cars :>> ", cars)
  }

  useEffect(() => {
    myFetch()
  }, [])

  return (
    <>
      <NavBar />
      <div className="details-display">
        <p>
          <b>{cars?.model}</b>
        </p>
        <p>{cars?.make}</p>
        <p>{cars?.year}</p>
        {carData &&
          carData.state.messages.map((msg) => {
            return (
              <div>
                <p>{msg.text}</p>
              </div>
            )
          })}

        <p>
          <i>history:</i> {cars?.history?.history}
        </p>
        <Comments />
      </div>
    </>
  )
}

export default Details