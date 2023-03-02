import * as React from 'react'
import { useParams } from 'react-router-dom'

function Tutorial(): JSX.Element {
  const { videoId } = useParams()
  return <h1 className="text-6xl mt-96">{videoId}</h1>
}

export default Tutorial
