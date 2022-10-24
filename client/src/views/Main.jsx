import React from "react"
import { Row, Col, Card, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import "./views.css"
import NavBar from "../components/NavBar"

function Main() {
  const [cars, setCars] = useState([])
  const [comment, setComment] = useState("")

  const myFetch = async () => {
    const myResponse = await fetch("http://localhost:5000/cars/all")
    console.log("myResponse", myResponse)
    const myData = await myResponse.json()
    console.log("myData", myData)
    setCars(myData.allCars)
    // console.log("cars :>> ", cars)
  }

  const postComment = () => {
    setComment()
    console.log("comment :>> ", setComment)
  }

  useEffect(() => {
    myFetch()
    console.log("useEffect called")
  }, [])

  // const {cars} = useCustomFetch()
  return (
    <>
      <div className="main-display">
        <div>
          <NavBar />
        </div>
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
                      <p>{c.history.history}</p>
                    </div>
                    <div className="comment">
                      {/* <textarea></textarea> */}
                      <Button onClick={postComment}>post my comment</Button>
                    </div>
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
