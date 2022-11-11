import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"

function Comments() {
  const [comments, setComments] = useState([])

  const writeComment = async () => {
    const token = localStorage.getItem("token")
    let myHeaders = new Headers()
    myHeaders.append("Authorization", `Bearer ${token}`)

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    }

    try {
      const response = await fetch(
        "http://localhost:5000/comments/comments",
        requestOptions
      )
      const myComments = await response.json()
      console.log("comments in FETCH :>> ", myComments)
      setComments(myComments.allComments)
    } catch (error) {
      console.log("error getting profile>>", error)
    }
  }

  const commentTime = new Date()

  useEffect(() => {
    writeComment()
  }, [])

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: "1em",
          borderRadius: "25px",
        }}
      >
        <p style={{ fontSize: "25px" }}>Comments</p>
        <Form
          onSubmit={(e) => {
            console.log(e.target.value)
          }}
        >
          <Form.Control type="text" placeholder="your comment" />
          <Button className="button avatar-button" onClick={writeComment}>
            post
          </Button>
        </Form>
        <p
          style={{
            marginTop: "10px",
            padding: "10px",
            borderRadius: "15px",
          }}
        >
          <i>
            {comments[0]?.author}
            <i style={{ color: "lightgray" }}>date here</i>
          </i>
          <br />
          {comments[0]?.text}
          <br />
        </p>
      </div>
    </>
  )
}

export default Comments
