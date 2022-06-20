import { useState, useEffect } from "react"

function AboutPage() {
  const [content, setContent] = useState()

  useEffect(() => {
    fetch("/api/about")
      .then(async (res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(({ content }) => {
        setContent(content)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <div>
      Content: <p>{content}</p>
    </div>
  )
}

export default AboutPage
