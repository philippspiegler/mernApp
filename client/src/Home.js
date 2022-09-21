import React, { useEffect, useState } from "react"

function Home() {
  const myFetch = async () => {
    const myResponse = await fetch("http://localhost:5000/app/cars")
    const myData = await myResponse.json()
    console.log("myData", myData)
  }

  useEffect(() => {
    myFetch()
  }, [])

  return <div>Cars</div>
}

export default Home
