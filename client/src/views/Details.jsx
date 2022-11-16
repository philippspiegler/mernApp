import React from "react"
import NavBar from "../components/NavBar"
import { Row, Col, Card, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import Comments from "../components/Comments"
import { useLocation, useParams } from "react-router-dom"
import ImgUpload from "../components/ImgUpload"
import "../styles.css"

function Details() {
  const [cars, setCars] = useState([])
  const carId = useParams()
  console.log(carId)
  const carData = useLocation()
  console.log("carData>>>>>", carData.state)

  const myFetch = async () => {
    const myResponse = await fetch(
      `http://localhost:5000/cars/id/${carId.details}`
    )
    console.log("myResponse", myResponse)
    const myData = await myResponse.json()
    console.log("myData", myData)
    setCars(myData.car)
    console.log("cars :>> ", cars)
  }
  const handleUpdateCar = ({ car }) => {
    setCars(car)
  }
  useEffect(() => {
    myFetch()
  }, [])

  return (
    <>
      <NavBar />
      <div className="details-display">
        <b style={{ fontSize: "35px" }}>{cars?.model}</b>
        <p style={{ fontSize: "25px" }}>{cars?.make}</p>
        <p>{cars?.year}</p>
        <br />
        {cars?.image && (
          <img
            className="avatar-img"
            style={{
              marginTop: "-1.5em",
              marginLeft: "-.1em",
              width: "550px",
              height: "370px",
              borderRadius: "10px",
              margin: "2em",
              objectFit: "cover",
            }}
            src={cars?.image}
            alt="avatar"
          />
        )}
        <p className="history">
          <b>history</b>
          <br /> {cars?.history?.history}
        </p>
        <Comments />
        <p>Upload your {cars.model} picture</p>{" "}
        <ImgUpload
          onImageUploadSuccess={handleUpdateCar}
          postRoute={`/cars/imageUpload/${carId.details}`}
        />
      </div>
    </>
  )
}

export default Details
