import React from "react"

function SingleCar({ carInfo }) {
  console.log("carInfo", carInfo)
  return (
    <div>
      <h2>Single car</h2>
      <p>{carInfo.model}</p>
    </div>
  )
}

export default SingleCar
