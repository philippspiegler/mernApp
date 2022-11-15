import React from "react"
import { Row, Col, Card, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles.css"

function Main({ searchCar }) {
  const [cars, setCars] = useState([])

  const myFetch = async () => {
    const myResponse = await fetch("http://localhost:5000/cars/all")
    console.log("myResponse", myResponse)
    const myData = await myResponse.json()
    console.log("myData", myData)
    setCars(myData.allCars)
    // console.log("cars :>> ", cars)
  }
  console.log("searchCar", searchCar)
  useEffect(() => {
    myFetch()
  }, [])

  return (
    <div className="car-display">
      {cars &&
        cars
          .filter((car) => car.model.includes(searchCar))
          .map((car, i) => {
            return (
              <div>
                <Row key={i}>
                  <Col>
                    <Card className="car-display-card">
                      <Link
                        className="link-details"
                        to={`${car._id}`}
                        state={car}
                      >
                        {car.model}
                        {car.image}
                      </Link>
                    </Card>
                  </Col>
                </Row>
              </div>
            )
          })}
    </div>
  )
}

export default Main
