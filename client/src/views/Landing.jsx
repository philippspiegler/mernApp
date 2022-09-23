import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import "./views.css"

function Landing({ cars }) {
  // console.log("cars in Landing :>> ", cars)
  return (
    <div>
      {cars.map((c, i) => {
        return (
          <Row key={c._id}>
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

export default Landing
