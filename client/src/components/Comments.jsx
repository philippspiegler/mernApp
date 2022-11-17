import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"

function Comments({ writeComment }) {
  const [newComment, setNewComment] = useState("")

  // const writeComment = async () => {
  //   const token = localStorage.getItem("token")
  //   let myHeaders = new Headers()
  //   myHeaders.append("Authorization", `Bearer ${token}`)

  //   const requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //   }

  //   try {
  //     const response = await fetch(
  //       "http://localhost:5000/comments/comments",
  //       requestOptions
  //     )
  //     const myComments = await response.json()
  //     console.log("comments in FETCH :>> ", myComments)
  //     setNewComment(myComments.allComments)
  //   } catch (error) {
  //     console.log("error getting profile>>", error)
  //   }
  // }
  const handleSubmit = async (e) => {
    e.preventDefault()
    writeComment(newComment)
  }

  return (
    <>
      <div>
        <p style={{ fontSize: "25px" }}>Comments</p>
        <Form>
          <Form.Control
            className="comment-fcontrol"
            as="textarea"
            placeholder="your comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button className="comment-button" onClick={handleSubmit}>
            post
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Comments
