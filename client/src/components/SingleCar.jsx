import React from "react"

function SingleCar({ carInfo }) {
  console.log("carInfo", carInfo)
  return (
    <div>
      <h2>{carInfo.model}</h2>
    </div>
  )
}

export default SingleCar
