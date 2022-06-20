import { useState, useEffect } from "react"

function AboutPage({ pid }) {
  const [queryId, setQueryId] = useState()

  useEffect(() => {
    fetch(`/api/about/${pid}`)
      .then(async (res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(({ queryId }) => {
        setQueryId(queryId)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <div>
      Sub-page PID: <p>{queryId}</p>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: "test" } }],
    fallback: false,
  }
}

export async function getStaticProps(ctx) {
  const { pid } = ctx.params
  return { props: { pid } }
}

export default AboutPage
