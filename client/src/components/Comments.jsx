import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"

function Comments({ writeComment }) {
  const [newComment, setNewComment] = useState("")

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
