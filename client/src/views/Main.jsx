import React from "react"
import { Row, Col, Card, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"
import SingleCar from "../components/SingleCar"

function Main() {
  const [cars, setCars] = useState([])

  const myFetch = async () => {
    const myResponse = await fetch("http://localhost:5000/cars/all")
    console.log("myResponse", myResponse)
    const myData = await myResponse.json()
    console.log("myData", myData)
    setCars(myData.allCars)
    // console.log("cars :>> ", cars)
  }

  useEffect(() => {
    myFetch()
  }, [])

  return (
    <>
      <div className="main-display">
        <div>
          <NavBar />
        </div>
        <div>
          {cars &&
            cars.map((c, i) => {
              return (
                <Row key={i}>
                  <Col>
                    <Card className="card">
                      {/* <SingleCar carInfo={c} /> */}
                      <Link className="link-details" to={`${c._id}`} state={c}>
                        {c.model}
                      </Link>
                    </Card>
                  </Col>
                </Row>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Main
