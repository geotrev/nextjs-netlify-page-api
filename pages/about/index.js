import { useState, useEffect } from "react"

function AboutPage() {
  const { content, setContent } = useState(null)

  useEffect(() => {
    fetch("/about")
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then((content) => {
        setContent(content)
      })
  }, [])

  return (
    <div>
      Content: <p>{content}</p>
    </div>
  )
}

export default AboutPage
