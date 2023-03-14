import * as React from 'react'
import { useParams } from 'react-router-dom'
import _ from 'lodash'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback, SEO } from 'components'

function Tutorial(): JSX.Element {
  const { videoId } = useParams()
  const id = _.trim(videoId, ':')
  return (
    <>
      <SEO title="Tutorial" description="Watch how to make a meal." />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <section className="flex flex-col justify-center items-center md:px-12 px-2 pt-16 md:pt-20">
          <iframe
            className="min-w-full min-h-[80vh]"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&fs=1`}
            title="YouTube video player"
            allow="accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope; picture-in-picture;
          web-share"
            allowFullScreen
          />
        </section>
      </ErrorBoundary>
    </>
  )
}

export default Tutorial
