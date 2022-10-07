import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import "./views.css"

function Landing({ cars }) {
  // console.log("cars in Landing :>> ", cars)
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

export default Landing
