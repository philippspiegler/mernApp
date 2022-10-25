import { useEffect, useState } from "react"

function Comments() {
  const [comments, setComments] = useState([])

  const myFetch = async () => {
    const myResponse = await fetch("http://localhost:5000/comments/comments")
    console.log("myResponse", myResponse)
    const myData = await myResponse.json()
    console.log("commments", myData.allComments)
    setComments(myData.allComments)
  }

  useEffect(() => {
    myFetch()
  }, [])

  return (
    <>
      <p>write a comment:</p>
      <form>
        <input type="text" />
        <button>send comment</button>
      </form>
      {comments &&
        comments.map((comment, index) => {
          return (
            <div key={index}>
              <p>{comment.text}</p>
              <p>{comment.author}</p>
            </div>
          )
        })}
    </>
  )
}

export default Comments
