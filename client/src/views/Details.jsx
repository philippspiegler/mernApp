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
  const writeComment = async (text) => {
    console.log("text :>> ", text)
    console.log("carId", carId)
    const token = localStorage.getItem("token")
    let myHeaders = new Headers()
    myHeaders.append("Authorization", `Bearer ${token}`)
    let urlencoded = new URLSearchParams()
    urlencoded.append("text", text)
    urlencoded.append("carId", carId.details)

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    }

    try {
      const response = await fetch(
        "http://localhost:5000/comments/add",
        requestOptions
      )
      if (!response.error) myFetch()
      const myComments = await response.json()
      console.log("comments in FETCH :>> ", myComments)
    } catch (error) {
      console.log("error getting profile>>", error)
    }
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
        <Comments writeComment={writeComment} />
        {cars.comments &&
          cars.comments.map((comment) => {
            return (
              <div>
                <p>
                  {comment.authorId.userName}
                  <span style={{ color: "lightgray" }}> on {comment.date}</span>
                </p>
                <p>{comment.text}</p>
              </div>
            )
          })}
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
