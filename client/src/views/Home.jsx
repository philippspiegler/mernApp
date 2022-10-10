import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import { useEffect, useState } from "react"
import "./views.css"

function Home() {
  const [cars, setCars] = useState([])

  const myFetch = async () => {
    const myResponse = await fetch("http://localhost:5000/api/cars/all")
    const myData = await myResponse.json()
    console.log("myData", myData)
    setCars(myData.allCars)
    // console.log("cars :>> ", cars)
  }

  useEffect(() => {
    myFetch()
    console.log("useEffect called")
  }, [])

  // const {cars} = useCustomFetch()
  return (
    <div>
      {cars.map((c, i) => {
        return (
          <Row key={i}>
            <Col>
              <Card className="card">
                <div>
                  <h4>{c.model}</h4>
                  <h5>{c.make}</h5>
                  <p>{c.year}</p>
                </div>
              </Card>
            </Col>
          </Row>
        )
      })}
    </div>
  )
}

export default Home
